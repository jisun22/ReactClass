import React, { useState } from 'react';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  } 

  // JSX
  // 데이터 바인딩이 쉬어지는 React, Vue, Angular
  // 리액트에서 데이터 바인딩 쉽게 하는 법 {변수명}
  // src, id, href 등의 속성에서도 {변수명, 함수 등}
  // {클레스명} 으로도 사용가능
  // <div style = {{color : 'blue'}} > </div> 
  // style = {{object 자료형으로 만든 스타일}}
  // function 함수(){
  //   return 100
  // }

  //state에 데이터 저장해 놓는 이유: 웹이 App 처럼 동작하게 만들고 싶어서 
  //HTML이 자동으로 재렌더링이 된다.

  //Array, Object state 데이터 수정방법: 일단 변경 함수를 써야한다. 
  //state 를 직접 건들면 안된다. 

//   let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);

//   let [따봉, 따봉변경] = useState(0);
  
//   let posts = '마이페이지';

//   function ChangeTitle(){
//     var newArray = [...글제목]; // state 데이터 수정 테크닉
//     newArray[0] = '여자코트 추천';
//     글제목변경( newArray );
//   }


  return (
    
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} />
      }
    </div>

    //   <div className="black-nav">
    //     <div>My Page</div>
    //   </div>
    //   <button onClick={ ChangeTitle } > 버튼 </button> 
    //   <div className="list">
    //     <h4> { 글제목[0] } <span onClick={ ()=>{따봉변경(따봉 + 1)} } >♥</span>{따봉}</h4>
    //     <p>내 정보를 입력하세요</p>
    //     <hr/>
    //   </div>
    //   <div className="list">
    //     <h4> { 글제목[1] } </h4>
    //     <p>내 정보를 입력하세요</p>
    //     <hr/>
    //   </div>
    //   <div className="list">
    //     <h4> { 글제목[2] } </h4>
    //     <p>내 정보를 입력하세요</p>
    //     <hr/>
    //   </div>
    //   <div className="modal">
    //     <h2>제목</h2>
    //     <p>날짜</p>
    //     <p>상세내용</p>
    //   </div>

    //   <Modal/>

 
 
  );
}

// function Modal(){
//   return(
//     <div className="modal">
//       <h2>제목</h2>
//       <p>날짜</p>
//       <p>상세내용</p>
//   </div>
//   )
// }

export default App;
