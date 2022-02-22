
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

function App() {
  return (
      <div className="App">
          <Header/>
          <Switch>
              <Route exact path={"/"} component={Home}/>
              <Route path={"/about"} component={About}/>
              <Route path={"/reservation"} component={Reservation}/>
              <Route path={"/login"} component={Login}/>
              <Route path={"/contact"} component={Contact}/>
              <Route path={"/service"} component={Catering}/>
              <Route path={"/gallery"} component={Myphoto}/>
              <Route path={"/signup"} component={SignUp}/>

          </Switch>
          <Footer/>
      </div>


  );
}

export default App;
