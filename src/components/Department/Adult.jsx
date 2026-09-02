import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LiaBookSolid } from "react-icons/lia";
import { Helmet } from "react-helmet-async";

import "./Adult.css";
import { GiOpenBook } from "react-icons/gi";
import koncertNaOdraslom from "../../images/koncertNaOdraslom.webp";
import osmiMart from "../../images/osmiMart.webp";
import pesmaOTriSveta from "../../images/pesmaOTriSveta.webp";
import likovniKonkurs1 from "../../images/likovniKonkurs1.webp";
import likovniKonkurs2 from "../../images/likovniKonkurs2.webp";
import likovniKonkurs3 from "../../images/likovniKonkurs3.webp";
import cudoUBanatu from "../../images/cudoUBanatu.webp";
import odraslo from "../../images/odraslo.webp";

import AnimatedImage from "./AnimatedImage";

const Adult = () => {
  const pageTitle =
    'Одељење за одрасле – Градска библиотека „Атанасије Стојковић“ Рума';

  const pageDescription =
    'Одељење за одрасле Градске библиотеке „Атанасије Стојковић“ у Руми. Погледајте информације о библиотечком фонду, читаоници, културним програмима, изложбама и књижевним промоцијама.';

  const canonicalUrl =
    "https://www.bibliotekaruma.rs/odeljenje-za-odrasle";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Library",
    "@id": `${canonicalUrl}#library`,
    name: 'Градска библиотека „Атанасије Стојковић“ Рума',
    url: canonicalUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Главна 114",
      addressLocality: "Рума",
      postalCode: "22400",
      addressCountry: "RS",
    },
    telephone: "+38122490047",
  };

  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Helmet>
        <title>{pageTitle}</title>

        <meta
          name="description"
          content={pageDescription}
        />

        <link
          rel="canonical"
          href={canonicalUrl}
        />

        <link
          rel="alternate"
          hrefLang="sr"
          href={canonicalUrl}
        />

        <meta
          property="og:title"
          content={pageTitle}
        />

        <meta
          property="og:description"
          content={pageDescription}
        />

        <meta
          property="og:url"
          content={canonicalUrl}
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:locale"
          content="sr_RS"
        />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="adult-hero">

        <div className="adult-hero-background">

          <div className="adult-hero-circle circle-one"></div>

          <div className="adult-hero-circle circle-two"></div>

        </div>


        {/* BOOK DECORATION */}

        <div className="adult-hero-book adult-book-left">

          <LiaBookSolid />

        </div>
 <div className="contact-hero-book contact-book-right">
    <GiOpenBook />
  </div>

        <Container>

          <div className="adult-hero-content">

            <div className="adult-hero-label">

              ГРАДСКА БИБЛИОТЕКА „АТАНАСИЈЕ СТОЈКОВИЋ“

            </div>


            <h1>

              <em>Одељење</em> за одрасле

            </h1>


            <p>

              Простор посвећен књизи, читању, учењу и
              културним дешавањима у Градској библиотеци Рума.

            </p>

          </div>

        </Container>

      </section>


      {/* =====================================================
          MAIN PAGE
      ===================================================== */}

      <Container className="adult-page">


        {/* ===================================================
            UVOD
        =================================================== */}

        <section className="adult-intro">

          <div className="adult-section-heading">

            <span>
              О НАШЕМ ОДЕЉЕЊУ
            </span>

            <h2>
              Простор за књигу,
              <br />
              читање и сусрете
            </h2>

          </div>


          <Row className="g-5 align-items-start">

            <Col lg={7}>

              <div className="adult-text">

                <p>
                  Одељење за одрасле је наше највеће одељење,
                  са 38.000 књига, активног фонда и мањим делом
                  депозита. Ово одељење је организовано у две
                  просторије.
                </p>

                <p>
                  У првој просторији се налази изложбени део са
                  књигама и место за рад са корисницима, а у другој
                  просторији од скоро 200 метара квадратних, фонд
                  је смештен у пет редова двостраних полица.
                </p>

                <p>
                  Фонд је распоређен по УДК систему, а између фонда
                  и Читаонице су полице у којима се налазе књиге
                  на страном језику.
                </p>

                <p>
                  У другој половини ове просторије се налази
                  поменута Читаоница капацитета до двадесет места
                  за учење и рад. Она је и простор за одржавање
                  свих културних и уметничких дешавања, дечијих
                  радионица, изложби, предавања, књижевних
                  промоција, представа или мањих концерата.
                </p>

                <p>
                  У ту сврху у Читаоницу се постављају столице и
                  она тада може да прими до 70 људи.
                </p>

                <p>
                  Специфичност овог простора је што он има бину
                  и излаз на двориште, где се одржавају културни
                  догађаји на отвореном, у оквиру Румског културног
                  лета и организације наше библиотеке.
                </p>


                <div className="adult-highlight">

                  <div className="adult-highlight-icon">

                    <LiaBookSolid />

                  </div>


                  <div>

                    <span>
                      ОДЕЉЕЊЕ ЗА ОДРАСЛЕ
                    </span>

                    <p>
                      Простор библиотеке намењен читању,
                      учењу, раду и сусретима са културом.
                    </p>

                  </div>

                </div>

              </div>

            </Col>


            <Col lg={5}>

              <div className="adult-image-stack">

                <div className="adult-image-card adult-image-main">

                  <AnimatedImage
                    src={odraslo}
                    alt="Одељење за одрасле Градске библиотеке Рума"
                  />

                </div>


                <div className="adult-image-card adult-image-small">

                  <AnimatedImage
                    src={koncertNaOdraslom}
                    alt="Концерт на Одељењу за одрасле"
                  />

                </div>

              </div>

            </Col>

          </Row>

        </section>


        {/* ===================================================
            KULTURNI PROGRAMI
        =================================================== */}

        <section className="adult-cultural-section">

          <div className="adult-section-heading">

            <span>
              КУЛТУРНИ ПРОГРАМИ
            </span>

            <h2>
              Културни кутак
            </h2>

            <p>
              Одељење за одрасле је и место сусрета са писцима,
              уметницима, предавачима и културним ствараоцима.
            </p>

          </div>


          {/* =================================================
              PESMA O TRI SVETA
          ================================================= */}

          <article className="adult-event-card">

            <Row className="g-0 align-items-stretch">

              <Col lg={7}>

                <div className="adult-event-content">

                  <span className="adult-event-label">
                    КЊИЖЕВНО ВЕЧЕ
                  </span>

                  <h3>
                    „Песма о три света“
                  </h3>

                  <p>
                    Владимира Пишталa, тренутног управника Народне
                    библиотеке Србије, и једног од најзначајнијих
                    савремених српских писаца угостили смо 19. априла
                    2024. године. Промоција његове књиге „Песма о три
                    света“ изазвала је велико интересовање код
                    љубитеља лепе књижевности, па је завршетак вечери
                    испраћен аплаузом.
                  </p>

                  <p>
                    У разговору са аутором учествовали су Ненад Шапоња,
                    директор Културног центра Војводине „Милош Црњански“,
                    и Селимир Радуловић, награђивани српски песник и
                    управник Библиотеке Матице српске.
                  </p>

                </div>

              </Col>


              <Col lg={5}>

                <div className="adult-event-image">

                  <AnimatedImage
                    src={pesmaOTriSveta}
                    alt="Књига „Песма о три света“"
                  />

                </div>

              </Col>

            </Row>

          </article>


          {/* =================================================
              CUDO U BANATU
          ================================================= */}

          <article className="adult-event-card">

            <Row className="g-0 align-items-stretch">

              <Col
                lg={5}
                className="order-2 order-lg-1"
              >

                <div className="adult-event-image">

                  <AnimatedImage
                    src={cudoUBanatu}
                    alt="Књига „Чудо у Банату“"
                  />

                </div>

              </Col>


              <Col
                lg={7}
                className="order-1 order-lg-2"
              >

                <div className="adult-event-content">

                  <span className="adult-event-label">
                    ПРОМОЦИЈА КЊИГЕ
                  </span>

                  <h3>
                    „Чудо у Банату“
                  </h3>

                  <p>
                    Књига „Чудо у Банату“ је збирка кратких прича
                    која даје приказ збивања на банатским просторима
                    и говори о судбини тамошњих људи након Великог
                    рата. Она је промовисана 2. децембра 2023. године
                    у просторијама наше библиотеке.
                  </p>

                  <p>
                    Њен аутор, Милан Мицић, доктор историјских наука
                    и генерални секретар Матице српске, објавио је
                    50 књига историографских студија, историјских
                    есеја, документарне прозе и поезије.
                  </p>

                </div>

              </Col>

            </Row>

          </article>


          {/* =================================================
              IZLOZBA
          ================================================= */}

          <section className="adult-exhibition">

            <div className="adult-section-heading">

              <span>
                ИЗЛОЖБА
              </span>

              <h2>
                „Женски ликови у књижевности“
              </h2>

            </div>


            <p className="adult-centered-text">
              Поводом Дана жена, 8. марта 2021. године, у холу наше
              библиотеке постављена је изложба ликовних радова румских
              гимназијалаца на тему „Женски ликови у књижевности“.
            </p>


            <Row className="g-4 adult-gallery">

              <Col lg={4} md={4}>

                <div className="adult-gallery-item">

                  <AnimatedImage
                    src={likovniKonkurs1}
                    alt="Женски ликови у књижевности – изложба"
                  />

                </div>

              </Col>


              <Col lg={4} md={4}>

                <div className="adult-gallery-item">

                  <AnimatedImage
                    src={likovniKonkurs2}
                    alt="Женски ликови у књижевности – изложба"
                  />

                </div>

              </Col>


              <Col lg={4} md={4}>

                <div className="adult-gallery-item">

                  <AnimatedImage
                    src={likovniKonkurs3}
                    alt="Женски ликови у књижевности – изложба"
                  />

                </div>

              </Col>

            </Row>

          </section>


          {/* =================================================
              ZNAMENITE RUMLJANKE
          ================================================= */}

          <article className="adult-event-card adult-final-event">

            <Row className="g-0 align-items-stretch">

              <Col lg={7}>

                <div className="adult-event-content">

                  <span className="adult-event-label">
                    ПРЕДАВАЊЕ
                  </span>

                  <h3>
                    „Знамените Румљанке“
                  </h3>

                  <p>
                    Три године касније на исти дан Александра Ћирић
                    Бошковић, тадашња председница Општине Рума, одржала
                    је предавање под називом „Знамените Румљанке“.
                    Након што је директор библиотеке Дамир Васиљевић
                    Тоскић поздравио присутне, имали смо прилику да
                    чујемо изузетно излагање о улози и значају жена у
                    нашем друштву.
                  </p>

                </div>

              </Col>


              <Col lg={5}>

                <div className="adult-event-image">

                  <AnimatedImage
                    src={osmiMart}
                    alt="Предавање „Знамените Румљанке“"
                  />

                </div>

              </Col>

            </Row>

          </article>


          {/* =================================================
              FINAL STATEMENT
          ================================================= */}

          <section className="adult-final">

            <div className="adult-final-icon">

              <LiaBookSolid />

            </div>


            <div>

              <span>
                ГРАДСКА БИБЛИОТЕКА „АТАНАСИЈЕ СТОЈКОВИЋ“
              </span>

              <h2>
                Место за књигу,
                <br />
                знање и сусрете.
              </h2>

              <p>
                Одељење за одрасле повезује библиотечки фонд,
                читаоницу и културни живот Руме.
              </p>

            </div>

          </section>


          {/* =================================================
              DECORATION
          ================================================= */}

          <div className="adult-books-decoration">

            <LiaBookSolid />

            <LiaBookSolid />

            <LiaBookSolid />

          </div>

        </section>

      </Container>
    </>
  );
};

export default Adult;

