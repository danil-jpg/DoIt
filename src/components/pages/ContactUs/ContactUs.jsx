import React from "react";
import s from "./ContactUs.module.scss"
import { abouteData } from "../../../store/store";
import AboutInfo from "../AboutUs/AboutInfo/AboutInfo";
import Container from "../../containers/Container/Container";
const ContactUs = (props) => {
    return ( 
        <div className={s.main}>
            <Container>
            <AboutInfo
                title={abouteData.title.contact}
                icon__location={abouteData.icon.locationIcon}
                descr={abouteData.descr.location}
                icon__phone={abouteData.icon.phoneIcon}
                phone={abouteData.descr.phoneNumber}
                icon__mail={abouteData.icon.mailIcon}
                mail1={abouteData.mail.support}
                mail2={abouteData.mail.organizer}
                mail3={abouteData.mail.spon}
                />
            </Container>
        </div>
     );
}
 
export default ContactUs;