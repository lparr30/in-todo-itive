import { styled } from "styled-components";
import WeekCard from "../../components/WeekCard/WeekCard";
import colors from "../../assets/colors";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WeekView = () => {
  return (
    <Layout>
      {Array.from({ length: 14 }).map((_, index) => {
        const colorIndex = index % colors.length; //colorIndex = the remainder of index (0,1,2,3...13) / 4 (colors.length)
        return <WeekCard key={index} color={colors[colorIndex]} />;
      })}

      {/* {colors.map(item => {
        return(
          <WeekCard key={item.id} color={item.rgb}/>
        )
      })} */}
    </Layout>
  );
};

export default WeekView;
