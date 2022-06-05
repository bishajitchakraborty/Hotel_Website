import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import {reservation} from "../../Services/Reservation/ReservationAction";
import {authenticated} from "../../Services/Common/action";
import ReservationSlider from "./reservationSlider";
import _ from "lodash";
import {Skeleton} from "@mui/material";

const Reservation = () => {
    const reservation1 = useSelector(store=>store.reservation)
    const contact = useSelector(store=>store.contact)
    const auth= authenticated();
    const [booking, setBooking] = useState({
        title:"", firstName:"", lastName:"", primaryContact:"", mobile:"", email:"",  address:"", city:"", postCode:"", country:"", nationality:"", roomType:"",  numberOfRooms:"", numberOfChildren:"", request:"", checkedIn:"", checkedOut:""
    })
    function reservationBooking(){
        reservation(booking).then(r=>{
            if (r.status){
                // toast(r.data.message);
                 toast("Sucessful Booking");
                setBooking({...booking,  title:"", firstName:"", lastName:"", primaryContact:"", mobile:"", email:"",  address:"", city:"", postCode:"", country:"", nationality:"", roomType:"",  numberOfRooms:"", numberOfChildren:"", request:"", checkedIn:"",checkedOut:"" })
            }
            else {
                toast("Bad Credentials.")
            }
        }).catch(reason =>
            toast("Something went wrong!")
        )
    }
    return (
                        <div className={'bg-slate-300'}>
                            <section className={'md:w-3/5 mx-auto border-b-4 border-blue-900'}>
                                <ReservationSlider/>
                            </section>
                            <div className={'md:w-3/5 mx-auto bg-white'}>
                                <section className={'md:w-5/6 mx-auto  '}>
                                    <h4 className={'text-blue-700 text-3xl pt-6 border-b border-blue-700'}>Reservation</h4>

                                    {/*<-----------------------------------------------Personal Information----------------------------------->*/}
                                    <div className={'flex flex-wrap pt-10 md:px-0 px-2'}>
                                        <div className={'md:w-2/3 w-full'}>
                                            <h4 className={'text-blue-900 text-xl'}>Personal Information</h4>
                                            <div className="flex items-center mb-6">
                                                <div className="w-1/3">
                                                    <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                           htmlFor="inline-title">
                                                        Title:
                                                    </label>
                                                </div>
                                                <div className="w-2/3">

                                                    <select
                                                        onChange={event=>{
                                                            setBooking({...booking, title: event.target.value})
                                                        }}
                                                        value={booking.title}
                                                        className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                        id="inline-title" type="text">
                                                        <option value={'Mr.'}>Mr.</option>
                                                        <option value={'Mrs.'}>Mrs.</option>
                                                        <option value={'Ms.'}>Ms.</option>
                                                        <option value={'Dr.'}>Dr.</option>
                                                        <option value={'Eng.'}>Eng.</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="flex items-center mb-6">
                                                <div className="w-1/3">
                                                    <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                           htmlFor="inline-first-name">
                                                        First Name:
                                                    </label>
                                                </div>
                                                <div className="w-2/3">
                                                    <input
                                                        onChange={event=>{
                                                            setBooking({...booking, firstName: event.target.value})
                                                        }}
                                                        value={booking.firstName}
                                                        className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                        id="inline-first-name" type="text" />
                                                </div>
                                            </div>



                                            <div className="flex items-center mb-6">
                                                <div className="w-1/3">
                                                    <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                           htmlFor="inline-last-name">
                                                        Last Name:
                                                    </label>
                                                </div>
                                                <div className="w-2/3">
                                                    <input
                                                        onChange={event=>{
                                                            setBooking({...booking, lastName: event.target.value})
                                                        }}
                                                        value={booking.lastName}
                                                        className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                        id="inline-last-name" type="text" />
                                                </div>
                                            </div>


                                            <div className="flex items-center mb-6">
                                                <div className="w-1/3">
                                                    <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                           htmlFor="inline-primary-contact">
                                                        Primary Contact :
                                                    </label>
                                                </div>
                                                <div className="w-2/3">
                                                    <input
                                                        onChange={event=>{
                                                            setBooking({...booking, primaryContact: event.target.value})
                                                        }}
                                                        value={booking.primaryContact}
                                                        className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                        id="inline-primary-contact" type="text" />
                                                </div>
                                            </div>


                                            <div className="flex items-center mb-6">
                                                <div className="w-1/3">
                                                    <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                           htmlFor="inline-mobile">
                                                        Mobile:
                                                    </label>
                                                </div>
                                                <div className="w-2/3">
                                                    <input
                                                        onChange={event=>{
                                                            setBooking({...booking, mobile: event.target.value})
                                                        }}
                                                        value={booking.mobile}
                                                        className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                        id="inline-mobile" type="text" />
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
                                                            setBooking({...booking, email: event.target.value})
                                                        }}
                                                        value={booking.email}
                                                        className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                        id="inline-email" type="email" />
                                                </div>
                                            </div>

                                            <div className="flex items-center mb-6">
                                                <div className="w-1/3">
                                                    <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                           htmlFor="inline-address">
                                                        Address:
                                                    </label>
                                                </div>
                                                <div className="w-2/3">
                                                <textarea
                                                    onChange={event=>{
                                                        setBooking({...booking, address: event.target.value})
                                                    }}
                                                    value={booking.address}
                                                    className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                    id="inline-address" type="text" />
                                            </div>
                                        </div>

                                            <div className="flex items-center mb-6">
                                                <div className="w-1/3">
                                                    <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                           htmlFor="inline-city">
                                                        City/Town:
                                                    </label>
                                                </div>
                                                <div className="w-2/3">
                                                    <input
                                                        onChange={event=>{
                                                            setBooking({...booking, city: event.target.value})
                                                        }}
                                                        value={booking.city}
                                                        className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                        id="inline-city" type="text" />
                                                </div>
                                            </div>


                                            <div className="flex items-center mb-6">
                                                <div className="w-1/3">
                                                    <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                           htmlFor="inline-postcode">
                                                        Postcode/Zip:
                                                    </label>
                                                </div>
                                                <div className="w-2/3">
                                                    <input
                                                        onChange={event=>{
                                                            setBooking({...booking, postCode: event.target.value})
                                                        }}
                                                        value={booking.postCode}
                                                        className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                        id="inline-postcode" type="text" />
                                                </div>
                                            </div>


                                            <div className="flex items-center mb-6">
                                                <div className="w-1/3">
                                                    <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                           htmlFor="inline-country">
                                                        Country:
                                                    </label>
                                                </div>
                                                <div className="w-2/3">
                                                    <input
                                                        onChange={event=>{
                                                            setBooking({...booking, country: event.target.value})
                                                        }}
                                                        value={booking.country}
                                                        className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                        id="inline-country" type="text" />
                                                </div>
                                            </div>


                                            <div className="flex items-center mb-6">
                                                <div className="w-1/3">
                                                    <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                           htmlFor="inline-nationality">
                                                        Nationality:
                                                    </label>
                                                </div>
                                                <div className="w-2/3">
                                                    <input
                                                        onChange={event=>{
                                                            setBooking({...booking, nationality: event.target.value})
                                                        }}
                                                        value={booking.nationality}
                                                        className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                        id="inline-nationality" type="text" />
                                                </div>
                                            </div>
                                        </div>


                                        {/*<----------------------------------------------------------Hotel Information--------------------------------->*/}
                                        <div className={'md:w-1/3 w-full md:pl-10 pl-2'}>
                                            <>
                                                {
                                                    contact.loading?
                                                        <>
                                                            <div className={'md:w-3/5 mx-auto bg-white'}>
                                                                <Skeleton className={'h-32 w-full'}/>
                                                            </div>
                                                            <div className={'md:w-3/5 mx-auto bg-white'}>
                                                                <Skeleton className={'h-32 w-full'}/>
                                                            </div>
                                                            <div className={'md:w-3/5 mx-auto bg-white'}>
                                                                <Skeleton className={'h-32 w-full'}/>
                                                            </div>

                                                        </>:
                                                        <>
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
                                                        </>
                                                }
                                            </>

                                        </div>
{/*<----------------------------------------------------------Hotel Information End--------------------------------->*/}
                                    </div>
{/*<-------------------------------------------------------------Personal Information End------------------------------->*/}


