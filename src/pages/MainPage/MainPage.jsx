import React from 'react';
import './style.scss';

export const MainPage = () => {
    return (
        <main className="main">
            <section className="landing-section">
                <div className="landing-section__overlay"></div>
                <h1 className="h1">
                    Найдем исполнителя для решения Вашей задачи!
                </h1>
                <p className="landing-section__p">
                    Под руководством опытных наставников сфере IT, молодые
                    специалисты работают над Вашим проектом
                </p>
                <div className="landing-section__buttons">
                    <button className="button">СТАТЬ наставником</button>
                    <button className="button landing-section__button_active">
                        РАЗМЕСТИТЬ заказ
                    </button>
                    <button className="button">СТАТЬ студентом</button>
                </div>
            </section>
            <section className="popular-services">
                <h2 className="popular-services__title">
                    Популярные услуги в Апреле
                </h2>
                <div className="main-carousel slider">
                    <div className="carousel-cell">
                        <img
                            src="./media/slide.png"
                            alt=""
                            className="slider__img"
                        ></img>
                    </div>
                    <div className="carousel-cell">
                        <img
                            src="./media/slide.png"
                            alt=""
                            className="slider__img"
                        ></img>
                    </div>
                    <div className="carousel-cell">
                        <img
                            src="./media/slide.png"
                            alt=""
                            className="slider__img"
                        ></img>
                    </div>
                    <div className="carousel-cell">
                        <img
                            src="./media/slide.png"
                            alt=""
                            className="slider__img"
                        ></img>
                    </div>
                </div>
                <button className="button popular-services__button">
                    ЗАКАЗАТЬ УСЛУГУ
                </button>
            </section>
            <section className="work">
                <div className="work__p">
                    В Вашем регионе работают 4 578 специалистов, ещё <br></br>
                    23 478 готовы помочь дистанционно
                </div>
                <a href="" className="work__button">
                    создать заказ
                </a>
            </section>
            <section className="last">
                <div className="row">
                    <div className="last__column">
                        <img
                            src="./media/last-bg.png"
                            alt=""
                            className="last__bg"
                        ></img>
                        <img
                            src="./media/last-img.png"
                            alt=""
                            className="last__img"
                        ></img>
                    </div>
                    <div className="last__column">
                        <h2 className="last__title">
                            Последние размещенные
                            <span className="green-text">Задания:</span>
                        </h2>
                        <div className="question">
                            <h3 className="question__title">
                                Разработать дизайн Landing Page
                            </h3>
                            <div className="question__row">
                                <div className="question__time">
                                    Срок до:
                                    <span className="green-text">
                                        05.04.2021
                                    </span>
                                </div>
                                <div className="question__cost">
                                    Стоимость:
                                    <span className="green-text">
                                        договорная
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="question">
                            <h3 className="question__title">
                                Разработать дизайн Landing Page
                            </h3>
                            <div className="question__row">
                                <div className="question__time">
                                    Срок до:{' '}
                                    <span className="green-text">
                                        05.04.2021
                                    </span>
                                </div>
                                <div className="question__cost">
                                    Стоимость:{' '}
                                    <span className="green-text">
                                        договорная
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <button className="last__button work__button">
                            стать наставником
                        </button>
                    </div>
                </div>
            </section>
            <section className="call-to-action question__row">
                <div className="call-to-action__left column">
                    <h3 className="call-to-action__title">Для заказчиков</h3>
                    <p className="call-to-action__p">
                        Теперь вы знаете про FIRST CASE. Выбор за вами.
                        Разместите задание и проверьте, как всё работает. Это
                        быстро и бесплатно.
                    </p>
                    <button className="last__button work__button">
                        Создать заказ
                    </button>
                </div>
                <div className="call-to-action__right column">
                    <h3 className="call-to-action__title">Для наставников</h3>
                    <p className="call-to-action__p">
                        Вы обучаете студентов, с практическим уконом.
                        Подготовленых студенов направляете на решение кейсов
                        клиентов, под Вашим бдительным контролем.
                    </p>
                    <button className="last__button  button">
                        СТАТЬ наставником
                    </button>
                </div>
            </section>
            <section className="beginners">
                <div className="beginners__overlay"></div>
                <div className="beginners__inner">
                    <h3 className="call-to-action__title">
                        Для начинающих в сфере IT
                    </h3>
                    <p className="call-to-action__p">
                        Если Вы делаете первые шаги в сфере IT и уже имеете
                        теоретические навыки, однако испытываете трудности в
                        получении правктических навков, наш сервис для Вас.
                        Регистрируйтесь, выберайте для себя ментора, обучайтесь,
                        делайте первые проекты под руководством наставника.
                    </p>
                    <button className="button">СТАТЬ студентом</button>
                </div>
            </section>
        </main>
    );
};
