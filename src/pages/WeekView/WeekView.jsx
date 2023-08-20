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
let date;

// for (let i = 0; i < 14; i++) {
//   date = currentDate + i;
// }


const WeekView = () => {
  return (
    <Layout>
      {Array.from({ length: 14 }).map((_, index) => {
        const colorIndex = index % colors.length; //colorIndex = the remainder of index (0,1,2,3...13) / 4 (colors.length)
        date = currentDate + index;

        return (
          <WeekCard
            key={index}
            color={colors[colorIndex]}
            date={date}
            weekday={"pie day"}
          />
        );
      })}
    </Layout>
  );
};

export default WeekView;
