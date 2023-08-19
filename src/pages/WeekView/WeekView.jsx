import { styled } from "styled-components";
import WeekCard from "../../components/WeekCard/WeekCard";
import colors from "../../assets/colors";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WeekView = () => {

  return (
    <Layout>
      {Array.from({ length: 10 }).map(index => {
        return(
          <WeekCard color='red'/>
        )
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
