import React, {Component} from 'react';
import "./Organisation.scss"
import PaginationFoundation from "./PaginationFoundation/PaginationFoundation";
import PaginationOrganisation from "./PaginationOrganisation/PaginationOrganisation";
import PaginationLocal from "./PaginationLocal/PaginationLocal";

const spanFundation = <p className={"selectText"}>Nori grape silver beet broccoli kombu beet greans fava bean potato
    quandong celery. Nori grape silver beet broccoli kombu beet greans fava bean potato quandong celery . </p>;
const spanOrganisation = <p className={"selectText"}>Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens
    parsnip. Nori grape silver beet broccoli kombu beet greans fava bean potato quandong celery .</p>;
const spanLocal = <p className={"selectText"}>Bunya nuts black-eyed pea. Nori grape silver beet broccoli kombu. Nori
    grape silver beet broccoli kombu beet greans fava bean potato quandong celery . </p>;

class Organisation extends Component {
    state = {
        foundation: true,
        organisation: false,
        local: false,
        border: "",
        border1: "buttonBorder",
        border2: "",
        border3: ""

    }
    handleOnButtonFoundation = () => {
        this.setState({
            border1: "buttonBorder",
            border2: "",
            border3: "",
            foundation: true,
            organisation: false,
            local: false
        })
    }
    handleOnButtonOrganisation = () => {
        this.setState({
            border2: "buttonBorder",
            border1: "",
            border3: "",
            foundation: false,
            organisation: true,
            local: false
        })
    }
    handleOnButtonLocal = () => {
        this.setState({
            border3: "buttonBorder",
            border1: "",
            border2: "",
            foundation: false,
            organisation: false,
            local: true
        })
    }

    render() {

        return (
            <div name="Organisation" className={"organisation container"}>
                <section className={"whoWeHelp"}>
                    <span>Komu pomagamy?</span>
                    <div className={"deco"}></div>
                    <div className={"whoWeHelpButton"}>
                        <button className={this.state.border1} onClick={this.handleOnButtonFoundation}>Fundacjom
                        </button>
                        <button className={this.state.border2}
                                onClick={this.handleOnButtonOrganisation}>Organizacjom<br/> pozarządowym
                        </button>
                        <button className={this.state.border3} onClick={this.handleOnButtonLocal}>Lokalnym<br/>zbiórkom
                        </button>
                    </div>

                    {this.state.foundation && spanFundation}
                    {this.state.organisation && spanOrganisation}
                    {this.state.local && spanLocal}
                </section>
                <div className="foot">
                    <div>
                        {this.state.foundation && <PaginationFoundation/>}
                    </div>
                    <div>
                        {this.state.organisation && <PaginationOrganisation/>}
                    </div>
                    <div>
                        {this.state.local && <PaginationLocal/>}
                    </div>

                </div>

            </div>
        )
    }
}


export default Organisation;