
const _App = () => (
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
                            <NumberInput label='caio' name='dsfdsfdsf99' />
                            <AddableListField name='addable' />
                            <FilesField name='files' />
                            <bp.Card>
                                <Button
                                    icon={
                                        <ArrowRight
                                            strokeWidth='1px'
                                            width='40px'
                                        />
                                    }
                                    title='bottone'
                                />
                            </bp.Card>
                            {/* <TagsField /> */}
                            <pre>{JSON.stringify(values, null, 4)}</pre>
                        </>
                    )
                }}
            />
        </Card>
    </Box>
)