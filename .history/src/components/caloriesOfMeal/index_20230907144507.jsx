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
    console.log('calories', calories)


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