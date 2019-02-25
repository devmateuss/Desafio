import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <div className="aside" >
            <span onClick={()=> window.location='agents'} className="titles" >Funcionários/Departamentos</span>
            <span onClick={()=> window.location='moviments'} className="titles" >Movimentações</span>
        </div>
    );
}

export { Nav }