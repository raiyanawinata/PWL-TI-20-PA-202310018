import React, { Component } from 'react'
import Widget1 from './Widget1'

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <h1>This is a Home page</h1>
        <Widget1 name={""} />
      </div>
    )
  }
}
