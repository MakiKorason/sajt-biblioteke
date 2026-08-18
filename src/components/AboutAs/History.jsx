import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { LiaBookSolid } from 'react-icons/lia';

import AnimatedImage from '../Department/AnimatedImage';
import AnimatedCard from '../Department/AnimatedCard';

import DJNA from '../../images/DJNA.webp';
import DJNA1 from '../../images/DJNA1.webp';

import './History.css';

const History = () => {
  const pageTitle =
    'Историјат – Градска библиотека „Атанасије Стојковић“ Рума';

  const pageDescription =
    'Историјат Градске библиотеке „Атанасије Стојковић“ у Руми, њена зграда, архитектура и значај у локалној заједници.';

  const canonicalUrl =
    'https://www.bibliotekaruma.rs/istorijat-biblioteke';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Library',
    '@id': `${canonicalUrl}#library`,
    name: 'Градска библиотека „Атанасије Стојковић“ Рума',
    url: canonicalUrl,
    description: pageDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Главна 114',
      addressLocality: 'Рума',
      postalCode: '22400',
      addressCountry: 'RS',
    },
    openingHours: 'Mo-Fr 08:00-20:00, Sa 08:00-13:00',
    telephone: '022/490-047',
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
          hreflang="sr"
          href={canonicalUrl}
        />

        {/* Open Graph */}

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

        <meta
          property="og:image"
          content="https://www.bibliotekaruma.rs/images/DJNA1.webp"
        />

        {/* Twitter */}

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
          content="https://www.bibliotekaruma.rs/images/DJNA1.webp"
        />

        {/* Structured Data */}

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="history-hero">

        <div className="history-hero-decoration history-hero-decoration-left"></div>

        <div className="history-hero-decoration history-hero-decoration-right"></div>

        <div className="history-hero-content">

          <span className="history-hero-label">
            ГРАДСКА БИБЛИОТЕКА „АТАНАСИЈЕ СТОЈКОВИЋ“
          </span>

          <h1>
            Историјат библиотеке
          </h1>

          <p>
            Више од једног века културе, образовања,
            књиге и очувања културне баштине Руме.
          </p>

        </div>

      </section>


      <Container className="history-page">


        {/* =====================================================
            UVOD / ISTORIJAT
        ===================================================== */}

        <section className="history-intro">

          <div className="history-section-heading">

            <span>
              О НАШОЈ БИБЛИОТЕЦИ
            </span>

            <h2>
              Од најстарије културне установе
              до савремене библиотеке
            </h2>

          </div>


          <Row className="g-5 align-items-start">

            <Col lg={8}>

              <div className="history-text">

                <p>
                  Градска библиотека „Атанасије Стојковић“ у Руми,
                  као најстарија културна институција у овом крају,
                  од самог оснивања игра значајну улогу у очувању и
                  промоцији културе и образовања.
                </p>

                <p>
                  Иако је једно време била интегрисана у рад
                  Културног центра, 1991. године одлуком Скупштине
                  општине Рума, библиотека је постала самостална
                  установа, носећи назив Градска библиотека.
                </p>

                <p>
                  Овај корак јој је омогућио да настави са својом
                  мисијом и деловањем као независна културна
                  институција, па је 2011. године своје име
                  обогатила именом српског научника и просветитеља,
                  Атанасија Стојковића.
                </p>

                <p>
                  За свој рад добила је значајна друштвена и
                  професионална признања.
                </p>

              </div>

            </Col>


            {/* KLJUCNE GODINE */}

            <Col lg={4}>

              <div className="history-years-card">

                <div className="history-years-header">

                  <span>
                    КЉУЧНЕ ГОДИНЕ
                  </span>

                  <LiaBookSolid />

                </div>


                <div className="history-year">

                  <strong>
                    1954.
                  </strong>

                  <p>
                    Награда Савета за просвету и културу
                    НР Србије.
                  </p>

                </div>


                <div className="history-year">

                  <strong>
                    1986.
                  </strong>

                  <p>
                    Повеља Културно-просветне заједнице Србије.
                  </p>

                </div>


                <div className="history-year">

                  <strong>
                    1988.
                  </strong>

                  <p>
                    Награда „Доситеј Обрадовић“
                    подружнице библиотекара Срема.
                  </p>

                </div>


                <div className="history-year">

                  <strong>
                    1991.
                  </strong>

                  <p>
                    Библиотека постаје самостална установа.
                  </p>

                </div>


                <div className="history-year">

                  <strong>
                    2007.
                  </strong>

                  <p>
                    Библиотека постаје пуноправна чланица
                    COBISS.SR.
                  </p>

                </div>


                <div className="history-year">

                  <strong>
                    2011.
                  </strong>

                  <p>
                    Установа добија име Атанасија Стојковића.
                  </p>

                </div>

              </div>

            </Col>

          </Row>


          {/* COBISS */}

          <div className="history-highlight">

            <div className="history-highlight-icon">
              <LiaBookSolid />
            </div>

            <div>

              <span>
                САВРЕМЕНА БИБЛИОТЕЧКА УСЛУГА
              </span>

              <p>
                Од 2007. године пуноправна је чланица COBISS.SR,
                а од јула 2010. године укључена је у стварно
                COBISS/OPAC окружење и све услуге корисницима
                пружа преко овог сервиса.
              </p>

              <p>
                Свети Јован Богослов је заштитник Градске
                библиотеке, и тај дан се као слава обележава
                од 2007. године.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            NOVA ZGRADA
        ===================================================== */}

        <section className="history-building">

          <div className="history-section-heading">

            <span>
              НОВА ЗГРАДА
            </span>

            <h2>
              Нови простор за савремену библиотеку
            </h2>

            <p>
              После више од седам деценија библиотека је
              пресељена на нову локацију.
            </p>

          </div>


          <Row className="g-5 align-items-center">

            <Col lg={5}>

              <div className="history-text">

                <p>
                  Након више од седам деценија Градска библиотека
                  „Атанасије Стојковић“ је пресељена на нову
                  локацију.
                </p>

                <p>
                  Услед повећања броја публикација, услуга које
                  пружа, техничке опремљености, као и потребе
                  корисника, уз подршку локалне самоуправе
                  пронашло се решење у виду адаптације зграде
                  Дома војске.
                </p>

              </div>

            </Col>


            <Col lg={7}>

              <AnimatedCard className="history-video-card">

                <div className="history-video">

                  <iframe
                    src="https://www.youtube-nocookie.com/embed/ec6NLWV8qaM"
                    title="Нова зграда Градске библиотеке Рума"
                    allowFullScreen
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>

                </div>

              </AnimatedCard>

            </Col>

          </Row>

        </section>


        {/* =====================================================
            SPOMENIK KULTURE
        ===================================================== */}

        <section className="history-cultural-building">

          <Row className="g-5 align-items-center">

            <Col lg={6}>

              <div className="history-image-card">

                <AnimatedImage
                  src={DJNA1}
                  alt="Зграда Дома војске, данашња Градска библиотека у Руми"
                  className="history-main-image"
                />

              </div>

            </Col>


            <Col lg={6}>

              <div className="history-section-heading history-heading-left">

                <span>
                  СПОМЕНИК КУЛТУРЕ
                </span>

                <h2>
                  Зграда са богатом архитектонском историјом
                </h2>

              </div>


              <div className="history-text">

                <p>
                  Зграда је споменик културе, и на тај начин се
                  ово здање чува од заборава, дајући му нову функцију
                  у виду културног средишта локалне заједнице,
                  кроз рад савремене библиотеке.
                </p>

                <p>
                  Објекат је изграђен у стилу тада веома модерне
                  сецесије и Хисторизма и припада периоду
                  Југендштила.
                </p>

                <p>
                  Градња је завршена 1912. године, под надзором
                  пројектанта Осјечанина Виктора Аксмана.
                </p>

              </div>

            </Col>

          </Row>

        </section>


        {/* =====================================================
            ARHITEKTURA
        ===================================================== */}

        <section className="history-architecture">

          <div className="history-section-heading">

            <span>
              АРХИТЕКТУРА
            </span>

            <h2>
              Архитектонски опис
            </h2>

          </div>


          <Row className="g-5 align-items-center">

            <Col lg={6}>

              <div className="history-text">

                <p>
                  На југозападном углу раскрснице Главне и улице
                  Владимира Назора је двоспратна зграда,
                  зарубљеног прочеља са мањим троделним тремом
                  ослоњеним на два снажна вретенаста стуба.
                </p>

                <p>
                  Изнад се налази велики двокрилни полукружни
                  прозор.
                </p>

              </div>


              <div className="history-image-card history-image-card-small">

                <AnimatedImage
                  src={DJNA}
                  alt="Стара зграда библиотеке у Руми"
                  className="history-main-image"
                />

              </div>

            </Col>


            <Col lg={6}>

              <div className="history-text">

                <p>
                  У главну зграду узидане су две идентичне фигуре
                  деке који унуку предаје тамбурицу, која је
                  романтичарски симбол очувања и наставка
                  националне традиције.
                </p>

                <p>
                  Скулптура је названа по песми „Деда и унук“,
                  Јована Јовановића Змаја.
                </p>

                <p>
                  Пространа луковичаста купола, са шиљастим
                  декоративним завршетком, чини врх главне зграде.
                </p>

                <p>
                  Посебни естетски доживљај дају овални прозори
                  са бојеним стакленим пољима.
                </p>

                <p>
                  Са обе стране, у обе улице, на централну зграду
                  се наслањају симетрична приземна крила.
                  На северном крилу се налазе три прозора,
                  а на источном пет мањих.
                </p>

              </div>

            </Col>

          </Row>


          {/* ZAVRSNI TEKST */}

          <div className="history-final">

            <div className="history-final-icon">
              <LiaBookSolid />
            </div>

            <p>
              Зграда Градске библиотеке „Атанасије Стојковић“
              представља пример јединственог архитектонског
              стваралаштва, са изразитим карактеристикама
              средњоевропске сецесије, уз знатно присуство
              елемената традиционалне архитектуре.
            </p>

          </div>

        </section>


        {/* =====================================================
            DECORATION
        ===================================================== */}

        <div className="history-books-decoration">

          <LiaBookSolid />
          <LiaBookSolid />
          <LiaBookSolid />

        </div>

      </Container>
    </>
  );
};

export default History;