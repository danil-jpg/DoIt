import React from "react";
import Container from "../../containers/Container/Container";
import FAQsAccordion from "./FAQsAccordion/FAQsAccordion";
import s from "./FAQs.module.scss"
import FAQDropdown from "./FAQDropdown/FAQDropdown";
import FAQsItem from "./FAQsItem/FAQsItem";
import { faqData } from "../../../store/store";
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
                            <div className={s.left__items}>
                            <FAQsItem text={faqData.item.item1}/>
                            <FAQsItem text={faqData.item.item2}/>
                            <FAQsItem text={faqData.item.item3}/>
                            <FAQsItem text={faqData.item.item4}/>
                            <FAQsItem text={faqData.item.item5}/>
                            <FAQsItem text={faqData.item.item6}/>
                            <FAQsItem text={faqData.item.item7}/>
                            <FAQsItem text={faqData.item.item7}/>
                            </div>
                        </div>
                    </div>
                    <div className={`${s.main__right} ${s.right}`}>
                        <div className={s.right__top}>
                           <input className={s.right__input} type="text" placeholder="How can we help you?" />
                           <img className={s.right__icon} src={faqData.icon.loupeIcon} alt="icon" />
                        </div>
                        <div className={s.right__bottom}>
                            <div className={s.right__accordion}>
                                <FAQsAccordion title={faqData.descrTitle.descrTitle1} descr={faqData.descr.descr1}/>
                                <FAQsAccordion title={faqData.descrTitle.descrTitle2} descr={faqData.descr.descr1}/>
                                <FAQsAccordion title={faqData.descrTitle.descrTitle3} descr={faqData.descr.descr1}/>
                                <FAQsAccordion title={faqData.descrTitle.descrTitle1} descr={faqData.descr.descr1}/>
                                <FAQsAccordion title={faqData.descrTitle.descrTitle2} descr={faqData.descr.descr1}/>
                                <FAQsAccordion title={faqData.descrTitle.descrTitle3} descr={faqData.descr.descr1}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
     );
}
 
export default FAQs;