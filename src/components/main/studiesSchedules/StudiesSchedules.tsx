// @ts-ignore
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

const StudiesSchedules = ({ user }: { user: User | undefined }) => {
  console.log('✔️  user:', user);

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

  return (
    <div
      style={{
        width: '59%',
        background: '#222121',
        marginRight: '15px',
        borderRadius: '10px',
      }}
    >
      <div style={{ fontWeight: 'bold', padding: '15px' }}>스케쥴</div>
      <div style={{ height: '88%', padding: '0px 15px' }}>
        <Calendar
          // ref={calendarRef}
          height="100%"
          view="month"
          theme={theme}
          month={month}
          useFormPopup={true}
          useDetailPopup={true}
        />
      </div>
    </div>
  );
};

export default StudiesSchedules;
