import React from 'react';
import {
    StyledCaloriesContainer,
    StyledFoodName,
    StyledFoodCalories,
    StyledCaloriesOfMeal,
    StyledButtonContainer,
    StyledDeleteIcon
} from './styled'



export const CaloriesOfMeal = ({ value, calories }) => {
    return (
        <StyledCaloriesOfMeal>
            <StyledCaloriesContainer>
                <StyledFoodName>{value}</StyledFoodName>
                <StyledFoodCalories>{calories} kcal</StyledFoodCalories>
            </StyledCaloriesContainer>
            <StyledButtonContainer>
                <StyledDeleteIcon fontSize='small' />

            </StyledButtonContainer>
        </StyledCaloriesOfMeal>

    )
}