import React, {Component} from 'react';
import "./HeaderAfterLogin.scss"

import NavigationAfterLogin from "../Navigation/NavigationAfterLogin";


class HeaderAfterLogin extends Component{
    render() {
        return(
            <div name="oddaj-rzeczy" className={"header2"}>

                <div className={"background2"}></div>
                <div className={"main2"}><NavigationAfterLogin/>
                    <div className={"home2"}>
                        <article>
                            <p>Oddaj rzeczy, których już nie chcesz <br/>POTRZEBUJĄCYM</p>
                        </article>
                        <div className={"deco"}></div>
                        <section>
                            <span>Wystarzczą 4 proste kroki:</span>
                            <div className={"kickContainer"}>
                                <div className={"kickQ"}><span>1</span><p>Wybierz<br/>rzeczy</p></div>
                                <div className={"kickQ"}><span>2</span><p>Spakuj je<br/>w worki</p></div>
                                <div className={"kickQ"}><span>3</span><p>Wybierz<br/>fundację</p></div>
                                <div className={"kickQ"}><span>4</span><p>Zamów<br/>kuriera</p></div>
                            </div>

                        </section>

                    </div>
                </div>
            </div>
        )
    }
}
export default HeaderAfterLogin