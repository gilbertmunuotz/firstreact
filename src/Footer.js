import React from 'react';

class Footer extends React.Component {

    render() {
        const { name, age } = this.props;
        return (
            <div className='app'>

                <p>Thank You</p>
                <div>Name: {name}</div>
                <div>Age: {age}</div>

            </div>
        )
    }
}

export default Footer;