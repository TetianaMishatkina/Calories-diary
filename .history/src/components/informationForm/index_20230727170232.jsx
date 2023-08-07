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
    StyledSelectLabel
} from './styled'
import { format } from 'date-fns'
import { CustomSelect } from "../select"

export const InformationForm = ({ date }) => {

    const formatDate = new Date(format('YYYY-MM-DD'))
    return (
        <StyledContent>
            <StyledHeaderContainer>
                <StyledTitle>What have you eaten today?</StyledTitle>
                {date.format()}
                <StyledDivider />
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