import { styled } from "styled-components";
import WeekCard from "../../components/WeekCard/WeekCard";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WeekView = () => {
  return (
    <Layout>
      <WeekCard />
    </Layout>
  );
};

export default WeekView;
