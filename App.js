

import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components/native';

import CalendarMain from './src/screens/calendar/calendar';
import AgendaMain from './src/screens/agenda/agenda';
import WeeklyCalendar from './src/screens/example/example';
import { CreateWeekView } from './src/screens/example/example2';
const App = () => {



  return (
    <>
      {/* <AgendaMain /> */}
      {/* <WeeklyCalendar /> */}
      <CreateWeekView />
      {/* <CalendarMain /> */}
    </>

  )
}








export default App;
