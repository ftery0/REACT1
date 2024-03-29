import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../constants/Swal/Swal_alert";
import Cookies from "js-cookie";
import axios from "axios";

const useLogin = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const lookingForNum = (e) => {
    const inputValue = e.target.value;
    const onlyEnglishAndNumbers = inputValue.replace(/[^a-zA-Z0-9]/g, "");
    setId(onlyEnglishAndNumbers);
  };

  const lookingForNumInPassword = (e) => {
    const inputValue = e.target.value;
    const onlyEnglishAndNumbers = inputValue.replace(/[^a-zA-Z0-9]/g, "");
    setPassword(onlyEnglishAndNumbers);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/login`, {
        id: id,
        password: password,
      });
      console.log(response); // 응답 구조 확인
      if (response.status === 200 && response.data.accessToken) {
        showToast("success", "로그인 성공");
        // 응답 구조에 따라 아래 라인을 조정해야 할 수 있습니다.
        localStorage.setItem("accessToken", response.data.accessToken);
        Cookies.set("refreshToken", response.data.refreshToken);
        navigate("/main");
      } else {
        showToast("warning", "로그인 실패");
      }
    } catch (error) {
      console.log(error);
      showToast("error", "로그인 중 오류가 발생했습니다.");
    }
  };
  
  return {
    id,
    password,
    lookingForNum,
    lookingForNumInPassword,
    handleLogin,
  };
};

export default useLogin;
