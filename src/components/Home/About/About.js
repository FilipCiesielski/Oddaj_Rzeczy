import React, {Component} from 'react';
import "./About.scss"

class About extends Component {
    render() {
        return (
            <div name="About" className={"about container"}>
                <div className={"aboutArticle"}>
                    <span>O nas</span>
                    <div className={"deco"}></div>
                    <p>Nori grape silver beet broccoli kombu beet greans fava bean potato quandong celery .
                        Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <div className={"signature"}></div>
                </div>
                <div className={"aboutPhoto"}></div>


            </div>
        )
    }
}


export default About;