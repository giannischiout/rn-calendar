import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Agenda, DateData, AgendaEntry, AgendaSchedule, WeekCalendar, CalendarProvider } from "react-native-calendars"
import styled from "styled-components/native";
import moment from "moment";
import AntIcons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5'



const days = ['Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ', 'Κυρ']


const WeeklyCalendar = () => {


  // const [today, setToday] = useState();
  // console.log(moment().format('l'))

  // const fullDateToday = moment().format('l') //23-12-2022
  // const day = moment().format('DD');


  // const todayMoment = moment().format('l')
  // console.log(todayMoment)
  // console.log(moment().add(1, 'days').format('l'))

  // console.log(moment().add(2, 'days').format('l'))
  // console.log(moment().add(3, 'days').format('l'))
  // console.log(moment().add(4, 'days').format('l'))
  // console.log(moment().add(5, 'days').format('l'))
  // console.log(moment().add(6, 'days').format('l'))
  // console.log(moment().add(7, 'days').format('l'))
  // console.log(moment().add(8, 'days').format('l'))
  // console.log(moment().add(9, 'days').format('l'))
  // console.log(moment().add(10, 'days').format('l'))

  // const day2 = moment().add(1, 'days').format('l')


  // const enDay = moment().format('dddd');
  const [date, setDate] = useState()

  const [startDay, setStartDate] = useState()
  const [endDay, setEndDay] = useState()


  const calendar = [];
  const today = moment();
  let startWeek = today.clone().startOf('week');
  console.log(startWeek)
  let endWeek = today.clone().endOf('week');



  let monday = startWeek.clone();



  console.log('monday')
  console.log(monday)
  let sunday = endWeek.add(1, 'day')
  console.log(monday)
  console.log(sunday)
  console.log('-----------------------')
  console.log(date)
  console.log(endDay)




  if (date) {
    // while (date.isBefore(endDay, 'day')) {
    //   calendar.push(date.add(1, 'day').clone().format('DD'));
    // }
    for (i = 0; i < 7; i++) {
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
    setStartDate(start)
    setEndDay(endDay)
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