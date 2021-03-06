import React, { FC, ButtonHTMLAttributes } from 'react'
import { Box, Row, Text } from 'hybrid-components'
import Color from 'color'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BoxProps } from 'hybrid-components/src/types'

const DEFAULT_COLOR = '#1C2030'

const getColor = (p) => {
    const c = p.theme.color || DEFAULT_COLOR
    if (p.invert) {
        return c
    }
    const isLight = Color(c).isLight()
    return isLight ? DEFAULT_COLOR : '#fff'
}

const getBg = (p) => {
    const c = p.theme.color || DEFAULT_COLOR
    if (p.invert) {
        const isLight = Color(c).isLight()
        return isLight ? DEFAULT_COLOR : '#fff'
    }
    return c
}

interface Props {
    invert?: boolean
}

const ButtonInside = styled.div<Props>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${getBg};
    color: ${getColor};
    transform: translateY(100%);
    transition: transform 0.1s ease-out;
`

const ButtonContainer = styled(Box)<Props>`
    color: ${getColor};
    background: ${getBg};
    position: relative;
    padding: 10px 20px;
    height: fit-content;
    font-weight: normal;
    font-size: inherit;
    border-radius: 6px;
    border-width: 0px;
    /* margin: 20px; */
    cursor: pointer;
    overflow: hidden;
    &:active {
        opacity: 0;
    }
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    /* &:hover {
        box-shadow: 0 0 0 #000;
    }
    &:hover ${ButtonInside} {
        transform: translateY(0px);
    } */
`

const Button: FC<Omit<ButtonHTMLAttributes<any>, 'color'> & {
    invert?: boolean
    appearText?: string
    loading?: boolean
} & BoxProps> = ({
    invert = false,
    children,
    appearText = '',
    loading,
    ...p
}) => {
    return (
        <ButtonContainer
            width='auto'
            as='button'
            invert={invert}
            className={loading ? 'bp3-skeleton' : ''}
            {...p}
        >
            {appearText && (
                <ButtonInside invert={invert}>{appearText}</ButtonInside>
            )}
            {children}
        </ButtonContainer>
    )
}

export const ButtonWithIcon: FC<BoxProps & {
    icon?: any
    title: any
} & ButtonHTMLAttributes<any>> = ({ icon, title, type, onClick, ...rest }) => {
    return (
        <Box width='auto' justifyContent='center' alignItems='center' {...rest}>
            <Button height='40px' justifyContent='center' type={type} onClick={onClick}>
                <Row alignItems='center' justifyContent='center'>
                    <Box color='white' mr='10px'>{title}</Box>
                    {icon}
                </Row>
            </Button>
        </Box>
    )
}

export default ButtonWithIcon
