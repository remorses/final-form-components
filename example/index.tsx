import React, { useState } from 'react'
import { useField } from 'react-final-form'
import * as bp from '@blueprintjs/core'
import { render } from 'react-dom'
import { ArrowRight, Cpu } from 'styled-icons/feather'
// import antdComponents from '../components/antd'
// import { Aws } from 'styled-icons/fa-brands/Aws'
import {
    TextField,
    Select,
    Switch,
    NumberInput,
    TagsField,
    Button,
    SliderField,
    CardOptions,
    AddableListField
} from '../src/'
import FilesField from '../src/FilesField'
import AtlaskitSelect from '../src/AtlaskitSelect'
import './reset.css'
import { Form } from 'react-final-form'
import { Card } from '@blueprintjs/core'
import { Box, Row } from 'hybrid-components'

const opts = [{ value: 'a1' }, { value: 'a2' }, { value: 'a3' }]

const PRIMARY = 'black'
const SECONDARY = 'lightgray'

const GoogleCloud = ({ width = 120, height = 60 }) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height}>
            <path
                d='M64.87 11.572l1.144.02 3.108-3.108.15-1.317c-2.47-2.197-5.72-3.534-9.277-3.534-6.44 0-11.876 4.382-13.486 10.318.34-.237 1.065-.06 1.065-.06l6.212-1.022s.32-.53.48-.497a7.76 7.76 0 0 1 10.605-.8z'
                fill='#ea4335'
            />
            <path
                d='M73.5 13.962a13.99 13.99 0 0 0-4.216-6.796l-4.402 4.402a7.75 7.75 0 0 1 2.895 6.039v.777c2.142 0 3.88 1.743 3.88 3.88s-1.743 3.88-3.88 3.88h-7.762l-.777.78v4.658l.777.773h7.762A10.11 10.11 0 0 0 77.86 22.265c-.004-3.436-1.736-6.48-4.37-8.303z'
                fill='#4285f4'
            />
            <path
                d='M52.234 32.362h7.76V26.15h-7.76a3.84 3.84 0 0 1-1.597-.347l-1.12.343-3.108 3.108-.272 1.05a9.96 9.96 0 0 0 6.098 2.06z'
                fill='#34a853'
            />
            <path
                d='M52.234 12.175A10.11 10.11 0 0 0 42.14 22.269a10.08 10.08 0 0 0 4 8.04l4.5-4.5a3.88 3.88 0 0 1-2.288-3.538c0-2.142 1.743-3.88 3.88-3.88a3.89 3.89 0 0 1 3.538 2.288l4.5-4.5c-1.846-2.43-4.76-4-8.04-4z'
                fill='#fbbc05'
            />
            <path
                d='M12 51.937c-2.12 0-3.94-.75-5.474-2.25s-2.3-3.304-2.3-5.408.765-3.908 2.3-5.408S9.883 36.62 12 36.62a7.32 7.32 0 0 1 5.249 2.11l-1.477 1.477a5.32 5.32 0 0 0-3.773-1.495c-1.53 0-2.83.54-3.896 1.627a5.41 5.41 0 0 0-1.597 3.941c0 1.546.53 2.857 1.597 3.94a5.25 5.25 0 0 0 3.896 1.627c1.558 0 2.845-.5 3.87-1.534.6-.6 1-1.5 1.14-2.635h-5.006v-2.092h7.044c.075.372.1.8.1 1.3 0 2.056-.603 3.686-1.813 4.895-1.372 1.435-3.15 2.15-5.345 2.15zm16.37-1.4c-.96.94-2.13 1.4-3.512 1.4s-2.554-.47-3.512-1.4-1.438-2.113-1.438-3.52.48-2.58 1.438-3.52 2.13-1.4 3.512-1.4 2.554.47 3.512 1.4 1.438 2.116 1.438 3.52-.48 2.58-1.438 3.52zm-5.474-1.38a2.63 2.63 0 0 0 1.963.849c.76 0 1.414-.282 1.963-.85s.822-1.28.822-2.14c0-.87-.27-1.588-.813-2.15s-1.198-.84-1.972-.84a2.64 2.64 0 0 0-1.972.84c-.543.56-.813 1.276-.813 2.15 0 .858.273 1.573.822 2.14zm16.273 1.38c-.96.94-2.13 1.4-3.512 1.4s-2.554-.47-3.512-1.4-1.438-2.113-1.438-3.52.48-2.58 1.438-3.52 2.13-1.4 3.512-1.4 2.554.47 3.512 1.4 1.438 2.116 1.438 3.52-.48 2.58-1.438 3.52zm-5.474-1.38a2.63 2.63 0 0 0 1.963.849c.76 0 1.414-.282 1.963-.85s.822-1.28.822-2.14c0-.87-.27-1.588-.813-2.15s-1.198-.84-1.972-.84a2.64 2.64 0 0 0-1.972.84c-.543.56-.813 1.276-.813 2.15 0 .858.273 1.573.822 2.14zm12.573 7.22c-1.095 0-2.017-.294-2.764-.88s-1.282-1.264-1.606-2.038l1.888-.783c.198.474.5.885.933 1.234s.94.522 1.552.522c.822 0 1.468-.25 1.933-.747s.7-1.216.7-2.15v-.7h-.075c-.6.747-1.477 1.122-2.596 1.122-1.258 0-2.36-.48-3.307-1.438a4.76 4.76 0 0 1-1.42-3.476 4.82 4.82 0 0 1 1.42-3.503c.945-.963 2.05-1.447 3.307-1.447.56 0 1.068.105 1.522.318s.813.474 1.074.783h.075V42.4h2.056v8.857c0 1.72-.438 3.004-1.318 3.86-.88.85-2.002 1.28-3.373 1.28zm.15-6.372a2.41 2.41 0 0 0 1.879-.849c.504-.567.756-1.273.756-2.122 0-.858-.252-1.576-.756-2.15a2.4 2.4 0 0 0-1.879-.858c-.76 0-1.408.288-1.942.858s-.804 1.288-.804 2.15c0 .846.267 1.555.804 2.122s1.183.85 1.942.85zM54.62 37.14v14.5h-2.167v-14.5zm5.94 14.796c-1.396 0-2.56-.474-3.494-1.42s-1.402-2.116-1.402-3.512c0-1.444.45-2.63 1.354-3.55a4.45 4.45 0 0 1 3.298-1.384c.597 0 1.153.108 1.663.327a3.92 3.92 0 0 1 1.27.84 5.84 5.84 0 0 1 .804.999 6.12 6.12 0 0 1 .486.972l.225.56L58.17 48.5c.5.996 1.3 1.495 2.392 1.495.996 0 1.807-.453 2.428-1.363l1.68 1.122c-.375.56-.903 1.065-1.588 1.513s-1.528.67-2.524.67zm-2.746-5.08l4.4-1.83c-.126-.312-.354-.564-.7-.756a2.26 2.26 0 0 0-1.14-.288c-.636 0-1.23.26-1.783.783s-.82 1.222-.795 2.092zm18.33 5.08c-1.97 0-3.62-.666-4.952-2s-2-2.995-2-4.988.666-3.656 2-4.988 2.983-2 4.952-2c2.017 0 3.656.73 4.913 2.185l-1.195 1.16c-.9-1.134-2.15-1.7-3.72-1.7-1.46 0-2.686.492-3.7 1.477s-1.504 2.272-1.504 3.866.5 2.884 1.504 3.87 2.233 1.477 3.7 1.477c1.606 0 2.977-.648 4.1-1.942l1.195 1.195a6.51 6.51 0 0 1-2.3 1.747 7.02 7.02 0 0 1-3.004.642zm8.556-.296h-1.72V38.263h1.72zm2.803-8.06c.885-.927 2-1.393 3.382-1.393s2.497.465 3.382 1.393 1.327 2.1 1.327 3.485-.44 2.557-1.327 3.485-2 1.393-3.382 1.393-2.497-.465-3.382-1.393-1.327-2.1-1.327-3.485.44-2.557 1.327-3.485zm1.28 5.883c.6.603 1.294.906 2.1.906s1.5-.303 2.1-.906.888-1.405.888-2.4-.297-1.798-.888-2.4-1.294-.906-2.1-.906-1.5.303-2.1.906-.888 1.405-.888 2.4.297 1.798.888 2.4zm16.32 2.177h-1.645v-1.27h-.075c-.26.435-.66.807-1.195 1.1s-1.1.46-1.7.46c-1.147 0-2.014-.348-2.605-1.047s-.888-1.633-.888-2.803v-5.606h1.72v5.324c0 1.708.753 2.56 2.26 2.56a2.1 2.1 0 0 0 1.738-.858 3.13 3.13 0 0 0 .672-1.981v-5.045h1.72v9.157zm5.828.297c-1.183 0-2.206-.468-3.064-1.402s-1.288-2.092-1.288-3.476.43-2.542 1.288-3.476 1.882-1.402 3.064-1.402c.696 0 1.324.15 1.88.447s.97.672 1.243 1.122h.075l-.075-1.27v-4.22h1.72v13.38h-1.645v-1.27h-.075c-.273.447-.687.822-1.243 1.122-.555.294-1.183.444-1.88.444zm.28-1.57a2.74 2.74 0 0 0 2.065-.897c.567-.597.85-1.402.85-2.4s-.282-1.813-.85-2.4a2.74 2.74 0 0 0-2.065-.897c-.798 0-1.483.303-2.056.906s-.858 1.405-.858 2.4.285 1.798.858 2.4a2.73 2.73 0 0 0 2.056.906z'
                fill='#5f6368'
            />
        </svg>
    )
}

