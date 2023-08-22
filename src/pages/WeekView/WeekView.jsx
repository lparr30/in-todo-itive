import { styled } from "styled-components";
import WeekCard from "../../components/WeekCard/WeekCard";
import colors from "../../assets/colors";
import months from "../../assets/months";
import weekdays from "../../assets/weekdays";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const today = new Date();
let currentDate = today.getDate();
let currentWeekday = today.getDay();
let currentMonth = today.getMonth();

let date, weekday, month, dayIndex;

const WeekView = () => {
  return (
    <Layout>
      {Array.from({ length: 14 }).map((_, index) => {
        const colorIndex = index % colors.length; //colorIndex = the remainder of index (0,1,2,3...13) / 4 (colors.length)

        dayIndex = currentWeekday + (index % 7);
        if (dayIndex >= 7) {
          dayIndex = dayIndex - 7;
        }
        weekday = weekdays[dayIndex];

        month = months[currentMonth];

        date = currentDate + index;
        if (currentMonth === 2) {
          date > 28 && (date = date % 28) && (month = months[currentMonth + 1]);
        } else if (
          currentMonth === 4 ||
          currentMonth === 6 ||
          currentMonth === 9 ||
          currentMonth === 11
        ) {
          date > 30 && (date = date % 30) && (month = months[currentMonth + 1]);
        } else {
          date > 31 && (date = date % 31) && (month = months[currentMonth + 1]);
        }

        return (
          <WeekCard
            key={index}
            color={colors[colorIndex]}
            weekday={weekday}
            date={date}
            month={month}
          />
        );
      })}
    </Layout>
  );
};

export default WeekView;
