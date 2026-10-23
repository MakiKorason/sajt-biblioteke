import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import rumaSlepi from '../../images/rumaSlepi.jpg'
import kulturaZaSve1 from "../../images/kulturaZaSve1.webp";
import kulturaZaSve2 from "../../images/kulturaZaSve2.webp";
import taktilnaTabla from '../../images/taktilnaTabla.jpg'
import AnimatedImage from "../Department/AnimatedImage";

import {
  FaUniversalAccess,
  FaAssistiveListeningSystems,
  FaBraille,
  FaArrowRight,
} from "react-icons/fa";

import {
  GiOpenBook,
  GiBookshelf,
} from "react-icons/gi";

import "./Project.css";


const Project = () => {

  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Helmet>

        <title>
          Пројекти – Култура за све | Библиотека Рума
        </title>

        <meta
          name="description"
          content="Пројекат „Култура за све“ Градске библиотеке у Руми: приступачни садржаји за слепе, слабовиде и особе оштећеног слуха."
        />

        <link
          rel="canonical"
          href="https://www.bibliotekaruma.rs/projekti-biblioteke"
        />

        <meta
          property="og:title"
          content="Пројекти библиотеке – „Култура за све“"
        />

        <meta
          property="og:description"
          content="Сазнајте више о пројектима Градске библиотеке „Атанасије Стојковић“ у Руми који унапређују приступачност културних садржаја."
        />

        <meta
          property="og:url"
          content="https://www.bibliotekaruma.rs/projekti-biblioteke"
        />

        <meta
          property="og:type"
          content="website"
        />


        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Library",

            name:
              'Градска библиотека „Атанасије Стојковић“ Рума',

            url:
              "https://www.bibliotekaruma.rs/projekti-biblioteke",

            address: {
              "@type": "PostalAddress",
              streetAddress: "Главна 114",
              addressLocality: "Рума",
              postalCode: "22400",
              addressCountry: "RS",
            },

            openingHours:
              "Mo-Fr 08:00-20:00, Sa 08:00-13:00",

            telephone:
              "022/490-047",
          })}
        </script>

      </Helmet>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="projects-hero">

        <div className="projects-hero-decoration projects-decoration-left">
          <FaUniversalAccess />
        </div>

        <div className="projects-hero-decoration projects-decoration-right">
          <GiOpenBook />
        </div>


        <Container>

          <div className="projects-hero-content">

            <div className="projects-hero-label">

              <span></span>

              ПРОЈЕКAT БИБЛИОТЕКЕ

              <span></span>

            </div>


            <h1>
              Култура
              <br />
              <em>за све</em>
            </h1>


            <p>
              Културни садржаји доступни свима —
              без препрека, без изузетака.
            </p>

          </div>

        </Container>

      </section>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <Container className="projects-page">


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="projects-intro">

          <div className="projects-eyebrow">

            <span></span>

            ПРИСТУПАЧНОСТ И ИНКЛУЗИЈА

          </div>


          <h2>
            Библиотека која
            <br />
            <em>отвара врата свима.</em>
          </h2>


          <p>
            Пројекати „ЗВУК КУЛТУРЕ“ и „КУЛТУРА ЗА СВЕ“ представљају јачање
            техничких капацитета наше установе како би све
            културне садржаје које планом и програмом
            спроводимо учинили доступним особама са
            инвалидитетом, тачније слепим и слабовидим
            особама, као и особама оштећеног слуха.
          </p>

        </section>


        {/* =====================================================
            INTRO IMAGE + TEXT
        ===================================================== */}

        <section className="projects-feature">

          <Row className="align-items-center g-5">


<Col md={6}>
<div className="projects-image-wrapper">

                <AnimatedImage
                  src={taktilnaTabla}
                  alt="Пројекат Култура за све"
                
                />

                <div className="projects-image-label">

                  <FaUniversalAccess />

                  <span>
                    Приступачност за све
                  </span>

                </div>

              </div><br/></Col>
       

            <Col lg={6}>

              <div className="projects-feature-content">

                <div className="projects-number">
                  01
                </div>


                <div className="projects-eyebrow">

                  <span></span>

                  КУЛТУРА ЗА СВЕ

                </div>


                <h2>
                  Култура не сме
                  <em> имати препреке.</em>
                </h2>


                <p>
              Статистика у свету и код нас показује да 30 % становништва има ослабљен слух и има потребу за
употребом слушних апарата, а проценат се из године у годину повећава. 
                </p>


                <p>
             Добивши повратну
