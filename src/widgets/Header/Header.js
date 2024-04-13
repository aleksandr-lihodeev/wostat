import React from 'react';
import cls from './Header.module.scss'
import {MyButton, MyLogo} from "../../shared";
import {Link} from "react-router-dom";
import {ReactComponent as Burger} from "../../shared/assets/svg/burger-menu.svg";
import {ReactComponent as BurgerDark} from "../../shared/assets/svg/burger-menu-dark.svg";

const Header = ({state, setState, dark}) => {
    return (
        <header>
            <div className="container">
                <div className={`${cls.Header} ${cls.main__header}`}>
                    <MyLogo dark={dark}/>
                    <div className={cls.main__header__wrap}>
                        <nav className={`${cls.main__header__nav} ${state ? cls.main__header__nav__active : ''}`}>
                            <ul className={cls.main__header__list}>
                                <li className={cls.main__header__item}>
                                    <Link to={'/about'}
                                          className={dark ? cls.header__link_dark : cls.header__link_light}>About</Link>
                                </li>
                                <li className={cls.main__header__item}>
                                    <Link to={'/'}
                                          className={dark ? cls.header__link_dark : cls.header__link_light}>Product</Link>
                                </li>
                                <li className={cls.main__header__item}>
                                    <Link to={'/research'}
                                          className={dark ? cls.header__link_dark : cls.header__link_light}>Researches</Link>
                                </li>
                            </ul>
                        </nav>

                        <MyButton classes={'main__header__btn'}>
                            Price
                        </MyButton>
                    </div>
                    {dark
                        ? <BurgerDark className={cls.main__burgerMenu} onClick={() => setState(!state)}/>
                        : <Burger className={cls.main__burgerMenu} onClick={() => setState(!state)}/>}
                </div>
            </div>
        </header>
    );
};

export default Header;
