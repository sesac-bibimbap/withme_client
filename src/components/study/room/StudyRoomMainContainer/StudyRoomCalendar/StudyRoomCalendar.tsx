import { useRef, useEffect } from 'react';
// @ts-ignore
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import './StudyRoomCalendar.css';

const theme = {
  common: {
    backgroundColor: '#9F9C9C',
    gridSelection: {
      backgroundColor: 'rgba(255, 249, 82, 0.05)',
      border: '1.5px solid #F6C54D',
    },
    today: { color: '#F6C54D' }, // OK
    holiday: { color: 'red' }, // OK
    saturday: { color: 'blue' }, // OK
  },
  month: {
    dayName: {
      backgroundColor: '#F6C54D',
    },
  },
};

const month = {
  visibleWeeksCount: 5,
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
};

const calendars = [
  {
    id: 'cal1',
    name: '개인',
    backgroundColor: '#03bd9e',
  },
  {
    id: 'cal2',
    name: '직장',
    backgroundColor: '#00a9ff',
  },
  {
    id: 'cal3',
    name: '테스트',
    backgroundColor: '#00a9ff',
  },
];

const StudyRoomCalendar = () => {
  // const calendarRef = useRef<any>(null); // 참조를 생성합니다

  // useEffect(() => {
  //   // Toast UI Calendar의 참조를 가져옵니다
  //   if (!calendarRef.current) return;
  //   const calendarInstance = calendarRef.current.getInstance();

  //   // createEvents 메서드를 사용하여 이벤트를 추가합니다
  //   calendarInstance.createEvents([
  //     {
  //       id: '1',
  //       calendarId: '0',
  //       title: '새로운 이벤트',
  //       category: 'time',
  //       dueDateClass: '',
  //       start: '2023-10-24T10:00:00',
  //       end: '2023-10-24T12:00:00',
  //     },
  //     // 기타 이벤트
  //   ]);
  // }, []); // 빈 배열을 사용하여 한 번만 실행되도록 설

  return (
    <div
      style={{
        padding: '20px',
        margin: '20px 10px',
        background: '#222121',
        borderRadius: '15px',
        height: '45%',
      }}
    >
      <Calendar
        // ref={calendarRef}
        height="100%"
        view="month"
        theme={theme}
        month={month}
        useFormPopup={true}
        useDetailPopup={true}
        calendars={calendars}
      />
    </div>
  );
};

export default StudyRoomCalendar;

// Calendar
