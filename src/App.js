import React from 'react';
import Footer from './Footer';

class One extends React.Component {
  // state = {
  //   name: 'Gilbert',
  //   age: 21
  // }

  // buttonClick(e) {
  //   console.log(e.target);
  // }

  // buttonClick = (e) => { //Using this Keyword Inside The render() Function  
  //   this.setState({      //Changing State
  //     name: 'Angelah'
  //   });
  // }

  // mouseHover(e) {
  //   console.log(e.target, e.pageX);
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form Submitted', this.state.name);
  // }

  // executeChange = (e) => {
  //   this.setState({
  //     name: e.target.value
  //   });
  // }

  render() {
    return (
      <div className="app">
        {/* <button onClick={this.buttonClick} >Click Me</button> */}

        {/* <button onMouseOver={this.mouseHover} >Hover On Me</button> */}

        {/* <p>My Name Is {this.state.name} And I Am {this.state.age} Years Old</p>

        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.executeChange}></input>
          <button>Submit</button>
        </form> */}
{/* 
        <h1>Hello World</h1> */}
        <Footer name="Gilbert" age="21"/>
        <Footer name="Angelah" age="21"/>
      </div>
    )
  }
}

export default One;