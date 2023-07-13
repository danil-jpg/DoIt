import React from "react";
import s from "./NotFoundPage.module.scss"

const NotFoundPage = (props) => {
    return (
        <div className={s.main}>
            <div className={s.main__wrapper}>
                <div className={s.main__block}>
                    <div className={s.main__left}>
                        <span className={s.main__title}>Are you lost? <br /> Please back to the game!</span>
                    </div>
                    <div className={s.main__right}>
                        <span className={s.main__number}>404</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;
