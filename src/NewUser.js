import React from 'react';

class User extends React.Component {
    state = {
        name: null,
        age: null,
    }

    change = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addUser(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.change} />
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.change} />
                    <button>Submit</button>
                </form>
            </div>
        )

    }
}

export default User;