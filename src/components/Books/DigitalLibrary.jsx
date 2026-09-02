import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import { Helmet } from "react-helmet-async";

import ImageModal from "../ImageModal";
import AnimatedImage from "../Department/AnimatedImage";
import { GiOpenBook } from "react-icons/gi";

import digitalna2 from "../../images/digitalna2.webp";

import {
  LiaBookSolid,
  LiaLaptopSolid,
} from "react-icons/lia";

import "./DigitalLibrary.css";


const DigitalLibrary = () => {

  /* =====================================================
     IMAGE MODAL
  ===================================================== */

  const [showImageModal, setShowImageModal] = useState(false);

  const [selectedImage, setSelectedImage] = useState({
    src: "",
    alt: "",
    title: "",
  });


  const handleImageClick = (
    imageSrc,
    imageAlt,
    imageTitle
  ) => {

    setSelectedImage({
      src: imageSrc,
      alt: imageAlt,
      title: imageTitle,
    });

    setShowImageModal(true);
  };


  const handleCloseImageModal = () => {

    setShowImageModal(false);

    setSelectedImage({
      src: "",
      alt: "",
      title: "",
    });

  };


  /* =====================================================
     SEO
  ===================================================== */

  const pageTitle =
    'Дигитална библиотека – Градска библиотека „Атанасије Стојковић“ Рума';

  const pageDescription =
    'Дигитална библиотека „Атанасије Стојковић“ Рума – приступ дигитализованој културној баштини, књигама, публикацијама и грађи од значаја за Руму и околину.';

  const canonicalUrl =
    "https://www.bibliotekaruma.rs/digitalna-biblioteka";


  const structuredData = {

    "@context": "https://schema.org",

    "@type": "WebPage",

    "@id": `${canonicalUrl}#webpage`,

    name: pageTitle,

    url: canonicalUrl,

    description: pageDescription,

    inLanguage: "sr-RS",

    isPartOf: {
      "@type": "WebSite",

      name:
        'Градска библиотека „Атанасије Стојковић“ Рума',

      url:
        "https://www.bibliotekaruma.rs/",
    },

    publisher: {

      "@type": "Organization",

      name:
        'Градска библиотека „Атанасије Стојковић“',

      url:
        "https://www.bibliotekaruma.rs/",
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


        {/* OPEN GRAPH */}

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
          content="https://www.bibliotekaruma.rs/images/digitalna2.webp"
        />


        {/* TWITTER */}

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
          content="https://www.bibliotekaruma.rs/images/digitalna2.webp"
        />


        {/* STRUCTURED DATA */}

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

      </Helmet>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="digital-hero">

        <div className="digital-hero-background">

          <div className="digital-hero-circle circle-one"></div>

          <div className="digital-hero-circle circle-two"></div>

        </div>


        <div className="digital-hero-book digital-book-left">

          <LiaLaptopSolid />

        </div>
 <div className="contact-hero-book contact-book-right">
    <GiOpenBook />
  </div>

        <Container>

          <div className="digital-hero-content">

            <div className="digital-hero-label">

              ГРАДСКА БИБЛИОТЕКА „АТАНАСИЈЕ СТОЈКОВИЋ“

            </div>


            <h1>

              <em>Дигитална</em> библиотека

            </h1>


            <p>

              Истражите дигитализовану културну баштину
              Градске библиотеке „Атанасије Стојковић“
              у Руми.

            </p>

          </div>

        </Container>

      </section>


      {/* =====================================================
          MAIN PAGE
      ===================================================== */}

      <Container className="digital-library-page">


        {/* =====================================================
            UVOD
        ===================================================== */}

        <section className="digital-intro">

          <div className="digital-section-heading">

            <span>
              О ДИГИТАЛНОЈ БИБЛИОТЕЦИ
            </span>


            <h2>
              Културна баштина
              доступна свима
            </h2>

          </div>


          <Row className="g-5 align-items-start">


            {/* TEXT */}

            <Col lg={7}>

              <div className="digital-text">

                <p>

                  Дигитална библиотека „Атанасије Стојковић“
                  Рума основана је 2023. године у оквиру
                  пројекта који је суфинансиран од стране
                  Министарства културе Републике Србије
                  и Локалне самоуправе.

                </p>


                <p>

                  Пројекат има за циљ да дигитализује,
                  сачува и промовише културну баштину
                  Руме и околине и учини је доступном
                  ширем кругу корисника.

                </p>


                <p>

                  У оквиру дигиталне библиотеке доступна
                  је грађа од културног, историјског и
                  локалног значаја.

                </p>

              </div>

            </Col>


            {/* INFO CARD */}

            <Col lg={5}>

              <div className="digital-info-card">

                <div className="digital-info-header">

                  <span>
                    ДИГИТАЛНА БАШТИНА
                  </span>


                  <LiaBookSolid />

                </div>


                <div className="digital-info-item">

                  <strong>
                    2023.
                  </strong>

                  <p>
                    Основана Дигитална библиотека
                    „Атанасије Стојковић“ Рума.
                  </p>

                </div>


                <div className="digital-info-item">

                  <strong>
                    РУМА
                  </strong>

                  <p>
                    Дигитализација и очување
                    локалне културне баштине.
                  </p>

                </div>


                <div className="digital-info-item">

                  <strong>
                    ОНЛАЈН
                  </strong>

                  <p>
                    Приступ дигитализованој грађи
                    путем интернета.
                  </p>

                </div>

              </div>

            </Col>

          </Row>


          {/* =====================================================
              HIGHLIGHT
          ===================================================== */}

          <div className="digital-highlight">

            <div className="digital-highlight-icon">

              <LiaLaptopSolid />

            </div>


            <div>

              <span>
                КУЛТУРНА БАШТИНА У ДИГИТАЛНОМ ОБЛИКУ
              </span>


              <p>

                Дигитализацијом вредне библиотечке грађе
                омогућава се њено очување и представљање
                новим генерацијама, уз истовремено
                олакшан приступ културном наслеђу Руме
                и њене околине.

              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            DIGITAL COLLECTION
        ===================================================== */}

        <section className="digital-collection">


          <div className="digital-section-heading">

            <span>
              ИСТРАЖИТЕ КОЛЕКЦИЈУ
            </span>


            <h2>
              Приступите дигитализованој грађи
            </h2>


            <p>

              Посетите платформу Дигиталне библиотеке
              и истражите грађу која представља део
              културног наслеђа Руме и њене околине.

            </p>

          </div>


          <Row className="g-5 align-items-center">


            {/* IMAGE */}

            <Col lg={7}>

              <div className="digital-image-card">

                <AnimatedImage

                  src={digitalna2}

                  alt="Дигитална библиотека Градске библиотеке „Атанасије Стојковић“ у Руми"

                  className="digital-main-image"

                  onClick={() =>
                    handleImageClick(
                      digitalna2,
                      "Дигитална библиотека Градске библиотеке „Атанасије Стојковић“ у Руми",
                      "Дигитална библиотека"
                    )
                  }

                />

              </div>

            </Col>


            {/* TEXT */}

            <Col lg={5}>

              <div className="digital-collection-content">

                <span className="digital-card-label">

                  ДИГИТАЛНА КОЛЕКЦИЈА

                </span>


                <h3>

                  Истражите нашу
                  дигиталну библиотеку

                </h3>


                <p>

                  Платформа Дигиталне библиотеке омогућава
                  приступ дигитализованој грађи и представља
                  један од начина на који библиотека своју
                  културну баштину чини доступном свима.

                </p>


                <a

                  href="https://www.digitalna.bibliotekaruma.rs"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="digital-button"

                  aria-label="Посетите дигиталну библиотеку Градске библиотеке „Атанасије Стојковић“ у Руми"

                >

                  Посетите дигиталну библиотеку

                  <span aria-hidden="true">
                    →
                  </span>

                </a>

              </div>

            </Col>

          </Row>


          {/* =====================================================
              FINAL
          ===================================================== */}

          <div className="digital-final">

            <div className="digital-final-icon">

              <LiaBookSolid />

            </div>


            <p>

              Дигитална библиотека представља наставак
              библиотечке мисије у савременом окружењу –
              очување, доступност и промоцију писане
              и културне баштине Руме у дигиталном добу.

            </p>

          </div>


        </section>


        {/* =====================================================
            BOTTOM DECORATION
        ===================================================== */}

        <div className="digital-books-decoration">

          <LiaBookSolid />

          <LiaLaptopSolid />

          <LiaBookSolid />

        </div>


      </Container>


      {/* =====================================================
          IMAGE MODAL
      ===================================================== */}

      <ImageModal

        show={showImageModal}

        onHide={handleCloseImageModal}

        imageSrc={selectedImage.src}

        imageAlt={selectedImage.alt}

        title={selectedImage.title}

      />

    </>
  );
};


export default DigitalLibrary;