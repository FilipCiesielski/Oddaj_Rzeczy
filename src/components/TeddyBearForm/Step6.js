import React, {Component} from 'react';
import "./TeddyBearForm.scss"


class Step6 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className={"teddyForm"}>
                <div className={"teddyBackground"}>
                    <div className={"outro"}>
                        <h1>
                            Dziękujemy za przesłanie formularza.<br/>
                            Na maila wyślemy wszelkie<br/>
                            informacje o odbiorze.
                        </h1>
                        <div className={"deco"}></div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Step6
