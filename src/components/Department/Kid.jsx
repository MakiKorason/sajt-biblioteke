import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LiaBookSolid } from 'react-icons/lia';
import { Helmet } from 'react-helmet-async';
import jole from '../../images/jole.jpg'
import './Kid.css'
import { GiOpenBook } from "react-icons/gi";
import decije from '../../images/decije.webp';


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
              EVENT 01
          ===================================================== */}

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


          {/* =====================================================
              EVENT 02
          ===================================================== */}

          <article className="kid-card kid-card-reverse">

            <Row className="g-0 align-items-stretch">

              <Col lg={5} className="order-2 order-lg-1">

                <div className="kid-card-image">

                  <AnimatedImage
                    src='https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/710079491_1614015560724061_7057539699838988866_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_ZW7Lo0fHbYQ7kNvwHqDbtH&_nc_oc=AdqGV0_C4V7S2MwwwK-jXd3pHo4vx_NcPuO6wNXXNmHRig0_abmg5pmapMDwUWDvB0w&_nc_zt=23&_nc_ht=scontent.fbeg4-1.fna&_nc_gid=TgAG7o-dJQVjiXozSa5-7A&_nc_ss=7b2a8&oh=00_AQF_nqHI5orS1TRB85ttwh58VZepkc72drV52_dAwFgetQ&oe=6A94AD72'
                    alt="Дечје одељење Градске библиотеке Рума"
                  />

                </div>

              </Col>

              <Col lg={7} className="order-1 order-lg-2">

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


          {/* =====================================================
              POEZIJA
          ===================================================== */}

          <div className="kid-highlight">

            <div className="kid-section-heading">

              <div className="kid-eyebrow">
                <span></span>
                ПОЕЗИЈА
              </div>

              <h2>
                Светски дан <em>поезије</em>
              </h2>

            </div>

            <p>
              Библиотека сваке године обележава Светски дан
              поезије уз музичке тачке и дечје рецитације.
              Ови сусрети пружају деци прилику да упознају
              лепоту поезије и да кроз јавни наступ покажу
              своје таленте.
            </p>

            <div className="kid-decoration">

              <span></span>

              <LiaBookSolid />

              <span></span>

            </div>

          </div>


          {/* =====================================================
              SVETI SAVA
          ===================================================== */}

          <article className="kid-card kid-card-final">

            <Row className="g-0 align-items-stretch">

              <Col lg={7}>

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
                    КУЛТУРА И ОБРАЗОВАЊЕ
                  </span>

                  <h3>
                    Свети Сава
                  </h3>

                  <div className="kid-divider"></div>

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

                <div className="kid-card-image">

                  <AnimatedImage
                    src='https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.6435-9/88965758_2500654240253007_4216655211671846912_n.jpg?stp=dst-jpg_tt6&cstp=mx714x960&ctp=s714x960&_nc_cat=103&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=m7eH_ZTNOWYQ7kNvwEYoF2u&_nc_oc=Adojkw1ir_sX4YX12-gztZQwX0s48v3p2ZqTlf0R2baF60aGZNyhmgG8dd4zf1zisGE&_nc_zt=23&_nc_ht=scontent.fbeg4-1.fna&_nc_gid=T378OokcqmM4x3NoqtVKXQ&_nc_ss=7b2a8&oh=00_AQHmOxTnm4K3qHbf4CT_433jqQkKxrEclCTkRi3jR5NQvA&oe=6AB6609C'
                    alt="Културна радионица за децу"
                  />

                </div>

              </Col>

            </Row>

          </article>


          {/* =====================================================
              RECITATION
          ===================================================== */}

          <div className="kid-highlight kid-recitation">

            <div className="kid-section-heading">

              <div className="kid-eyebrow">
                <span></span>
                ПЕСНИЧЕ НАРОДА МОГ
              </div>

              <h2>
                Место сусрета <em>младих талената</em>
              </h2>

            </div>

            <p>
              Простори наше библиотеке увек су радо отворени,
              па смо већ две године заредом, са посебним
              задовољством, угостили учеснике општинске смотре
              рецитатора „Песниче народа мог“.
            </p>

            <p>
              Као домаћини овог значајног такмичења, које
              традиционално организује Основна школа
              „Душан Јерковић“, пружили смо подршку младим
              талентима у њиховом креативном изражавању.
            </p>

          </div>


          {/* =====================================================
              MISSION
          ===================================================== */}

          <div className="kid-mission">

            <div className="kid-mission-inner">

              <LiaBookSolid />

              <h2>
                Читање, игра,
                <br />
                <span>машта и учење.</span>
              </h2>

              <p>
                Водећи се јасном мисијом, библиотекари наше
                установе често организују радионице за децу,
                које укључују читање, креативне активности
                и учење кроз игру.
              </p>

            </div>

          </div>


          {/* =====================================================
              BOTTOM DECORATION
          ===================================================== */}

          <div className="kid-books-decoration">

            <span></span>

            <LiaBookSolid />

            <LiaBookSolid />

            <LiaBookSolid />

            <span></span>

          </div>

        </section>

      </Container>
    </>
  );
};

export default Kid;