import React, {Component} from 'react';
import "./Step3.scss"


class Step3 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.button)
        return (
            <section className={"teddyBearForm"}>
                <div className={"teddyBearForm__info"}>
                    <div>
                        <h2>Ważne!</h2>
                        <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też
                            filtrować
                            organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                    </div>
                </div>
                <div className={"teddyBearForm__backgroundPhoto"}>
                    <span className={"teddyBearForm__numberOfSteps"}>Krok 3/4</span>
                    <div className={"teddyBearForm__box"}>
                        <h2>Lokalizacja:</h2>

                            <div className={"teddyBearForm__box__checkbox"}>
                                <select value={this.props.valueOptionCity} onChange={this.props.handleOnChangeCity}>
                                    <option value="" disabled hidden>-wybierz-</option>
                                    <option value="Poznań">Poznań</option>
                                    <option value="Warszawa">Warszawa</option>
                                    <option value="Kraków">Kraków</option>
                                    <option value="Wrocław">Wrocław</option>
                                    <option value="Katowice">Katowice</option>
                                </select>

                                    <h4>Komu chcesz pomóc?</h4>

                                    <div className={"teddyBearForm__box_checkbox__items"}>
                                        <div className={"teddyBearForm__box_checkbox--options"}>
                                            <input onChange={this.props.handleOnChangeCheckbox} id="lists1"
                                                   type="checkbox"
                                                   value={"dzieciom"} name="lists"/>
                                            <label htmlFor="lists1">dzieciom</label>

                                            <input onChange={this.props.handleOnChangeCheckbox} id="lists2"
                                                   type="checkbox"
                                                   value={"samotnym matkom"} name="lists"/>
                                            <label htmlFor="lists2">samotnym matkom</label>

                                            <input onChange={this.props.handleOnChangeCheckbox} id="lists3"
                                                   type="checkbox"
                                                   value={"bezdomnym"} name="list"/>
                                            <label htmlFor="lists3">bezdomnym</label>

                                            <input onChange={this.props.handleOnChangeCheckbox} id="lists4"
                                                   type="checkbox"
                                                   value={"niepełnosprawnym"} name="lists"/>
                                            <label htmlFor="lists4">niepełnosprawnym</label>

                                            <input onChange={this.props.handleOnChangeCheckbox} id="lists5"
                                                   type="checkbox"
                                                   value={"osobom starszym"} name="lists"/>

                                            <label htmlFor="lists5">osobom starszym</label>
                                        </div>
                                        <h6>*zaznacz powyżej</h6>
                                    </div>


                        </div>
                        <div className={"teddyBearForm__buttons"}>
                            <input onClick={this.props.handleButtonPrev} type={"button"} value='Wstecz'/>
                            <input onClick={this.props.handleButtonNext} type={"button"} value='Dalej'
                                   disabled={this.props.button}/>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Step3
