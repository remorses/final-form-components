import React from 'react'
import styled from 'styled-components'
import Select from '@atlaskit/select'
import { useField } from 'react-final-form'
import { FormGroup, Card } from '@blueprintjs/core'

const makeItems = (a, b) => {
    return [
        ...a,
        {
            label: b,
            value: b
        }
    ]
}

const SelectElement = ({
    onChange,
    items = [],
    value = [],
    isMulti = false,

    ...props
}) => {
    const options = items.reduce(makeItems, [])

    const myOnChange = (items) => {
        items = items || []
        if (isMulti) {
            return onChange(
                // TODO this gets null
                items.map((x) => x.value).filter((x) => x != undefined)
            )
        } else {
            return onChange(items)
        }
    }
    return (
        <Card style={{ padding: 0 }}>
            <Select
                style={{ width: '100%', margin: '40px 0' }}
                onChange={myOnChange}
                value={isMulti ? value.reduce(makeItems, []) : value}
                options={options}
                isMulti={isMulti}
                {...props}
            />
        </Card>
    )
}

export interface SelectItem {
    label?: string
    value: string
}

export default ({ name, label = '', items = [] as SelectItem[] }) => {
    const { input, meta } = useField(name)
    return (
        <FormGroup label={label} >
            <SelectElement items={items} {...input} />
        </FormGroup>
    )
}
