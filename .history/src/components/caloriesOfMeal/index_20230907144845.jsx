import React from 'react';
import {
    StyledCaloriesContainer,
    StyledFoodName,
    StyledFoodCalories,
    StyledCaloriesOfMeal,
    StyledButtonContainer,
    StyledDeleteIcon
} from './styled'



export const CaloriesOfMeal = ({ value, calories, foodToRemove }) => {

    const totalMealCalories = 0;
    const result = calories + totalMealCalories;
    console.log('calories', result)


    return (
        <StyledCaloriesOfMeal>
            <StyledCaloriesContainer>
                <StyledFoodName>{value}</StyledFoodName>
                <StyledFoodCalories>{calories} kcal</StyledFoodCalories>
            </StyledCaloriesContainer>
            <StyledButtonContainer>
                <StyledDeleteIcon onClick={foodToRemove} fontSize='small' />

            </StyledButtonContainer>
        </StyledCaloriesOfMeal>

    )
}