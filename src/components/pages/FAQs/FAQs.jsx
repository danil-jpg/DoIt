import React from "react";
import Container from "../../containers/Container/Container";
import FAQsAccordion from "./FAQsAccordion/FAQsAccordion";
import s from "./FAQs.module.scss"
import FAQDropdown from "./FAQDropdown/FAQDropdown";

const FAQs = (props) => {

    return ( 
        <div className={s.main}>
            <Container>
                <div className={s.main__wrapper}>
                    <div className={`${s.main__left} ${s.left}`}>
                        <div className={s.left__top}>
                           <FAQDropdown/> 
                        </div>
                        <div className={s.left__bottom}>

                        </div>
                    </div>
                    <div className={s.main__right}>

                    </div>
                </div>
            </Container>
        </div>
     );
}
 
export default FAQs;