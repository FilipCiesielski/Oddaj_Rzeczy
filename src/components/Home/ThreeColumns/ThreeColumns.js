import React, {Component} from 'react';
import "./ThreeColumns.scss"

class ThreeColumns extends Component {
    render() {
        return (
            <div name="ThreeColumns" className={"threeColumns"}>
                <article>
                    <span>10</span>
                    <h4>ODDANYCH WORKÓW</h4>
                    <p>Lorem ipsum dolor sit amet tellus. Integer mi ligula, elementum dui. In hac habitasse platea
                        dictumst. Nam.</p>
                </article>
                <article>
                    <span>10</span>
                    <h4>WSPARTYCH ORGANIZACJI</h4>
                    <p>Lorem ipsum dolor sit amet tellus. Integer mi ligula, elementum dui. In hac habitasse platea
                        dictumst. Nam.</p>
                </article>
                <article>
                    <span>10</span>
                    <h4>ZORGANIZOWANYCH ZBIÓREK</h4>
                    <p>Lorem ipsum dolor sit amet tellus. Integer mi ligula, elementum dui. In hac habitasse platea
                        dictumst. Nam.</p>
                </article>
            </div>
        )
    }
}


export default ThreeColumns;