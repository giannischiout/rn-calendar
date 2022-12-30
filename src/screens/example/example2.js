import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const days = ['Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ', 'Κυρ']
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const data = [
    {
        date: '2022-12-30',
        name: 'Giannis',
        time: '21:00'
    },
    {
        date: '2022-12-30',
        name: 'Giannis',
        time: '20:00',
    }
]


export const CreateWeekView = () => {

    const [today, setToday] = useState();
    const [displayMonth, setDisplayMonth] = useState();
    const [monday, setMonday] = useState();
    const [week, setWeek] = useState();

    // console.log('MONDAY:' + monday)
    // console.log('SUNDAY: ' + sunday)
    // console.log('WEEK: ' + week)
    // console.log('Today: ' + today)
    // Get the current date
    const transformData = (data) => {
        let newData = new Date(data).getTime()
        return newData;
    }
    transformData(data[0]);


    useEffect(() => {
        handleStartEndWeek();
    }, [])


    const handleStartEndWeek = () => {
        const currentDate = new Date();
        // console.log(currentDate)
        // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
        const currentDayOfWeek = currentDate.getDay();
        // Calculate the number of days until the next Sunday
        const daysUntilNextSunday = 7 - currentDayOfWeek;
        // Calculate the number of days until the last Monday
        const daysUntilLastMonday = currentDayOfWeek - 1;
        // Calculate the next Sunday by adding the number of days until the next Sunday to the current date
        const nextSunday = new Date(currentDate.getTime() + (daysUntilNextSunday * 24 * 60 * 60 * 1000));
        // Calculate the last Monday by subtracting the number of days until the last Monday from the current date
        const lastMonday = new Date(currentDate.getTime() - (daysUntilLastMonday * 24 * 60 * 60 * 1000));


        let m = month[currentDate.getMonth()];
        setDisplayMonth(m)
        setToday(currentDate)
        setMonday(lastMonday)
        handleCalendar(lastMonday);
    }



    const handleNextWeek = () => {
        const nextMonday = new Date(monday.getTime() + (7 * 24 * 60 * 60 * 1000));
        let nextMonth = month[nextMonday.getMonth()];
        handleCalendar(nextMonday)
        setMonday(nextMonday)
        setDisplayMonth(nextMonth)
    }


    const handlePreviousWeek = () => {
        const prevMonday = new Date(monday.getTime() - (7 * 24 * 60 * 60 * 1000));
        setMonday(prevMonday)
        let nextMonth = month[prevMonday.getMonth()];
        setDisplayMonth(nextMonth)
        handleCalendar(prevMonday)

    }

    const handleCalendar = (monday) => {
        let calendar = [];
        for (i = 0; i < 7; i++) {
            let nextday = new Date(monday);
            nextday.setDate(nextday.getDate() + i)
            calendar.push(nextday)
            setWeek(calendar)
        }
    }



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
                            // console.log(day.getTime())
                            return (
                                <TouchableOpacity style={[styles.daysNum, day.getTime() == today.getTime() ? styles.currentDay : null]} key={day}>
                                    <Text style={day.getTime() == today.getTime() ? styles.currentDayText : null} >{day.getDate()}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View >
                </View>
                <TouchableOpacity style={styles.arrowView} onPress={handleNextWeek}>
                    <Text style={styles.arrowFont}> {'>'} </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>
                {week && week.map((day, index) => {
                    console.log(day.getTime())
                    return (
                        <>
                            <View >
                                <View style={[styles.daysNum]}>
                                    <Text>{day.getDate()}</Text>
                                </View>
                                {data.map((data, index) => {
                                    return (
                                        <View>
                                            {data.date === day}
                                            {console.log('sefsefeff')}
                                            {console.log(new Date(day))}
                                            {console.log(data.date, day)}
                                            {new Date(data.date) === day && (

                                                <Text>{data.name}</Text>
                                            )}
                                        </View>
                                    )
                                })}

                            </View>
                        </>
                    )
                })}
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
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        borderBottomColor: '#e0dfde',
        paddingBottom: 10,

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
        fontSize: 15,
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
        backgroundColor: '#1ecbe1'
    },
    currentDayText: {
        color: 'white'
    },
    daysNum: {
        // backgroundColor: 'orange',
        height: 28,
        width: 28,
        alignItems: 'center',
        justifyContent: 'center',
    }

});

