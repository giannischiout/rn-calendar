import React from "react"
import { View } from "react-native"


export const CreateWeekView = () => {
    const today = new Date();
    console.log(today)

// ✅ Get the first day of the current week (Monday)
function getFirstDayOfWeek(d) {
  //  clone date object, so we don't mutate it
  const date = new Date(d);
  const day = date.getDay(); // 👉️ get day of week (number e.x 'Wednesday = 3')
  console.log(day)

  // day of month - day of week (-6 if Sunday), otherwise +1
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  console.log(date.getDate())
  console.log(diff)

  return new Date(date.setDate(diff));
}

const firstDay = getFirstDayOfWeek(today);

//  Get the last day of the current week (Sunday)
const lastDay = new Date(firstDay);
lastDay.setDate(lastDay.getDate() + 6);

console.log(firstDay); // Monday August 8 2022
console.log(lastDay); // Sunday August 14 2022
    return (
        <View>

        </View>
    )
}