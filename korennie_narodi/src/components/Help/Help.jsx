import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import line from './../../images/line.jpg';
import './Help.css';
import lenobl from "../../images/len-obl.png";
import pribaikal from "../../images/pribaikal.png";
import sever from "../../images/sever.png";
import forest from "../../images/Rectangle 4934.png"
import laptop from "../../images/Rectangle 4932.png"
import mobile from "../../images/Rectangle 4935.png"
import dalnVostok from "../../images/daln-vostok.png"
import mamont from "../../images/eff-mamonta.png"
import arctika from "../../images/dobrov-arktiki.png"
import {NavLink} from "react-router-dom";


function Help() {
    return (
        <>
            <Header/>
            <div className="help">
                <div className="line-bottom">
                    <div className="title-help">
                        <p>помощь коренным народам</p>
                    </div>
                </div>
                <div className='help-sec1'>
                    <div className='help-container border-none'>
                        <img className='image-help' src={lenobl} alt="" />
                        <p className='text-help'> <NavLink className="href-text" to="https://vk.com/tsentr_korennyh_narodov_lo">Центр коренных народов Ленинградской области</NavLink> &mdash; культурно-просветительский центр, созданный с целью сохранения и развития культуры коренных народов Ленинградской области (ижоры, води, ингерманландских финнов, вепсов и тихвинских карел).</p>
                    </div>
                    <div className='help-container border-none border-top-none'>
                        <img className='image-help' src={pribaikal} alt="" />
                        <p className='text-help'><NavLink className="href-text" to="https://vk.com/news_etno">Центр культуры коренных народов Прибайкалья</NavLink> &mdash; центр, созданный с целью возрождения, сохранения и развития традиционной культуры коренных народов Прибайкалья, приобщение к ней жителей, туристов и гостей Иркутской области.</p>
                    </div>
                    <div className='help-container border-none border-right-none'>
                        <img className='image-help' src={sever} alt="" />
                        <p className='text-help'><NavLink className="href-text" to="https://vk.com/club312279">Коренные малочисленные народы Севера</NavLink> &mdash; группа посвящена культурным мероприятиям и событиям народов Севера.</p>
                    </div>
                </div>
                <div className="help-sec2">
                    <p className="text-forum"><NavLink className="href-text" to="https://events.myrosmol.ru/forums/rossiyskiy_sever_2023/?ysclid=lucxa0f1kf983533729">Форум молодежи коренных малочисленных народов Севера, Сибири и Дальнего Востока «Российский Север»</NavLink>
                        <br/><br/>Форум проводится с целью создания межнациональной коммуникационной площадки для взаимодействия молодежи и вовлечения активных молодых людей в решение задач, отвечающих современным запросам государства и общества.</p>
                </div>
                <div className="help-sec3">

                    <div className="help-container-2">
                        <img src={dalnVostok} alt="" className="image-help-2"/>
                        <p className='text-help text-size-1'><NavLink className="href-text" to="https://vk.com/club215952633">История коренных народов Дальнего Востока</NavLink>
                            <br/><br/>Группа посвящена истории, религия, быту, культуре коренных народов Дальнего Востока.</p>
                    </div>
                    <div className="help-container-2 reverse-elements">
                        <img src={mamont} alt="" className="image-help-2"/>
                        <p className='text-help text-size-2'><NavLink className="href-text" to="https://mammotheffect.org/">Фонд сохранения и поддержки природного и культурного наследия «Эффект Мамонта»</NavLink>
                            <br/><br/>Фонд объединяет ученых, исследователей, путешественников и представителей творческой сферы для того, чтобы трудиться над сохранением уникального наследия нашей планеты.</p>
                    </div>
                    <div className="help-container-2">
                        <img src={arctika} alt="" className="image-help-2"/>
                        <p className='text-help text-size-3'><NavLink className="href-text" to="https://dobro.ru/project/2024?ysclid=lucy0iwu35590931656">Волонтерский проект "Добровольцы Арктики"</NavLink>
                            <br/><br/>Проект направлен на оказание помощи в документальном сопровождения жителей ЯНАО из числа КМНС (коренных малочисленных народов севера) в рамках социальных программ предусмотренных Законодательством ЯНАО для данной категории граждан.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Help;
