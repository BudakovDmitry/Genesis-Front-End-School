import styled from 'styled-components'
import { Breakpoints } from 'src/types'

export const AllCoursesContainer = styled.div`
    width: 100%;
    padding-bottom: 60px;
`

export const AllCoursesTitle = styled.h1`
    text-align: center;
    font-size: 26px;
    margin: 20px 0 10px;
    @media (min-width: ${Breakpoints.XL}) {
        margin: 50px 0 20px;
        font-size: 46px;
}
    }

`

export const CoursesPreview = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 20px 20px;
    overflow-y: auto;

    @media (min-width: ${Breakpoints.XL}) {
        padding: 40px 40px;
    }
`