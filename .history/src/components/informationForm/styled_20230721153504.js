import styled from 'styled-components/macro'


export const StyledContent = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color:white;
        box-shadow: 1px 1px 19px 6px rgba(66, 68, 90, 1) !important;
        border-radius: 10px;
    `

export const StyledTitle = styled.div`
font-size: 23px;
font-weight:600;
margin: 10px 0;
&:hover{
    color:green;
}
`

export const StyledDivider = styled.div < { vertical: Boolean } > `
width: 100%;
max-width: ${props => props.vertical ? "1px" : "400px"};
height: ${props => props.vertical ? "100%" : "1px"};
background-color: black;

`

export const StyledHeaderContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction:column;
`

export const StyledMealSection = styled.section`
    display:flex;
    justify-content: space-evenly;
    margin:10px 0;
    height: 100%;
    `

export const StyledFirstMeal = styled.div``

export const StyledSecondMeal = styled.div``

export const StyledThirdMeal = styled.div``

export const StyledMealName = styled.div`
font-size:20px;
font-weight: 500;
&:hover{
    color:green;
}
`

export const StyledSummarySection = styled.div``

export const StyledSummary = styled.div``