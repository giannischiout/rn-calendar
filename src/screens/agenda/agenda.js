import React, { useState } from "react";
import { View, Text } from "react-native";
import { Agenda, DateData, AgendaEntry, AgendaSchedule } from "react-native-calendars"



const AgendaMain = () => {

  const [items, setItems] = useState(AgendaSchedule)
  console.log(items)
  return (
    <>
      < Agenda items={{
        '2022-12-22': [{ name: 'item 1 - any js object' }],
        '2022-12-23': [{ name: 'item 1 - any js object' }],
        '2022-12-24': [{ name: 'item 1 - any js object' }],
      }}
      // renderItem={(item, firstItemInDay) => {
      //   return <View><Text>${ }</Text></View>;
      // }}
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