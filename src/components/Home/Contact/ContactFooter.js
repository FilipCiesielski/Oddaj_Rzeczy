import React,{Component} from 'react';
import "./ContactFooter.scss"

class ContactFooter extends Component{
    render() {
        return(
            <footer className={"contact__footer"}>
                <div className={"contact__copyrightText"}>Copyright by Coders Lab</div>
                <div className={"contact__logos"}>
                <div className={"contact__facebookLogo"}></div>
                <div className={"contact__instagramLogo"}></div>
                </div>

            </footer>
        )
    }

}


export default ContactFooter;