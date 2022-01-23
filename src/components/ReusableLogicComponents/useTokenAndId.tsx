import { useEffect } from "react";

const useTokenAndId = () => {

  let userInfo = localStorage.getItem("userInfo");


  if (userInfo !== null) {
    const { user_id, token,image } = JSON.parse(userInfo!);
    return {user_id,token,image};
  }else{
    return {user_id:null,token:null,image:null}
  }
};
export default useTokenAndId

