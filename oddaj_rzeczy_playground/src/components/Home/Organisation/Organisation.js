import React,{Component} from 'react';
import "./Organisation.scss"


class Organisation extends Component{
    state={
        foundation:false,
        organisation:false,
        local:false,
        border:"",
        border1:"",
        border2:"",
        border3:""

    }
    handleOnButtonFoundation=()=>{
        this.setState({border1:"buttonBorder",border2:"",border3:""})
    }
    handleOnButtonOrganisation=()=>{
        this.setState({border2:"buttonBorder",border1:"",border3:""})
    }
    handleOnButtonLocal=()=>{
        this.setState({border3:"buttonBorder",border1:"",border2:""})
    }
    render() {
        return(
            <div name="Organisation" className={"organisation container"}>
                <section className={"whoWeHelp"}>
                    <span>Komu pomagamy?</span>
                    <div className={"deco"}></div>
                    <div className={"whoWeHelpButton"} >
                        <button className={this.state.border1} onClick={this.handleOnButtonFoundation}>Fundacjom</button>
                        <button className={this.state.border2} onClick={this.handleOnButtonOrganisation}>Organizacjom<br/> pozarządowym</button>
                        <button className={this.state.border3} onClick={this.handleOnButtonLocal}>Lokalnym<br/>zbiórkom</button>
                    </div>
                    <span className={"whoWeHelpText"}>Nori grape silver beet broccoli kombu beet greans fava bean potato quandong celery . Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip</span>
                </section>
            </div>
        )
    }
}


export default Organisation;