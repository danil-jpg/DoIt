import Container from "../../containers/Container/Container";
import React from "react";
import s from "./Home.module.scss"
const Home = (props) => {
    return ( 
        <div className={s.main}>
            <div className={s.main__wrapper}>
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci maiores illum provident ipsum, quis dolores accusantium ab natus repellendus quidem amet quo doloremque assumenda consequuntur earum, quod voluptate aperiam iusto!</h1>
            </div>
        </div>
     );
}
 
export default Home;