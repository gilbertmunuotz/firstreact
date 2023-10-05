import React from 'react';
import Footer from './Footer';
import NewUser from './NewUser';

class One extends React.Component {
  // state = {
  //   name: 'Gilbert',
  //   age: 21
  // }

  // buttonClick(e) {  (JS DOM Events)
  //   console.log(e.target);
  // }

  buttonClick = (e) => { //Using this Keyword Inside The render() Function  
    this.setState({      //Changing State
      name: 'Angelah'
    });
  }

  // mouseHover(e) { (JS DOM Events)
  //   console.log(e.target, e.pageX);
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', this.state.name);
  }

  // executeChange = (e) => {
  //   this.setState({
  //     name: e.target.value
  //   });


  //}

  state = {
    footer: [
      { name: 'Angelah', age: 21, id: 1 },
      { name: 'Rose', age: 22, id: 2 },
      { name: 'Smith', age: 32, id: 3 },
      { name: 'Shebby', age: 39, id: 4 }
    ]
  }

  // render() {
  //   return (
  //     <div className="app">
  //       {/* <button onClick={this.buttonClick} >Click Me</button> (DOM Events)*/}

  //       {/* <button onMouseOver={this.mouseHover} >Hover On Me</button>  (DOM Events)*/}

  //       {/* <p>My Name Is {this.state.name} And I Am {this.state.age} Years Old</p> //State Components

  //       <form onSubmit={this.handleSubmit}> //Forms
  //         <input type='text' onChange={this.executeChange}></input>
  //         <button>Submit</button>
  //       </form> */}
  //       {/* 
  //       <h1>Hello World</h1> */}
  //       {/* <Footer name="Gilbert" age="21"/> //Nesting Components
  //       <Footer name="Angelah" age="21"/> //Nesting Components */}



  //     </div>
  //   )
  // }
  addUser = (NewUser) => {
    // console.log(NewUser);
    NewUser.id = Math.random();
    let footers = [...this.state.footer, NewUser] //Spread Operator
    this.setState({
      footer: footers
    })
  }

  deleteUser = (id) => {
    const footers = this.state.footer.filter(NewUser => {
      return NewUser.id !== id
    });

    this.setState({
      footer: footers
    })
  }

  componentDidMount() {
    console.log('component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div>
        <Footer deleteUser={this.deleteUser} footer={this.state.footer} />
        <NewUser addUser={this.addUser} />
      </div>
    )
  }
}

export default One;