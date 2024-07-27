import React, { useState } from "react";
import Add from "../images/upload-icon.png"
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth ,storage} from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 



const Register = ()=>{
    const [err,setErr] = useState(false)
     const handleSubmit = async (e)=>{
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try{
const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);
uploadTask.on(
  (error) => {
    setErr(true);
   
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
 await updateProfile(res.user,{
    displayName,
    photoURL:downloadURL,
 });


 await setDoc(doc(db, "users", res.user.uid),{
    uid:  res.user.uid,
    displayName,
    email,
    photoURL:downloadURL
});
    });
  }
);
     }catch(err){
      setErr(true)
        }


       
const  res = await  createUserWithEmailAndPassword(auth, email, password)
 
    }
    return(

        <div className="formContainer">
            <div className="formRapper">
                <span className="logo">Chap App</span>
                <span className="title">Regester</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder=" Name" />
                    <input type="email" placeholder=" email" />
                    <input type="password" placeholder=" password" />
                    <input style={{display:"none"}} type="file" id="file" placeholder="" />
                    <label htmlFor="file">
                        <img   src={Add} alt="" />
                        <span>Add an avator</span>
                    </label>
                    <button>Sign Up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You have an account ? login</p>
            </div>
        </div>

    );
}

export default Register