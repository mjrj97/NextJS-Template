import React from 'react'

const NavItem = (props) => {
    return (<li className="nav-item px-2">
        <a className="nav-link" href={props.href}><strong className='text-light'>{props.children}</strong></a>
    </li>)
}

export default NavItem