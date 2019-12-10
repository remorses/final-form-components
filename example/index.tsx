import React, { useState } from 'react'
import { useField } from 'react-final-form'
import { render } from 'react-dom'
import { ArrowRight } from 'styled-icons/feather'
// import antdComponents from '../components/antd'
import {
    TextField,
    Select,
    Switch,
    NumberInput,
    TagsField,
    Button,
    SliderField,
    CardOptions
} from '../src/'
import './reset.css'
import { Form } from 'react-final-form'
import { Card } from '@blueprintjs/core'
import { Box } from 'hybrid-components'

const opts = [{ value: 'a1' }, { value: 'a2' }, { value: 'a3' }]

const App = () => (
    <Box p='50px'>
        <Card elevation={3}>
            <Form
                onSubmit={(x) => alert(JSON.stringify(x, null, 4))}
                render={({ values }) => {
                    return (
                        <>
                            <TextField label='caio' name='ciao' />
                            <Select
                                label='caio'
                                name='sdfciao'
                                options={opts}
                            />
                            <CardOptions
                                label='choose a cards'
                                items={[
                                    {
                                        icon: <ArrowRight width='40px' />,
                                        value: 'a real word'
                                    },
                                    { value: 'something' }
                                ]}
                                name='cards'
                            />
                            <SliderField name='slider' />
                            <Switch label='caio' name='dfòkgjdklfg' />
                            <TagsField label='ciaone' name='xcdf' />
                            <Button
                                icon={
                                    <ArrowRight
                                        strokeWidth='1px'
                                        width='40px'
                                    />
                                }
                                title='bottone'
                            />
                            <NumberInput label='caio' name='dsfdsfdsf99' />
                            {/* <TagsField /> */}
                            <pre>{JSON.stringify(values, null, 4)}</pre>
                        </>
                    )
                }}
            />
        </Card>
    </Box>
)

render(<App />, document.getElementById('root'))
// @ts-ignore
module.hot.accept()
