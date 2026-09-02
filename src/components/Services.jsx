import React from "react";

import { Container, Table } from "react-bootstrap";

import { Helmet } from "react-helmet-async";

import {
  IoBookSharp,
  IoLibraryOutline,
  IoDocumentTextOutline,
  IoCardOutline,
} from "react-icons/io5";

import {
  LiaBookSolid,
} from "react-icons/lia";

import { GiOpenBook } from "react-icons/gi";

import AnimatedCard from "./Department/AnimatedCard";
import AnimatedContainer from "../AnimatedContainer";

import "./Services.css";


const Services = () => {

  /* =====================================================
     SEO
  ===================================================== */

  const pageTitle =
    'Услуге – Градска библиотека „Атанасије Стојковић“ Рума';

  const pageDescription =
    'Услуге Градске библиотеке „Атанасије Стојковић“ у Руми: чланарина, позајмица књига, међубиблиотечка позајмица, резервација грађе и друге услуге.';

  const canonicalUrl =
    "https://www.bibliotekaruma.rs/usluge-biblioteka-ruma";


  /* =====================================================
     STRUCTURED DATA
  ===================================================== */

  const structuredData = {

    "@context": "https://schema.org",

    "@type": "Library",

    "@id": `${canonicalUrl}#library`,

    name:
      'Градска библиотека „Атанасије Стојковић“ Рума',

    url: canonicalUrl,

    description: pageDescription,

    address: {

      "@type": "PostalAddress",

      streetAddress: "Главна 114",

      addressLocality: "Рума",

      postalCode: "22400",

      addressCountry: "RS",

    },

    telephone:
      "022/490-047",

    openingHours:
      "Mo-Fr 08:00-20:00, Sa 08:00-13:00",

    hasOfferCatalog: {

      "@type": "OfferCatalog",

      name:
        "Услуге и ценовник библиотеке",

      itemListElement: [

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",
            name:
              "Чланарина за средњошколце, студенте, запослене и незапослене",
          },

          price: "700",

          priceCurrency: "RSD",
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",
            name:
              "Чланарина за пензионере",
          },

          price: "300",

          priceCurrency: "RSD",
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",
            name:
              "Дупликат чланске карте",
          },

          price: "50",

          priceCurrency: "RSD",
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",
            name:
              "Пенал по дану кашњења",
          },

          price: "5",

          priceCurrency: "RSD",
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",
            name:
              "Накнада за изгубљену грађу",
          },

          price: "600",

          priceCurrency: "RSD",
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",
            name:
              "Накнада за оштећену грађу",
          },

          price: "400",

          priceCurrency: "RSD",
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",
            name:
              "Трошкови опомене",
          },

          price: "40",

          priceCurrency: "RSD",
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",
            name:
              "Међубиблиотечка позајмица",
          },

          price: "700",

          priceCurrency: "RSD",
        },

      ],

    },

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

        <link
          rel="alternate"
          hreflang="sr"
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

        <meta
          property="og:image"
          content="https://www.bibliotekaruma.rs/images/DJNA1.webp"
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
          content="https://www.bibliotekaruma.rs/images/DJNA1.webp"
        />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

      </Helmet>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="services-hero">

        <div className="services-hero-background">

          <div className="services-hero-circle circle-one"></div>

          <div className="services-hero-circle circle-two"></div>

        </div>


        <div className="services-hero-book services-book-left">

       <IoCardOutline />

        </div>


        <div className="services-hero-book services-book-right">

          <GiOpenBook />

        </div>


        <Container>

          <div className="services-hero-content">

            <div className="services-hero-label">

              ГРАДСКА БИБЛИОТЕКА „АТАНАСИЈЕ СТОЈКОВИЋ“

            </div>


            <h1>

              <em>Услуге</em> библиотеке

            </h1>


            <p>

              Све што вам је потребно за лакше коришћење
              библиотечког фонда, приступ информацијама
              и коришћење услуга наше библиотеке.

            </p>

          </div>

        </Container>

      </section>


      {/* =====================================================
          MAIN PAGE
      ===================================================== */}

      <Container className="services-page">


        {/* =====================================================
            PRAVILA
        ===================================================== */}

        <section className="services-intro">

          <div className="services-section-heading">

            <span>
              КОРИШЋЕЊЕ БИБЛИОТЕКЕ
            </span>


            <h2>
              Правила за кориснике
            </h2>


            <p>
              Основне информације о коришћењу библиотечке
              грађе, роковима позајмице и обавезама корисника.
            </p>

          </div>


          <AnimatedContainer className="services-main-card">

            <div className="services-main-icon">

              <IoBookSharp />

            </div>


            <div className="services-tabs">

              <ul
                className="nav nav-tabs"
                role="tablist"
              >

                <li className="nav-item">

                  <a
                    className="nav-link active"
                    data-bs-toggle="tab"
                    href="#services-rules"
                    role="tab"
                  >
                    ПРАВИЛА
                  </a>

                </li>


                <li className="nav-item">

                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#services-loan"
                    role="tab"
                  >
                    ПОЗАЈМИЦА
                  </a>

                </li>


                <li className="nav-item">

                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#services-other"
                    role="tab"
                  >
                    ОСТАЛО
                  </a>

                </li>

              </ul>


              <div className="tab-content">


                {/* PRAVILA */}

                <div
                  id="services-rules"
                  className="tab-pane active"
                >

                  <p>
                    Правилник о раду са корисницима и начину
                    коришћења библиотечке грађе.
                  </p>

                </div>


                {/* POZAJMICA */}

                <div
                  id="services-loan"
                  className="tab-pane fade"
                >

                  <p>
                    <strong>1.</strong> Публикације Одељења
                    за одрасле, Одељења за децу и Одељења
                    научне и стручне литературе могу се
                    задржати 14 дана уз могућност продужетка.
                  </p>


                  <p>
                    <strong>2.</strong> Публикације Завичајног
                    одељења, Референсне збирке и легати
                    користе се у Читаоници Градске библиотеке.
                  </p>


                  <p>
                    <strong>3.</strong> Чланарина се плаћа
                    на годишњем нивоу, док је за децу до
                    завршетка основне школе чланарина бесплатна.
                  </p>

                </div>


                {/* OSTALO */}

                <div
                  id="services-other"
                  className="tab-pane fade"
                >

                  <p>
                    <strong>4.</strong> На једну чланску карту
                    могуће је позајмити највише 3 књиге.
                  </p>


                  <p>
                    <strong>5.</strong> Читалац који је изгубио
                    или оштетио књигу треба да купи књигу истог
                    наслова или да плати накнаду за изгубљену
                    или оштећену грађу.
                  </p>


                  <p>
                    <strong>6.</strong> Сви корисници треба
                    да враћају књиге на време. Сваки дан
                    кашњења се наплаћује 5 динара по књизи.
                  </p>


                  <p>
                    <strong>7.</strong> Корисницима резервишемо
                    грађу која тренутно није доступна у фонду.
                  </p>

                </div>

              </div>

            </div>

          </AnimatedContainer>

        </section>


        {/* =====================================================
            MEĐUBIBLIOTEČKA POZAJMICA
        ===================================================== */}

        <section className="services-interlibrary">

          <div className="services-section-heading">

            <span>
              ПОСЕБНА УСЛУГА
            </span>


            <h2>
              Међубиблиотечка позајмица
            </h2>


            <p>
              Прибављање библиотечке грађе коју наша
              библиотека тренутно нема у свом фонду.
            </p>

          </div>


          <AnimatedCard className="interlibrary-card">

            <div className="interlibrary-intro">

              <p>
                Међубиблиотечка позајмица је једна од услуга
                коју пружа наша установа. Ова услуга подразумева
                прибављање библиотечке грађе коју Градска
                библиотека не поседује у свом фонду, а потребна
                је корисницима.
              </p>


              <p>
                Услугу међубиблиотечке позајмице могу користити
                сви чланови наше библиотеке. Овом услугом могу
                се поручити монографске публикације, као и
                периодика (чланци).
              </p>


              <p>
                Књиге се позајмљују на период од 15 дана,
                а услуга се наплаћује према утврђеном
                Ценовнику Градске библиотеке
                „Атанасије Стојковић“.
              </p>

            </div>


            <div className="instruction-grid">


              {/* KORISNICI */}

              <div className="instruction-box">

                <span className="instruction-number">
                  01
                </span>


                <div className="instruction-icon">

                  <IoDocumentTextOutline />

                </div>


                <h3>
                  Упутство за кориснике
                </h3>


                <ol>

                  <li>
                    Проверите да ли потребну књигу Градска
                    библиотека поседује у свом фонду.
                  </li>


                  <li>
                    Уколико је не поседује, извршите претрагу
                    Централног електронског каталога COBISS.SR.
                  </li>


                  <li>
                    Попуните Захтев за међубиблиотечку
                    позајмицу. Образац можете преузети онлајн.
                  </li>


                  <li>
                    Захтев попуните и пошаљите на:

                    <a
                      href="mailto:gradskabibliotekaruma@gmail.com"
                    >
                      gradskabibliotekaruma@gmail.com
                    </a>

                  </li>


                  <li>
                    О приспећу књиге корисник ће бити
                    благовремено обавештен телефонским путем
                    или електронском поштом.
                  </li>

                </ol>


                <a
                  href="/Obrazac za korisnike.doc"
                  download
                  className="services-download"
                >
                  Преузмите образац
                </a>

              </div>


              {/* BIBLIOTEKE */}

              <div className="instruction-box">

                <span className="instruction-number">
                  02
                </span>


                <div className="instruction-icon">

                  <IoLibraryOutline />

                </div>


                <h3>
                  Упутство за библиотеке
                </h3>


                <p>
                  Библиотеке које желе да остваре услугу
                  међубиблиотечке позајмице од Градске
                  библиотеке „Атанасије Стојковић“ потребно
                  је да попуне образац и пошаљу га на:
                </p>


                <a
                  href="mailto:gradskabibliotekaruma@gmail.com"
                  className="instruction-email"
                >
                  gradskabibliotekaruma@gmail.com
                </a>


                <a
                  href="/Obrazac za biblioteke.doc"
                  download
                  className="services-download"
                >
                  Преузмите образац
                </a>

              </div>

            </div>

          </AnimatedCard>

        </section>


        {/* =====================================================
            CENOVNIK
        ===================================================== */}

        <section className="services-price">

          <div className="services-section-heading">

            <span>
              ЦЕНОВНИК
            </span>


            <h2>
              Услуге и накнаде
            </h2>


            <p>
              Преглед актуелних цена библиотечких услуга.
            </p>

          </div>


          <div className="price-card">


            <div className="price-card-header">

              <div>

                <span className="price-card-label">
                  ГРАДСКА БИБЛИОТЕКА
                </span>


                <h3>
                  Ценовник библиотеке
                </h3>

              </div>


              <div className="price-card-icon">

                <IoCardOutline />

              </div>

            </div>


            <div className="table-responsive">

              <Table className="modern-price-table">

                <thead>

                  <tr>

                    <th>
                      Услуга
                    </th>

                    <th>
                      Цена
                    </th>

                  </tr>

                </thead>


                <tbody>

                  <tr>

                    <td>
                      Чланарина за средњошколце,
                      студенте, запослене и незапослене
                    </td>

                    <td>
                      700,00
                    </td>

                  </tr>


                  <tr>

                    <td>
                      Чланарина за пензионере
                    </td>

                    <td>
                      300,00
                    </td>

                  </tr>


                  <tr>

                    <td>
                      Дупликат чланске карте
                    </td>

                    <td>
                      50,00
                    </td>

                  </tr>


                  <tr>

                    <td>
                      Пенал (по дану кашњења)
                    </td>

                    <td>
                      5,00
                    </td>

                  </tr>


                  <tr>

                    <td>
                      Накнада за изгубљену грађу
                    </td>

                    <td>
                      600,00
                    </td>

                  </tr>


                  <tr>

                    <td>
                      Накнада за оштећену грађу
                    </td>

                    <td>
                      400,00
                    </td>

                  </tr>


                  <tr>

                    <td>
                      Трошкови опомене
                    </td>

                    <td>
                      40,00
                    </td>

                  </tr>


                  <tr>

                    <td>
                      Међубиблиотечка позајмица
                    </td>

                    <td>
                      700,00
                    </td>

                  </tr>

                </tbody>

              </Table>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL
        ===================================================== */}

        <div className="services-final">

          <div className="services-final-icon">

            <LiaBookSolid />

          </div>


          <p>
            Градска библиотека „Атанасије Стојковић“ настоји
            да својим корисницима омогући доступност библиотечке
            грађе, информација и савремених библиотечких услуга
            у складу са њиховим потребама.
          </p>

        </div>


        {/* =====================================================
            BOTTOM DECORATION
        ===================================================== */}

        <div className="services-books-decoration">

          <LiaBookSolid />

          <LiaBookSolid />

          <LiaBookSolid />

        </div>


      </Container>

    </>
  );
};


export default Services;