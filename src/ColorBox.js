import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }
  
  render() {
    let opac = this.props.opacity
    if (opac >= .2) {
      return (
        <div className="color-box" style={{opacity: opac}}>
          <ColorBox opacity= {(opac - .1)}/>
        </div>
      )
    } else {
      return null
    }
  }
}

