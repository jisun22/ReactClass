import React, { useState } from "react"

export const Register = (props) => {
    const {email, setEmail} = useState('');
    const {pass, setPass} = useState('');
    const {name, setName} = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    // 이메일 유효성 검사
    const checkEmail = (e) => {
        var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        // 형식에 맞는 경우 true 리턴
    }

    
    //비밀번호 유효성 검사
    const checkPassword = (e) => {
        //  8 ~ 10자 영문, 숫자 조합
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/
        // 형식에 맞는 경우 true 리턴
        console.log('비밀번호 유효성 검사 :: ', regExp.test(e.target.value))
    }

    return(
        <div className="LoginContainer">
        <form className="RegisterForm" onSubmit={handleSubmit}>
            <p className="TitleName">JOIN</p>
            <label htmlFor="name">Name</label>
            <input value={name} type="email" placeholder="full name"  id="name" name="name"></input>
            <label for="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} onBlur={checkEmail} type="email" placeholder="lee@gmail.com"  id="email" name="id"></input>
            <label for="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} onBlur={checkPassword} type="password" placeholder="password" id="password" name="password"></input><br/>
            <button className="Btn" type="submit" >회원가입</button>
        </form>
        <button className="linkBtn" onClick={()=> props.onFormSwitch('login')}>이미 가입되어있으신가요? 로그인을 해주세요</button>
        </div>
    )
}