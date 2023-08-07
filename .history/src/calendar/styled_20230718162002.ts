import styled from 'styled-components/macro'
import { Calendar } from 'react-big-calendar'
import { Modal } from "@material-ui/core";

export const StyledCalendar = styled(Calendar)`
cursor: pointer;
`

export const StyledModal = styled(Modal)`
width: 800px;
height: 700px;
border:2px solid black;
margin: 150px auto;
`

export const StyledContentContainer = styled.div`
width:100%;
max-width: 800px;

`