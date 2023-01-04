import React, { useState } from "react"

export const Login = (props) => {
    const {email, setEmail} = useState('');
    const {pass, setPass} = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }



    // 로그인 페이지
   
    return(
        <div className="LoginContainer">
        <form className="LoginForm" onSubmit={handleSubmit}>
            <p className="TitleName">LOGIN</p>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="lee@gmail.com" id="email" name="id"></input>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="password" id="password" name="password"></input><br/>
            <button className="Btn" type="submit">Sign in</button><br/>
            <button className="Btn" type="submit">Sign in with goole</button>
        </form>
        <button className="linkBtn" onClick={()=> props.onFormSwitch('Register')}>등록되어있지 않으신가요? 회원가입 바로가기</button>
        </div>
    )
}