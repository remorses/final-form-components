import React, { FC, useContext, useEffect } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Box, Row } from 'hybrid-components'
import { BoxProps } from 'hybrid-components/src/types'
import { useField } from 'react-final-form'
import { FormGroup } from '@blueprintjs/core'
import * as bp from '@blueprintjs/core'

const Card: FC<BoxProps & {
    selected?: boolean
    isDisabled?: boolean
    primary?: string
    siz?: string
    secondary?: string
}> = styled(Box)`
    border-radius: 6px;
    &:hover {
        border-color: ${(p: any) => p.selected ? p.primary : p.secondary};
    }
    border-width: 2px;
    border-style: solid;
    border-color: ${(p: any) => p.selected ? p.primary : 'transparent'};
    min-width: ${(p: any) => p.siz};
    min-height: ${(p: any) => p.siz};
    background-color: white;
    color: ${(p: any) => (true ? p['primary'] : p['secondary'])};
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
    siz,
    onClick,
    isInvalid = false,
    isDisabled = false,
    ...rest
}) => {
    const nothing = () => null
    return (
        <div  onClick={!isDisabled ? onClick : nothing} style={{ padding: 0 }}>
            <Card
                {...rest}
                selected={selected}
                isDisabled={isDisabled}
                siz={siz}
            >
                {title}
                {icon}
            </Card>
        </div>
    )
}

export interface CardOptionItem {
    isDisabled?: boolean
    label?: string
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
            {items.map(({ isDisabled, label, value: itemValue, icon }) => (
                <Box
                    // display='block'
                    width='auto'
                    m='20px'
                    key={itemValue || label}
                    className={loading ? 'bp3-skeleton' : ''}
                    flex='1 1'
                    // bgOnHover={selected ? colors.white : colors.primary}
                >
                    <FormCard
                        primary={primary}
                        secondary={secondary}
                        title={label === undefined ? itemValue : label}
                        icon={icon}
                        onClick={() => onChange(itemValue)}
                        selected={value === itemValue}
                        isInvalid={isInvalid}
                        isDisabled={isDisabled}
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
    items = [] as CardOptionItem[],
    primary = '#5C7080',
    secondary = '#ddd',
    defaultValue = null,
    size = '100px',
    loading = false
}) => {
    const {
        meta: { invalid },
        input
    } = useField(name)
    useEffect(() => {
        defaultValue && input.onChange(defaultValue)
    }, [])
    return (
        <FormGroup label={label}>
            <Cards
                items={items}
                primary={primary}
                isInvalid={invalid}
                secondary={secondary}
                defaultValue={defaultValue}
                loading={loading}
                siz={size}
                {...input}
            />
        </FormGroup>
    )
}
