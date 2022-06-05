import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {signUP} from "../../Services/SignUp/SignUpAction";
import classnames from 'classnames'

const validatePassword = (p1, p2) => {
    const errors = {};
    errors.valid = true

    if (p1.length < 8) {
        errors.password = 'Password must be 8 character.';
        errors.valid = false
    }
    if (p1 !== p2) {
        errors.confirmPassword = "Password and ConfirmPassword Doesn't Match";
        errors.valid = false
    }

    return errors;
};

const SignUp = () => {
    const [error, setError] = useState({})
    const [sign, setSign] = useState({
      username: "",  first_name:"", last_name:"", email:"", password:"", confirmPassword:""
    })

    const [showPass, setShowPass] = useState(false)
    const [showConPass, setShowConPass] = useState(false)

    function signUp(){
        const error = validatePassword(sign.password, sign.confirmPassword)
        setError(error)
        if(error.valid){
            signUP(sign).then(r=>{
                    if (r.status){
                        toast("Successful Registration");
                        setSign({...sign, username:"", first_name:"", last_name:"", email:"", password:"", confirmPassword:""})
                    }
                    else {
                        toast("Bad Credentials.")
                    }

            }).catch(reason =>
                toast("Something went wrong!")
            )
         }
        }

    return (
        <div className={'bg-slate-300 sm:py-32'}>
            <div className={'sm:w-1/5 mx-auto  bg-slate-600 p-4 '}>
                <h2 className={'text-center pt-4 text-2xl text-white'}>----------Register----------</h2>
                <p className={'text-center text-sm pb-8 pt-4 text-white'}>Create your account it's free and only takes a minute </p>

                <div className={'flex pb-4'}>
                    <div className={'w-1/2  pr-2'}>
                        <input
                            onChange={event=>{
                                setSign({...sign, first_name: event.target.value})
                            }}
                            value={sign.first_name}
                            className=" bg-transparent pl-2 border border-white w-full text-white  py-2  leading-tight focus:outline-none"
                            type="text" placeholder="First Name"  required aria-label="Full name"/>

                    </div>
                    <div className={'w-1/2 pl-2 '}>
                        <input
                            onChange={event=>{
                                setSign({...sign, last_name: event.target.value})
                            }}
                            value={sign.last_name}
                            className="appearance-none bg-transparent pl-2 border border-white w-full text-white py-2  leading-tight focus:outline-none"
                            type="text" placeholder="Last Name" required aria-label="Full name"/>

                    </div>

                </div>


                <div className={'w-full pb-4 '}>
                    <input
                        onChange={event=>{
                            setSign({...sign, email: event.target.value, username: event.target.value})
                        }}
                        value={sign.email}
                        className="appearance-none bg-transparent border pl-2 border-white w-full text-white  py-2  leading-tight focus:outline-none"
                        type="email" placeholder="Email" aria-label="Full name"/>
                </div>
                <div className={'w-full relative pb-4'}>
                    <input
                        onChange={event=>{
                            setSign({...sign, password: event.target.value})
                        }}
                        value={sign.password}
                        className="appearance-none bg-transparent border pl-2 border-white w-full text-white py-2  leading-tight focus:outline-none"
                        type={showPass ? "text" : 'password'} placeholder="Password" aria-label="Full name"/>
                    <div
                        className="absolute inset-y-0 right-0 pr-3 pb-4 flex items-center text-sm leading-5">
                        <span
                            className={classnames(showPass ? 'hidden' : '', "material-icons cursor-pointer")}
                            onClick={() => {
                                setShowPass(true)
                            }}
                        >
                            visibility
                        </span>
                        <span
                            onClick={() => {
                                setShowPass(false)
                            }
                            }
                            className={classnames(!showPass ? 'hidden' : '', "material-icons cursor-pointer")}>
                            visibility_off
                        </span>
                    </div>
                    {error.password}
                </div>


                <div className={'w-full relative pb-6'}>
                    <input
                        onChange={event=>{
                            setSign({...sign, confirmPassword: event.target.value})


                        }}
                        value={sign.confirmPassword}
                        className="appearance-none bg-transparent pl-2 border border-white w-full text-white  py-2  leading-tight focus:outline-none"
                        type={showConPass ? "text" : 'password'}
                        placeholder="Confirm Password" aria-label="Full name"/>
                    <div
                        className="absolute inset-y-0 right-0 pr-3 pb-4 flex items-center text-sm leading-5">
                        <span
                            className={classnames(showConPass ? 'hidden' : '', "material-icons cursor-pointer")}
                            onClick={() => {
                                setShowConPass(true)
                            }}
                        >
                            visibility
                        </span>
                        <span
                            onClick={() => {
                                setShowConPass(false)
                            }
                            }
                            className={classnames(!showConPass ? 'hidden' : '', "material-icons cursor-pointer")}>
                            visibility_off
                        </span>
                    </div>
                    {error.confirmPassword}
                </div>


                <div className={'w-full flex pb-4'}>
                    <input
                        className=" h-4 w-4 border border-gray-300 rounded-sm    align-top  cursor-pointer"
                        type="checkbox" checked="disabled" />
                    <label  className={'text-sm pl-2 text-white'}>I accept the <span className={'font-bold text-white'}>Terms of use & privacy Policy</span></label>
                </div>
                <div className=" w-full ">
                    <button
                        onClick={signUp}
                        className="w-full   flex justify-center pl-2  text-white bg-slate-700 border-0 py-2 px-8  focus:outline-none hover:bg-slate-800 rounded text-lg">
                        Register Now
                    </button>
                </div>
                <div className={'text-right pr-4  w-full pb-4 text-white'}>
                    <i className={' text-sm '} > Already have an account?
                       <Link className={'text-bold text-xl'} to="/login">SignIn</Link>
                    </i>
                </div>
            </div>
        </div>
    );
};

export default SignUp;