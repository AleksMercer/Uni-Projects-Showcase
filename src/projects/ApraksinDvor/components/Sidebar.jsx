import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../media/logo_black.svg'

function Sidebar() {

  const [firstSwitch, setFirstSwitch] = useState(false)
  const [secondSwitch, setSecondSwitch] = useState(false)

  return (
    <> {/* <section className='aprashka-main__sidebar'> */}
      <div className='logo'>
        <img 
          draggable='false'
          src={logo}
          alt='Апраксин Двор' />
      </div>

      <nav className='sidebar'>

        <NavLink to="." end className={"mainlink"}>О проекте</NavLink>
        <NavLink to="AboutSystem" className={"mainlink"}>О дизайн-системе</NavLink> 

        <div className='accordion accfirst'>
          <div 
            className={`mainlink accordion__arrow ${firstSwitch ? 'arrow-open' : 'arrow-close'}`} 
            onClick={() => setFirstSwitch(prev => !prev)}>

            <span>
              Стиль
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0859985 12.4999L5.586 6.99994L0.0859985 1.49994L1.5 0.0859375L8.414 6.99994L1.5 13.9139L0.0859985 12.4999Z" fill="#8C9BA0"/></svg>
            </span>
          </div>

          <nav className={`accordion__links ${firstSwitch ? 'menu-open' : 'menu-close'}`}>
            <NavLink to="Logotype"      className={"secondarylink"}>Логотип</NavLink>
            <NavLink to="ColorPalette"  className={"secondarylink"}>Цветовая палитра</NavLink>
            <NavLink to="Typography"    className={"secondarylink"}>Типографика</NavLink>
            <NavLink to="GridAndIndent" className={"secondarylink"}>Сетка и отступы</NavLink>
            <NavLink to="Graphic"       className={"secondarylink"}>Графика</NavLink>
            <NavLink to="Icons"         className={"secondarylink"}>Иконки</NavLink>
          </nav>
        </div> 

        <div className='accordion accsecond'>
          <div 
            className={`mainlink accordion__arrow ${secondSwitch ? 'arrow-open' : 'arrow-close'}`} 
            onClick={() => setSecondSwitch(prev => !prev)}>
              
            <span>
              Компоненты
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0859985 12.4999L5.586 6.99994L0.0859985 1.49994L1.5 0.0859375L8.414 6.99994L1.5 13.9139L0.0859985 12.4999Z" fill="#8C9BA0"/></svg>
            </span>
          </div>

          <nav className={`accordion__links ${secondSwitch ? 'menu-open' : 'menu-close'}`}>
            <NavLink to="Breadcrumbs"   className={"secondarylink"}>Breadcrumbs</NavLink>
            <NavLink to="Button"        className={"secondarylink"}>Button</NavLink>
            <NavLink to="Card"          className={"secondarylink"}>Card</NavLink>
            <NavLink to="Checkbox"      className={"secondarylink"}>Checkbox</NavLink>
            <NavLink to="Divider"       className={"secondarylink"}>Divider</NavLink>
            <NavLink to="Loading"       className={"secondarylink"}>Loading</NavLink>
            <NavLink to="Modal"         className={"secondarylink"}>Modal</NavLink>
            <NavLink to="Tooltip"       className={"secondarylink"}>Tooltip</NavLink>
            <NavLink to="RadioButton"   className={"secondarylink"}>Radio button</NavLink>
            <NavLink to="SwitchButton"  className={"secondarylink"}>Switch button</NavLink>
            <NavLink to="TextInput"     className={"secondarylink"}>Text input</NavLink>
            <NavLink to="Search"        className={"secondarylink"}>Search</NavLink>
          </nav>
        </div>

      </nav>
    </>
  )
}

export default Sidebar