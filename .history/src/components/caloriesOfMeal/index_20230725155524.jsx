import React from 'react';
import { StyledCaloriesContainer, StyledFoodName, StyledFoodCalories } from './styled'



export const CaloriesOfMeal = ({ value, calories }) => {
    return (
        <StyledCaloriesContainer>
            <StyledFoodName>{value}</StyledFoodName>
            <StyledFoodCalories>{calories} ccal</StyledFoodCalories>
        </StyledCaloriesContainer>
    )
}