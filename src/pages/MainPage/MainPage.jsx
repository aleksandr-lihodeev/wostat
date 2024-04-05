import React, {useState} from 'react';
import cls from './MainPage.module.scss'
import {Header} from "../../widgets";
import {Link} from "react-router-dom";
import {MyButton} from "../../shared";
import {ReactComponent as Burger} from "../../shared/assets/svg/burger-menu.svg";

const MainPage = () => {

    const [isOpen,setOpen] = useState(true)

    console.log(isOpen)

    return (
        <section className={cls.MainPage}>
            <Header classes={'main__header'}>
                <p className={cls.main__header__logo}>WOSTAT <span className={cls.main__header__point}>.</span></p>
                <div className={cls.main__header__wrap}>
                    <nav className={`${cls.main__header__nav} ${isOpen ? cls.main__header__nav__active : ''}`}>
                        <ul className={cls.main__header__list}>
                            <li className={cls.main__header__item}><Link>About</Link></li>
                            <li className={cls.main__header__item}><Link>Product</Link></li>
                            <li className={cls.main__header__item}><Link>Researches</Link></li>
                        </ul>
                    </nav>

                    <MyButton classes={'main__header__btn'}>
                        Price
                    </MyButton>
                </div>
                <MyButton state={isOpen} setState={setOpen} classes={'main__header__burger'}><Burger/></MyButton>
            </Header>
            <div className="container">
                <main>
                    <p className={cls.main__title}>Whoever owns the  information owns the  world</p>
                    <p className={cls.main__subtitle}>statistics and research that will give you an  advantage</p>
                    <MyButton classes={'main__content__btn'}>
                        Price
                    </MyButton>
                </main>
            </div>
        </section>
    );
};

export default MainPage;
