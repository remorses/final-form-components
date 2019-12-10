import React from 'react'

export const skeletonClass = (loading) => {
    return loading ? { className: 'bp3-skeleton' } : {}
}
