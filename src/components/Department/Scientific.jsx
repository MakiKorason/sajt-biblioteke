import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LiaBookSolid } from 'react-icons/lia';
import { Helmet } from 'react-helmet-async';

import './Scientific.css';

import naucno from '../../images/naucno.webp';
import naucno2 from '../../images/naucno2.webp';
import predavanjeOMacu from '../../images/predavanjeOMacu.webp';
import WordPress from '../../images/WordPress.webp';

import AnimatedImage from './AnimatedImage';

const Scientific = () => {
  return (
    <>
      <Helmet>
        <title>
          Одељење научне и стручне литературе – Градска библиотека „Атанасије Стојковић“ Рума
        </title>

        <meta
          name="description"
          content="Одељење научне и стручне литературе Градске библиотеке „Атанасије Стојковић“ у Руми поседује више од 22.000 публикација из готово свих области људског знања."
        />

        <link
          rel="canonical"
          href="https://www.bibliotekaruma.rs/odeljenje-naucne-i-strucne-literature"
        />

        <meta
          property="og:title"
          content="Одељење научне и стручне литературе – Библиотека Рума"
        />

        <meta
          property="og:description"
          content="Фонд Одељења научне и стручне литературе броји преко 22.000 публикација из готово свих области људског знања."
        />

        <meta
          property="og:url"
          content="https://www.bibliotekaruma.rs/odeljenje-naucne-i-strucne-literature"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content="https://www.bibliotekaruma.rs/images/naucno.webp"
        />

        <meta
          property="og:locale"
          content="sr_RS"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Одељење научне и стручне литературе – Библиотека Рума"
        />

        <meta
          name="twitter:description"
          content="Одељење научне и стручне литературе Градске библиотеке Рума."
        />

        <meta
          name="twitter:image"
          content="https://www.bibliotekaruma.rs/images/naucno.webp"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Library',
            '@id':
              'https://www.bibliotekaruma.rs/odeljenje-naucne-i-strucne-literature#library',
            name:
              'Градска библиотека „Атанасије Стојковић“ Рума',
            url:
              'https://www.bibliotekaruma.rs/odeljenje-naucne-i-strucne-literature',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Главна 114',
              addressLocality: 'Рума',
              postalCode: '22400',
              addressCountry: 'RS'
            },
            telephone: '+38122490047'
          })}
        </script>
      </Helmet>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="scientific-hero">

        <div className="scientific-hero-decoration scientific-hero-decoration-left"></div>

        <div className="scientific-hero-decoration scientific-hero-decoration-right"></div>

        <div className="scientific-hero-content">

          <span className="scientific-hero-label">
            ГРАДСКА БИБЛИОТЕКА „АТАНАСИЈЕ СТОЈКОВИЋ“
          </span>

          <h1>
            Научна и стручна литература
          </h1>

          <p>
            Простор знања, истраживања и учења,
            намењен свима који желе да откривају,
            истражују и проширују своја знања.
          </p>

        </div>

      </section>


      <Container className="scientific-page">


        {/* =====================================================
            UVOD
        ===================================================== */}

        <section className="scientific-intro-section">

          <div className="section-heading">

            <span>
              О НАШЕМ ОДЕЉЕЊУ
            </span>

            <h2>
              Ризница знања за учење и истраживање
            </h2>

          </div>


          <Row className="g-5 align-items-center">

            <Col lg={7}>

              <div className="scientific-text">

                <p>
                  Фонд Одељења научне и стручне литературе броји
                  преко 22.000 публикација које обухватају готово
                  све области људског знања.
                </p>

                <p>
                  На Одељењу научне и стручне литературе налазе се
                  публикације из области општих знања, друштвених,
                  природних и примењених наука, као и практични
                  приручници и савети за свакодневни живот.
                </p>

                <p>
                  Одељење располаже вредним публикацијама из области
                  филозофије, психологије, религије, економије,
                  права, уметности, медицине, историје и других
                  научних области.
                </p>

                <p>
                  Набавка књига осмишљена је тако да одговори на
                  интересовања наших корисника, пре свега ученика,
                  студената, научника и истраживача.
                </p>

              </div>

            </Col>


            <Col lg={5}>

              <div className="scientific-image-stack">

                <div className="scientific-image-card scientific-image-main">

                  <AnimatedImage
                    src={naucno}
                    alt="Одељење научне и стручне литературе Градске библиотеке Рума"
                  />

                </div>

                <div className="scientific-image-card scientific-image-small">

                  <AnimatedImage
                    src={naucno2}
                    alt="Фонд научне и стручне литературе"
                  />

                </div>

              </div>

            </Col>

          </Row>

        </section>


        {/* =====================================================
            FOND I USLUGE
        ===================================================== */}

        <section className="scientific-services-section">

          <div className="section-heading">

            <span>
              ЗНАЊЕ И ПОДРШКА
            </span>

            <h2>
              Више од библиотечког фонда
            </h2>

            <p>
              Наши библиотекари помажу корисницима да дођу до
              релевантних информација, литературе и извора
              неопходних за учење и истраживање.
            </p>

          </div>


          <Row className="g-4">

            <Col lg={4} md={6}>

              <div className="scientific-info-card">

                <div className="scientific-card-icon">
                  <LiaBookSolid />
                </div>

                <span>
                  РЕФЕРЕНСНА ЗБИРКА
                </span>

                <h3>
                  Енциклопедије, речници и лексикони
                </h3>

                <p>
                  У оквиру Одељења налази се Референсна збирка
                  која обухвата вредну стручну литературу.
                  Ова грађа доступна је за коришћење у
                  Читаоници библиотеке.
                </p>

              </div>

            </Col>


            <Col lg={4} md={6}>

              <div className="scientific-info-card">

                <div className="scientific-card-icon">
                  <LiaBookSolid />
                </div>

                <span>
                  ПОМОЋ КОРИСНИЦИМА
                </span>

                <h3>
                  Подршка у проналажењу информација
                </h3>

                <p>
                  Библиотекари помажу корисницима у проналажењу
                  и коришћењу грађе доступне у фонду, као и у
                  претраживању електронских база података.
                </p>

              </div>

            </Col>


            <Col lg={4} md={12}>

              <div className="scientific-info-card">

                <div className="scientific-card-icon">
                  <LiaBookSolid />
                </div>

                <span>
                  МЕЂУБИБЛИОТЕЧКА ПОЗАЈМИЦА
                </span>

                <h3>
                  Приступ грађи других библиотека
                </h3>

                <p>
                  Корисницима је омогућена услуга међубиблиотечке
                  позајмице, чиме се отвара могућност приступа
                  публикацијама које нису део нашег фонда.
                </p>

              </div>

            </Col>

          </Row>

        </section>


        {/* =====================================================
            KULTURNI KUTAK
        ===================================================== */}

        <section className="scientific-cultural-section">

          <div className="section-heading">

            <span>
              КУЛТУРНИ ПРОГРАМИ
            </span>

            <h2>
              Културни кутак
            </h2>

            <p>
              Одељење научне и стручне литературе није само
              место за учење. Оно је и простор сусрета,
              предавања, представљања знања и нових вештина.
            </p>

          </div>


          {/* =================================================
              PREDAVANJE O MACU
          ================================================= */}

          <div className="scientific-event-card">

            <Row className="g-0 align-items-center">

              <Col lg={7}>

                <div className="scientific-event-content">

                  <span className="scientific-event-label">
                    ПРЕДАВАЊЕ
                  </span>

                  <h3>
                    „Тајне ковања мача“
                  </h3>

                  <p>
                    Предавање на тему „Тајне ковања мача“,
                    које је одржао Слободан Маринић, мајстор
                    ковача мачева, публика је први пут имала
                    прилику да чује 12. октобра 2023. године
                    у Читаоници наше установе.
                  </p>

                  <p>
                    Како би своје умеће демонстрирао, аутор
                    је одлучио да присутнима уживо покаже мач
                    и на тај начин приближи историју његовог
                    настанка и умеће његове израде.
                  </p>

                </div>

              </Col>


              <Col lg={5}>

                <div className="scientific-event-image">

                  <AnimatedImage
                    src={predavanjeOMacu}
                    alt="Предавање „Тајне ковања мача“ у Градској библиотеци Рума"
                  />

                </div>

              </Col>

            </Row>

          </div>


          {/* =================================================
              WORDPRESS
          ================================================= */}

          <div className="scientific-event-card">

            <Row className="g-0 align-items-center">

              <Col lg={5} className="order-2 order-lg-1">

                <div className="scientific-event-image">

                  <AnimatedImage
                    src={WordPress}
                    alt="WordPress предавање у Градској библиотеци Рума"
                  />

                </div>

              </Col>


              <Col lg={7} className="order-1 order-lg-2">

                <div className="scientific-event-content">

                  <span className="scientific-event-label">
                    ДИГИТАЛНЕ ВЕШТИНЕ
                  </span>

                  <h3>
                    WordPress и дигитални свет
                  </h3>

                  <p>
                    У жељи да нашим суграђанима пружи могућност
                    упознавања нових вештина, Градска библиотека
                    „Атанасије Стојковић“ угостила је део
                    WordPress заједнице.
                  </p>

                  <p>
                    Циљ ових предавања био је да се интернет
                    и послови на интернету приближе локалној
                    заједници, како би се људи осамосталили
                    и охрабрили за упуштање у дигиталне воде.
                  </p>

                </div>

              </Col>

            </Row>

          </div>


          {/* =================================================
              ZAVRSNA PORUKA
          ================================================= */}

          <div className="scientific-mission">

            <div className="scientific-mission-inner">

              <LiaBookSolid />

              <h2>
               Истражујемо и
                <br />
                учимо заједно
              </h2>

              <p>
                Одељење научне и стручне литературе нуди богату
                ризницу знања и право је место где наши корисници
                могу да се едукују, истражују и прошире своје
                знање.
              </p>

            </div>

          </div>


          {/* =================================================
              DEKORACIJA
          ================================================= */}

          <div className="scientific-books-decoration">

            <LiaBookSolid />
            <LiaBookSolid />
            <LiaBookSolid />

          </div>

        </section>

      </Container>

    </>
  );
};

export default Scientific;