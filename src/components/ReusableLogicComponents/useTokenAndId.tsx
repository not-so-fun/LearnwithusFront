import { useEffect } from "react";

const useTokenAndId = () => {

  let userInfo = localStorage.getItem("userInfo");


  if (userInfo !== null) {
    const { user_id, token } = JSON.parse(userInfo!);
    return {user_id,token};
  }else{
    return {user_id:null,token:null}
  }
};
export default useTokenAndId

