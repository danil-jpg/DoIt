import React from "react";
import s from "./AboutUs.module.scss"
import { abouteData } from "../../../store/store";
import AboutInfo from "./AboutInfo/AboutInfo";
import Container from "../../containers/Container/Container";
const AboutUs = (props) => {
    return ( 
        <div className={s.main}>
            <Container>
            <AboutInfo
                title={abouteData.title.aboute}
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
 
export default AboutUs;