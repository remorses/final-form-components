import React, { FC, ButtonHTMLAttributes } from 'react'
import { Box, Row, Text } from 'hybrid-components'
import Color from 'color'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BoxProps } from 'hybrid-components/src/types'

const getColor = (p) => {
    const c = p.theme.color || 'black'
    if (p.invert) {
        return c
    }
    const isLight = Color(c).isLight()
    return isLight ? '#000' : '#fff'
}

const getBg = (p) => {
    const c = p.theme.color || 'black'
    if (p.invert) {
        const isLight = Color(c).isLight()
        return isLight ? '#000' : '#fff'
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
    font-size: 18px;
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



export const ButtonWithIcon: FC<BoxProps & { icon?: any; title: any }> = ({
    icon,
    title,
    ...rest
}) => {
    return (
        <Box flex='1 1' justifyContent='center' alignItems='center' {...rest}>
            <Button height='40px' justifyContent='center' {...rest}>
                <Row alignItems='center' justifyContent='center'>
                    {icon}
                    <Box mr='10px' />
                    <Text fontSize='18px' color='white'>
                        {title}
                    </Text>
                </Row>
            </Button>
        </Box>
    )
}

export default ButtonWithIcon