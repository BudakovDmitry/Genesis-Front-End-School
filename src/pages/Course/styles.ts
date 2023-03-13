import styled from 'styled-components'
import { AllMovesButtonProps, CloseCardButtonProps } from 'src'

export const AppContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;
`

export const RightField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    min-width: 300px;
    margin: 0 auto;
`

export const ContainerButtons = styled.div`
    display: flex;
    gap: 20px;
    position: absolute;
    bottom: 20px;
    right: 20px;
`

export const ButtonCloseCard = styled.button<CloseCardButtonProps>`
    display: ${props => props.isShow ? 'block' : 'none'};
    width: 60px;
    height: 60px;
    background: #e89595;
    box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
    border-radius: 18px;
    border: none;
    color: #ffffff;
    cursor: pointer;
    font-size: 12px;
    &:hover {
        background-color: #eb7c7c;
    }
`

export const Button = styled.button<AllMovesButtonProps>`
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    box-shadow: ${props => props.viewedList ? '15px 15px 30px #bebebe, -15px -15px 30px #ffffff, inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff;' : '15px 15px 30px #bebebe, -15px -15px 30px #ffffff'};
    border: ${props => props.viewedList ? '8px solid rgba(255, 255, 255, 0.05)' : 'none'};
    border-radius: 18px;
    z-index: 1;
    transform: 0.5s;
    color: #000000;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
`