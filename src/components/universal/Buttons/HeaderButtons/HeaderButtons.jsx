import s from "./HeaderButtons.module.scss"
import { Link } from "react-router-dom";
import React from "react";
const HeaderButtons = (props) => {
    return (
        <div className={s.buttons}>
                        <Link className={s.btn}>Login</Link>
						<Link className={`${s.btn} ${s.blue}`}>Sign up</Link>
        </div>
      );
}
 
export default HeaderButtons;