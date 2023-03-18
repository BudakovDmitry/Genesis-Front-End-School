import styled from 'styled-components'
import { CourseRatingProps } from 'src/pages/Course/types'
import { Breakpoints } from 'src/types'

export const CourseContainer = styled.div`
    padding: 10px 0 60px;
`

export const CourseTitle = styled.h2`
    font-size: 26px;
    @media (min-width: ${Breakpoints.XL}) {
        font-size: 46px;
    }
`

export const CourseTitleContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin: 20px 0;
    @media (min-width: ${Breakpoints.XL}) {
        padding: 0 60px;
    }
`


export const CourseDescription = styled.p``


export const CourseInfo = styled.div`
    padding: 0 20px;
    @media (min-width: ${Breakpoints.XL}) {
        padding: 0 60px; 
    }
`

export const CourseSkillsText = styled.span`
    display: inline-block;
    margin-right: 30px;
    margin-bottom: 10px;
    color: grey;
    font-style: italic;
`

export const CourseInfoBlock = styled.div`
    box-shadow: 0 4px 30px rgba(0,0,0,.1);
    border-radius: 5px;
    background-color: #fff;
    min-height: 150px;
    padding: 30px 18px;
    margin-bottom: 40px;
`


export const CourseRating = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    color: grey;
    font-weight: 700;
    margin: 20px 0;

    @media (min-width: ${Breakpoints.XL}) {
        margin: 40px 0;
    }
`


export const CourseCover = styled.div`
`

export const CourseImage = styled.img`
    width: 100%;
`

export const CourseLessons = styled.div``

export const CourseRatingText = styled.span<CourseRatingProps>`
    color: ${props => props.color ? props.color : 'grey'}
`

