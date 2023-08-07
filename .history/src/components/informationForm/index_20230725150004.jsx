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
    StyledSummary,
    StyledSelectSection,
    StyledSelectLabel
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
                    <StyledSelectSection>
                        <StyledSelectLabel>Choose a food from list...</StyledSelectLabel>
                        <CustomSelect />
                    </StyledSelectSection>

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