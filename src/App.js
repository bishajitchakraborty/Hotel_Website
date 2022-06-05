import Header from "./pages/header/header";
import {Switch, Route} from "react-router-dom";
import Footer from "./pages/Footer/footer";
import About from "./pages/About/about";
import Reservation from "./pages/Reservation/reservation";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Catering from "./pages/Catering/catering";
import Contact from "./pages/Contact/contact";
import Myphoto from "./pages/Myphoto/Myphoto";
import SignUp from "./pages/SignUp/SignUp";
import 'react-toastify/dist/ReactToastify.css';
import Review from "./pages/Review/review";
import {useEffect, useState} from "react";
import "../src/assets/css/style.css"
import PropagateLoader from "react-spinners/PropagateLoader";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
   useEffect(()=>{
       setLoading(true)
       setTimeout(()=>{
           setLoading(false)
       },2000)
   },[])
  return (
        <div>
            {
                loading?
                    // <ClipLoader color={'#123abc'} className={'items-center'} loading={loading} size={150} />
                    <div className={'pre-loader'}>
                        <PropagateLoader color={'#36D7B7'} loading={loading} size={15} />
                    </div>

                    :
                    <div className="App">
                        <Header/>
                        <Switch>
                            <Route exact path={"/"}  component={Home}/>
                            <Route path={"/about"} component={About}/>
                            <Route path={"/reservation"} component={Reservation}/>
                            <Route path={"/login"} component={Login}/>


                            {/*<Route exact path={"/login"} >*/}
                            {/*    {loggedIn ? <Login/> : <Reservation/>}*/}
                            {/*</Route>*/}
                            {/*<Route exact path={"/reservation"} >*/}
                            {/*    {loggedIn ?  <Login/> : <Reservation/>}*/}
                            {/*</Route>*/}


                            <Route path={"/contact"} component={Contact}/>
                            <Route path={"/catering"} component={Catering}/>
                            <Route path={"/gallery"} component={Myphoto}/>
                            <Route path={"/signup"} component={SignUp}/>
                            <Route path={"/review"} component={Review}/>
                        </Switch>
                        <Footer/>
                    </div>

            }
        </div>


  );
}

export default App;
