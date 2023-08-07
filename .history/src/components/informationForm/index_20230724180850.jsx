import React from "react"
import {
    StyledContent, StyledTitle,
    StyledDivider,
    StyledHeaderContainer,
    StyledMealSection,
    StyledFirstMeal,
    StyledSecondMeal,
    StyledThirdMeal,
    StyledMealName,
    StyledSummarySection,
    StyledSummary
} from './styled'
import { CustomSelect } from "../select"

export const InformationForm = () => {
    return (
        <StyledContent>
            <StyledHeaderContainer>
                <StyledTitle>What have you eaten today?</StyledTitle>
                <StyledDivider />
            </StyledHeaderContainer>
            <StyledMealSection>

                <StyledFirstMeal>
                    <StyledMealName>Breakfast</StyledMealName>
                    <CustomSelect />
                </StyledFirstMeal>
                <StyledDivider vertical />

                <StyledSecondMeal>
                    <StyledMealName>Dinner</StyledMealName>
                </StyledSecondMeal>
                <StyledDivider vertical />

                <StyledThirdMeal>
                    <StyledMealName>Supper</StyledMealName>
                </StyledThirdMeal>

            </StyledMealSection>

            <StyledSummarySection>
                <StyledSummary>Total calories today:</StyledSummary>
            </StyledSummarySection>

        </StyledContent>
    )
}