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
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let date, weekday;


const WeekView = () => {
  return (
    <Layout>
      {Array.from({ length: 14 }).map((_, index) => {
        const colorIndex = index % colors.length; //colorIndex = the remainder of index (0,1,2,3...13) / 4 (colors.length)
        date = currentDate + index;
        weekday = weekdays[currentWeekday + index%7]

        return (
          <WeekCard
            key={index}
            color={colors[colorIndex]}
            date={date}
            weekday={weekday}
          />
        );
      })}
    </Layout>
  );
};

export default WeekView;
