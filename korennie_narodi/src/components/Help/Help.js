import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import line from './../../images/line.jpg';
import './Help.css';
import lenobl from "../../images/len-obl.png";
import pribaikal from "../../images/pribaikal.png";
import sever from "../../images/sever.png";
import forest from "../../images/Rectangle 4934.png"
import dalnVostok from "../../images/daln-vostok.png"
import mamont from "../../images/eff-mamonta.png"
import arctika from "../../images/dobrov-arktiki.png"
import vector from "../../images/Vector 452.png"


function Help() {
    return (
        <>
            <Header/>
            <div className="help">
                <div className="title-help">
                    <p>помощь коренным народам</p>
                </div>
                <div className='line-div'>
                    <img src={line} alt="" />
                    <img src={line} alt="" />
                </div>
                <div className='help-sec1'>
                    <div className='help-box border-none'>
                        <img className='image-help' src={lenobl} alt="" />
                        <p className='text-help'> Центр коренных народов Ленинградской области  культурно-просветительский центр, созданный с целью сохранения и развития культуры коренных народов Ленинградской области (ижоры, води, ингерманландских финнов, вепсов и тихвинских карел).</p>
                    </div>
                    <div className='help-box border-none border-top-none'>
                        <img className='image-help' src={pribaikal} alt="" />
                        <p className='text-help'>Центр культуры коренных народов Прибайкалья  центр, созданный с целью возрождения, сохранения и развития традиционной культуры коренных народов Прибайкалья, приобщение к ней жителей, туристов и гостей Иркутской области.</p>
                    </div>
                    <div className='help-box border-none border-right-none'>
                        <img className='image-help' src={sever} alt="" />
                        <p className='text-help'>Коренные малочисленные народы Севера      группа посвящена культурным мероприятиям и событиям народов Севера. </p>
                    </div>
                </div>
                <div className="help-sec2">
                    <div className="conatiner1">
                        <p className="text-forum">Форум молодежи коренных малочисленных народов Севера, Сибири и Дальнего Востока «Российский Север»
                            <br/><br/>Форум проводится с целью создания межнациональной коммуникационной площадки для взаимодействия молодежи и вовлечения активных молодых людей в решение задач, отвечающих современным запросам государства и общества.</p>
                        <img className="image-forest" src={forest} alt=""/>

                    </div>
                </div>
                <div className="help-sec3">

                    <div className="help-box-2 box-padding">
                        <img src={dalnVostok} alt="" className="image-help-2"/>
                        <p className='text-help text-size-1'>История коренных народов Дальнего Востока
                            <br/><br/>Группа посвящена истории, религия, быту, культуре коренных народов Дальнего Востока.</p>
                    </div>
                    <div className="help-box-2 reverse-elements">
                        <img src={mamont} alt="" className="image-help-2"/>
                        <p className='text-help text-size-2'>Фонд сохранения и поддержки природного и культурного наследия «Эффект Мамонта»
                            <br/><br/>Фонд объединяет ученых, исследователей, путешественников и представителей творческой сферы для того, чтобы трудиться над сохранением уникального наследия нашей планеты.</p>
                    </div>
                    <div className="help-box-2 box-padding">
                        <img src={arctika} alt="" className="image-help-2"/>
                        <p className='text-help text-size-3'>Волонтерский проект "Добровольцы Арктики"
                            <br/><br/>Проект направлен на оказание помощи в документальном сопровождения жителей ЯНАО из числа КМНС (коренных малочисленных народов севера) в рамках социальных программ предусмотренных Законодательством ЯНАО для данной категории граждан.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Help;
