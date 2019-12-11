import React from 'react'
import { Box } from 'hybrid-components'

export const skeletonClass = (loading) => {
    return loading ? { className: 'bp3-skeleton' } : {}
}

export const Label = p => <Box my='10px' fontWeight='bold' {...p} />