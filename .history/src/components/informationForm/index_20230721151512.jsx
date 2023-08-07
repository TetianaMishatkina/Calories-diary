import React from "react"
import {
    StyledContent, StyledTitle,
    StyledDivider,
    StyledHeaderContainer, StyledMealSection, StyledFirstMeal, StyledSecondMeal, StyledThirdMeal
} from './styled'

export const InformationForm = () => {
    return (
        <StyledContent>
            <StyledHeaderContainer>
                <StyledTitle>What have you eaten today?</StyledTitle>
                <StyledDivider />
            </StyledHeaderContainer>
            <StyledMealSection>
                <StyledFirstMeal>Breakfast</StyledFirstMeal>
                <StyledSecondMeal>Dinner
                </StyledSecondMeal>
                <StyledThirdMeal>Supper</StyledThirdMeal>

            </StyledMealSection>





        </StyledContent>
    )
}