import React from 'react';
import Header from "../Header/header";
import Footer from "../Footer/footer";
import line from "../../images/line.jpg";
import './Problems.css'
import janschwalde from "../../images/janschwalde-power-plant-germany 1.png"
import icefall from "../../images/icefall.png"
import trash from "../../images/trash-sand-beach-showing-environmental-pollution-problem 2.png"
import dance from "../../images/dancing-people.png"
import shamans from "../../images/shamans.png"
import river from "../../images/river.png"
import mountains from "../../images/mountains.png"


function Problems() {
    return (
        <>
            <Header/>
            <section className="problems-intro">
                <div className="title-problems">
                    <p>проблемы коренных народов россии</p>
                </div>
                <div className='line-problems'>
                    <img src={line} alt=""/>
                </div>
            </section>
            <section className="problems-climate">
                <div className='line-problems'>
                    <img src={line} alt=""/>
                </div>
                <div className="climate-container">
                    <div className="box problems-box-1_1">
                        <h2 className="title-problems">климатическая и экологическая угроза</h2>
                        <p className="text-problems">Более богатые сообщества с более стабильными институциональными структурами меньше страдают
                            от
                            глобальных проблем,
                            таких как потепление и загрязнение пластиком. Однако, наиболее уязвимыми группами внутри
                            этих
                            сообществ часто оказываются коренные жители,
                            которые привержены традиционным способам жизни и испытывают сложности из-за изменений в
                            экологическом ландшафте.
                            Например, таяние вечной мерзлоты в Северной России вызывает выбросы метана и делает
                            невозможным
                            хозяйственную деятельность,
                            охоту и рыболовство для коренных народов.</p>
                    </div>
                    <div className="problems-box-1_2">
                        <img className="janschwalde" src={janschwalde} alt=""/>
                        <img className="icefall" src={icefall} alt=""/>
                        <img className="trash" src={trash} alt=""/>
                    </div>
                </div>
            </section>
            <section className="problems-languages">
                <div className='line-problems'>
                    <img src={line} alt=""/>
                </div>
                <div className="language-container">
                    <div className="problems-box-2_1">
                        <img className="dance" src={dance} alt=""/>
                        <img className="shamans" src={shamans} alt=""/>
                    </div>
                    <div className="box problems-box-2_2">
                        <h2 className="title-problems">угроза языкам</h2>
                        <p className="text-problems">Демографическая проблема имеет серьезные последствия для культур и языков коренных
                            меньшинств.
                            В России за последние 100 лет исчезли 15 языков малочисленных народов, 10 из которых - за
                            последние 35 лет.
                            В настоящее время около 10% из полутора сотен языков народов России находятся на грани
                            исчезновения,
                            а более 60% приближаются к этой опасной черте. Эта проблема распространена не только в
                            России, но и по всему миру.
                            Преподавание языков коренных меньшинств в школах также является сложной задачей, особенно
                            из-за урбанизации и доминирующей роли русского языка.
                            Разговаривать на своем языке - важная часть идентичности народа, поэтому вымирание языков
                            влечет за собой потерю культурных ценностей.
                        </p>
                    </div>
                </div>
            </section>
            <section className="problems-fpic">
                <div className='line-problems'>
                    <img src={line} alt=""/>
                </div>
            </section>
            <section className="problems-fpic-cases">
                <div className='line-problems'>
                    <img src={line} alt=""/>
                </div>
                <div className="fpic-container-1">
                    <div className="problems-box-4_1">
                        <img src={river} alt=""/>
                    </div>
                    <div className="problems-box-4_2">
                        <div className="fpic-cases-description">
                            <p className="text-problems">Практика принципов СПОС в России остается нерегулярной.
                                Оптимистичный сценарий сахалинского плана можно скорее считать исключением, подтверждающим общее правило: даже сейчас, в 21 веке,
                                после многочисленных докладов и конференций ООН, права коренных народов России нарушаются.
                            </p>
                            <p className="text-problems">Вот лишь несколько кейсов, когда принципы СПОС не были соблюдены:</p>
                        </div>
                        <div className="fpic-cases-mansi">
                            <h3 className="text-problems">Мертвые реки народа Манси.</h3>
                            <p className="text-problems">
                                Мертвые реки такие как (Тальтия, Ивделя, Шегультан и Ольховка) народа манси
                                в Ханты-Мансийском автономном округе и соседних регионах стали непригодны для природопользования
                                из-за загрязнения промышленными выбросами, что препятствует традиционным видам занятий манси,
                                таким как рыболовство, охота и оленеводство.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="fpic-container-2">
                    <div className="problems-box-4_3">
                        <div className="fpic-cases-shorchev">
                            <h3 className="text-problems">Проклятое золото Шорцев.</h3>
                            <p className="text-problems">
                                Шорцы, коренной народ Южной Сибири, проживают в Республике Хакасия и Кемеровской области;
                                их численность составляет около 14 тысяч человек, но с середины 20 века
                                их численность сократилась на 14% из-за разрушения экосистемы и золотодобычи.
                                На территории семи регионов России было выявлено 279 лицензионных участков по добыче золота,
                                представляющих потенциальную угрозу окружающей среде и человеку.<br/><br/>
                                Промышленное освоение исконных территорий шорцев, включая добычу золота и угля, угрожает существованию этого народа,
                                приводя к исчезновению их культуры и языка, вынуждая их покидать свои земли и повреждая уникальное биоразнообразие региона,
                                при этом принципы свободного,
                                предварительного и осознанного согласия не соблюдаются из-за неофициальности многих мест разработки и отсутствия компаний,
                                готовых нести ответственность за нарушения прав шорцев и загрязнение окружающей среды.<br/><br/>
                                Таким образом, соблюдение принципа СПОС - неотъемлемая часть прав коренного населения по всему миру.
                                СПОС не только необходимо для сохранения уникальных культур, языков и методов природопользования коренных народов,
                                но и практический шаг в налаживании отношений с теми группами,  которые дискриминировались веками.
                            </p>
                        </div>
                    </div>
                    <div className="problems-box-4_4">
                        <img src={mountains} alt=""/>
                    </div>
                </div>
            </section>
            <section className="problems-conclusion">
                <div className='line-problems'>
                    <img src={line} alt=""/>
                </div>
                <div className="conclusion">
                    <h2 className="title-problems">Вывод</h2>
                    <p className="text-problems">
                        Несмотря на то, что некоторые компании в России соблюдают требования СПОС,
                        решение о выполнении или невыполнении этого принципа в большинстве случаев остается за самими организациями.
                        При этом, учитывая все временные и денежные затраты, а также право коренных жителей отказаться от проектов на своей земле,
                        частные компании редко находят достаточные основания для ведения переговоров с коренными народами.
                        В результате этого происходит произвол на исторических территориях коренного населения, эксплуатация ресурсов,
                        разрушение уникальных экологических ландшафтов и нарушение прав коренных народов на самоопределение.
                    </p>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Problems;
