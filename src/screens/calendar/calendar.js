

import React, { useState, useCallback, useMemo } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platform, PixelRatio, ScrollView } from 'react-native';
import { Calendar, Agenda, CalendarList, CalendarUtils, DateData, AgendaEntry, AgendaSchedule } from 'react-native-calendars';




const INITIAL_DATE = '2022-07-06';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
console.log(today)






const data = [
  {
    date: '2022-12-22',
    startTime: '09:20:00',
    endTime: '09:20:00',
    customerName: 'John',
    customerSurName: 'Chioutakos'

  }
]










const CalendarMain = () => {

  const [selected, setSelected] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(today);
  const [view, setChangeView] = useState(false)


  const onDayPress = useCallback((day) => {
    console.log(day)
    setSelected(day.dateString);
    setChangeView(prev => !prev)
  }, []);

  const getDate = (count) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

  // const marked = useMemo(() => {
  //   return {
  //     [getDate(-1)]: {
  //       dotColor: 'red',
  //       marked: true
  //     },
  //     [selected]: {
  //       selected: true,
  //       disableTouchEvent: true,
  //       selectedColor: 'orange',
  //       selectedTextColor: 'red'
  //     }
  //   };
  // }, [selected]);

  const nextDate = [
    '2022-12-22',
    '2022-12-23',
    '2022-12-30',
    '2023-01-01',
  ];

  let mark = {};

  nextDate.forEach(day => {
    mark[day] = {
      marked: true,
    };
  });

  return (
    <>

      {!view ? (
        <Calendar
          enableSwipeMonths
          current={INITIAL_DATE}
          onDayPress={onDayPress}
          markedDates={mark}
          initialDate={today.toString()}
          onPressArrowLeft
          onPressArrowRight
        />
      ) :
        (
          <Agenda
            onDayPress={day => {
              console.log('day pressed');
            }}
            // Callback that gets called when day changes while scrolling agenda list
            onDayChange={day => {
              console.log('day changed');
            }}
            selected={selected}
            loadItemsForMonth={month => {
              console.log('trigger items loading');
              console.log(month)
            }}
            items={{
              '2022-12-22': [{ name: 'item 1 - any js object' }],
              '2022-12-23': [{ name: 'item 2 - any js object', height: 80 }],
              '2022-12-24': [],
              '2022-12-25': [{ name: 'item 3 - any js object' }, { name: 'any js object' }]
            }}
            renderEmptyDate={() => {
              return (
                <View style={styles.viewStyle}>
                  <Text >No services on this date</Text>
                </View>
              );
            }}
            renderDay={(day, item) => {
              return (<View><Text>Text</Text></View>);
            }
            }
          />
        )}
    </>

  )
}








export default CalendarMain;
