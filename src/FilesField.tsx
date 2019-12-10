import React, { useState, useEffect } from 'react'
import * as bp from '@blueprintjs/core'
import { useField } from 'react-final-form'
import { Box, Row, Text } from 'hybrid-components/'
// import { BoxProps } from 'hybrid-components/'
import { ISliderProps } from '@blueprintjs/core'
import { FilePond, File, registerPlugin, FilePondProps } from 'react-filepond'
// import 'filepond/dist/filepond.min.css'

interface BaseProps {
    name: string
    label?: string
}

export const FilesField = ({
    name,
    label = '',
    placeholder = '',
    server = undefined,
    allowMultiple=false,
    acceptedFileTypes=undefined,
    ...rest
}: { placeholder?: string } & BaseProps & FilePondProps) => {
    const onProcessFile = (err, file) => {
        if (!err) {
            console.log(file)
        }
        input.onChange([...files.map((x) => x.serverId), ])
    }
    useEffect(() => input.onChange([]), [])
    const [files, setFiles] = useState<File[]>([])
    const { input, meta } = useField(name)
    // console.log(files.length && files[0].status)
    return (
        <bp.FormGroup
            label={label}
            helperText={
                <Text color='red' fontSize='13px'>
                    {meta.touched && meta.error || ' '}
                </Text>
            }
        >
            {/* <bp.Card style={{ margin: '0', padding: '0' }}> */}
                <FilePond
                    // className='pondFiles'
                    files={files || []}
                    allowMultiple={allowMultiple}
                    onupdatefiles={(files) => {
                        // console.log(files)
                        input.onChange(files.map((x) => x.serverId))
                        setFiles(files)
                    }}
                    labelIdle={
                        placeholder ||
                        'Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                    }
                    server={server}
                    onprocessfile={onProcessFile}
                    
                    acceptedFileTypes={acceptedFileTypes}
                />
            {/* </bp.Card> */}
        </bp.FormGroup>
    )
}

export default FilesField