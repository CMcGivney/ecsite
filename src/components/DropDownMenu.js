import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu, Dropdown, Image, Container} from 'semantic-ui-react'
import Logo from '../Images/Logo.png'


class DropDownMenu extends React.Component {

  
  render() {
  
    return (
      <>
      <Menu 
        compact 
        size="large" 
        pointing 
        fluid
        fixed="top"
        style={{backgroundColor: "black", boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)", }}>
        <Container className="dropDown" >
           <Link to="/">
           <Menu.Item 
            // as="h2"
            style={{padding: ".5rem" }} 
            >
            <Image 
            
              src={Logo} 
              style={{ padding: '0', margin: ".5em", borderRadius:'45px', height: "3rem", width: '3rem' }} />
             </Menu.Item>
             </Link>
              <Dropdown 
                pointing="right"
                icon="bars" 
                item
                style={{ margin: '0', padding: "1rem", color: "white" }} 
                scrolling
                button
                className="menuBars"
                >
                <Dropdown.Menu>
                  <Link to='/About'>
                   <Dropdown.Item 
                    name='About'
                    id='about'
                    active={this.props.location.pathname === '/About'}>About
                 </Dropdown.Item>
                 </Link>
                 <Link to='/Menu'>
                 <Dropdown.Item 
                  name='Menu'
                  id='menu'
                  active={this.props.location.pathname === '/Menu'}>Menu
                 </Dropdown.Item>
                 </Link>
                 <Link to='/Events'>
                  <Dropdown.Item 
                    name='Events'
                    id='events'
                    active={this.props.location.pathname === '/Events'}>Events
                  </Dropdown.Item>
                 </Link>
                 <Link to='/Contact'>
                  <Dropdown.Item 
                   name='Contact'
                   id='Contact'
                   active={this.props.location.pathname === '/Contact'}>Contact
                  </Dropdown.Item>
                 </Link>
                 <Link to='/FAQ'>
                   <Dropdown.Item 
                    name='FAQ'
                    id='FAQ'
                    active={this.props.location.pathname === '/FAQ'}>FAQ
                   </Dropdown.Item>
                </Link>
             </Dropdown.Menu>
           </Dropdown>
       </Container>
      </Menu>
    </>
    )
  }
}


export default withRouter(DropDownMenu);