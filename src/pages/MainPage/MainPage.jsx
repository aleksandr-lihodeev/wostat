import React, {useEffect, useState} from 'react';
import cls from './MainPage.module.scss'
import {Header} from "../../widgets";
import {Link} from "react-router-dom";
import {MyButton} from "../../shared";
import {ReactComponent as Burger} from "../../shared/assets/svg/burger-menu.svg";
import {ReactComponent as DiscoverLink} from "../../shared/assets/svg/discover-link.svg";
import DiscoverDashboard from '../../shared/assets/img/mockup-discover.png'
import DiscoverDashboardLg from '../../shared/assets/img/mockup-discover-lg.png'
import DiscoverDashboardXl from '../../shared/assets/img/mockup-discover-xl.png'
import DiscoverDashboardSm from '../../shared/assets/img/mockup-discover-sm.png'
import TeamImage from '../../shared/assets/img/team.png'
import {ReactComponent as OpenZeppelin} from "../../shared/assets/svg/partners-openZeppelin.svg";
import {ReactComponent as Oracle} from "../../shared/assets/svg/partners-oracle.svg";
import {ReactComponent as Morpheus} from "../../shared/assets/svg/partners-morpheus.svg";
import {ReactComponent as Samsung} from "../../shared/assets/svg/partners-samsung.svg";
import {ReactComponent as Monday} from "../../shared/assets/svg/partners-monday.svg";
import {ReactComponent as Segment} from "../../shared/assets/svg/partners-segment.svg";
import {ReactComponent as Protonet} from "../../shared/assets/svg/partners-protonet.svg";

import {directionsOfDataCollection} from "../../shared/lib/config";


const MainPage = () => {
    const [isOpen, setOpen] = useState(true)

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
        <>
            <section className={cls.MainPage}>
                <Header classes={'main__header'}>
                    <p className={cls.main__header__logo}>WOSTAT <span className={cls.main__header__point}>.</span></p>
                    <div className={cls.main__header__wrap}>
                        <nav className={`${cls.main__header__nav} ${isOpen ? cls.main__header__nav__active : ''}`}>
                            <ul className={cls.main__header__list}>
                                <li className={cls.main__header__item}>
                                    <Link to={'/'}>About</Link>
                                </li>
                                <li className={cls.main__header__item}>
                                    <Link to={'/'}>Product</Link>
                                </li>
                                <li className={cls.main__header__item}>
                                    <Link to={'/'}>Researches</Link>
                                </li>
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
                        <p className={cls.main__title}>Whoever owns the information owns the world</p>
                        <p className={cls.main__subtitle}>statistics and research that will give you an advantage</p>
                        <MyButton classes={'main__content__btn'}>
                            Price
                        </MyButton>
                    </main>
                </div>
            </section>
            <section className={cls.discover__block}>
                <div className={`${windowWidth <= 768 ? '' : 'container'}`}>
                    <div className={cls.discover__wrap}>
                        <div className={`${windowWidth <= 768 ? 'container' : ''}`}>

                            <div className={cls.discover__info}>
                                <p className={cls.discover__title}>Discover new horizons</p>
                                <p className={cls.discover__subtitle}><span>WOSTAT</span> is a leading organization
                                    specializing in
                                    computing
                                    statistics across the Internet and
                                    conducting research.
                                </p>
                                <p className={cls.discover__subtitle}> We have a variety of data collection methods,
                                    including
                                    monitoring network traffic,
                                    analyzing
                                    search queries, studying social media, as well as using specialized algorithms and
                                    tools.</p>
                                <div className={cls.discover__link__btn}>
                                    <a href="#" className={cls.discover__link}>Learn more </a>
                                    <DiscoverLink className={cls.discover__link__icon}/>
                                </div>
                            </div>
                        </div>

                        <div className="discover__dashboard">
                            <img
                                className={cls.discover__bgc}
                                src={
                                    windowWidth <= 992
                                        ? DiscoverDashboardLg
                                        : windowWidth <= 768
                                            ? DiscoverDashboardXl
                                            : windowWidth <= 576
                                                ? DiscoverDashboardSm
                                                : DiscoverDashboard
                                }
                                alt="mockup"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={cls.team}>
                <div className={`${windowWidth <= 768 ? '' : 'container'}`}>
                    <div className={cls.team__wrap}>
                        <img src={TeamImage} alt="team image"/>

                        <div className={`${windowWidth <= 768 ? 'container' : ''}`}>
                            <div className={cls.team__wrap__block}>
                                <p className={cls.team__title}>Team, this is the most valuable</p>
                                <p className={cls.team__subtitle}>The WOSTAT team is a cohesive and highly qualified
                                    group of experts united by common
                                    goals and the desire to provide customers with the highest level of service. Each
                                    member
                                    of the team makes a unique contribution and has a professional skill in their
                                    field.</p>
                                <div className={cls.team__link__btn}>
                                    <a href="#" className={cls.team__link}>Job openings</a>
                                    <DiscoverLink className={cls.team__link__icon}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cls.partners}>
                <div className="container">
                    <p>Over 200+ partners</p>
                    <div className={cls.partners__icons}>
                        {windowWidth <= 992 ? (
                            <>
                                <div className={cls.partners__mediaWidthFirst}>
                                    <OpenZeppelin/>
                                    <Oracle/>
                                    <Morpheus/>
                                    <Samsung/>
                                </div>
                                <div className={cls.partners__mediaWidthSecond}>
                                    <Monday/>
                                    <Segment/>
                                    <Protonet/>
                                </div>
                            </>
                        ) : (
                            <>
                                <OpenZeppelin/>
                                <Oracle/>
                                <Morpheus/>
                                <Samsung/>
                                <Monday/>
                                <Segment/>
                                <Protonet/>
                            </>
                        )}


                    </div>
                </div>
            </section>

            <section className={cls.dataCollection}>
                <div className="container">
                    <p className={cls.dataCollection__title}>Directions of data collection</p>

                    <div className={cls.dataCollection__cardWrap}>
                        {directionsOfDataCollection.map((element) => {
                            return (
                                <>
                                    <div className={cls.dataCollection__card}>
                                        {element.ico}
                                        <div className={cls.dataCollection__cardInfo}>
                                            <p className={cls.cardInfo__title}>{element.title}</p>
                                            <p className={cls.cardInfo__descr}>{element.descr}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>



                </div>
            </section>
        </>


    );
};

export default MainPage;
