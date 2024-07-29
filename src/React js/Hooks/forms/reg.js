import { useRef, useState } from "react";

const Registration=()=>{

    const emailRef=useRef();
    const passRef=useRef();
    const phoneRef=useRef();

    const [error,setError]=useState(null)

    const [userData,setUserData]=useState([])

    const submitHandler=(event)=>{
        event.preventDefault()
        const userEnteredEmail=emailRef.current.value
        const userEnteredPassword=passRef.current.value
        const userEnteredPhone=phoneRef.current.value

        if(userEnteredEmail.length<15 && 
            userEnteredEmail.length>0 && 
            userEnteredPassword.length<15 && 
            userEnteredPassword.length>0 && 
            userEnteredPhone.length==10){
                setError(null)
                emailRef.current.value = ""
                passRef.current.value = ""
                phoneRef.current.value = ""

                const singleUser={
                    userEnteredEmail,
                    userEnteredPassword,
                    userEnteredPhone
                }

                const updateUserData=[...userData,singleUser]

                storageHandler(updateUserData)

            }
            else{
                setError("Above entered data is not satisfaied")
            }

    }

    const storageHandler=(totalUsers)=>{
        window.localStorage.setItem("user",JSON.stringify(totalUsers))


    }


    return(
        <>
        <h1 style={{textAlign:"center"}}>REGISTRATION</h1>

        <form  style={{maxWidth:500}} onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        ref={emailRef}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        ref = {passRef}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail2" className="form-label">
                        Phone number
                    </label>
                    <input
                        type="tel"
                        className="form-control"
                        id="exampleInputEmail2"
                        aria-describedby="emailHelp"
                        ref={phoneRef}
                    />
                </div>
                {error && <div>{error}</div>}
                <button type="submit" className="btn btn-primary" on>
                    Submit
                </button>
            </form>
        </>
    )
}
export default Registration;