const Azure = ({ width = 120, height = 60 }) => {
    return (
        <svg
            id='Layer_1'
            x='0px'
            y='0px'
            viewBox='0 0 32 32'
            width={width}
            height={height}
            enable-background='new 0 0 32 32'
        >
            <title>Azure</title>
            <polygon points='7.31 28.4 32 28.4 18.7 5.35 14.65 16.48 22.43 25.73 7.31 28.4' />
            <polygon points='17.64 3.6 8.14 11.57 0 25.67 7.34 25.67 7.34 25.69 17.64 3.6' />
        </svg>
    )
}

const Components = ({ values, handleSubmit }) => {
    return (
        <Box fontSize='18px'>
            {/* <TextField label='caio' name='ciao' /> */}
            <bp.Card style={{ margin: 0 }}>
                <CardOptions
                    // fitContent={false}
                    fitContent={true}
                    primary={PRIMARY}
                    secondary={SECONDARY}
                    label='choose a cards'
                    items={[
                        {
                            icon: (
                                <img src={require('./aws.svg')} width='80px' />
                            ),
                            label: '',
                            value: 'aws'
                        },
                        { value: 'gcp', icon: <GoogleCloud />, label: '' },
                        { value: 'azure', icon: <Azure />, label: '' }
                    ]}
                    name='cards'
                />
                <Box width='100%'>
                    <Select
                        label='region where to deploy'
                        name='region'
                        options={opts}
                    />
                </Box>
                {/* <AtlaskitSelect
                    label='region where to deploy'
                    name='region'
                    options={opts}
                /> */}
                <CardOptions
                    primary={PRIMARY}
                    secondary={SECONDARY}
                    fitContent={true}
                    label='choose an instance type'
                    items={[
                        { value: 'M0', icon: <Cpu width='30px' /> },
                        { value: 'M1', icon: <Cpu width='30px' /> },
                        { value: 'M2', icon: <Cpu width='30px' /> },
                        { value: 'M3', icon: <Cpu width='30px' /> },
                        { value: 'M4', icon: <Cpu width='30px' /> }
                    ]}
                    name='instances'
                />
                {/* <SliderField name='slider' />
            <Switch label='caio' name='dfòkgjdklfg' />
            <TagsField label='ciaone' name='xcdf' />
            <NumberInput label='caio' name='dsfdsfdsf99' />
            <AddableListField name='addable' />
            <FilesField name='files' /> */}
            </bp.Card>
            <Box my='20px'>
                The docker stack will be deployed in the instance selectes
            </Box>
            <Row my='20px' fontSize='24px' justifyContent='center'>
                <Box mx='10px' width='auto'>
                    Monthly Cost:
                </Box>
                <Box width='auto' fontWeight='bold'>
                    Free
                </Box>
            </Row>
            <Button
                type='submit'
                onClick={handleSubmit}
                icon={<ArrowRight strokeWidth='1px' width='40px' />}
                title='bottone'
            />

            {/* <TagsField /> */}
            <pre>{JSON.stringify(values, null, 4)}</pre>
        </Box>
    )
}

const App = () => {
    return (
        <Box alignItems='center' py='60px'>
            <Box maxWidth='800px'>
                <Card elevation={4}>
                    <Form
                        onSubmit={(x) => alert(JSON.stringify(x, null, 4))}
                        render={(data) => {
                            return <Components {...data} />
                        }}
                    />
                </Card>
            </Box>
        </Box>
    )
}

render(<App />, document.getElementById('root'))
// @ts-ignore
module.hot.accept()
