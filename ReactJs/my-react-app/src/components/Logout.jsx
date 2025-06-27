import { useEffect } from "react";
import { useUser } from "./UserContext";

export const Logout = () => {
  const { logout } = useUser();

  useEffect(() => {
    setTimeout(()=>{
logout(); // this clears localStorage AND updates context
alert('logged out')
    },5000);
    
  }, []);

  return <>
    You are logged out...Click <a href="/login">here</a> to login
  </>
}
