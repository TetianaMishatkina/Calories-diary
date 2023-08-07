import styled from 'styled-components/macro'
import DeleteIcon from '@mui/icons-material/Delete';

export const StyledDeleteIcon = styled(DeleteIcon)`
    background: #ff5151;
    color: white;
    margin: 5px 0;
    cursor: pointer;
    border-radius:3px;
   `


export const StyledCaloriesContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 10px 0;
    
    `

export const StyledFoodName = styled.div``

export const StyledFoodCalories = styled.div`
opacity: 50%;
font-size: 13px;
color:red;
`
export const StyledCaloriesOfMeal = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`
export const StyledButtonContainer = styled.div`
    margin-left: 9px;
    margin-top: 4px;`