import React from 'react'

const Title = (props) => {
    return (<div className='p-5'>
        <h1>{props.children}</h1>
    </div>)
}

export default Title