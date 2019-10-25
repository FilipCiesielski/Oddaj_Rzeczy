import React, {Component} from 'react';
import "./About.scss"

class About extends Component {
    render() {
        return (
            <div name="About" className={"about"}>
                <div className={"about__article"}>
                    <span>O nas</span>
                    <div className={"about__article__decorations"}></div>
                    <p>Nori grape silver beet broccoli kombu beet greans fava bean potato quandong celery .
                        Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <div className={"about__article__signature"}></div>
                </div>
                <div className={"about__peoplePhoto"}></div>


            </div>
        )
    }
}


export default About;