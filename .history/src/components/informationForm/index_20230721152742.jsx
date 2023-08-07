import React from "react"
import {
    StyledContent, StyledTitle,
    StyledDivider,
    StyledHeaderContainer,
    StyledMealSection,
    StyledFirstMeal,
    StyledSecondMeal,
    StyledThirdMeal,
    StyledMealName
} from './styled'

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
                </StyledFirstMeal>

                <StyledDivider vertical />

                <StyledSecondMeal>
                    <StyledMealName>Dinner</StyledMealName>
                </StyledSecondMeal>
                <StyledDivider vertical />
                <StyledThirdMeal>
                    <StyledMealName>Supper</StyledMealName>
                </StyledThirdMeal>
                <StyledDivider vertical />

            </StyledMealSection>





        </StyledContent>
    )
}