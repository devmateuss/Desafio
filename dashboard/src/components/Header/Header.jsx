import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="header" >
            <img onClick={()=> window.location='/'} src="http://www.lanlink.com.br/blog/wp-content/uploads/2017/09/logo-llk-horizontal.png" alt="Logo Lanlink" height="80" width="400" />
        </div>
    );
}

export { Header }