информацију, од стране Међуопштинске организације слепих и слабовидих са седиштем у Руми, о
квалитету културног живота њихових чланова дошли смо на идеју да реализујемо пројекат „Звук
културе“.
                </p>


                <div className="projects-highlight">

                  <FaUniversalAccess />

                  <div>

                    <strong>
                  ИДЕЈНИ ТВОРАЦ ПРОЈЕКТА ЈЕ:
                    </strong>
   ВИШИ БИБЛИОТЕКАР ДРАГАНА ЂОРЂЕВИЋ
                    <span>
              
                    </span>

                  </div>

                </div>

              </div>

            </Col>

          </Row>

        </section>


        {/* =====================================================
            PROJECT ZVUK KULTURE
        ===================================================== */}

        <section className="projects-section">

          <div className="projects-section-heading">

            <div className="projects-number">
              02
            </div>


            <div>

              <div className="projects-eyebrow">

                <span></span>

                2023. ГОДИНА

              </div>


              <h2>
                Пројекат
                <br />
                <em>„Звук културе“</em>
              </h2>

            </div>

          </div>


          <div className="projects-text-block">

            <p>
          Овај пројекат је реализован 2023. године и његов значај препознало је и Министарство
културе Републике Србије, које је исти подржало и чију је реализацију помогло. Захваљујући овим
средствима и средствима локалне самоуправе постављена је тактилна табла на Брајевом писму која
представља архитектонски план наше зграде за слепе и слабовиде особе, као и поставку и инсталацију
индукционе петље за амплификацију говора за особе оштећеног слуха. 
            </p>

<div className="projects-image-wrapper">

                <AnimatedImage
                  src={rumaSlepi}
                  alt="Пројекат Култура за све"
                
                />

                <div className="projects-image-label">

                  <FaUniversalAccess />

                  <span>
                    Приступачност за све
                  </span>

                </div>

              </div><br/>
            <p>
         Реализацијом овог пројекта
Градска библиотека „Атанасије Стојковић“ у Руми постала је прва библиотека у Војводини која
поседује ова два асистативна система, а заједно са приступном рампом наша установа постаје
доступна особама са инвалидитетом и место за све.
            </p>


          </div>


          <div className="projects-assistive-grid">


            <div className="projects-assistive-card">

              <div className="projects-assistive-icon">
                <FaBraille />
              </div>

              <h3>
                Брајево писмо
              </h3>

              <p>
                Тактилна табла са архитектонским планом
                зграде омогућава слепим и слабовидим
                особама лакше сналажење у простору.
              </p>

            </div>


            <div className="projects-assistive-card">

              <div className="projects-assistive-icon">
                <FaAssistiveListeningSystems />
              </div>

              <h3>
                Индукциона петља
              </h3>

              <p>
                Систем за амплификацију говора омогућава
                лакшу комуникацију са особама оштећеног
                слуха.
              </p>

            </div>


            <div className="projects-assistive-card">

              <div className="projects-assistive-icon">
                <FaUniversalAccess />
              </div>

              <h3>
                Приступачност
              </h3>

              <p>
                Комбинација асистивних система и приступне
                рампе библиотеку чини доступнијом свим
                корисницима.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            INDUCTION LOOPS
        ===================================================== */}

        <section className="projects-section projects-section-alt">

          <Row className="align-items-center g-5">

            <Col lg={7}>

              <div className="projects-feature-content">

                <div className="projects-number">
                  03
                </div>


                <div className="projects-eyebrow">

                  <span></span>

                  АСИСТИВНЕ ТЕХНОЛОГИЈЕ

                </div>


                <h2>
                 Пројекат
                  <br />
                  <em>„Култура за све“</em>
                </h2>


                <p>
                Након овог пројекта аплицирали смо са пројектом „КУЛТУРА ЗА СВЕ“, који на неки начин
