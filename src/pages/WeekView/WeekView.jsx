import { styled } from "styled-components";
import WeekCard from "../../components/WeekCard/WeekCard";
import colors from "../../assets/colors";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const today = new Date();
let currentDate = today.getDate();
let currentWeekday = today.getDay();
let currentMonth = today.getMonth();
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let date, weekday, month;

const WeekView = () => {
  return (
    <Layout>
      {Array.from({ length: 14 }).map((_, index) => {
        const colorIndex = index % colors.length; //colorIndex = the remainder of index (0,1,2,3...13) / 4 (colors.length)

        weekday = weekdays[currentWeekday + (index % 7)];

        month = months[currentMonth];

        date = currentDate + index;
        if (currentMonth === 2) {
          date > 28 && (date = date % 28);
        } else if (
          currentMonth === 4 ||
          currentMonth === 6 ||
          currentMonth === 9 ||
          currentMonth === 11
        ) {
          date > 30 && (date = date % 30);
        } else {
          date > 31 && (date = date % 31);
        }

        // if (date >= 1) {
        //   month = months[currentMonth + 1];
        // }

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
