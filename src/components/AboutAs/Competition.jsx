import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";

import { Helmet } from "react-helmet-async";

import {
  FaFileAlt,
  FaBookOpen,
  FaUsers,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPenFancy,
  FaCalendarAlt,
  FaCheckCircle,
  FaAward,
} from "react-icons/fa";

import AnimatedCard from "../Department/AnimatedCard";

import konkurs from "../../images/konkurs.webp";

import "./Competition.css";


const Competition = () => {

  /* =====================================================
     SEO
  ===================================================== */

  const pageTitle =
    'Књижевни конкурс „Атанасије Стојковић“ – Библиотека Рума';

  const pageDescription =
    'Књижевни конкурс „Атанасије Стојковић“ за први необјављени роман на српском језику. Погледајте услове конкурса, начин пријаве и адресу за достављање рукописа.';

  const canonicalUrl =
    "https://www.bibliotekaruma.rs/konkurs-biblioteke";


  const structuredData = {

    "@context": "https://schema.org",

    "@type": "Library",

    name:
      'Градска библиотека „Атанасије Стојковић“ Рума',

    url: canonicalUrl,

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
      "+38122490047",

  };


  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Helmet>

        <title>
          {pageTitle}
        </title>


        <meta
          name="description"
          content={pageDescription}
        />


        <link
          rel="canonical"
          href={canonicalUrl}
        />


        <meta
          property="og:title"
          content="Књижевни конкурс „Атанасије Стојковић“"
        />


        <meta
          property="og:description"
          content="Конкурс за први необјављени роман на српском језику у организацији Градске библиотеке „Атанасије Стојковић“ у Руми."
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


        <meta
          property="og:image"
          content="https://www.bibliotekaruma.rs/images/konkurs.webp"
        />


        <meta
          name="twitter:card"
          content="summary_large_image"
        />


        <meta
          name="twitter:title"
          content={pageTitle}
        />


        <meta
          name="twitter:description"
          content={pageDescription}
        />


        <meta
          name="twitter:image"
          content="https://www.bibliotekaruma.rs/images/konkurs.webp"
        />


        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

      </Helmet>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="competition-hero">


        {/* BACKGROUND */}

        <div className="competition-hero-background">

          <div className="competition-hero-circle competition-circle-one"></div>

          <div className="competition-hero-circle competition-circle-two"></div>

        </div>


        {/* LEVA IKONA */}

        <div className="competition-hero-decoration competition-decoration-left">

          <FaPenFancy />

        </div>


        {/* DESNA IKONA */}

        <div className="competition-hero-decoration competition-decoration-right">

          <FaBookOpen />

        </div>


        <Container>

          <div className="competition-hero-content">


            <div className="competition-hero-label">

              <span></span>

              ГРАДСКА БИБЛИОТЕКА „АТАНАСИЈЕ СТОЈКОВИЋ“

              <span></span>

            </div>


            <h1>
              Књижевни
              <br />
              <em>конкурс</em>
            </h1>


            <p className="competition-hero-title">

              „Атанасије Стојковић“

            </p>


            <span className="competition-hero-subtitle">

              За први необјављени роман на српском језику

            </span>

          </div>

        </Container>

      </section>


      {/* =====================================================
          MAIN PAGE
      ===================================================== */}

      <Container className="competition-page">


        {/* =====================================================
            UVODNA SEKCIJA
        ===================================================== */}

        <section className="competition-intro">


          <div className="competition-section-heading">

            <div className="competition-eyebrow">

              <span></span>

              КЊИЖЕВНИ КОНКУРС

            </div>


            <h2>

              Речи које заслужују
              <br />
              <em>да буду прочитане</em>

            </h2>


            <p>

              Градска библиотека „Атанасије Стојковић“ расписује књижевни
              конкурс за први необјављени роман написан на српском језику.

            </p>

          </div>


          <Row className="align-items-center g-5">


            {/* IMAGE */}

            <Col lg={5} className="text-center">

              <AnimatedCard className="competition-image-card">

                <img
                  src={konkurs}
                  alt="Илустрација књижевног конкурса „Атанасије Стојковић“"
                  className="competition-image"
                  loading="lazy"
                />

              </AnimatedCard>

            </Col>


            {/* TEXT */}

            <Col lg={7}>

              <div className="competition-intro-text">


                <div className="competition-highlight">

                  <FaAward />


                  <div>

                    <strong>
                      Књижевни конкурс „Атанасије Стојковић“
                    </strong>


                    <span>
                      Прилика за нове ауторе и необјављене романе.
                    </span>

                  </div>

                </div>


                <p>

                  Конкурс је намењен ауторима који желе да својим првим
                  необјављеним романом учествују у избору за књижевну награду
                  која носи име значајне личности наше културне историје.

                </p>


                <p>

                  Посебна пажња посвећена је анонимности аутора током
                  вредновања рукописа, како би жири могао да донесе одлуку
                  искључиво на основу књижевног квалитета дела.

                </p>

              </div>

            </Col>

          </Row>

        </section>


        {/* =====================================================
            INFORMACIJE
        ===================================================== */}

        <section className="competition-info">


          <Row className="g-4">


            {/* ROK */}

            <Col md={4}>

              <AnimatedCard className="competition-info-card">

                <div className="competition-info-icon">

                  <FaCalendarAlt />

                </div>


                <span>
                  РОК ЗА ПРИЈАВУ
                </span>


                <h3>
                  21. јул – 15. новембар 2026.
                </h3>

              </AnimatedCard>

            </Col>


            {/* VRSTA DELA */}

            <Col md={4}>

              <AnimatedCard className="competition-info-card">

                <div className="competition-info-icon">

                  <FaBookOpen />

                </div>


                <span>
                  ВРСТА ДЕЛА
                </span>


                <h3>
                  Први необјављени роман
                </h3>

              </AnimatedCard>

            </Col>


            {/* UČESNICI */}

            <Col md={4}>

              <AnimatedCard className="competition-info-card">

                <div className="competition-info-icon">

                  <FaUsers />

                </div>


                <span>
                  КО МОЖЕ УЧЕСТВОВАТИ
                </span>


                <h3>
                  Аутори из Србије и расејања
                </h3>

              </AnimatedCard>

            </Col>

          </Row>

        </section>


        {/* =====================================================
            USLOVI KONKURSA
        ===================================================== */}

        <section className="competition-conditions">


          <div className="competition-section-heading">

            <div className="competition-eyebrow">

              <span></span>

              УСЛОВИ КОНКУРСА

            </div>


            <h2>
              Све што је потребно
              <br />
              <em>за пријаву</em>
            </h2>


            <p>
              Пре слања рукописа пажљиво проверите све услове конкурса.
            </p>

          </div>


          <AnimatedCard className="competition-conditions-card">


            {/* 01 */}

            <div className="competition-condition">


              <div className="competition-condition-icon">

                <FaCheckCircle />

              </div>


              <div>

                <h3>
                  Ко може учествовати?
                </h3>


                <p>

                  Конкурс се односи на први, до сада необјављени роман
                  написан на српском језику. Право учешћа имају аутори
                  из Србије и расејања.

                </p>

              </div>

            </div>


            {/* 02 */}

            <div className="competition-condition">


              <div className="competition-condition-icon">

                <FaCalendarAlt />

              </div>


              <div>

                <h3>
                  Рок за достављање
                </h3>


                <p>

                  Конкурс је отворен од{" "}

                  <strong>
                    21. јула до 15. новембра 2026. године.
                  </strong>

                </p>

              </div>

            </div>


            {/* 03 */}

            <div className="competition-condition">


              <div className="competition-condition-icon">

                <FaFileAlt />

              </div>


              <div>

                <h3>
                  Шта треба доставити?
                </h3>


                <p>

                  Аутори своје рукописе достављају под шифром, а не под
                  именом и презименом, како би се обезбедила потпуна
                  анонимност током рада жирија.

                </p>


                <div className="competition-documents">


                  {/* PRIJAVA */}

                  <div className="competition-document">

                    <FaFileAlt />


                    <div>

                      <strong>
                        Попуњена пријава за конкурс
                      </strong>


                      <span>
                        Образац можете преузети овде.
                      </span>


                     <Button
  onClick={() => window.open("/konkurs.pdf", "_blank")}
  className="competition-download-button"
  aria-label="Преузми пријаву за конкурс"
>
  <FaFileAlt />
  Преузми пријаву
</Button>

                    </div>

                  </div>


                  {/* RUKOPIS */}

                  <div className="competition-document">

                    <FaBookOpen />


                    <div>

                      <strong>
                        Рукопис романа
                      </strong>


                      <span>
                        Рукопис одштампан у три примерка.
                      </span>

                    </div>

                  </div>


                  {/* ELEKTRONSKA VERZIJA */}

                  <div className="competition-document">

                    <FaFileAlt />


                    <div>

                      <strong>
                        Електронска верзија рукописа
                      </strong>


                      <span>
                        WORD или PDF формат, достављен на USB меморији
                        или CD-у.
                      </span>

                    </div>

                  </div>


                  {/* KOVERTA */}

                  <div className="competition-document">

                    <FaUsers />


                    <div>

                      <strong>
                        Мала затворена коверта
                      </strong>


                      <span>
                        Коверта са разрешењем шифре и личним подацима аутора.
                      </span>

                    </div>

                  </div>


                </div>

              </div>

            </div>


            {/* 04 */}

            <div className="competition-condition">


              <div className="competition-condition-icon">

                <FaUsers />

              </div>


              <div>

                <h3>
                  Састав жирија
                </h3>


                <p>

                  Пристигле рукописе оцењиваће трочлани жири састављен од
                  једног књижевника, једног књижевног критичара и једног
                  представника Градске библиотеке „Атанасије Стојковић“.

                </p>

              </div>

            </div>


            {/* 05 */}

            <div className="competition-condition">


              <div className="competition-condition-icon">

                <FaAward />

              </div>


              <div>

                <h3>
                  Шта обезбеђује библиотека?
                </h3>


                <p>

                  Градска библиотека „Атанасије Стојковић“ сноси трошкове
                  лектуре, коректуре, припреме за штампу и техничког
                  уређења награђеног романа.

                </p>

              </div>

            </div>


            {/* VAŽNO */}

            <div className="competition-important">

              <strong>
                Важно
              </strong>


              <p>

                Жири чита и оцењује рукописе искључиво под шифром.
                Коверта са личним подацима отвара се тек након доношења
                одлуке о награђеном рукопису, чиме се обезбеђује потпуна
                непристрасност поступка.

              </p>

            </div>


          </AnimatedCard>

        </section>


        {/* =====================================================
            ADRESA
        ===================================================== */}

        <section className="competition-contact">


          <div className="competition-section-heading">

            <div className="competition-eyebrow">

              <span></span>

              ДОСТАВЉАЊЕ РАДОВА

            </div>


            <h2>
              Где послати
              <br />
              <em>рукопис?</em>
            </h2>

          </div>


          <Row className="g-4">


            {/* ADRESA */}

            <Col lg={7}>

              <AnimatedCard className="competition-address-card">


                <div className="competition-contact-icon">

                  <FaMapMarkerAlt />

                </div>


                <div>

                  <span className="competition-contact-label">

                    АДРЕСА ЗА ДОСТАВЉАЊЕ

                  </span>


                  <h3>

                    Градска библиотека „Атанасије Стојковић“

                  </h3>


                  <p>

                    (за Конкурс „Атанасије Стојковић“)

                    <br />

                    Главна 114

                    <br />

                    22400 Рума

                  </p>

                </div>

              </AnimatedCard>

            </Col>


            {/* KONTAKT */}

            <Col lg={5}>

              <AnimatedCard className="competition-contact-card">


                <div className="competition-contact-item">


                  <FaPhone />


                  <div>

                    <span>
                      ТЕЛЕФОН
                    </span>


                    <strong>
                      060/505-39-23
                    </strong>


                    <small>
                      Ивана Костадиновић
                    </small>

                  </div>

                </div>


                <div className="competition-contact-item">


                  <FaEnvelope />


                  <div>

                    <span>
                      E-MAIL
                    </span>


                    <strong>
                      gbasruma@gmail.com
                    </strong>

                  </div>

                </div>


              </AnimatedCard>

            </Col>

          </Row>

        </section>


        {/* =====================================================
            ZAVRŠNA PORUKA
        ===================================================== */}

        <section className="competition-final">


          <div className="competition-final-icon">

            <FaPenFancy />

          </div>


          <div className="competition-eyebrow competition-eyebrow-light">

            <span></span>

            ВАШЕ РЕЧИ МОГУ ПОСТАТИ КЊИГА

            <span></span>

          </div>


          <h2>

            Можда је управо ваш роман следећа прича
            коју ће читати хиљаде људи.

          </h2>


          <p>

            Позивамо ауторе да своје рукописе пријаве на конкурс
            „Атанасије Стојковић“.

          </p>

        </section>


        {/* =====================================================
            BOTTOM DECORATION
        ===================================================== */}

        <div className="competition-books-decoration">


          <span></span>


          <FaBookOpen />


          <FaPenFancy />


          <FaBookOpen />


          <span></span>


        </div>


      </Container>

    </>
  );
};


export default Competition;