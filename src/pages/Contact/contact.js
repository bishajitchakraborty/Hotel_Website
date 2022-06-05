import React, {useEffect, useState} from 'react';
import "../../assets/css/style.css"
import {useDispatch, useSelector} from "react-redux";
import {message} from "../../Services/Message/MessageAction";
import {toast} from "react-toastify";
import {getContact} from "../../Services/Contact/ContactAction";
import _ from "lodash";
import ReservationSlider from "../Reservation/reservationSlider";
import {Skeleton} from "@mui/material";
const Contact = () => {
    const mess = useSelector(store=>store.message)
    const contact = useSelector(store=>store.contact)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getContact())
    }, [])
    const [text, setText] = useState({
        name:"", email:"", phone:"", subject:"", message:""
    })
    function sendMessage(){
        message(text).then(r=>{
            if (r.status){
                toast(r.data.message);
                setText({...text,  name:"", email:"", phone:"", subject:"", message:"" })
            }
        }).catch(reason =>
            toast("Something went wrong!")
        )
    }
    return (
        <>
            {
                contact.loading?
                    <>
                        <div className={'border-b-4 border-blue-900 md:w-3/5 mx-auto  '}>
                            <Skeleton className={'h-96 w-full'} />
                        </div>

                    </>:
                    <>
                        <div className={'bg-slate-300'}>
                            <div className={'border-b-4 border-blue-900 md:w-3/5 mx-auto  '}>
                                <ReservationSlider/>
                            </div>
                            <div className={'md:w-3/5 mx-auto bg-white'}>
                                <section className={'md:w-5/6 mx-auto   pb-16'}>
                                    <h4 className={'text-blue-700 pt-4 pb-2 mb-4 text-4xl border-b border-blue-700'}>Contat Us</h4>

                                    {/*<-----------------------------------------------Message Information----------------------------------->*/}
                                    <div className={'flex flex-wrap pt-10'}>
                                        <div className={'md:w-2/3 w-full md:px-2 px-2'}>
                                            <div className="flex items-center mb-6">
                                                <div className="w-1/3">
                                                    <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                           htmlFor="inline-name">
                                                        Name:
                                                    </label>
                                                </div>
                                                <div className="w-2/3">
                                                    <input
                                                        onChange={event=>{
                                                            setText({...text, name: event.target.value})
                                                        }}
                                                        value={text.name}
                                                        className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                        id="inline-name" type="text" />
                                                </div>
                                            </div>



                                            <div className="flex items-center mb-6">
                                                <div className="w-1/3">
                                                    <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                           htmlFor="inline-email">
                                                        Email:
                                                    </label>
                                                </div>
                                                <div className="w-2/3">
                                                    <input
                                                        onChange={event=>{
                                                            setText({...text, email: event.target.value})
                                                        }}
                                                        value={text.email}
                                                        className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                        id="inline-email" type="email" />
                                                </div>
                                            </div>


                                            <div className="flex items-center mb-6">
                                                <div className="w-1/3">
                                                    <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                           htmlFor="inline-phone">
                                                        Phone :
                                                    </label>
                                                </div>
                                                <div className="w-2/3">
                                                    <input
                                                        onChange={event=>{
                                                            setText({...text, phone: event.target.value})
                                                        }}
                                                        value={text.phone}
                                                        className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                        id="inline-phone" type="text" />
                                                </div>
                                            </div>


                                            <div className="flex items-center mb-6">
                                                <div className="w-1/3">
                                                    <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                           htmlFor="inline-subject">
                                                        Subject:
                                                    </label>
                                                </div>
                                                <div className="w-2/3">
                                                    <input
                                                        onChange={event=>{
                                                            setText({...text, subject: event.target.value})
                                                        }}
                                                        value={text.subject}
                                                        className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                        id="inline-subject" type="text" />
                                                </div>
                                            </div>

                                            <div className="flex mb-6">
                                                <div className="w-1/3">
                                                    <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                           htmlFor="inline-message">
                                                        Message:
                                                    </label>
                                                </div>
                                                <div className="w-2/3">
                                                <textarea
                                                    onChange={event=>{
                                                        setText({...text, message: event.target.value})
                                                    }}
                                                    value={text.message}
                                                    className="bg-white  border border  w-full pb-32 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                    id="inline-message" type="text" />
                                            </div>
                                        </div>
                                            <div className="flex items-center mb-6">
                                                <div className="w-1/3">

                                                </div>
                                                <div className="w-2/3">
                                                    <button
                                                        onClick={sendMessage}
                                                        className="bg-transparent hover:bg-blue-700 text-gray-700 text-sm hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>

                                        </div>


                                        {/*<----------------------------------------------------------Hotel Information--------------------------------->*/}
                                        <div className={'md:w-1/3 w-full md:pl-10 pl-2'}>
                                            <div>
                                                {
                                                    !_.isEmpty(contact.data)?
                                                     contact.data.map((v,i)=>(
                                                         <div key={i}>
                                                             <h4 className={'text-black mt-4 text-xl '}>{v.branchName}</h4>
                                                             <p className={'text-sm py-2'}>{v.title}</p>
                                                             <p className={'text-sm'}>{v.subTitle}</p>
                                                             <div className={'flex pt-2'}>
                                                                 <div className={'w-full flex'}>
                                                                    <span className="material-icons text-sm text-center text-green-500">
                                                                        call
                                                                    </span>
                                                                     <div className={'text-sm pl-2'}>
                                                                         {v.phone}
                                                                     </div>
                                                                 </div>
                                                             </div>
                                                             <div className={'flex pt-2'}>
                                                                 <div className={'w-full flex'}>
                                                                    <span className="material-icons text-sm text-center text-green-500">
                                                                       whatsapp
                                                                    </span>
                                                                     <div className={'text-sm pl-2'}>
                                                                         {v.whatsapp}
                                                                     </div>
                                                                 </div>
                                                             </div>
                                                             <div className={'flex pt-2'}>
                                                                 <div className={'w-full flex'}>
                                                                    <span className="material-icons text-sm text-center text-green-500">
                                                                        facebook
                                                                    </span>
                                                                     <div className={'text-sm pl-2'}>
                                                                         {v.facebook}
                                                                     </div>
                                                                 </div>
                                                             </div>
                                                             <div className={'flex pt-2'}>
                                                                 <div className={'w-full flex'}>
                                                                    <span className="material-icons text-sm text-center text-green-500">
                                                                        email
                                                                    </span>
                                                                     <div className={'text-sm pl-2'}>
                                                                         {v.email}
                                                                     </div>
                                                                 </div>
                                                             </div>

                                                         </div>
                                                     )):<>Content Not Found</>
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                        </div>
                    </>
            }
        </>



    );
};

export default Contact;