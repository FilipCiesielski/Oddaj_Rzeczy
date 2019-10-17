import React, {Component} from 'react';
import "./TeddyBearForm.scss"


class Step3 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.button)
        return (
            <section className={"teddyForm"}>
                <div className={"yellowInfo"}>
                    <div>
                        <h2>Ważne!</h2>
                        <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też
                            filtrować
                            organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                    </div>
                </div>
                <div className={"teddyBackground"}>
                    <span>Krok 3/4</span>
                    <div className={"stepsForm"}>
                        <h2>Lokalizacja:</h2>
                        <div className={"bags"}>
                            <div className={"optionSelect"}>
                                <select value={this.props.valueOptionCity} onChange={this.props.handleOnChangeCity}>
                                    <option value="" disabled hidden>-wybierz-</option>
                                    <option value="Poznań">Poznań</option>
                                    <option value="Warszawa">Warszawa</option>
                                    <option value="Kraków">Kraków</option>
                                    <option value="Wrocław">Wrocław</option>
                                    <option value="Katowice">Katowice</option>
                                </select>
                                <div className={"optionBrick"}>
                                    <h4>Komu chcesz pomóc?</h4>
                                    <div className={"brick"}>
                                        <div className={"go"}>
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
                                    </div>
                                </div>
                                <h4>Wpisz nazwę konkretnej organizacji(opcjonalnie)</h4>
                                <input onChange={this.props.handleOnChange} type={"text"} name={"organisation"}/>
                            </div>
                        </div>
                        <div className={"bagsButtons"}>
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
