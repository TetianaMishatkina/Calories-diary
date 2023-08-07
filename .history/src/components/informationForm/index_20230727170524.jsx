import React from "react"
import {
    StyledContent, StyledTitle,
    StyledDivider,
    StyledHeaderContainer,
    StyledMealSection,
    StyledDayMeal,
    StyledMealName,
    StyledSummarySection,
    StyledSummary,
    StyledSelectSection,
    StyledSelectLabel,
    StyledDateContainer, StyledDate
} from './styled'
import { format } from 'date-fns'
import { CustomSelect } from "../select"

export const InformationForm = ({ date }) => {

    return (
        <StyledContent>
            <StyledHeaderContainer>
                <StyledTitle>What have you eaten today?</StyledTitle>
                <StyledDivider />
                <StyledDateContainer>
                    <StyledDate> {format(date, 'yyyy-MM-dd')}</StyledDate>
                </StyledDateContainer>
            </StyledHeaderContainer>
            <StyledMealSection>

                <StyledDayMeal>
                    <StyledMealName>Breakfast</StyledMealName>
                    <StyledSelectSection>
                        <StyledSelectLabel>Choose a food from list...</StyledSelectLabel>
                        <CustomSelect />
                    </StyledSelectSection>

                </StyledDayMeal>
                <StyledDivider vertical />

                <StyledDayMeal>
                    <StyledMealName>Dinner</StyledMealName>
                    <StyledSelectSection>
                        <StyledSelectLabel>Choose a food from list...</StyledSelectLabel>
                        <CustomSelect />
                    </StyledSelectSection>
                </StyledDayMeal>
                <StyledDivider vertical />

                <StyledDayMeal>
                    <StyledMealName>Supper</StyledMealName>
                    <StyledSelectSection>
                        <StyledSelectLabel>Choose a food from list...</StyledSelectLabel>
                        <CustomSelect />
                    </StyledSelectSection>
                </StyledDayMeal>

            </StyledMealSection>

            <StyledSummarySection>
                <StyledSummary>Total calories today:</StyledSummary>
            </StyledSummarySection>

        </StyledContent>
    )
}