представља и наставак пројекта „Звук културе“ из претходне године.
Пројекат „КУЛТУРА ЗА СВЕ“ представља набавку и инсталацију још три система инукционе петље
за амплификацију говора и то на одељењима на којима радимо са корисницима у нашој установи, а
то су: Одељење за одрасле, Одељење за децу и Одељење научне и стручне литературе.
                </p>
    <ul className="projects-departments">

                  <li>
                    <FaArrowRight />
                    Одељење за одрасле
                  </li>

                  <li>
                    <FaArrowRight />
                    Одељење за децу
                  </li>

                  <li>
                    <FaArrowRight />
                    Одељење научне и стручне литературе
                  </li>

                </ul> <br/>

              </div>

            </Col>


            <Col lg={5}>

              <div className="projects-side-card">

                <FaAssistiveListeningSystems />

                <span>
                  АСИСТИВНИ СИСТЕМИ
                </span>

                <strong>
                  3
                </strong>

                <p>
                  додатна система индукционих петљи
                  постављена у библиотечким одељењима
                </p>

              </div>

            </Col>

          </Row>

        </section>


        {/* =====================================================
            BRAILLE
        ===================================================== */}

        <section className="projects-section">

          <div className="projects-braille-heading">

            <div className="projects-number">
              04
            </div>


            <div>

              <div className="projects-eyebrow">

                <span></span>

                ДОСТУПНОСТ ИНФОРМАЦИЈА

              </div>


              <h2>
                Тактилне плочице
                <br />
                <em>на Брајевом писму</em>
              </h2>

            </div>

          </div>


          <Row className="align-items-center g-5 mt-2">

            <Col lg={6}>

              <div className="projects-braille-content">

                <p>
              Имплементацијом ових система остварена је лакша комуникација између корисника са оштећењем слуха и запослених у библиотеци. На овај начин особе оштећеног слуха су се охрабриле да самостално и лакше посећују библиотеку, без бојазни да их неко од запослених неће разумети или да ће они остати ускраћени за неку од наших услуга, јер нису разумели све што су запослени у библиотеци рекли.
                </p>


                <p>
           Такође, пројекат је подразумевао и набавку 7 тактилних плочица на Брајевом писму за слепе и слабовиде особе, којима су обележени називи одељења, као и осталих просторија унутар библиотеке како би се они лакше кретали и сналазили у простору. Ове плочице су на истакнутим и лако доступним местима, како би слепе и слабовиде особе додиром лако распознавале где се налазе и куда треба да иду.
                </p>

              </div>

            </Col>


            <Col lg={6}>

              <div className="projects-image-wrapper projects-image-second">

                <AnimatedImage
                  src={kulturaZaSve1}
                  alt="Култура за све – приступачност"
                  className="projects-main-image"
                />
     <div className="projects-image-label">

                  <FaUniversalAccess />

                  <span>
                    Приступачност за све
                  </span>

                </div>
              </div>

            </Col>

          </Row>

        </section>


        {/* =====================================================
            COOPERATION
        ===================================================== */}

        <section className="projects-cooperation">

          <div className="projects-eyebrow">

            <span></span>

            САРАДЊА

            <span></span>

          </div>


          <h2>
            Заједно градимо
            <br />
            <em>приступачнију културу.</em>
          </h2>


          <p>
           Кроз реализацију ова два пројекта, остварили смо лепу сарадњу и са Савезом слепих Војводине и
библиотеком за слепе „Мр Омер Маринков“ из Новог Сада, који су желели да нас подрже. 
          </p>


          <p>
     Свесни
чињенице да смо прва библиотека у Војводини која поседује оба вида ових асистативних помага,
родила се идеја да кроз пројекат „КУЛТУРА ЗА СВЕ“ покушамо да заједничким снагама
одштампамо и проспект о нашој установи на Брајевом писму.
          </p>

        </section>


        {/* =====================================================
            BRAILLE PROSPECT
        ===================================================== */}

        <section className="projects-final-section">

          <div className="projects-number">
            05
          </div>


          <div className="projects-eyebrow">

            <span></span>

            ПРОСПЕКТ НА БРАЈЕВОМ ПИСМУ

          </div>


          <h2>
            Информације доступне
            <br />
            <em>сваком кориснику.</em>
          </h2>


          <p>
            Проспект има 4 странице на Брајевом писму и формата
            је А4. Штампан је у 30 примерака, који су увезани
            спиралом. Овај проспект/информатор штампан је у
            Специјалној библиотеци за слепе „Мр Омер Маринков“
            и пружа основне информације о Градској библиотеци.
          </p>

             <div className="projects-image-wrapper projects-image-second">

                <AnimatedImage
                  src={kulturaZaSve2}
                  alt="Култура за све – приступачност"
                  className="projects-main-image"
                />
     <div className="projects-image-label">

                  <FaUniversalAccess />

                  <span>
                    Приступачност за све
                  </span>

                </div>
              </div><br/>
          <p>
            Информатор је доступан слепим и слабовидим особама
            при доласку у нашу библиотеку и омогућава им да се
            боље упознају са историјатом наше установе,
            одељењима и библиотечким фондом, као и услугама
            које пружамо.
          </p>


          <p>
            Градска библиотека „Атанасије Стојковић“, својим
            вишедеценијским постојањем, постала је окосница
            готово свих културних дешавања унутар наше локалне
            заједнице. Као таква има обавезу да свој рад,
            активности и садржаје учини доступним свима.
          </p>


          <div className="projects-final-message">

            <FaBraille />

            <div>

              <strong>
                КУЛТУРА ЗА СВЕ
              </strong>

              <span>
                Знање, информације и култура доступни свима.
              </span>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL DECORATION
        ===================================================== */}

        <div className="projects-decoration-bottom">

          <span></span>

          <GiBookshelf />

          <span></span>

        </div>

      </Container>

    </>
  );
};


export default Project;