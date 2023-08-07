import styled from 'styled-components/macro'
import { Calendar } from 'react-big-calendar'
import { Modal } from "@material-ui/core";

export const StyledCalendar = styled(Calendar)`
cursor: pointer;
box-shadow: 1px 1px 7px -1px rgba(66, 68, 90, 1);
border-radius: 10px;
& button{
    border-radius: 8px;
}
`

export const StyledModal = styled(Modal)`
width: 800px;
height: 700px;
margin: auto;


`

export const StyledContentContainer = styled.div`


`