import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {signup} from "../../constants/Sign/Sign"
import "./Signup.css";

export default function Signup(){

    const [userid, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const navigate = useNavigate();

    const lookingForNum = (e) => {
        const inputValue = e.target.value;
        const onlyEnglishAndNumbers = inputValue.replace(/[^a-zA-Z0-9]/g, '');
      
        setUserId(onlyEnglishAndNumbers);
      };
      


    const Alert = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });
    
    const signupclick =async(e)=>{
        e.preventDefault();
        if (userid === "") {
            Alert.fire({
              icon: "question",
              title: "아이디를 써주세요",
            });
            return;
          }
        if (password !== repassword) {
            Alert.fire({
              icon: "question",
              title: "비밀번호가 일치하지 않습니다.",
            });
            return;
          }
         
    
        try {
          const success = await signup(userid, password,repassword);
          if (success) {
            Alert.fire({
              icon: 'success',
              title: '회원가입 성공'
            });
          } else {
            Alert.fire({
              icon: 'warning',
              title: '회원가입 실패'
            });
          }
        } catch (error) {
          Alert.fire({
            icon: 'error',
            title: '서버 오류'
          });
        }
      }

    return(
    <div className="SigupMain">
         <div className="Sigup-group">
        <h2>회원가입</h2>
        <form action="" onSubmit={signupclick}>
          <p>
          <input
            className="Sigup1"
            type="text"
            name="username"
            placeholder="아이디"
            value={userid}
            onChange={lookingForNum}
            />
          </p>
          <p>
            <input
              className="Sigup2"
              type="password"
              name="pwd"
              placeholder="비밀번호"
              onChange={event => { setPassword(event.target.value); }} />
          </p>
          <p>
            <input
              className="Sigup2"
              type="password"
              name="pwd"
              placeholder="비밀번호를 다시 써주세요"
              onChange={event => { setRepassword(event.target.value); }} />
          </p>
          <input
            type="submit"
            className="submit"
            value="회원가입"
          />
        </form>
        <div className="login-link">
          <p>로그인 하기 <button onClick={()=>navigate("/")}>로그인</button></p>
        </div>
      </div>
    </div>
    );
}