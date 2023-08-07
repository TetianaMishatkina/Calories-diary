import styled from 'styled-components/macro'
import { Calendar } from 'react-big-calendar'
import { Modal } from "@material-ui/core";

export const StyledCalendar = styled(Calendar)`
cursor: pointer;
`

export const StyledModal = styled(Modal)`
width: 500px;
height: 500px;
border:2px solid black;
margin: 50px auto;
`

export const StyledContentContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;

`