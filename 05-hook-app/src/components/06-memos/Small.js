import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('me dispare otra vez :/')

    return (
        <small>
            {value}
        </small>
    )
})
