import styled from 'styled-components/macro'
import { Calendar } from 'react-big-calendar'
import { Modal } from "@material-ui/core";
import CloseIcon from '@mui/icons-material/Close';

export const StyledCloseIcon = styled(CloseIcon)`
    background: #ff5151;
    color: white;
    border-radius: 8px;
    margin: 5px 0;
    cursor: pointer;
   `
export const StyledIconContainer = styled.div`
    display: flex;
    background: white;
    width: 30px;
    margin-bottom: 10px;
    `

export const StyledCalendar = styled(Calendar)`
cursor: pointer;
box-shadow: 1px 1px 7px -1px rgba(66, 68, 90, 1);
border-radius: 10px;
background: #8cdb97;
& button{
    border-radius: 8px;
}
`

export const StyledModal = styled(Modal)`
width: 900px;
height: 700px;
margin: auto;


`

export const StyledContentContainer = styled.div`


`