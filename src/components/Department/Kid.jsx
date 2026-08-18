import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LiaBookSolid } from 'react-icons/lia';
import { Helmet } from 'react-helmet-async';

import './Kid.css';

import decije from '../../images/decije.webp';
import isidora from '../../images/isidora.webp';

import AnimatedImage from './AnimatedImage';

const Kid = () => {
  return (
    <>
      <Helmet>
        <title>
          Одељење за децу – Градска библиотека „Атанасије Стојковић“ Рума
        </title>

        <meta
          name="description"
          content="Одељење за децу Градске библиотеке „Атанасије Стојковић“ у Руми. Погледајте информације о фонду, радионицама, културним програмима, литерарним конкурсима и активностима за најмлађе."
        />

        <link
          rel="canonical"
          href="https://www.bibliotekaruma.rs/odeljenje-za-decu"
        />

        <meta
          property="og:title"
          content="Одељење за децу – Градска библиотека Рума"
        />

        <meta
          property="og:description"
          content="Одељење за децу Градске библиотеке „Атанасије Стојковић“ у Руми – књиге, радионице, литерарни конкурси и културни програми."
        />

        <meta
          property="og:url"
          content="https://www.bibliotekaruma.rs/odeljenje-za-decu"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content="https://www.bibliotekaruma.rs/images/decije.webp"
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
          content="Одељење за децу – Градска библиотека Рума"
        />

        <meta
          name="twitter:description"
          content="Одељење за децу Градске библиотеке „Атанасије Стојковић“ у Руми."
        />

        <meta
          name="twitter:image"
          content="https://www.bibliotekaruma.rs/images/decije.webp"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Library',
            '@id':
              'https://www.bibliotekaruma.rs/odeljenje-za-decu#library',
            name:
              'Градска библиотека „Атанасије Стојковић“ Рума',
            url:
              'https://www.bibliotekaruma.rs/odeljenje-za-decu',
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

      <section className="kid-hero">

        <div className="kid-hero-decoration kid-hero-decoration-left"></div>

        <div className="kid-hero-decoration kid-hero-decoration-right"></div>

        <div className="kid-hero-content">

          <span className="kid-hero-label">
            ГРАДСКА БИБЛИОТЕКА „АТАНАСИЈЕ СТОЈКОВИЋ“
          </span>

          <h1>
            Одељење за децу
          </h1>

          <p>
            Простор у коме књига, игра, учење и машта
            постају део одрастања наших најмлађих читалаца.
          </p>

        </div>

      </section>


      <Container className="kid-page">


        {/* =====================================================
            UVOD
        ===================================================== */}

        <section className="kid-intro-section">

          <div className="section-heading">

            <span>
              О НАШЕМ ОДЕЉЕЊУ
            </span>

            <h2>
              Место где почиње љубав према књизи
            </h2>

          </div>


          <Row className="g-5 align-items-center">

            <Col lg={7}>

              <div className="kid-text">

                <p>
                  Одељење за децу броји око 18.000 публикација.
                  Фонд је уређен по УДК систему и унутар група
                  узбучен. Богат је бројним двојезичним књигама,
                  сликовницама, лектирaма, моторичким књигама,
                  звучним књигама и енциклопедијама.
                </p>

                <p>
                  Одељење за децу је организовано у две просторије.
                  Прва просторија је намењена публикацијама које су
                  изложене за читаоце, док је друга просторија
                  намењена радионицама.
                </p>

                <p>
                  У радионицама учествују наши најмлађи корисници:
                  бројне вртићке групе, ученици основних школа,
                  као и неки разреди средњошколаца.
                </p>

                <p>
                  Успешну сарадњу, поред државних образовно-
                  васпитних институција, остварујемо и са Дневним
                  боравком „Солидарност“, као и са приватним
                  школицама језика, чуваоницама деце и музичким
                  школицама.
                </p>

                <p>
                  Свако одељење за децу представља место на коме
                  се рађају и стварају будући љубитељи књига.
                  Из тог разлога негујемо вишегодишњу традицију
                  доделе бесплатних чланских картица првацима
                  и предшколцима.
                </p>

              </div>

            </Col>


            <Col lg={5}>

              <div className="kid-image-stack">

                <div className="kid-image-card kid-image-main">

                  <AnimatedImage
                    src={decije}
                    alt="Одељење за децу Градске библиотеке Рума"
                  />

                </div>

                <div className="kid-image-card kid-image-small">

                  <AnimatedImage
                    src={isidora}
                    alt="Радионица за децу у Градској библиотеци Рума"
                  />

                </div>

              </div>

            </Col>

          </Row>

        </section>


        {/* =====================================================
            KULTURNI KUTAK
        ===================================================== */}

        <section className="kid-cultural-section">

          <div className="section-heading">

            <span>
              КУЛТУРНИ ПРОГРАМИ
            </span>

            <h2>
              Културни кутак
            </h2>

            <p>
              Одељење за децу је простор у коме се кроз књигу,
              поезију, игру и креативне активности подстичу
              радозналост и стваралаштво најмлађих.
            </p>

          </div>


          {/* LITERARNI KONKURSI */}

          <div className="kid-event-card">

            <Row className="g-0 align-items-center">

              <Col lg={7}>

                <div className="kid-event-content">

                  <span className="kid-event-label">
                    ЛИТЕРАРНИ КОНКУРСИ
                  </span>

                  <h3>
                    „Имам и ја своја права“
                  </h3>

                  <p>
                    На Одељењу за децу наше библиотеке одржавали
                    су се бројни литерарни конкурси поводом
                    Међународног дана детета и поводом Светског
                    дана дечје књиге.
                  </p>

                  <p>
                    Један од конкурса носио је назив „Имам и ја
                    своја права“, кроз који су деца имала прилику
                    да својим речима и маштом говоре о правима,
                    слободи и положају детета.
                  </p>

                </div>

              </Col>


              <Col lg={5}>

                <div className="kid-event-image">

                  <AnimatedImage
                    src={isidora}
                    alt="Радионица и активности за децу у библиотеци"
                  />

                </div>

              </Col>

            </Row>

          </div>


          {/* MODERNA BAJKA */}

          <div className="kid-event-card">

            <Row className="g-0 align-items-center">

              <Col lg={5} className="order-2 order-lg-1">

                <div className="kid-event-image">

                  <AnimatedImage
                    src={decije}
                    alt="Дечје одељење Градске библиотеке Рума"
                  />

                </div>

              </Col>


              <Col lg={7} className="order-1 order-lg-2">

                <div className="kid-event-content">

                  <span className="kid-event-label">
                    ЛИТЕРАРНИ КОНКУРС
                  </span>

                  <h3>
                    „Моја модерна бајка“
                  </h3>

                  <p>
                    Кроз литерарни конкурс „Моја модерна бајка“
                    најмлађи читаоци добили су прилику да
                    осмисле сопствене приче, ликове и светове.
                  </p>

                  <p>
                    На овај начин библиотека подстиче децу да
                    читају, пишу и развијају сопствену машту,
                    али и да књигу доживе као простор у коме
                    све постаје могуће.
                  </p>

                </div>

              </Col>

            </Row>

          </div>


          {/* SVETSKI DAN POEZIJE */}

          <div className="kid-full-event">

            <div className="section-heading">

              <span>
                ПОЕЗИЈА
              </span>

              <h2>
                Светски дан поезије
              </h2>

            </div>


            <p className="kid-centered-text">
              Библиотека сваке године обележава Светски дан
              поезије уз музичке тачке и дечје рецитације.
              Ови сусрети пружају деци прилику да упознају
              лепоту поезије и да кроз јавни наступ покажу
              своје таленте.
            </p>


            <div className="kid-poetry-decoration">

              <LiaBookSolid />
              <LiaBookSolid />
              <LiaBookSolid />

            </div>

          </div>


          {/* SVETI SAVA */}

          <div className="kid-event-card kid-final-event">

            <Row className="g-0 align-items-center">

              <Col lg={7}>

                <div className="kid-event-content">

                  <span className="kid-event-label">
                    КУЛТУРА И ОБРАЗОВАЊЕ
                  </span>

                  <h3>
                    Свети Сава
                  </h3>

                  <p>
                    И дан Светог Саве је посебан дан за нашу
                    установу, као и за друге културно-образовне
                    институције.
                  </p>

                  <p>
                    Путем занимљивих прича о Растку Немањићу
                    деца уче о томе ко је он био и колико је
                    заслужан за развој српског школства.
                  </p>

                </div>

              </Col>


              <Col lg={5}>

                <div className="kid-event-image">

                  <AnimatedImage
                    src={isidora}
                    alt="Културна радионица за децу"
                  />

                </div>

              </Col>

            </Row>

          </div>


          {/* PESNICKA SMOTRA */}

          <div className="kid-full-event kid-recitation-event">

            <div className="section-heading">

              <span>
                ПЕСНИЧЕ НАРОДА МОГ
              </span>

              <h2>
                Место сусрета младих талената
              </h2>

            </div>


            <p className="kid-centered-text">

              Простори наше библиотеке увек су радо отворени,
              па смо већ две године заредом, са посебним
              задовољством, угостили учеснике општинске смотре
              рецитатора „Песниче народа мог“.

            </p>


            <p className="kid-centered-text">

              Као домаћини овог значајног такмичења, које
              традиционално организује Основна школа
              „Душан Јерковић“, пружили смо подршку младим
              талентима у њиховом креативном изражавању.

            </p>

          </div>


          {/* ZAVRSNA PORUKA */}

          <div className="kid-mission">

            <div className="kid-mission-inner">

              <LiaBookSolid />

              <h2>
                Читање, игра,
                <br />
                машта и учење.
              </h2>

              <p>
                Водећи се јасном мисијом, библиотекари наше
                установе често организују радионице за децу,
                које укључују читање, креативне активности
                и учење кроз игру.
              </p>

            </div>

          </div>


          {/* DEKORACIJA */}

          <div className="kid-books-decoration">

            <LiaBookSolid />
            <LiaBookSolid />
            <LiaBookSolid />

          </div>

        </section>

      </Container>

    </>
  );
};

export default Kid;