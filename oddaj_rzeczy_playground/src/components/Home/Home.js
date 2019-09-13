import React,{Component} from 'react';
import "./Home.scss"
import Header from "./Header/Header";
import ThreeColumns from "./ThreeColumns/ThreeColumns";
import About from "./About/About";
import FourSteps from "./FourSteps/FourSteps";
import Contact from "./Contact/Contact";
import Organisation from "./Organisation/Organisation";

class Home extends Component{
    render() {
        return(
            <>
            <Header/>
            <ThreeColumns/>
            <FourSteps/>
            <About/>
            <Organisation/>
            <Contact/>
            </>
                    )
    }
}


export default Home;