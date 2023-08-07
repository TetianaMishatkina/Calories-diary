import React from "react"
import {
    StyledContent, StyledTitle,
    StyledDivider,
    StyledHeaderContainer,
    StyledMealSection,
    StyledDayMeal,
    StyledMealName,
    StyledSummarySection,
    StyledSummary,
    StyledSelectSection,
    StyledSelectLabel,
    StyledDateContainer,
    StyledDate,
    StyledTittleContainer
} from './styled'
import { format } from 'date-fns'
import { CustomSelect } from "../select"
import { usePostItemDetailes } from '../../hooks/usePostItemDetails'

export const InformationForm = ({ date }) => {
    const { dataDetails, postItems, handleRemoveFood } = usePostItemDetailes()


    return (
        <StyledContent>
            <StyledHeaderContainer>
                <StyledTittleContainer>
                    <StyledTitle>What have you eaten today?</StyledTitle>
                    <StyledDivider />
                </StyledTittleContainer>


            </StyledHeaderContainer>
            <StyledMealSection>

                <StyledDayMeal>
                    <StyledMealName>Breakfast</StyledMealName>
                    <StyledSelectSection>
                        <StyledSelectLabel>Choose a food from list...</StyledSelectLabel>
                        <CustomSelect handleRemoveFood={handleRemoveFood} dataDetails={dataDetails} postItems={postItems} date={date} mealOfDay="Breakfast" />
                    </StyledSelectSection>

                </StyledDayMeal>
                <StyledDivider vertical />

                <StyledDayMeal>
                    <StyledMealName>Dinner</StyledMealName>
                    <StyledSelectSection>
                        <StyledSelectLabel>Choose a food from list...</StyledSelectLabel>
                        <CustomSelect handleRemoveFood={handleRemoveFood} dataDetails={dataDetails} postItems={postItems} date={date} mealOfDay="Dinner" />
                    </StyledSelectSection>
                </StyledDayMeal>
                <StyledDivider vertical />

                <StyledDayMeal>
                    <StyledMealName>Supper</StyledMealName>
                    <StyledSelectSection>
                        <StyledSelectLabel>Choose a food from list...</StyledSelectLabel>
                        <CustomSelect handleRemoveFood={handleRemoveFood} dataDetails={dataDetails} postItems={postItems} date={date} mealOfDay="Supper" />
                    </StyledSelectSection>
                </StyledDayMeal>

            </StyledMealSection>

            <StyledSummarySection>
                <StyledDateContainer>
                    <StyledDate> {format(date, 'yyyy-MM-dd')}</StyledDate>
                </StyledDateContainer>
                <StyledSummary>Total calories today:</StyledSummary>

            </StyledSummarySection>

        </StyledContent>
    )
}