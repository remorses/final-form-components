import React, { FC, useContext, useEffect } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Box, Row } from 'hybrid-components'
import { BoxProps } from 'hybrid-components/src/types'
import { useField } from 'react-final-form'
import { FormGroup } from '@blueprintjs/core'
import * as bp from '@blueprintjs/core'
import { Label } from './support'

const Card: FC<BoxProps & {
    selected?: boolean
    isDisabled?: boolean
    primary?: string
    siz?: string
    secondary?: string
}> = styled(Box)`
    border-radius: 6px;
    /* padding: 10px; */
    &:hover {
        border-color: ${(p: any) => ((p.selected ) ? p.primary : p.isDisabled ? 'transparent' : p.secondary)};
    }
    border-width: 2px;
    border-style: solid;
    border-color: ${(p: any) => (p.selected ? p.primary : 'transparent')};
    min-width: ${(p: any) => p.siz};
    min-height: ${(p: any) => p.siz};
    background-color: white;
    color: ${(p: any) => p.primary};
    opacity: ${(p: any) =>(p.isDisabled ? '.5' : '1')};
    font-weight: normal;
    font-size: 18px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
`

export const FormCard = ({
    selected = false,
    icon = '',
    title,
    description,
    siz,
    onClick,
    isInvalid = false,
    isDisabled = false,
    ...rest
}) => {
    const nothing = () => null
    return (
        <div onClick={!isDisabled ? onClick : nothing} style={{ padding: 0 }}>
            <Card
            width='auto'
                {...rest}
                selected={selected}
                isDisabled={isDisabled}
                siz={siz}
                m='10px'
            >
                {title}
                <Box width='auto' fontSize='12px' opacity={.4}>{description}</Box>
                {icon}
            </Card>
        </div>
    )
}

export interface CardOptionItem {
    isDisabled?: boolean
    label?: string
    labelInfo?: any
    disabled?: boolean
    value: any
    icon?: any
}

const Cards = ({
    onChange,
    value,
    defaultValue = null,
    items = [] as CardOptionItem[],
    primary,
    siz = '100px',
    secondary,
    loading,
    fitContent,
    isInvalid
}) => {
    value = value || defaultValue
    return (
        <Row
            width={'content'}
            flex='1 1'
            justifyContent='center'
            alignItems='center'
            flexWrap='wrap'
        >
            {items.map(({ disabled, label, labelInfo, value: itemValue, icon }) => (
                <Box
                    // display='block'
                    width='auto'
                    key={itemValue || label}
                    className={loading ? 'bp3-skeleton' : ''}
                    flex={fitContent ? '0 1' : '1 1'}
                    maxWidth='auto'
                    // bgOnHover={selected ? colors.white : colors.primary}
                >
                    <FormCard
                        primary={primary}
                        secondary={secondary}
                        title={label === undefined ? itemValue : label}
                        description={labelInfo || ''}
                        icon={icon}
                        onClick={() => onChange(itemValue)}
                        selected={value === itemValue}
                        isInvalid={isInvalid}
                        isDisabled={disabled}
                        siz={siz}
                    />
                </Box>
            ))}
        </Row>
    )
}

export default ({
    name,
    label = '',
    labelInfo = '',
    items = [] as CardOptionItem[],
    primary = '#5C7080',
    secondary = '#ddd',
    defaultValue = null,
    size = '100px',
    loading = false,
    fitContent = false
}) => {
    const {
        meta: { invalid },
        input
    } = useField(name)
    useEffect(() => {
        defaultValue && input.onChange(defaultValue)
    }, [])
    return (
        <FormGroup label={<Label>{label}</Label>} labelInfo={labelInfo}>
            <Cards
                items={items}
                primary={primary}
                isInvalid={invalid}
                secondary={secondary}
                defaultValue={defaultValue}
                loading={loading}
                siz={size}
                fitContent={fitContent}
                {...input}
            />
        </FormGroup>
    )
}
