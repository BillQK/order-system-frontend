import React from 'react';

class Registration extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            message:''
        };
    }

    onRegistration=()=>{
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        //headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
        //headers.append('Origin','http://localhost:3000');


        let user={
            firstname:this.refs.firstName.value,
            lastname:this.refs.lastName.value,
            email:this.refs.email.value,
            password:this.refs.password.value,
            mobile:this.refs.mobile.value,

        };

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: headers,
            crossDomain: true,
            body:JSON.stringify(user)
        }).then(r=>r.json()).then(res=>{
            if(res) {
                this.setState({message:'new user is created'})
            }
        })

    }

    render(){
        return(
            <div>
                <h2>Please Enter User Registration Details</h2>
                <p>
                <label>First Name : <input type="text"  ref="firstName"></input></label>
                </p>
                <p>
                <label>Last Name : <input type="text"  ref="lastName"></input></label>
                </p>
                <p>
                <label>Email : <input type="text"  ref="email"></input></label>
                </p>
                <p>
                <label>Password : <input type="text"  ref="password"></input></label>
                </p>
                <p>
                <label>Mobile : <input type="text"  ref="mobile"></input></label>
                </p>
                <button onClick={this.onRegistration}>Register</button>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default Registration;