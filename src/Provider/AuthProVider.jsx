import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider ,createUserWithEmailAndPassword,getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Hook/firebase.config";

 export const AuthContext = createContext(null);
 const auth = getAuth(app);
const AuthProVider = ({children}) => {
     const [user ,setUser] =useState(null)
     const [loading ,setLoading] =useState(true)
     // google
 const provider = new GoogleAuthProvider()
 const googleLogIn = ()=>{
     setLoading(true)
      return signInWithPopup(auth,provider)
      .then(result=>{
         console.log(result);
      })
      .catch(error=>console.error(error))
 }

//  email and password
const register = (email,password)=>{
     setLoading(true)
     return createUserWithEmailAndPassword(auth,email,password)
     // .then(result=>{
     //      console.log(result);
     //      setLoading(true)
     // })
     // .catch(error=>console.error(error))
}

const logIn = (email,password)=>{
     setLoading(true)
     return signInWithEmailAndPassword (auth,email,password)
     
}
// log out
const logOut =()=>{
   return signOut(auth)
}

useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth,currentUser=>{
          console.log('user on auth change', currentUser);
          setUser(currentUser);
          setLoading(false)
     })
    return ()=>{
     unSubscribe()
    }
},[])
 

 const authInfo = {
user,
 googleLogIn,
 logIn ,
 logOut,
 register,
 loading  
 }
return (
 <AuthContext.Provider value={authInfo}>
       {children}                                                                                   
  </AuthContext.Provider>
);
};

export default AuthProVider;