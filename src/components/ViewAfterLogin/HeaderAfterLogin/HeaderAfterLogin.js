import React, {Component} from 'react';
import "./HeaderAfterLogin.scss"

import NavigationAfterLogin from "../../Navigation/NavigationAfterLogin";


class HeaderAfterLogin extends Component{
    render() {
        return(
            <div name="oddaj-rzeczy" className={"headerAfterLogin"}>

                <div className={"headerAfterLogin__backgroundPhoto"}></div>
                <div className={"headerAfterLogin__main"}><NavigationAfterLogin/>
                    <div className={"headerAfterLogin__main__article"}>
                        <article>
                            <p>Oddaj rzeczy, których już nie chcesz <br/>POTRZEBUJĄCYM</p>
                        </article>
                        <div className={"headerAfterLogin__main__decorations"}></div>
                        <section>
                            <span>Wystarzczą 4 proste kroki:</span>
                            <div className={"headerAfterLogin__main__square"}>
                                <div className={"headerAfterLogin__main__square--item"}><span>1</span><p>Wybierz<br/>rzeczy</p></div>
                                <div className={"headerAfterLogin__main__square--item"}><span>2</span><p>Spakuj je<br/>w worki</p></div>
                                <div className={"headerAfterLogin__main__square--item"}><span>3</span><p>Wybierz<br/>fundację</p></div>
                                <div className={"headerAfterLogin__main__square--item"}><span>4</span><p>Zamów<br/>kuriera</p></div>
                            </div>

                        </section>

                    </div>
                </div>
            </div>
        )
    }
}
export default HeaderAfterLogin