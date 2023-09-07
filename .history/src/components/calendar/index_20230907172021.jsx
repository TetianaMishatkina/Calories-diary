import React, { useState } from 'react'
import { momentLocalizer } from 'react-big-calendar'

import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
    StyledCalendar, StyledModal, StyledContentContainer, StyledCloseIcon,
    StyledIconContainer
} from "./styled"
import { InformationForm } from '../informationForm';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


const localizer = momentLocalizer(moment)

export const MyCalendar = (props) => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleSlotSelect = (slotInfo) => {
        setSelectedDate(slotInfo.start);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <StyledContentContainer>
            <StyledIconContainer>
                <ArrowBackIcon
                    fontSize='25px'
                    onClick={() => {
                        navigate(-1)
                    }} />
            </StyledIconContainer>


            <StyledCalendar
                localizer={localizer}
                events={[]}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, width: 700 }}
                views={['month', 'day']}
                onSelectSlot={handleSlotSelect}
                selectable
            />
            <StyledModal
                open={open}
                onClose={handleClose}>
                <>
                    <StyledCloseIcon fontSize="medium" onClick={handleClose} />
                    <InformationForm date={selectedDate} />
                </>


            </StyledModal>
        </StyledContentContainer>
    )
}


