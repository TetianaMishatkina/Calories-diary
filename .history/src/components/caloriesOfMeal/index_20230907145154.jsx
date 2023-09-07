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

    let totalMealCalories = 0;
    const result = totalMealCalories + calories;
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