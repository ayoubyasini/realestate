"use client";
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {Toaster,toast} from "react-hot-toast";
import { ThreeDots } from 'react-loader-spinner';
import styles from "./Signup.module.css";

function Signup() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [rePassword,setRePassword] = useState("");
  const [loading,setLoading] = useState(false)

  const router = useRouter()

  const signupHandler = async (e) => {
    e.preventDefault();

    if(password !== rePassword) {
      toast.error("رمز و تکرار آن درست نمی باشد")
      return
    }
    setLoading(true)
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({email,password}),
      headers: {"Content-Type": "application/json"}
    })
    setLoading(false)


    const data = await res.json();
    if(res.status === 201) {
      router.push("/signin")
    }else {
      toast.error(data.error ? data.error : null)
    }
  }
  
  return (
    <div className={styles.form}>
        <h4>فرم ثبت نام</h4>
        <form>
            <label>ایمیل:</label>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label>رمز عبور:</label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <label>تکرار رمز عبور:</label>
            <input type='password' value={rePassword} onChange={(e) => setRePassword(e.target.value)}/>
            {
              loading ? 
              <ThreeDots color='#304ffe' height={45} ariaLabel='three-dots-loading' visible={true} wrapperStyle={{margin: "auto"}}/>
              : <button type='submit' onClick={signupHandler}>ثبت نام</button>
            }
        </form>
        <p>حساب کاربری دارید؟
            <Link href="/signin">ورود</Link>
        </p>
        <Toaster/>
    </div>
  )
}

export default Signup