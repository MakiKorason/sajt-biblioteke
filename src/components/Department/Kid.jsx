import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { LiaBookSolid } from 'react-icons/lia';
import { Helmet } from 'react-helmet-async';
import jole from '../../images/jole.jpg';
import './Kid.css';
import { GiOpenBook } from "react-icons/gi";
import decije from '../../images/decije.webp';

import AnimatedImage from './AnimatedImage';

const Kid = () => {

  const [activeKey, setActiveKey] = useState('radionice');

  const [activeWorkshop, setActiveWorkshop] = useState(
    'aktuelnosti-dan-decje-knjige'
  );

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


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="kid-hero">

        <div className="kid-hero-background">

          <div className="kid-hero-circle kid-circle-one"></div>

          <div className="kid-hero-circle kid-circle-two"></div>

        </div>


        <div className="kid-hero-decoration kid-hero-decoration-left">

          <LiaBookSolid />

        </div>


        <div className="contact-hero-book contact-book-right">

          <GiOpenBook />

        </div>


        <div className="kid-hero-content">

          <div className="kid-hero-label">

            <span className="kid-label-line"></span>

            ГРАДСКА БИБЛИОТЕКА „АТАНАСИЈЕ СТОЈКОВИЋ“

            <span className="kid-label-line"></span>

          </div>


          <h1>

            Одељење <span>за децу</span>

          </h1>


          <p>

            Простор у коме књига, игра, учење и машта
            постају део одрастања наших најмлађих читалаца.

          </p>

        </div>

      </section>


      <Container className="kid-page">


        {/* =========================================================
            INTRO
        ========================================================= */}

        <section className="kid-intro">

          <div className="kid-eyebrow">

            <span></span>

            О НАШЕМ ОДЕЉЕЊУ

          </div>


          <div className="kid-intro-heading">

            <h2>

              Место где почиње <em>љубав према књизи</em>

            </h2>

          </div>


          <div className="kid-intro-content">

            <div className="kid-intro-icon">

              <LiaBookSolid />

            </div>


            <div className="kid-intro-text">

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

          </div>

        </section>


        {/* =========================================================
            IMAGE FEATURE
        ========================================================= */}

        <section className="kid-feature">

          <Row className="g-4 align-items-stretch">


            <Col lg={7}>

              <div className="kid-feature-image kid-feature-image-large">

                <AnimatedImage
                  src={decije}
                  alt="Одељење за децу Градске библиотеке Рума"
                />

              </div>

            </Col>


            <Col lg={5}>

              <div className="kid-feature-side">

                <div className="kid-eyebrow">

                  <span></span>

                  ПРОСТОР ЗА ДЕЦУ

                </div>


                <h3>

                  Књига, игра и машта на једном месту

                </h3>


                <p>

                  Простор Одељења за децу осмишљен је тако да
                  најмлађим читаоцима пружи могућност да књигу
                  упознају кроз игру, дружење, истраживање и
                  креативни рад.

                </p>


                <div className="kid-feature-small-image">

                  <AnimatedImage
                    src={jole}
                    alt="Радионица за децу у Градској библиотеци Рума"
                  />

                </div>

              </div>

            </Col>

          </Row>

        </section>


        {/* =========================================================
            CULTURAL PROGRAMS
        ========================================================= */}

        <section className="kid-programs">


          <div className="kid-section-heading">


            <div className="kid-eyebrow">

              <span></span>

              КУЛТУРНИ ПРОГРАМИ

            </div>


            <h2>

              Културни <em>кутак</em>

            </h2>


            <p>

              Одељење за децу је простор у коме се кроз књигу,
              поезију, игру и креативне активности подстичу
              радозналост и стваралаштво најмлађих.

            </p>

          </div>


          {/* =====================================================
              GLAVNI BOOTSTRAP TABOVI
          ===================================================== */}

          <div className="kid-tabs">


            <Nav
              variant="tabs"
              activeKey={activeKey}
              onSelect={(key) => key && setActiveKey(key)}
              className="kid-main-tabs"
            >


              <Nav.Item>

                <Nav.Link eventKey="radionice">

                  Радионице

                </Nav.Link>

              </Nav.Item>


              <Nav.Item>

                <Nav.Link eventKey="decija-nedelja">

                  Дечија недеља

                </Nav.Link>

              </Nav.Item>


              <Nav.Item>

                <Nav.Link eventKey="smotra">

                  Општинска смотра рецитатора

                </Nav.Link>

              </Nav.Item>


            </Nav>


            {/* =====================================================
                SADRŽAJ TABOVA
            ===================================================== */}

            <div className="kid-tabs-content">


              {/* ===================================================
                  RADIONICE
              =================================================== */}

              {activeKey === 'radionice' && (

                <div className="kid-tab-panel">
                      <div
      className="rounded-4 p-4 my-4 shadow-sm"
      style={{
        backgroundColor: "#f3eee4",
        border: "1px solid #c9b58d"
      }}
    >
<div className="bg-light rounded-4 border border-secondary-subtle shadow-sm p-4 my-4">
  <div className="d-flex align-items-center gap-3">
    
    <div 
       className="fs-2"
          style={{ color: "#8a6a3f" }}>
      <GiOpenBook />
    </div>

    <div>
    

        <p
            className="kid-program-intro mb-0"
            style={{
              color: "#3f2c11",
              lineHeight: "1.7"
            }}
          >
            У оквиру Одељења за децу организујемо различите
            радионице које најмлађим читаоцима пружају
            прилику за дружење, учење и креативно стваралаштво.
          </p>
 
    </div>
    
  </div></div>
</div> <br/><br/><br/>


                  {/* PODTABOVI RADIONICA */}

                  <Nav
                    variant="tabs"
                    activeKey={activeWorkshop}
                    onSelect={(key) =>
                      key && setActiveWorkshop(key)
                    }
                    className="kid-inner-tabs"
                  >
 <Nav.Item>

                      <Nav.Link eventKey="aktuelnosti-dan-decje-knjige">

                       Актуелности

                      </Nav.Link>

                    </Nav.Item>


                    <Nav.Item>

                      <Nav.Link eventKey="medjunarodni-dan-decje-knjige">

                        Међународни дан дечије књиге

                      </Nav.Link>

                    </Nav.Item>

                    <Nav.Item>

                      <Nav.Link eventKey="dani-atanasija-stojkovica">

                        Дани Атанасија Стојковића

                      </Nav.Link>

                    </Nav.Item>


                    <Nav.Item>

                      <Nav.Link eventKey="novogodisnje-radionice">

                        Новогодишње радионице

                      </Nav.Link>

                    </Nav.Item>


                    <Nav.Item>

                      <Nav.Link eventKey="uskrsnje-radionice">

                        Ускршње радионице

                      </Nav.Link>

                    </Nav.Item>


                  </Nav>


                  <div className="kid-inner-content">


                    {activeWorkshop ===
                      'medjunarodni-dan-decje-knjige' && (

                      <div className="kid-event-content">

                        <h3>
                          Међународни дан дечје књиге
                        </h3>

                      </div>

                    )}

                    
                    {activeWorkshop ===
                      'medjunarodni-dan-decje-knjige' && (

                      <div className="kid-event-content">

                        <h3>
                          Међународни дан дечје књиге
                        </h3>

                      </div>

                    )}



                    {activeWorkshop ===
                      'dani-atanasija-stojkovica' && (

                      <div className="kid-event-content">

                        <h3>
                          Дани Атанасија Стојковића
                        </h3>

                      </div>

                    )}


                    {activeWorkshop ===
                      'novogodisnje-radionice' && (

                      <div className="kid-event-content">

                        <h3>
                          Новогодишње радионице
                        </h3>

                      </div>

                    )}


                    {activeWorkshop ===
                      'uskrsnje-radionice' && (

                      <div className="kid-event-content">

                        <h3>
                          Ускршње радионице
                        </h3>

                      </div>

                    )}

                  </div>

                </div>

              )}


              {/* ===================================================
                  DEČIJA NEDELJA
              =================================================== */}

              {activeKey === 'decija-nedelja' && (

                <div className="kid-tab-panel">


                  {/* =================================================
                      EVENT 01
                  ================================================= */}

                  <article className="kid-card">


                    <Row className="g-0 align-items-stretch">


                      <Col lg={7}>

                        <div className="kid-card-content">


                          <div className="kid-card-top">

                            <div className="kid-card-icon">

                              <LiaBookSolid />

                            </div>


                            <span className="kid-card-number">

                              01

                            </span>

                          </div>


                          <span className="kid-card-label">

                            ЛИТЕРАРНИ КОНКУРСИ

                          </span>


                          <h3>

                            „Имам и ја своја права“

                          </h3>


                          <div className="kid-divider"></div>


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

                        <div className="kid-card-image">

                          <AnimatedImage
                            src="https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.6435-9/89436364_2500658463585918_3498270756880515072_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1441&ctp=s2048x1441&_nc_cat=105&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=gYVPL8ebah4Q7kNvwEAJqnL&_nc_oc=AdqyPmkeV0ysZ_2ILyWPLHiVZRww0NuYvpZYLCqpsRtDuvLzjYlz603ysdxIYFycUKY&_nc_zt=23&_nc_ht=scontent.fbeg4-1.fna&_nc_gid=VgR4VeExBf_vrTwX3p_KPg&_nc_ss=7b2a8&oh=00_AQH-wFZr4L9icPLCXfS15nuLoKHluBFrqN5-q_XL53DWog&oe=6AB661CE"
                            alt="Литерарни конкурс"
                          />

                        </div>

                      </Col>


                    </Row>

                  </article>


                  {/* =================================================
                      EVENT 02
                  ================================================= */}

                  <article className="kid-card kid-card-reverse">


                    <Row className="g-0 align-items-stretch">


                      <Col
                        lg={5}
                        className="order-2 order-lg-1"
                      >

                        <div className="kid-card-image">

                          <AnimatedImage
                            src="https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/710079491_1614015560724061_7057539699838988866_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_ZW7Lo0fHbYQ7kNvwHqDbtH&_nc_oc=AdqGV0_C4V7S2MwwwK-jXd3pHo4vx_NcPuO6wNXXNmHRig0_abmg5pmapMDwUWDvB0w&_nc_zt=23&_nc_ht=scontent.fbeg4-1.fna&_nc_gid=TgAG7o-dJQVjiXozSa5-7A&_nc_ss=7b2a8&oh=00_AQF_nqHI5orS1TRB85ttwh58VZepkc72drV52_dAwFgetQ&oe=6A94AD72"
                            alt="Дечје одељење Градске библиотеке Рума"
                          />

                        </div>

                      </Col>


                      <Col
                        lg={7}
                        className="order-1 order-lg-2"
                      >

                        <div className="kid-card-content">


                          <div className="kid-card-top">

                            <div className="kid-card-icon">

                              <LiaBookSolid />

                            </div>


                            <span className="kid-card-number">

                              02

                            </span>

                          </div>


                          <span className="kid-card-label">

                            ЛИТЕРАРНИ КОНКУРС

                          </span>


                          <h3>

                            „Моја модерна бајка“

                          </h3>


                          <div className="kid-divider"></div>


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

                  </article>


                </div>

              )}


              {/* ===================================================
                  OPŠTINSKA SMOTRA RECITATORA
              =================================================== */}

              {activeKey === 'smotra' && (

                <div className="kid-tab-panel">


                  <article className="kid-card">


                    <div className="kid-card-content">


                      <div className="kid-card-top">

                        <div className="kid-card-icon">

                          <LiaBookSolid />

                        </div>


                        <span className="kid-card-number">

                          03

                        </span>

                      </div>


                      <span className="kid-card-label">


                   ПЕСНИЧЕ НАРОДА МОГ
                      </span>



                      <h3>

                        Општинска смотра рецитатора

                      </h3>


                      <div className="kid-divider"></div>


                      <p>


Простори наше библиотеке увек су радо отворени, па смо већ две године заредом, са посебним задовољством, угостили учеснике општинске смотре рецитатора „Песниче народа мог“.

Као домаћини овог значајног такмичења, које традиционално организује Основна школа „Душан Јерковић“, пружили смо подршку младим талентима у њиховом креативном изражавању.

                      </p>
                      <Row><Col md-6>
                               <div className="kid-card-image">
                     <AnimatedImage src='https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/650963537_1541044828021135_3752259225659191040_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=nxDokdUstSsQ7kNvwE_UIPX&_nc_oc=AdpK80-ayIVerApCVyOlgrIJVgiA9PxAe2445GThe3-bsj0h0rk5050hb70_RorXo-0&_nc_zt=23&_nc_ht=scontent.fbeg4-1.fna&_nc_gid=YvDbvTCLi61ze9ITmLlGew&_nc_ss=7b2a8&oh=00_AQJzzyMwdAS7wXNeElssgJj_YC4HU9nmX8FkuslyPUcSQA&oe=6AA45003'/>

                    </div></Col></Row></div>


                  </article>


                </div>

              )}


            </div>

          </div>

        </section>

      </Container>

    </>

  );

};

export default Kid;