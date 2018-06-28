import React, { Component } from 'react'
import ComponentOne from './components/ComponentOne'
class ComponentWrapper extends Component {
  render() {
    return (
      <div>
        <p>This is so Fancy!</p>
        <ComponentOne />
      </div>
    )
  }
}
export default ComponentWrapper
