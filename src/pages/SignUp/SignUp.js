import React from 'react';
import Link from "react-router-dom/es/Link";

const SignUp = () => {
    return (
        <div className={'bg-slate-800 sm:py-32'}>
            <div className={'sm:w-1/5 mx-auto  bg-slate-600 p-4 '}>
                <h2 className={'text-center pt-4 text-2xl text-white'}>----------Register----------</h2>
                <p className={'text-center text-sm pb-8 pt-4 text-white'}>Create your account it's free and only takes a minute </p>
                <div className={'flex pb-4'}>
                    <div className={'w-1/2  pr-2'}>
                        <input
                            className=" bg-transparent pl-2 border border-white w-full text-white  py-2  leading-tight focus:outline-none"
                            type="text" placeholder="First Name"  aria-label="Full name"/>
                    </div>
                    <div className={'w-1/2 pl-2 '}>
                        <input
                            className="appearance-none bg-transparent pl-2 border border-white w-full text-white py-2  leading-tight focus:outline-none"
                            type="text" placeholder="Last Name" aria-label="Full name"/>
                    </div>
                </div>
                <div className={'w-full pb-4 '}>
                    <input
                        className="appearance-none bg-transparent border pl-2 border-white w-full text-white  py-2  leading-tight focus:outline-none"
                        type="email" placeholder="Email" aria-label="Full name"/>
                </div>
                <div className={'w-full  pb-4'}>
                    <input
                        className="appearance-none bg-transparent border pl-2 border-white w-full text-white py-2  leading-tight focus:outline-none"
                        type="password" placeholder="Password" aria-label="Full name"/>
                </div>
                <div className={'w-full pb-6'}>
                    <input
                        className="appearance-none bg-transparent pl-2 border border-white w-full text-white  py-2  leading-tight focus:outline-none"
                        type="password" placeholder="Confirm Password" aria-label="Full name"/>
                </div>
                <div className={'w-full flex pb-4'}>
                    <input
                        className="appearance-none bg-transparent pl-2 border border-white w-full text-white w-4 py-2  leading-tight focus:outline-none"
                        type="checkbox" placeholder="Confirm Password" aria-label="Full name"/>
                    <h2 className={'text-sm pl-2'}>I accept the <span className={'text-blue-900'}>Terms of use & privacy Policy</span></h2>
                </div>
                <div className=" w-full ">
                    <button
                        className="w-full   flex justify-center pl-2  text-white bg-slate-700 border-0 py-2 px-8  focus:outline-none hover:bg-slate-800 rounded text-lg">
                        Register Now
                    </button>
                </div>
                <div className={'text-right pr-4  w-full pb-4'}>
                            <span className={' text-sm'} > Already have an account?
                               <Link className={'text-blue-900 text-xl'} to="/login">SignIn</Link>
                            </span>
                </div>
            </div>
        </div>
    );
};

export default SignUp;