import React from "react"
import { StyledContent, StyledTitle, StyledDivider, StyledHeaderContainer, StyledMealSection, StyledMeal } from './styled'

export const InformationForm = () => {
    return (
        <StyledContent>
            <StyledHeaderContainer>
                <StyledTitle>What have you eaten today?</StyledTitle>
                <StyledDivider />
            </StyledHeaderContainer>
            <StyledMealSection>
                <StyledMeal>Breakfast</StyledMeal>

            </StyledMealSection>





        </StyledContent>
    )
}