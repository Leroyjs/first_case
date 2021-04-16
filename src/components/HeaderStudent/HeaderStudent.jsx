import './style.scss';
import React from 'react';
import logo from './logo.png';
import linkImg from './link-img.png';
import { Link } from 'react-router-dom';

export const HeaderStudent = () => {
    return (
        <header className="header-student">
            <img src={logo} alt="" className="logo header-student__logo" />
            <nav className="header-student__links">
                <ul className="header-student__links-ul">
                    <li className="header-student__link">
                        <Link to="/message" className="">
                            <img src={linkImg} alt="" className="" />
                            СООБЩЕНИЯ
                        </Link>
                    </li>
                    <li className="header-student__link">
                        <Link to="/message" className="">
                            <img src={linkImg} alt="" className="" />
                            СООБЩЕНИЯ
                        </Link>
                    </li>
                    <li className="header-student__link">
                        <Link to="/message" className="">
                            <img src={linkImg} alt="" className="" />
                            СООБЩЕНИЯ
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
