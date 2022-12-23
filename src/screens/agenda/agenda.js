import React, { useState } from "react";
import { View, Text } from "react-native";
import { Agenda, DateData, AgendaEntry, AgendaSchedule, WeekCalendar } from "react-native-calendars"



const AgendaMain = () => {

  const [items, setItems] = useState(AgendaSchedule)


  const renderItem = (item, firstItemInDay) => {
    console.log(item)
    console.log(firstItemInDay)
    console.log('render Item')
    return <Text>{item}</Text>
  }



  console.log(items)
  return (
    <>
      < Agenda items={{
        '2022-12-22': [{ name: 'item 1 - any js object' }],
        '2022-12-23': [{ name: 'item 2 - any js object' }],
        '2022-12-24': [{ name: 'item 3 - any js object' }],
        '2022-12-25': [{ name: 'item 4 - any js object' }],
        '2022-12-26': [{ name: 'item 5 - any js object' }],
      }}
        renderItem={(item, firstItemInDay) => {
          renderItem(item, firstItemInDay)
        }}
      // Specify how each date should be rendered. day can be undefined if the item is not first in that day
      // renderDay={(day, item) => {
      //   return <View><Text>${day}</Text></View>;
      // }}

      />
      {/* < AgendaSchedule /> */}
    </>
  )
}

export default AgendaMain;