{/*<----------------------------------------Reservation Details Start------------------------------------------------------>*/}
                                    <div className={'md:w-2/3 w-full mt-4 md:px-0 px-2'}>
                                        <h4 className={'text-blue-900 text-xl'}>Reservation Details</h4>
                                        <div className="flex items-center mb-6">
                                            <div className="w-1/3">
                                                <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                       htmlFor="inline-roomType">
                                                    Room/Suite Type:
                                                </label>
                                            </div>
                                            <div className="w-2/3">
                                                <select
                                                    onChange={event=>{
                                                        setBooking({...booking, roomType: event.target.value})
                                                    }}
                                                    value={booking.roomType}
                                                    className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                    id="inline-first-roomType" type="text">
                                                <option>Selected Room/suite </option>
                                                <option>Regular - Sea Side</option>
                                                <option>Deluxe-Sea Side</option>
                                                <option>Deluxe-Hil Side</option>
                                                </select>
                                            </div>
                                        </div>



                                        <div className="flex items-center mb-6">
                                            <div className="w-1/3">
                                                <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                       htmlFor="inline-room-number">
                                                    Number of room/suite:
                                                </label>
                                            </div>
                                            <div className="w-2/3">
                                                <select
                                                    onChange={event=>{
                                                        setBooking({...booking, numberOfRooms: event.target.value})
                                                    }}
                                                    value={booking.numberOfRooms}
                                                    className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                    id="inline-room-number" type="text">
                                                <option>1 </option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>

                                                </select>
                                            </div>
                                        </div>


                                        <div className="flex items-center mb-6">
                                            <div className="w-1/3">
                                                <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                       htmlFor="inline-children">
                                                    Number of Children :
                                                </label>
                                            </div>
                                            <div className="w-2/3">
                                                <select
                                                    onChange={event=>{
                                                        setBooking({...booking, numberOfChildren: event.target.value})
                                                    }}
                                                    value={booking.numberOfChildren}
                                                    className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                    id="inline-children" type="text" >
                                                    <option>0</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>

                                                </select>
                                            </div>
                                        </div>



                                        <div className="flex items-center mb-6">
                                            <div className="w-1/3">
                                                <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                       htmlFor="inline-request">
                                                    Any special request:
                                                </label>
                                            </div>
                                            <div className="w-2/3">
                                <textarea
                                    onChange={event=>{
                                        setBooking({...booking, request: event.target.value})
                                    }}
                                    value={booking.request}
                                    className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                    id="inline-request" type="text" />
                                            </div>
                                        </div>

                                        <div className="flex items-center mb-6">
                                            <div className="w-1/3">
                                                <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                       htmlFor="inline-check-date">
                                                    Check-in Date:
                                                </label>
                                            </div>
                                            <div className="w-2/3">
                                                <input
                                                    onChange={event=>{
                                                        setBooking({...booking, checkedIn: event.target.value})
                                                    }}
                                                    value={booking.checkedIn}
                                                    className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                    id="inline-check-date" type="date" />
                                            </div>
                                        </div>


                                        <div className="flex items-center mb-6">
                                            <div className="w-1/3">
                                                <label className="block text-sm text-white-500 md:text-left mb-1 md:mb-0 pr-4"
                                                       htmlFor="inline-check-out">
                                                    Check-out Date:
                                                </label>
                                            </div>
                                            <div className="w-2/3">
                                                <input
                                                    onChange={event=>{
                                                        setBooking({...booking, checkedOut: event.target.value})
                                                    }}
                                                    value={booking.checkedOut}
                                                    className="bg-white  border border  w-full py-2 text-sm px-4 text-gray-900 leading-tight focus:outline-none  focus:bg-white focus:border-purple-500"
                                                    id="inline-check-out" type="date" />
                                            </div>
                                        </div>
{/*<--------------------------------------------------Reservation Details End--------------------->*/}



{/*<--------------------------------------------------Reservation Submit------------------------------->*/}
                                        <div className="flex items-center pb-10">
                                            <div className="w-1/3">

                                            </div>
                                            <div className="w-2/3">
                                                <button
                                                    onClick={reservationBooking}
                                                    className="bg-transparent hover:bg-blue-700 text-gray-700 text-sm hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent">
                                                    Book Online
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
    );
};

export default Reservation;