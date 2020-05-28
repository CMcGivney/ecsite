import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu,} from 'semantic-ui-react'
import DropDownMenu from './DropDownMenu.js'


class Navbar extends React.Component {
  state = {
    width: window.screen.width
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.screen.width });
  };
  
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
  
    if (isMobile)
    return (
      <DropDownMenu/>
    )
    else
    return (
      <>
         <Menu size="large" style={{padding: ".5em", opacity: "0.9", boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)"}} inverted pointing fixed="top">
          <Link to='/'>
            <Menu.Item
              name='Home'
              id='home'
              icon="home"
              active={this.props.location.pathname === '/'}
            />
            </Link>
          <Link to='/about'>
            <Menu.Item
              name='About'
              id='about'
              icon="info"
              active={this.props.location.pathname === '/about'}
            />
            </Link>
          <Link to='/Menu'>
            <Menu.Item
              name='Menu'
              id='menu'
              icon="food"
              active={this.props.location.pathname === '/Menu'}
            />
            </Link>
          <Link to='/Events'>
            <Menu.Item
              name='Events'
              id='events'
              icon="book"
              active={this.props.location.pathname === '/Events'}
            />
          </Link>
          <Link to='/Contact'>
            <Menu.Item
              name='Contact'
              id='Contact'
              icon="address book"
              active={this.props.location.pathname === '/Contact'}
            />
          </Link>
          <Link to='/FAQ'>
            <Menu.Item
              name='FAQ'
              id='FAQ'
              icon="question circle"
              active={this.props.location.pathname === '/FAQ'}
            />
            </Link>
         </Menu>
      
    </>
    )
  }
}


export default withRouter(Navbar);