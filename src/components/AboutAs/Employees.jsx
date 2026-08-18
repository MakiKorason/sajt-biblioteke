import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  GiBookshelf,
  GiOpenBook,
} from "react-icons/gi";
import {
  IoBookSharp,
  IoPeopleOutline,
} from "react-icons/io5";
import {
  ImUserTie,
} from "react-icons/im";
import {
  LiaUserEditSolid,
  LiaBookSolid,
} from "react-icons/lia";
import {
  CiMoneyCheck1,
} from "react-icons/ci";
import {
  FaTools,
  FaArrowRight,
} from "react-icons/fa";

import AnimatedCard from "../Department/AnimatedCard";
import { Helmet } from "react-helmet-async";

import "./Employees.css";

const Employees = () => {
  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Helmet>
        <title>
          Запослени – Градска библиотека „Атанасије Стојковић“ Рума
        </title>

        <meta
          name="description"
          content="Упознајте стручни тим Градске библиотеке „Атанасије Стојковић“ у Руми и запослене у библиотечким одељењима, администрацији и одржавању."
        />

        <link
          rel="canonical"
          href="https://www.bibliotekaruma.rs/zaposleni-biblioteke"
        />

        <meta
          property="og:title"
          content="Запослени – Градска библиотека „Атанасије Стојковић“ Рума"
        />

        <meta
          property="og:description"
          content="Упознајте стручни тим Градске библиотеке „Атанасије Стојковић“ у Руми."
        />

        <meta
          property="og:url"
          content="https://www.bibliotekaruma.rs/zaposleni-biblioteke"
        />

        <meta
          property="og:type"
          content="website"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Library",
            name: 'Градска библиотека „Атанасије Стојковић“ Рума',
            url: "https://www.bibliotekaruma.rs/zaposleni-biblioteke",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Главна 114",
              addressLocality: "Рума",
              postalCode: "22400",
              addressCountry: "RS",
            },
            openingHours: "Mo-Fr 08:00-20:00, Sa 08:00-13:00",
            telephone: "022/490-047",
          })}
        </script>
      </Helmet>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="employees-hero">

        <div className="employees-hero-background">
          <div className="employees-hero-circle circle-one"></div>
          <div className="employees-hero-circle circle-two"></div>
        </div>

        <div className="employees-hero-book employees-book-left">
          <LiaBookSolid />
        </div>

        <div className="employees-hero-book employees-book-right">
          <GiOpenBook />
        </div>

        <Container>
          <div className="employees-hero-content">

            <div className="employees-hero-label">
              <span className="employees-label-line"></span>
              ГРАДСКА БИБЛИОТЕКА „АТАНАСИЈЕ СТОЈКОВИЋ“
              <span className="employees-label-line"></span>
            </div>

            <h1>
              Наш <span>тим</span>
            </h1>

            <p>
              Људи који својим знањем, посвећеношћу и свакодневним
              радом чувају књигу, знање и културно наслеђе Руме.
            </p>

          </div>
        </Container>

      </section>

      {/* =====================================================
          INTRO / STATISTICS
      ===================================================== */}

      <Container className="employees-page">

        <section className="employees-intro">

          <div className="employees-intro-heading">

            <div className="employees-eyebrow">
              <span></span>
              НАШИ ЉУДИ
            </div>

            <h2>
              Библиотека су пре свега
              <em> људи.</em>
            </h2>

          </div>

          <div className="employees-intro-content">

            <div className="employees-intro-icon">
              <GiBookshelf />
            </div>

            <div className="employees-intro-text">

              <p>
                Градска библиотека „Атанасије Стојковић“ у Руми
                оспособљена је за стручно и квалитетно обављање
                библиотечке делатности, поштујући и примењујући
                принципе и стандарде које савремено библиотекарство
                поставља пред установе задужене за обезбеђење јавног
                интереса у области културе и информисања.
              </p>

              <p>
                Сви библиотекари запослени у Градској библиотеци
                „Атанасије Стојковић“ лиценцирани су за рад у
                COBISS програмском окружењу.
              </p>

              <p>
                Библиотека значајну пажњу посвећује и оспособљавању
                младих за обављање ове делатности, укључујући се
                у програм стручне праксе у сарадњи са Националном
                службом за запошљавање.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            STATISTICS
        ===================================================== */}

        <section className="employees-stats">

          <div className="employees-stat">

            <div className="employees-stat-icon">
              <IoPeopleOutline />
            </div>

            <div>
              <strong>16+</strong>
              <span>запослених</span>
            </div>

          </div>

          <div className="employees-stat">

            <div className="employees-stat-icon">
              <GiBookshelf />
            </div>

            <div>
              <strong>5</strong>
              <span>библиотечких целина</span>
            </div>

          </div>

          <div className="employees-stat">

            <div className="employees-stat-icon">
              <IoBookSharp />
            </div>

            <div>
              <strong>COBISS</strong>
              <span>лиценцирани библиотекари</span>
            </div>

          </div>

        </section>

        {/* =====================================================
            DEPARTMENTS
        ===================================================== */}

        <section className="employees-departments">

          <div className="employees-section-heading">

            <div className="employees-eyebrow">
              <span></span>
              БИБЛИОТЕЧКА ОДЕЉЕЊА
            </div>

            <h2>
              Стручни тим библиотеке
            </h2>

            <p>
              Наши библиотекари свакодневно помажу корисницима
              да пронађу књигу, информацију или извор знања
              који им је потребан.
            </p>

          </div>

          <Row className="g-4">

            {/* ODRASLI */}

            <Col lg={6}>

              <AnimatedCard className="employees-card">

                <div className="employees-card-top">

                  <div className="employees-card-icon">
                    <IoBookSharp />
                  </div>

                  <span className="employees-card-number">
                    01
                  </span>

                </div>

                <span className="employees-card-label">
                  БИБЛИОТЕЧКО ОДЕЉЕЊЕ
                </span>

                <h3>
                  Одељење за одрасле
                </h3>

                <div className="employees-divider"></div>

                <ul className="employees-list">

                  <li>
                    <span className="employee-role">
                      Библиотекар
                    </span>

                    <strong>
                      Марина Крањчевић
                    </strong>
                  </li>

                  <li>
                    <span className="employee-role">
                      Библиотекар
                    </span>

                    <strong>
                      Софија Лакетић Рибић
                    </strong>
                  </li>

                  <li>
                    <span className="employee-role">
                      Библиотекар
                    </span>

                    <strong>
                      Маријана Даничић
                    </strong>
                  </li>

                </ul>

                <div className="employees-card-footer">
                  <span>Стручна подршка корисницима</span>
                  <FaArrowRight />
                </div>

              </AnimatedCard>

            </Col>

            {/* DECA */}

            <Col lg={6}>

              <AnimatedCard className="employees-card">

                <div className="employees-card-top">

                  <div className="employees-card-icon">
                    <LiaUserEditSolid />
                  </div>

                  <span className="employees-card-number">
                    02
                  </span>

                </div>

                <span className="employees-card-label">
                  БИБЛИОТЕЧКО ОДЕЉЕЊЕ
                </span>

                <h3>
                  Одељење за децу
                </h3>

                <div className="employees-divider"></div>

                <ul className="employees-list">

                  <li>
                    <span className="employee-role">
                      Библиотекар
                    </span>

                    <strong>
                      Ивана Костадиновић
                    </strong>
                  </li>

                  <li>
                    <span className="employee-role">
                      Библиотекар
                    </span>

                    <strong>
                      Маријана Бизумић
                    </strong>
                  </li>

                </ul>

                <div className="employees-card-footer">
                  <span>Свет књиге за најмлађе</span>
                  <FaArrowRight />
                </div>

              </AnimatedCard>

            </Col>

            {/* NAUCNO */}

            <Col lg={6}>

              <AnimatedCard className="employees-card">

                <div className="employees-card-top">

                  <div className="employees-card-icon">
                    <GiBookshelf />
                  </div>

                  <span className="employees-card-number">
                    03
                  </span>

                </div>

                <span className="employees-card-label">
                  БИБЛИОТЕЧКО ОДЕЉЕЊЕ
                </span>

                <h3>
                  Одељење научне и стручне литературе
                </h3>

                <div className="employees-divider"></div>

                <ul className="employees-list">

                  <li>
                    <span className="employee-role">
                      Библиотекар
                    </span>

                    <strong>
                      Александра Мандић
                    </strong>
                  </li>

                  <li>
                    <span className="employee-role">
                      Библиотекар
                    </span>

                    <strong>
                      Маја Зорић
                    </strong>
                  </li>

                  <li>
                    <span className="employee-role">
                      Библиотекар
                    </span>

                    <strong>
                      Алекса Кондић
                    </strong>
                  </li>

                </ul>

                <div className="employees-card-footer">
                  <span>Научна и стручна литература</span>
                  <FaArrowRight />
                </div>

              </AnimatedCard>

            </Col>

            {/* ZAVICAJNA */}

            <Col lg={6}>

              <AnimatedCard className="employees-card">

                <div className="employees-card-top">

                  <div className="employees-card-icon">
                    <LiaBookSolid />
                  </div>

                  <span className="employees-card-number">
                    04
                  </span>

                </div>

                <span className="employees-card-label">
                  ЗБИРКА
                </span>

                <h3>
                  Завичајна збирка
                </h3>

                <div className="employees-divider"></div>

                <ul className="employees-list">

                  <li>
                    <span className="employee-role">
                      Виши библиотекар
                    </span>

                    <strong>
                      Драгана Ђорђевић
                    </strong>
                  </li>

                </ul>

                <div className="employees-card-footer">
                  <span>Културно наслеђе Руме</span>
                  <FaArrowRight />
                </div>

              </AnimatedCard>

            </Col>

            {/* CITAONICA */}

            <Col lg={6}>

              <AnimatedCard className="employees-card">

                <div className="employees-card-top">

                  <div className="employees-card-icon">
                    <IoBookSharp />
                  </div>

                  <span className="employees-card-number">
                    05
                  </span>

                </div>

                <span className="employees-card-label">
                  БИБЛИОТЕЧКИ ПРОСТОР
                </span>

                <h3>
                  Читаоница
                </h3>

                <div className="employees-divider"></div>

                <ul className="employees-list">

                  <li>
                    <span className="employee-role">
                      Књижничар
                    </span>

                    <strong>
                      Јулка Јанић
                    </strong>
                  </li>

                  <li>
                    <span className="employee-role">
                      Књижничар
                    </span>

                    <strong>
                      Драган Јанковић
                    </strong>
                  </li>

                </ul>

                <div className="employees-card-footer">
                  <span>Простор за читање и учење</span>
                  <FaArrowRight />
                </div>

              </AnimatedCard>

            </Col>

          </Row>

        </section>

        {/* =====================================================
            MANAGEMENT
        ===================================================== */}

        <section className="employees-management">

          <div className="employees-section-heading">

            <div className="employees-eyebrow">
              <span></span>
              РУКОВОДСТВО
            </div>

            <h2>
              Руководство библиотеке
            </h2>

          </div>

          <AnimatedCard className="employees-feature-card">

            <div className="employees-feature-number">
              06
            </div>

            <div className="employees-feature-icon">
              <ImUserTie />
            </div>

            <div className="employees-feature-content">

              <span className="employees-card-label">
                ДИРЕКТОР
              </span>

              <h3>
                Дамир Васиљевић Тоскић
              </h3>

              <p>
                Директор Градске библиотеке
                „Атанасије Стојковић“ у Руми.
              </p>

            </div>

            <div className="employees-feature-decoration">
              <LiaBookSolid />
            </div>

          </AnimatedCard>

        </section>

        {/* =====================================================
            ADMINISTRATION
        ===================================================== */}

        <section className="employees-other">

          <div className="employees-section-heading">

            <div className="employees-eyebrow">
              <span></span>
              ПОДРШКА РАДУ БИБЛИОТЕКЕ
            </div>

            <h2>
              Администрација и одржавање
            </h2>

          </div>

          <Row className="g-4">

            {/* ADMIN */}

            <Col lg={6}>

              <AnimatedCard className="employees-card employees-card-light">

                <div className="employees-card-top">

                  <div className="employees-card-icon">
                    <CiMoneyCheck1 />
                  </div>

                  <span className="employees-card-number">
                    07
                  </span>

                </div>

                <span className="employees-card-label">
                  АДМИНИСТРАЦИЈА
                </span>

                <h3>
                  Администрација
                </h3>

                <div className="employees-divider"></div>

                <ul className="employees-list">

                  <li>
                    <span className="employee-role">
                      Финансијско-рачуноводствени сарадник
                    </span>

                    <strong>
                      Јована Маринковић
                    </strong>
                  </li>

                  <li>
                    <span className="employee-role">
                      Правно административно финансијски референт
                    </span>

                    <strong>
                      Бранка Стојковић Поповић
                    </strong>
                  </li>

                </ul>

              </AnimatedCard>

            </Col>

            {/* ODRZAVANJE */}

            <Col lg={6}>

              <AnimatedCard className="employees-card employees-card-light">

                <div className="employees-card-top">

                  <div className="employees-card-icon">
                    <FaTools />
                  </div>

                  <span className="employees-card-number">
                    08
                  </span>

                </div>

                <span className="employees-card-label">
                  ТЕХНИЧКА ПОДРШКА
                </span>

                <h3>
                  Одржавање
                </h3>

                <div className="employees-divider"></div>

                <ul className="employees-list">

                  <li>
                    <span className="employee-role">
                      Хигијеничар-спремачица
                    </span>

                    <strong>
                      Бранкица Угреновић
                    </strong>
                  </li>

                  <li>
                    <span className="employee-role">
                      Техничар за одржавање аудио-видео система
                      и остале опреме
                    </span>

                    <strong>
                      Драган Маричић
                    </strong>
                  </li>

                </ul>

              </AnimatedCard>

            </Col>

          </Row>

        </section>

        {/* =====================================================
            BOTTOM DECORATION
        ===================================================== */}

        <div className="employees-books-decoration">

          <span></span>

          <LiaBookSolid />

          <LiaBookSolid />

          <LiaBookSolid />

          <span></span>

        </div>

      </Container>
    </>
  );
};

export default Employees;