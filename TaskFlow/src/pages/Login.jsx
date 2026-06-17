import "./login.css";
import { useState } from "react";
import axios from "axios";
import Register from "./Register";

function Card({name}){
    return(
        <>
        <h1>Hello {name} !</h1>
        </>
    )
}

function Login() {
    const [curUser,setCurUser] = useState(null);
    const [show,setShow] =useState(false);
    const [email,setEmail] =useState("");
    const [password,setPassword]=useState("");
    const handleLogin= async (e)=>{
        e.preventDefault();
        const userData={
            email:email,
            password:password
        };
        try{
            const response=await axios.post(
                "http://localhost:5000/api/login",userData
            );
            if(response.data.message=="success"){
                alert("Login Successfull");
                // <card name={response.data.name} />
                // setShow(true);
                setCurUser(response.data.name);
            }
            else{
                alert("User Not Found.. Register");
                // <Register/>
                setShow(true);
            }
        }catch(error){
            console.log("error");
            alert(error.response.data.message);
        }
    }
    if(curUser){
        return <Card name={curUser} />
    }
    if(show){
        return <Register/>
    }
    return (
        <main>
            <div id="details">
                <div className="heading">
                    <h1>Welcome Back</h1>
                    <p>Login to your account to continue</p>
                </div>
                <form onSubmit={handleLogin}>
                    <h4 >Email</h4>
                    <br/>
                    <input type="email" placeholder="Enter your mail" required value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <br/>
                    <h4 >Password</h4>
                    <br/>
                    <input type="password" placeholder="Enter your password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <br/>
                    <div>
                        <p>
                            <input type="checkbox" />
                            Remember me</p>
                        <span>Forgot Password?</span>
                    </div>
                    <br/>
                    <button type="submit" id="loginBtn">Login</button>
                    <p className="or">or</p>
                    <button>Login With Google</button>
                    <div className="id">
                        <h6>Don't have account..?</h6>
                        <button onClick={()=>setShow(!show)}>Register here</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login;