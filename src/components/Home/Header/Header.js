import React,{Component} from 'react';
import "./Header.scss"
import Navigation from "../../Navigation/Navigation";
import {Link, NavLink} from "react-router-dom";

class Header extends Component{
    render() {
        const styleButton={
        color:"grey"
        }
        return(
            <>

         <div name="Header" className={"header"}>

          <div className={"background"}></div>
            <div className={"main"}><Navigation/>
              <div className={"home"}>
                  <article>
                  <p>Zacznij pomagać!</p>
                  <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                  </article>
                 <div className={"deco"}></div>
                  <section>
                      <button><NavLink activeStyle={styleButton} to={"/logowanie"}>ODDAJ<br/> RZECZY</NavLink></button>
                      <button><NavLink activeStyle={styleButton} to={"/logowanie"}>ZORGANIZUJ<br/>ZBÓRKĘ</NavLink></button>
                  </section>
              </div>
          </div>
         </div>
                </>
    )
    }
}


export default Header;