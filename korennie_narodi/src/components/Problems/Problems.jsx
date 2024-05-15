import React from 'react';
import line from "../../images/line.jpg";
import './Problems.css'
import power_germany from "../../images/power-plant-germany.png"
import icefall from "../../images/icefall.png"
import trash from "../../images/trash.png"
import dance from "../../images/dancing-people.png"
import shamans from "../../images/shamans.png"
import river from "../../images/river.png"
import mountains from "../../images/mountains.png"
import map from "../../images/problems-map.png"
import sakhalin_logo from "../../images/sakhalin-logo.png"
import sakhalin from "../../images/sakhalin.png"
import sealand from "../../images/sealand.png"
import map_laptop from "../../images/problems-map-laptop.png"
import Header from "../Header/header";
import Footer from "../Footer/footer";
import {useTranslation} from "react-i18next";

function Problems() {
    const { t } = useTranslation();

    return (
        <>
            <Header/>
            <div className="title-header title-problems">
                <p>{t('problems')}<br/>{t('russian_peoples')}</p>
            </div>
            <section className="problems-intro">
                <div className="title-problems title-intro">
                    <p>{t('economic_inequality')}</p>
                </div>
                <img srcSet={`${map} 1900w, ${map_laptop} 1500w`} alt=""/>
            </section>
            <section className="problems-climate">
                <div className="climate-container">
                    <div className="box problems-box-1_1">
                        <h2 className="title-problems">{t('climatic_threat')}</h2>
                        <p className="text-problems">{t('climatic_threat_text')}</p>
                    </div>
                    <div className="problems-box-1_2">
                        <img className="power_germany" srcSet={`${power_germany} 1920w`} alt=""/>
                        <img className="icefall" srcSet={`${icefall} 1920w`} alt=""/>
                        <img className="trash" srcSet={`${trash} 1920w`} alt=""/>
                    </div>
                </div>
            </section>
            <section className="problems-languages">
                <div className="language-container">
                    <div className="problems-box-2_1">
                        <img className="dance" srcSet={`${dance} 1900w`} alt=""></img>
                        <img className="shamans" srcSet={`${shamans} 1900w`} alt=""/>
                    </div>
                    <div className="box problems-box-2_2">
                        <h2 className="title-problems">{t('language_threat')}</h2>
                        <p className="text-problems">{t('language_threat_text')}</p>
                    </div>
                </div>
            </section>
            <section className="problems-fpic">
                <div className="sakhalin-container-1">
                    <div className="problems-box-3_1">
                        <img className="sealand" srcSet={`${sealand} 1920w`} alt=""/>
                    </div>
                    <div className="problems-box-3_2">
                        <h2 className="title-problems">{t('principle_free')}<br/>{t('preliminary_and_conscious')}<br/>{t('agreement')}</h2>
                    </div>
                </div>
                <div className="sakhalin-container-2">
                    <div className="problems-box-3_3">
                        <p className="text-problems">{t('important_step')}<br/><br/>{t('fpic_suppose')}<br/><br/>{t('un_summary')}
                        </p>
                    </div>
                    <div className="problems-box-3_4">
                        <img className="sakhalin" srcSet={`${sakhalin} 1920w`} alt=""/>
                        <img className="sakhalin-logo" srcSet={`${sakhalin_logo} 1920w`} alt=""/>
                    </div>
                </div>
            </section>
            <section className="problems-fpic-cases">
                <div className="fpic-container-1">
                    <div className="problems-box-4_1">
                        <img className="river" srcSet={`${river} 1920w`} alt=""/>
                    </div>
                    <div className="problems-box-4_2">
                        <div className="fpic-cases-description">
                            <p className="text-problems">{t('fpic_section_2')}</p>
                            <p className="text-problems">{t('fpic_cases')}</p>
                        </div>
                        <div className="fpic-cases-mansi">
                            <h3 className="text-problems">{t('dead_rivers')}</h3>
                            <p className="text-problems">{t('dead_rivers_text')}</p>
                        </div>
                    </div>
                </div>
                <div className="fpic-container-2">
                    <div className="problems-box-4_3">
                        <div className="fpic-cases-shorchev">
                            <h3 className="text-problems">{t('damn_gold')}</h3>
                            <p className="text-problems">{t('damn_gold_section_1')}<br/><br/>{t('damn_gold_section_2')}<br/><br/>{t('damn_gold_section_3')}
                            </p>
                        </div>
                    </div>
                    <div className="problems-box-4_4">
                        <img className="mountains" srcSet={`${mountains} 1920w`} alt=""/>
                    </div>
                </div>
            </section>
            <section className="problems-conclusion">
                <div className="conclusion">
                    <h2 className="title-problems">{t('summary')}</h2>
                    <p className="text-problems">{t('summary_text')}</p>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Problems;
