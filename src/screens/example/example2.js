import id from "date-fns/esm/locale/id/index.js";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components/native";

const days = ['Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ', 'Κυρ']



export const CreateWeekView = () => {
    // const [monday, setMonday] = useState('');
    // const [sunday, setSunday] = useState('');
    // const [week, setWeek] = useState([])

    // // const today = new Date();
    // let today = new Date();
    // let calendar = [];
    // // Get the first day of the current week (Monday)
    // function getFirstDayOfWeek(d) {
    //     //  clone date object, so we don't mutate it
    //     const date = new Date(d);
    //     const day = date.getDay(); // 👉️ get day of week (number e.x 'Wednesday = 3')
    //     console.log('day :' + day)
    //     // day of month - day of week (-6 if Sunday), otherwise +1
    //     //Start of the Week should be MONDAY
    //     //If Current day === Sunday, we have to substack 6 to find start of the week,
    //     //On any other day we have to add 1. Originally the week starts with Sunday, so we have to add 1 every time we want to find the differnece between the current date and the start of the week
    //     const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    //     return new Date(date.setDate(diff));
    // }

    // const firstDay = getFirstDayOfWeek(today);
    // console.log(firstDay)

    // for (i = 0; i < 6; i++) {
    //     let nextday = new Date(firstDay);
    //     nextday.setDate(nextday.getDate() + i)
    //     calendar.push(nextday.getDate())

    // }
    // console.log('week', week)

    // //Find Sunday:

    // const handleSunday = () => {
    //     let lastDay = (firstDay.getDate() + 6);
    //     console.log('last day ------ :' + lastDay);
    //     if (lastDay > 31) {
    //         lastDay = lastDay - 31
    //     }
    //     console.log('last day:' + lastDay);
    //     setSunday(lastDay)
    //     calendar.push(lastDay)
    //     setWeek([...calendar, lastDay])

    // }

    // useEffect(() => {
    //     let firstDay = getFirstDayOfWeek(new Date());
    //     setMonday(firstDay)
    //     handleSunday();
    //     setWeek([...calendar])
    // }, [])

    // // calendar.push(lastDay.getDate())





    // const handleNextWeek = () => {
    //     let monday = getFirstDayOfWeek(sunday);
    //     console.log(monday)

    //     console.log('pressed')


    // }

    const [monday, setMonday] = useState();
    const [sunday, setSunday] = useState();

    console.log('MONDAY:' + monday)
    useEffect(() => {

        handleMonday();
        handleSunday();
    }, [])


    const handleMonday = () => {
        const date = new Date();
        const day = date.getDay();
        console.log('day :' + day)
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);
        let monday = new Date(date.setDate(diff));
        console.log(monday)
        setMonday(monday)
    }

    const handleSunday = () => {
        if (monday) {
            let sunday = new Date(monday).setDate(monday.getDate() + 6)
            console.log(sunday)
        }
        // let sunday = new Date(monday)
        // console.log('1 ' + monday)
        // sunday.setDate()
        // console.log(sunday);
        // let sunday = setDate(31)
        // console.log(sunday)
    }


    return (
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#d3d1d3' }}>

            <WeekRow>
                <TouchableOpacity style={styles.arrowIcons}>
                    <Text> {'<'} </Text>
                </TouchableOpacity>
                <View>
                    <DaysContainer>
                        {days.map((day, index) => {
                            return (
                                <Text key={day}>{day}</Text>
                            )
                        })}
                    </DaysContainer>
                    <DaysContainer>
                        {/* {calendar.map((day, index) => {
                            // console.log(day)
                            return (
                                <Text key={day}>{day.toString()}</Text>
                            )
                        })} */}
                    </DaysContainer>
                </View>
                <TouchableOpacity style={styles.arrowIcons} >
                    <Text> {'>'} </Text>
                </TouchableOpacity>
            </WeekRow>

        </View>
    )

}


const styles = StyleSheet.create({
    arrowIcons: {
        width: 20,
        height: 20,
    }
});


const WeekRow = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding: 8px;
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