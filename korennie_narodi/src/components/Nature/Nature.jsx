import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import line from './../../images/line.jpg';
import landscape1 from './../../images/landscape1-nature.jpg';
import landscape1_mobile from './../../images/landscape1-nature-mobile.jpg';
import landscape2 from './../../images/landscape2-nature.jpg';
import landscape3 from './../../images/landscape3-nature.jpg';
import pine_trees from './../../images/pine-trees.jpg';
import deer from './../../images/deer.jpg';
import exchange from './../../images/exchange.jpg';
import ritual from './../../images/ritual.jpg';
import child from './../../images/yakut-two-wolves.jpg';
import './Nature.css';

function Nature() {
  return (
    <>
      <Header/>
      <div className='nature-sec1'>
        <div className='nature-sec1-inner'>
          <div className='title-nature'>
            <p>взаимодействие коренных народов России с природой</p>
          </div>
          <div className='line-nature'>
            <img src={line} alt="" />
          </div>
          <div>
            <img src={landscape1} alt="" />
            <img src={landscape1_mobile} alt="" />
          </div>
          <div className='text-nature'>
            <p>Изучив академические работы по сравнительным  исследованиям коренных народов, мы постарались с разных сторон раскрыть опыт сохранения природы  коренных жителей России.</p>
          </div>
          <div className="line-nature">
            <img src={line} alt="" />
          </div>
        </div>
      </div>
      <div className='nature-sec2'>
        <div className="nature-sec2-inner">
          <div className='text-main-nature'>
            <div className='title-nature'>
              <p>экологическая справедливость эмансипация природы</p>
            </div>
            <div className="text-nature">
              <p>Экологическая справедливость - признание прав<br/>нечеловеческих акторов, в частности природного мира<br/>во всем его многообразии, как полноправного субъекта<br/>политических и экономических отношений.</p>
            </div>
            <div className="text-nature">
              <p>Отдельные принципы экологической<br/>справедливости уже давно выполняются.<br/>Заповедники и природоохранные зоны с<br/>особым статусом, законодательные<br/>запреты на вылов рыбы в определенное<br/>время и на определенной территории,<br/>Красная книга, на животных которой<br/>нельзя охотиться, - все это не что иное, как<br/>отдельные имплементации принципов<br/>экологической справедливости.</p>
            </div>
            <div className='img1-nature'>
              <img src={landscape2} alt="" />
            </div>
            <div className='img2-nature'>
              <img src={landscape3} alt="" />
            </div>
          </div>
          <div className='text-nature sec2-p'>
            <p>Несмотря на вышеперечисленные примеры законодательных ограничений, признание прав природы происходит лишь в тех границах, которые затрагивают жизнедеятельность человека. Исследователи отмечают, что даже сам термин “окружающая среда”, который мы часто используем, когда говорим о защите природы, подразумевает лишь ту часть природы, которая непосредственно “окружает” человека и в сохранении которой он непосредственно заинтересован, так как несохранение - ведет к угрозе ему самому.</p>
          </div>
          <div className='text-nature sec2-p'>
            <p>Природный мир должен стать полноправным партнером в отношениях с человеком, а перестать быть объектом нещадной эксплуатации. Эмансипация природы - вот цель, которая описывается экологической справедливостью.</p>
          </div>
          <div className="line-nature">
            <img src={line} alt="" />
          </div>
        </div>
      </div>
      <div className='nature-sec3'>
        <div className="nature-sec3-inner">
          <div className='title-nature'>
            <p>принципы отношений между коренными народами и природой</p>
          </div>
          <div className="text-nature text1-sec3And4-nature">
            <p>Опыт коренных народов, проживающих на территории России,<br/>- важнейшая кладезь актуальных экологических практик,<br/>способных сделать наше будущее более устойчивым, а<br/>природу более защищенной.</p>
          </div>
          <div className="text-nature text2-sec3-nature">
            <div>
              <p>Брать только то, что нужно, и только, когда нужно</p>
            </div>
            <p>Невозможно представить жителей любого коренного народа, уничтожающих лес, который дает кислород, или убивающих животных, исключительно потому, что опять поднялась цена на шубы.</p>
          </div>
          <div className='img1-nature'>
            <img src={exchange} alt="" />
          </div>
          <div  className='img2-nature'>
            <img src={child} alt="" />
          </div>




          <div className='img3-4-sec3-nature'>
            <div className='img3-nature'>
              <img src={deer} alt="" />
            </div>
            <div className='img4-nature'>
              <img src={pine_trees} alt="" />
            </div>
          </div>


          <div className='flex-bottom-text-sec3-nature'>
            <div className='p-sec3-nature'>
              <div>
                <div className="text-nature">
                  <p>Если что-то берешь у природы - используй до конца</p>
                </div>
                <p>Коренные народы России в большинстве своем проживают на Севере России, где ресурсы ограничены. Именно поэтому за века люди в этих суровых краях научились использовать все доступные дары природы.</p>
              </div>
              <div className="text-nature">
                <div>
                  <p>Природа - священное место</p>
                </div>
                <p>Жизнь коренных народов была веками переплетена с дикой природой, поэтому природные практики стали неотделимы от религиозных.</p>
              </div>
            </div>  
          </div>

          <div className='img3-4-sec3-nature-mobile'> 
            <div className='img3-nature'>
              <img src={deer} alt="" />
            </div>
            <div className='img4-nature'>
              <img src={pine_trees} alt="" />
            </div>
          </div>


          <div className="line-nature">
            <img src={line} alt="" />
          </div>


        </div>
      </div>
      <div className="nature-sec4">
        <div className="nature-sec4-inner">
          <div className='title-nature'>
            <p>мудрость народов - мир с окружающей средой</p>
          </div>
          <div className='flex-sec4-nature'>
            
            <div className="text1-sec3And4-nature-mobile">
              <p>Многовековая связь с окружающим эко-ландшафтом позволяют коренным народам более сбалансированно реагировать на экологические кризисы.</p>
            </div>

            <div className='img1-nature'>
              <img src={ritual} alt="" />
            </div>
            <div className='common-p-sec4-nature'>
              <div className="text-nature text1-sec3And4-nature block-hide">
                <p>Многовековая связь с окружающим эко-ландшафтом позволяют коренным народам более сбалансированно реагировать на экологические кризисы.</p>
              </div>
              <div className="text-nature">
                <p>При использовании водных и земельных ресурсов коренные народы экологичнее, чем другие сообщества. Это связано с тем, что традиционные методы хозяйствования коренных жителей ориентированы на нетоварную добычу ресурсов</p>
              </div>
              <div className="text-nature">
                <p>Мировоззрение коренных народов неразрывно связано с землей предков, поэтому они не могут допустить, чтобы их детям земля досталась пораженная химикатами и бедная ресурсами. Коренные народы осознали, что необходимо планировать использование ресурсов в долгосрочной перспективе и помогать экологии восстанавливаться, если она пострадала от деятельности человека.</p>
              </div>
            </div>
          </div>
          <div className="line-nature">
            <img src={line} alt="" />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Nature;
