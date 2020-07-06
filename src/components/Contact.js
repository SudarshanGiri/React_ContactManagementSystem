import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello from Contact</h1>
                <h2>{this.props.user[0].name}</h2>
            
            </div>
        );
    }
}

export default Contact;