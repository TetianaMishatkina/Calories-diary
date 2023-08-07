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
                    <StyledMealName></StyledMealName>
                </StyledFirstMeal>
                <StyledSecondMeal><StyledMealName>

                </StyledMealName>
                </StyledSecondMeal>
                <StyledThirdMeal>Supper</StyledThirdMeal>

            </StyledMealSection>





        </StyledContent>
    )
}