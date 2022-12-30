import { setDate } from "date-fns";
import id from "date-fns/esm/locale/id/index.js";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components/native";

const days = ['Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ', 'Κυρ']
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



export const CreateWeekView = () => {

    const [today, setToday] = useState();
    const [month, setMonth] = useState();
    const [monday, setMonday] = useState();
    const [sunday, setSunday] = useState();
    const [week, setWeek] = useState();

    console.log('MONDAY:' + monday)
    console.log('SUNDAY: ' + sunday)
    console.log('WEEK: ' + week)
    useEffect(() => {
        handleStartEndWeek();
    }, [])


    const handleStartEndWeek = () => {
        const date = new Date();
        // setDate(date);
        // let m = month[date.getMonth()];
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
        setSunday(sunday)
        setMonday(monday)
        handleCalendar(monday);
    }



    const handleNextWeek = () => {
        console.log('press')
        let m = new Date(monday);
        m.setDate(m.getDate() + 7)
        setMonday(m)
        handleCalendar(m)
    }
    const handlePreviousWeek = () => {
        console.log('press')
        let m = new Date(monday);
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

    return (
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#d3d1d3' }}>

            <View style={styles.weekRow}>
                <View></View>
                <TouchableOpacity style={styles.arrowIcons} onPress={handlePreviousWeek} >
                    <Text> {'<'} </Text>
                </TouchableOpacity>
                <View>
                    <View style={styles.daysContainer}>
                        {days.map((day, index) => {
                            return (
                                <Text key={day}>{day}</Text>
                            )
                        })}
                    </View>
                    <DaysContainer>
                        {week && week.map((day, index) => {
                            // console.log(day)
                            return (
                                <Text key={day}>{day.toString()}</Text>
                            )
                        })}
                    </DaysContainer>
                </View>
                <TouchableOpacity style={styles.arrowIcons} onPress={handleNextWeek} >
                    <Text> {'>'} </Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}


const styles = StyleSheet.create({
    arrowIcons: {
        width: 20,
        height: 20,
    },
    weekRow: {
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'red',
        flexDirection: 'row',
        padding: 10,
    },
    daysContainer: {
        width: '100%',
        flexDirection: 'row',
    }

});


const WeekRow = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px;
`
const DaysContainer = styled.View`
  padding: 5px;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: red; */
  /* border: 1px solid black; */
`