import styled from 'styled-components/macro'


export const StyledContent = styled.div`
        display: flex;
        justify-content: center;
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
`

export const StyledDivider = styled.div`
width: 100%;
max-width: 400px;
height: 1px;
background-color: black;

`

export const StyledHeaderContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: calc(100% - 100px);
    align-items: center;
    flex-direction:column;


`