import { useState } from "react";


const useTokenAndId = () => {
  const [userInfoState, setUserInfo] =
    useState<any>({ user_id: "", token: "" });

  const userInfo = localStorage.getItem("userInfo");

  if (userInfo !== null) {
    const { user_id, token } = JSON.parse(userInfo!);
    return {user_id,token};
  }else{
    return {user_id:null,token:null}
  }
};
export default useTokenAndId

