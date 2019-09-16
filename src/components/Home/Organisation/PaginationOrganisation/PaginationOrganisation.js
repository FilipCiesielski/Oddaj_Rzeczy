import React,{Component} from 'react';



class PaginationOrganisation extends Component {


        constructor(props) {
            super(props);
            this.state = {
                organisation: [
                    {
                        title: "Lorem Ipsum1",
                        mission: "Lorem ipsum dolor sit amet quam. Maecenas quam elit metus.",
                        givenAway: "Lorem ipsum dolor sit. "
                    },
                    {
                        title: "Lorem Ipsum2",
                        mission: "Lorem ipsum dolor sit amet magna. Fusce in consequat et.",
                        givenAway: "Lorem ipsum dolor sit."
                    },
                    {
                        title: "Lorem Ipsum3",
                        mission: "Lorem ipsum dolor sit amet quam at libero. Nam turpis.",
                        givenAway: "Lorem ipsum dolor sit."
                    },
                    {
                        title: "Lorem Ipsum4",
                        mission: "Lorem ipsum dolor sit amet quam. Maecenas quam elit metus.",
                        givenAway: "Lorem ipsum dolor sit. "
                    },
                    {
                        title: "Lorem Ipsum5",
                        mission: "Lorem ipsum dolor sit amet magna. Fusce in consequat et.",
                        givenAway: "Lorem ipsum dolor sit."
                    },
                    {
                        title: "Lorem Ipsum6",
                        mission: "Lorem ipsum dolor sit amet quam at libero. Nam turpis.",
                        givenAway: "Lorem ipsum dolor sit."
                    },
                    {
                        title: "Lorem Ipsum1",
                        mission: "Lorem ipsum dolor sit amet quam. Maecenas quam elit metus.",
                        givenAway: "Lorem ipsum dolor sit. "
                    },
                    {
                        title: "Lorem Ipsum2",
                        mission: "Lorem ipsum dolor sit amet magna. Fusce in consequat et.",
                        givenAway: "Lorem ipsum dolor sit."
                    },
                    {
                        title: "Lorem Ipsum3",
                        mission: "Lorem ipsum dolor sit amet quam at libero. Nam turpis.",
                        givenAway: "Lorem ipsum dolor sit."
                    },
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
            const {organisation, currentPage, foundationPerPage} = this.state;
            const indexOfLastFoundation = currentPage * foundationPerPage;
            const indexOfFirstFoundation = indexOfLastFoundation - foundationPerPage;
            const currentFoundations = organisation.slice(indexOfFirstFoundation, indexOfLastFoundation);
            const renderOrganisation = currentFoundations.map((organisation, index) => {
                return (
                    <ul key={index} className="foundationInfo">
                        <li><h3>Organizacja {organisation.title}</h3> <p>Cel i misja: {organisation.mission}</p></li>
                        <span>{organisation.givenAway}</span>
                    </ul>
                )
            });
            return (
                <>
                    {renderOrganisation}
                    <div className="buttons">
                        <button id={1} className={this.state.border1} onClick={(e) => this.handleClick(e, 1)}>1</button>
                        <button id={2} className={this.state.border2} onClick={(e) => this.handleClick(e, 2)}>2</button>
                                  </div>
                </>
            )
        }
    }

export default PaginationOrganisation;