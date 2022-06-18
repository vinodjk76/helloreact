import React from "react";  
import '../Pages/Login.css'

class Login extends React.Component{

constructor (props)
{
    super(props);
    this.state={
        email:'',
        pwd:''                
    }
    this.handleChange= this.handleChange.bind(this);
}
    handleChange= (e)=>{
        const {name,value}= e.target;
        this.setState({[name]:value});
        //console.log(e.target.value);     
       // console.log(this);     

    }
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this);
        console.log("Email "+this.state.email);
        console.log("PWD "+this.state.pwd);
         
    }

    render(){
        return(
            <div className="div-login">
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="email" name='email' placeholder="Email" onChange={this.handleChange} ></input>
                        <input type="password" name='pwd' placeholder="Password"  onChange={this.handleChange}></input>
                        <button onClick={this.handleSubmit}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login;