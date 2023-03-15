import styled from 'styled-components'
import { CourseRatingProps } from 'src/components/CoursePreview/types'

export const CoursePreviewContainer = styled.div`
    box-shadow: 0 4px 30px rgba(0,0,0,.1);
    border-radius: 5px;
    background-color: #fff;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    padding: 18px;

    @media (min-width: 1200px) {
        flex-direction: row;
    }
`

export const CoursePreviewCover = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
    @media (min-width: 1200px) {
        flex: 0 0 30%;
        max-width: 30%;
    }
`

export const CoursePreviewImage = styled.img`
    width: 100%;
`

export const CoursePreviewInfo = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
    padding: 10px 20px 10px 0;
    margin-bottom: 15px;
    @media (min-width: 1200px) {
        flex: 0 0 60%;
        max-width: 60%;
        padding: 10px 20px 10px 40px;
        margin-bottom: 0;
    }
`

export const CoursePreviewTitle = styled.h3`
    margin-bottom: 15px;
`

export const CoursePreviewRating = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    color: grey;
    font-weight: 700;
`

export const CoursePreviewRatingText = styled.span<CourseRatingProps>`
    color: ${props => props.color ? props.color : 'grey'}
`

export const CoursePreviewDescription = styled.p`
`

export const CoursePreviewCountLessons = styled.p`
    margin-bottom: 15px;
    color: grey;
    font-style: italic;
`

export const CoursePreviewButtonContainer = styled.div`
    display: flex;
    align-items: end;
    justify-content: flex-end;
    flex: 0 0 100%;
    max-width: 100%;
    @media (min-width: 1200px) {
        flex: 0 0 10%;
        max-width: 10%;
    }
`

