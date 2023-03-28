import React from 'react'

const Body = (props) => {
    return (<div className='mx-auto col-sm-8 col-md-6 body d-flex flex-column'>
        {props.children}
    </div>)
}

export default Body