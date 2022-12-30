import { setDate } from "date-fns";
import he from "date-fns/esm/locale/he/index.js";
import id from "date-fns/esm/locale/id/index.js";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components/native";

const days = ['Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ', 'Κυρ']
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



export const CreateWeekView = () => {

    const [today, setToday] = useState();
    const [displayMonth, setDisplayMonth] = useState();
    const [monday, setMonday] = useState();
    const [sunday, setSunday] = useState();
    const [week, setWeek] = useState();

    // console.log('MONDAY:' + monday)
    // console.log('SUNDAY: ' + sunday)
    // console.log('WEEK: ' + week)
    // console.log('Today: ' + today)
    useEffect(() => {
        handleStartEndWeek();
    }, [today])


    const handleStartEndWeek = () => {
        const date = new Date();
        console.log(date)
        // setDate(date);
        setToday(date.getDate())
        let m = month[date.getMonth()];
        setDisplayMonth(m)
        // setMonth(m);
        const day = date.getDay();
        const diffMonday = date.getDate() - day + (day === 0 ? -6 : 1);
        const diffSunday = date.getDate() - day + 7;


        if (diffSunday > 31) {
            let newDif = diffSunday - 31
            // console.log(newDif)
            let sunday = new Date(date.setDate(newDif))
            setSunday(sunday)

        }

        let sunday = new Date(date.setDate(diffSunday))
        let monday = new Date(date.setDate(diffMonday));
        console.log(monday)

        setSunday(sunday)
        setMonday(monday)
        handleCalendar(monday);
    }



    const handleNextWeek = () => {
        // console.log('press')
        // console.log('=============================')
        // console.log(monday)
        let m = new Date(monday);
        // console.log('----------' + m)
        //Change current month after 4 clicks when monrth changes
        let nextMonth = month[m.getMonth()];
        // console.log(nextMonth)

        m.setDate(m.getDate() + 7)
        setMonday(m)
        setDisplayMonth(nextMonth)
        handleCalendar(m)
    }


    const handlePreviousWeek = () => {
        // console.log('press')
        // console.log('=============================')
        // console.log(monday)
        let m = new Date(monday);
        // console.log('----------' + m)
        m.setDate(m.getDate() - 7)
        setMonday(m)
        handleCalendar(m)

    }

    const handleCalendar = (monday) => {
        let calendar = [];
        for (i = 0; i < 7; i++) {
            let nextday = new Date(monday);
            nextday.setDate(nextday.getDate() + i)
            // console.log(nd)
            calendar.push(nextday.getDate())
            setWeek(calendar)

        }


    }

    // return (
    //     <View style={styles.container}>
    //         <View style={styles.weekRow}>
    //             <TouchableOpacity style={styles.arrowIcons} onPress={handlePreviousWeek} >
    //                 <Text> {'<'} </Text>
    //             </TouchableOpacity>
    //             <View style={styles.daysWrapper}>

    //             </View>
    //             <TouchableOpacity style={styles.arrowIcons} onPress={handleNextWeek} >
    //                 <Text> {'>'} </Text>
    //             </TouchableOpacity>
    //         </View>

    //     </View>
    // )

    return (
        <>
            <View style={styles.monthView}>
                <Text>
                    {displayMonth}
                </Text>
            </View>
            <View style={styles.primView}>
                <TouchableOpacity style={styles.arrowView} onPress={handlePreviousWeek}>
                    <Text style={styles.arrowFont}> {'<'} </Text>
                </TouchableOpacity>
                <View style={styles.days}>
                    <View style={styles.daysContainer}>
                        {days.map((day, index) => {
                            return (
                                <Text style={[styles.dayTitle]} key={day}>{day}</Text>
                            )
                        })}
                    </View>
                    <View style={styles.daysContainer}>
                        {week && week.map((day, index) => {
                            // console.log(day)
                            return (
                                <View style={[styles.daysNum, day == today ? styles.currentDay : null]} key={day}>
                                    <Text >{day}</Text>
                                </View>
                            )
                        })}
                    </View >
                </View>
                <TouchableOpacity style={styles.arrowView} onPress={handleNextWeek}>
                    <Text style={styles.arrowFont}> {'>'} </Text>
                </TouchableOpacity>
            </View>
        </>
    )

}


const styles = StyleSheet.create({
    monthView: {
        alignItems: 'center',
        padding: 10,
    },
    primView: {
        width: '100%',
        // backgroundColor: 'orange',
        minHeight: 80,
        flexDirection: 'row'


    },
    arrowView: {
        width: '10%',
        minWidth: 30,
        height: 40,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrowFont: {
        fontSize: 20,
    },
    days: {
        flex: 1,
    },
    dayTitle: {
        color: '#bcbeba',
    },

    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#d3d1d3',
        minHeight: 100,

    },
    weekRow: {
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    arrowIcons: {
        width: '20%',
        height: 30,
    },
    daysWrapper: {
        width: '80%',
        backgroundColor: 'red'
    },

    daysContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 40,
    },
    currentDay: {
        borderRadius: 30,
        backgroundColor: 'blue'
    },
    daysNum: {
        // backgroundColor: 'orange',
        height: 28,
        width: 28,
        alignItems: 'center',
        justifyContent: 'center',
    }

});

