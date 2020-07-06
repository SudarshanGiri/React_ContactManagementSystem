import React from 'react';
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component{
  state={
    name:'',
    user:{
      id:1,
      name: "hari"
    }
  }
  render(){
    let person=[
      {id:1,name:'Ram'},
      {id:2,name:'Hari'},
      {id:3,name:'Shyam'},
    ];
    let name="Sudarshan";
    console.log(this.state);
    return(
      <div>
        <Navbar data="hello from App" age={25} user={this.state.user}/>
        <Contact user={person}/>
        <Form name={name} user={person}/>
      </div>
  

    )
   
  }

}
export default App;