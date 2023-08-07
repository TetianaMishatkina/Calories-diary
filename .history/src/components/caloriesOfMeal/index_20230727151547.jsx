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

    const handleRemoveFood = () => {
        console.log('Ja')
        localStorage.removeItem('products')
    }
    return (
        <StyledCaloriesOfMeal>
            <StyledCaloriesContainer>
                <StyledFoodName>{value}</StyledFoodName>
                <StyledFoodCalories>{calories} kcal</StyledFoodCalories>
            </StyledCaloriesContainer>
            <StyledButtonContainer>
                <StyledDeleteIcon onClick={handleRemoveFood} fontSize='small' />

            </StyledButtonContainer>
        </StyledCaloriesOfMeal>

    )
}