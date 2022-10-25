import React from 'react';
import axios from "axios";
import {api_url} from "../variables.js";
import "../styles.css";

const Login = (props) => {
    let username = "";
    let password = "";

    const usernameInputHandler = (event) => {
        username = event.target.value;
    };

    const passwordInputHandler = (event) => {
        password = event.target.value;
    };

    const login = async () => {
        await axios
            .post(api_url + "/api/login", {
                "username": username,
                "password": password,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
                alert(error);
            });
    };

    return(
        <div className='center'>
            <h1>Welcome to Github Jobs</h1>
            <h2 className='mt-5'>Login</h2>

            <label className='mt-3' htmlFor='username'>Username</label>
            <input className='form-control mt-2' style={{width: "30%", margin: "auto"}} type="text" name="username" id="username" onChange={usernameInputHandler} />

            <label className='mt-3' htmlFor='password'>Password</label>
            <input className='form-control mt-2' style={{width: "30%", margin: "auto"}} type="password" name="password" id="password" onChange={passwordInputHandler} />

            <button type='submit' className='btn btn-primary btn-lg mt-3' onClick={login}>
                Login
            </button>
        </div>
    );
};

export default Login;