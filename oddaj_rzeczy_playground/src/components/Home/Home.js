import React,{Component} from 'react';
import "./Home.scss"
import Header from "./Header/Header";
import ThreeColumns from "./ThreeColumns/ThreeColumns";
import About from "./About/About";
import Organisation from "./Organisation/Organisation";
import Contact from "./Contact/Contact";

class Home extends Component{
    render() {
        return(
            <>
            <Header/>
            <ThreeColumns/>
            <Organisation/>
            <About/>
            <Contact/>
            </>
                    )
    }
}


export default Home;