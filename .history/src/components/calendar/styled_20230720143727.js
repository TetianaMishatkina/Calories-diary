import styled from 'styled-components/macro'
import { Calendar } from 'react-big-calendar'
import { Modal } from "@material-ui/core";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const StyledArrowBackIcon = styled(ArrowBackIcon)``

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
width: 800px;
height: 700px;
margin: auto;


`

export const StyledContentContainer = styled.div`


`