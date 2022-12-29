import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Agenda, DateData, AgendaEntry, AgendaSchedule, WeekCalendar, CalendarProvider } from "react-native-calendars"
import styled from "styled-components/native";
import moment from "moment";
import AntIcons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5'



const days = ['Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ', 'Κυρ']


const WeeklyCalendar = () => {

  const [date, setDate] = useState()

 
  

  const calendar = [];
  const today = moment();
  console.log('-----------------------1')
  console.log(today)
  console.log('----------------------- Start Week')
  
  let startWeek = today.clone().startOf('week');
  console.log(startWeek)
   startWeek.clone().format('DD')
  
  let endWeek = today.clone().endOf('week');
  console.log('----------------------- End Week')
  console.log(endWeek)

useEffect(() => {
  setDate(startWeek)
  console.log(date)
}, [])





  if (date) {
    // while (date.isBefore(endDay, 'day')) {
    //   calendar.push(date.add(1, 'day').clone().format('DD'));
    // }
    for (i = 0; i < 7; i++) {
      console.log(date.clone().format('DD'))
      calendar.push(date.add(1, 'day').clone().format('DD'));
    }

  }

  // console.log(calendar)




  const nextWeek = () => {
    console.log('press')
    let newDate = date.clone().add(7, 'day')
    setDate(newDate)
    let start = newDate.clone().startOf('week')

    let endDay = newDate.clone().endOf('week')
   
  }

  // console.log(calendar)
  // console.log(calendar)
  return (
    <View style={{ borderBottomWidth: 1, borderBottomColor: '#d3d1d3' }}>

      <WeekRow>
        <TouchableOpacity style={styles.arrowIcons} onPress={nextWeek}>
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
            {calendar.map((day, index) => {
              // console.log(day)
              return (
                <Text key={day}>{day.toString()}</Text>
              )
            })}
          </DaysContainer>
        </View>
        <TouchableOpacity style={styles.arrowIcons} onPress={nextWeek} >
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
    backgroundColor: 'red',
  }
});


const WeekRow = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
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
export default WeeklyCalendar;

//!haha ti malakies kanw haha! in reality awesemoeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee 
//!fere mou kafe kai ase ta lemon pie!
//!