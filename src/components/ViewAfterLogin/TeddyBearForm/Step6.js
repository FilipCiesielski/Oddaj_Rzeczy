import React, {Component} from 'react';
import "./Step6.scss"


class Step6 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className={"teddyBearForm"}>
                <div className={"teddyBearForm__backgroundPhoto"}>
                    <div className={"teddyBearForm__goodbye"}>
                        <h1>
                            Dziękujemy za przesłanie formularza.<br/>
                            Na maila wyślemy wszelkie<br/>
                            informacje o odbiorze.
                        </h1>
                        <div className={"teddyBearForm__goodbye__decorations"}></div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Step6
