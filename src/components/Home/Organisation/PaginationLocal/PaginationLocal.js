import React,{Component} from 'react';



class PaginationLocal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            local: [
                {title: '"Lorem Ipsum 1"', mission: "Risus in hendrerit gravida rutrum quisque.", givenAway: "Sinto, prendo, questa"},
                {title: '"Lorem Ipsum 2"', mission: "Ultricies mi eget mauris pharetra et ultrices.", givenAway: "Bento, vintre, sed"},
                {title: '"Lorem Ipsum 3"', mission: "Sed ullamcorper morbi tincidunt ornare massa eget.", givenAway: "Questas, bonevto, sintas"}
            ],
            currentPage: 1,
            foundationPerPage: 3,
            border1: "borderButton",
            border2: "",
            border3: ""
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, index) {
        this.setState({currentPage: Number(e.target.id)});
        console.log(e, index);
        if (index === 1) {
            this.setState({border1: "borderButton", border2: "", border3: ""});
        } else if (index === 2) {
            this.setState({border1: "", border2: "borderButton", border3: ""});
        } else if (index === 3) {
            this.setState({border1: "", border2: "", border3: "borderButton"});
        }
    }

    render() {
        const {local, currentPage, foundationPerPage} = this.state;
        const indexOfLastFoundation = currentPage * foundationPerPage;
        const indexOfFirstFoundation = indexOfLastFoundation - foundationPerPage;
        const currentFoundations = local.slice(indexOfFirstFoundation, indexOfLastFoundation);
        const renderLocal = currentFoundations.map((local, index) => {
            return (
                <ul key={index} className="foundationInfo">
                    <li><h3>Zbiórka {local.title}</h3> <p>Cel i misja: {local.mission}</p></li>
                    <span>{local.givenAway}</span>
                </ul>
            )
        });
        return (
            <>
                {renderLocal}
                <div className="buttons">
                    <button id={1} className={this.state.border1} onClick={(e) => this.handleClick(e, 1)}>1</button>
                </div>
            </>
        )
    }
}

export default PaginationLocal;