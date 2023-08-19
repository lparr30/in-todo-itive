import { styled } from "styled-components";
import WeekCard from "../../components/WeekCard/WeekCard";
import colors from "../../assets/colors";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const today = new Date();
// let todayCopy = new Date(today);
// let todayDate = today.getDate() - 1;
// todayCopy.setDate(today.getDate() - 1);
// let date;
// console.log(todayDate)

const WeekView = () => {
  return (
    <Layout>
      {Array.from({ length: 14 }).map((_, index) => {
        const colorIndex = index % colors.length; //colorIndex = the remainder of index (0,1,2,3...13) / 4 (colors.length)
        // todayCopy.setDate(today.getDate()+ 1);
        // console.log(date)

        return (
          <WeekCard
            key={index}
            color={colors[colorIndex]}
            date={3.14}
            weekday={"pie day"}
          />
        );
      })}
    </Layout>
  );
};

export default WeekView;
