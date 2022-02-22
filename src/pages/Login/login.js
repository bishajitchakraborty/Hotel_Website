import React from 'react';
import img_1 from '../../assets/image/img_1.png'
import NavLink from "react-router-dom/es/NavLink";
import Link from "react-router-dom/es/Link";
const Login = () => {
    return (
        <div>
            <section className={'sm:w-2/4 flex flex-wrap mx-auto sm:border border-gray-300 bg-white mt-32 sm:p-0 px-2'}>
                <div className={'sm:w-1/2 w-full p-4  sm:border-r border-gray-300 '}>
                    <img height={'400'} width={'470'} src={img_1}/>
                </div>
                <div className={'sm:w-1/2 w-full'}>
                    <h2 className={'pt-10 pl-4 text-2xl italic text-gray-600'}>Sign in</h2>
                    <p className={'p-4 text-gray-600'}>Login to manage our account</p>
                        <div className={'w-full py-2 px-6'}>
                            <label htmlFor="phone"
                                   className="leading-7 text-sm text-gray-600">UserName*</label>
                            <input

                                type="text"  name="phone"
                                className="w-full bg-gray-100 bg-opacity-50 rounded-2xl border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className={'w-full py-2 px-6'}>
                            <label htmlFor="phone"
                                   className="leading-7 text-sm text-gray-600">Password*<span className={"text-xs text-red-500"}></span></label>
                            <input

                                type="text"  name="phone"
                                className="w-full bg-gray-100 bg-opacity-50 rounded-2xl border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

                        </div>
                    <div className="px-6 pb-6 w-full">
                        <button

                        className="w-full mt-5 flex justify-center rounded-2xl mx-auto text-white bg-slate-400 border-0 py-2 italic focus:outline-none hover:bg-indigo-600  text-lg">Login</button>
                    </div>
                    <div className={'justify-items-center w-full'}>
                            <span className={'pl-24'} > Don't have an account?
                               <Link to="/signup">SignUp</Link>
                            </span>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Login;