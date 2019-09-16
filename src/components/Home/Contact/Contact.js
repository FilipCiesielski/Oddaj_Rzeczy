import React,{Component} from 'react';
import "./Contact.scss"

class Contact extends Component{
   render() {
       return(
           <section name={"Contact"} className={"contact container"}>
                <div className={"contact_form"}>
                    <span className={"contact_header"}>Skontaktuj się z nami</span>
                    <div className={"deco"}></div>
                    <form>
                        <div className={"input_1"}>
                        <label>
                            Wpisz swoje imię:
                        <input type={"text"} name={"name"} placeholder={"Krzysztof"}/>
                        </label>
                        <label>
                            Wpisz swój e-mail:
                            <input type={"email"} name={"email"} placeholder={"abc@gmail.com"}>
                            </input>
                        </label>
                        </div>
                        <div className={"input_2"}>
                            <label>
                                Wpisz swoją wiadomość:
                            <textarea type={"type"} name={"textarea"} placeholder={"Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"}></textarea>
                        </label>
                        </div>
                        </form>
                </div>

           </section>
       )
   }

}


export default Contact;