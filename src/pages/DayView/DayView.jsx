import { styled } from "styled-components";
import ChangeView from "../../components/ChangeView";

const Label = styled.h1 `
    color: yellow;
`

const DayView = () => {return(
    <div>
        <Label>day view</Label>
        {/* <ChangeView path='/' view='WeekView' /> */}
    </div>
)}

export default DayView;
