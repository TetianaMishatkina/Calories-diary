import React, { useState } from 'react'
import { momentLocalizer } from 'react-big-calendar'

import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { StyledCalendar, StyledModal, StyledContentContainer } from "./styled"
import { InformationForm } from '../informationForm';


const localizer = momentLocalizer(moment)

export const MyCalendar = (props) => {
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
            <StyledCalendar
                localizer={localizer}
                events={[]}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, width: 700 }}
                views={['month', 'day']}
                onSelectSlot={handleSlotSelect}
                selectable={true}
            />
            <StyledModal
                hideBackdrop={true}
                open={open}
                onClose={handleClose}>
                <InformationForm />
            </StyledModal>
        </StyledContentContainer>
    )
}


