import React, {useEffect, useState} from 'react';
import cls from "./Footer.module.scss";
import {MyButton, MyInput, MyLogo} from "../../shared";
import {Link} from "react-router-dom";

function Footer() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <footer className={cls.footer}>
            <div className="container">
                <div className={cls.footer__wrap}>

                    <div className={cls.footer__logo}>
                        <MyLogo/>
                        <p className={cls.footer__logo__subtitle}>Whoever owns the information owns the world.</p>
                    </div>

                    <div className={cls.footer__input}>
                        <p>Stay up to date with the news</p>
                        <MyInput classes={'footer__input'} placeholder={'Email'} type={'text'}/>
                        <MyButton classes={'footer__btn'}>Subscribe</MyButton>
                    </div>

                    {windowWidth <= 992 ? (
                        <>
                            <div className={cls.footer__contacts}>
                                <h3>Contact Us</h3>
                                <p>info@wostat.com</p>
                            </div>
                            <div className={cls.footer__company}>
                                <h3>Company</h3>
                                <nav>
                                    <ul>
                                        <li>
                                            <Link to={'/about'}>About</Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}>Price</Link>
                                        </li>
                                        <li>
                                            <Link to={'/research'}>Research</Link>
                                        </li>
                                        <li>
                                            <Link to={'/vacancy'}>Job</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </>


                    ) : (
                        <div className={cls.footer__companyContacts}>
                            <div className={cls.footer__company}>
                                <h3>Company</h3>
                                <nav>
                                    <ul>
                                        <li>
                                            <Link to={'/about'}>About</Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}>Price</Link>
                                        </li>
                                        <li>
                                            <Link to={'/research'}>Research</Link>
                                        </li>
                                        <li>
                                            <Link to={'/vacancy'}>Job</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className={cls.footer__contacts}>
                                <h3>Contact Us</h3>
                                <p>info@wostat.com</p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </footer>
    );
}

export default Footer;
