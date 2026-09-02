import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import { Helmet } from "react-helmet-async";
import { GiOpenBook } from "react-icons/gi";
import ImageModal from "../ImageModal";

import {
  LiaBookSolid,
  LiaPenFancySolid,
} from "react-icons/lia";

import Kandor from "../../images/Ourpublic/Kandor.webp";
import Nuada from "../../images/Ourpublic/Nuada.webp";
import Nebuditeme from "../../images/Ourpublic/Nebuditeme.webp";
import Knjigeizratnogperioda from "../../images/Ourpublic/Knjigeizratnogperioda.webp";
import Katalog from "../../images/Ourpublic/Katalog.webp";

import public2 from "../../images/Ourpublic/public2.webp";
import public3 from "../../images/Ourpublic/public3.webp";
import public4 from "../../images/Ourpublic/public4.webp";
import public5 from "../../images/Ourpublic/public5.webp";
import public6 from "../../images/Ourpublic/public6.webp";
import public7 from "../../images/Ourpublic/public7.webp";
import public8 from "../../images/Ourpublic/public8.webp";
import public10 from "../../images/Ourpublic/public10.webp";
import public11 from "../../images/Ourpublic/public11.webp";
import public12 from "../../images/Ourpublic/public12.webp";
import public13 from "../../images/Ourpublic/public13.webp";
import public14 from "../../images/Ourpublic/public14.webp";
import public15 from "../../images/Ourpublic/public15.webp";
import public16 from "../../images/Ourpublic/public16.webp";
import public17 from "../../images/Ourpublic/public17.webp";
import public18 from "../../images/Ourpublic/public18.webp";

import "./OurPublic.css";


const OurPublic = () => {

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
    'Наша издања – Градска библиотека „Атанасије Стојковић“ Рума';

  const pageDescription =
    'Издања Градске библиотеке „Атанасије Стојковић“ у Руми. Погледајте библиотечка издања из области прозе, поезије, дечје и научне литературе.';

  const canonicalUrl =
    "https://www.bibliotekaruma.rs/nasa-izdanja";


  const structuredData = {

    "@context": "https://schema.org",

    "@type": "CollectionPage",

    "@id": `${canonicalUrl}#collection`,

    name: pageTitle,

    url: canonicalUrl,

    description: pageDescription,

    inLanguage: "sr-RS",

    publisher: {

      "@type": "Library",

      name:
        'Градска библиотека „Атанасије Стојковић“ Рума',

      url:
        "https://www.bibliotekaruma.rs/",

    },

  };


  /* =====================================================
     CATEGORIES
  ===================================================== */

  const categories = [

    {
      title: "Проза",

      label: "ИЗДАЊА",

      books: [

        {
          image: Kandor,
          title: "Кандор",
        },

        {
          image: Nuada,
          title: "Нуада",
        },

        {
          image: public2,
          title: "Зврј упразно",
        },

        {
          image: public3,
          title: "Балкански мол",
        },

        {
          image: public4,
          title: "Аристид и Наталија",
        },

        {
          image: public12,
          title: "Озбиљне приче Сањалице Маштарић",
        },

      ],
    },


    {
      title: "Поезија",

      label: "ИЗДАЊА",

      books: [

        {
          image: Nebuditeme,
          title: "Не будите ме",
        },

        {
          image: public5,
          title: "У тишини лудака",
        },

        {
          image: public10,
          title: "Пехар, ране",
        },

      ],
    },


    {
      title: "Дечје књиге",

      label: "ИЗДАЊА",

      books: [

        {
          image: public13,
          title: "Песме снохватице",
        },

        {
          image: public14,
          title: "Како спава сунце",
        },

        {
          image: public15,
          title: "Петнаест црвених ружа",
        },

        {
          image: public17,
          title: "Добро јутро, цветићи",
        },

        {
          image: public16,
          title: "Дечак и звезде",
        },

        {
          image: public18,
          title: "Дугино бих клупко",
        },

      ],
    },


    {
      title: "Научне књиге",

      label: "ИЗДАЊА",

      books: [

        {
          image: Knjigeizratnogperioda,
          title: "Књиге из ратног периода – каталог",
        },

        {
          image: Katalog,
          title: "Каталог књига манастира Гргетег",
        },

        {
          image: public11,
          title: "Примери личних имена у Руми",
        },

        {
          image: public6,
          title: "Пут до крста Светог Владимира",
        },

        {
          image: public7,
          title: "Рума",
        },

        {
          image: public8,
          title:
            "Социјални аспекти квалитета живота особа са телесним инвалидитетом",
        },

      ],
    },

  ];


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
          content="https://www.bibliotekaruma.rs/images/Ourpublic/Kandor.webp"
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
          content="https://www.bibliotekaruma.rs/images/Ourpublic/Kandor.webp"
        />


        {/* STRUCTURED DATA */}

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

      </Helmet>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="our-public-hero">

        <div className="our-public-hero-background">

          <div className="our-public-hero-circle circle-one"></div>

          <div className="our-public-hero-circle circle-two"></div>

        </div>


        {/* HERO BOOK ICON */}

        <div className="our-public-hero-book our-public-book-left">

          <LiaBookSolid />

        </div>
 <div className="contact-hero-book contact-book-right">
    <GiOpenBook />
  </div>

        <Container>

          <div className="our-public-hero-content">

            <div className="our-public-hero-label">

              ГРАДСКА БИБЛИОТЕКА „АТАНАСИЈЕ СТОЈКОВИЋ“

            </div>


            <h1>

              <em>Наша</em> издања

            </h1>


            <p>

              Током три деценије постојања издавачке
              делатности, Градска библиотека „Атанасије
              Стојковић“ објавила је више од 120 наслова.

            </p>

          </div>

        </Container>

      </section>


      {/* =====================================================
          MAIN PAGE
      ===================================================== */}

      <Container className="our-public-page">


        {/* ===================================================
            UVOD
        =================================================== */}

        <section className="our-public-intro">

          <div className="our-public-section-heading">

            <span>
              ИЗДАВАЧКА ДЕЛАТНОСТ
            </span>


            <h2>

              Књиге које чувају
              <br />
              завичајно сећање

            </h2>

          </div>


          <Row className="g-5 align-items-start">


            <Col lg={8}>

              <div className="our-public-text">

                <p>

                  Током више од три деценије издавачке
                  делатности, Градска библиотека „Атанасије
                  Стојковић“ у Руми објавила је више од 120
                  наслова.

                </p>


                <p>

                  Међу библиотечким издањима посебно место
                  заузимају публикације посвећене књижевности,
                  историји, култури и завичајној баштини.

                </p>


                <p>

                  Посебно се истичу дела која повезују
                  историју наше библиотеке са именом
                  Атанасија Стојковића.

                </p>


                <div className="our-public-highlight">

                  <div className="our-public-highlight-icon">

                    <LiaPenFancySolid />

                  </div>


                  <div>

                    <span>
                      ИЗДАВАЧКА ДЕЛАТНОСТ
                    </span>


                    <p>

                      Библиотечка издања представљају
                      важан део културног живота Руме и
                      доприносе очувању писане завичајне
                      баштине.

                    </p>

                  </div>

                </div>

              </div>

            </Col>


            <Col lg={4}>

              <div className="our-public-summary-card">

                <div className="our-public-summary-header">

                  <span>
                    НАША ИЗДАЊА
                  </span>


                  <LiaBookSolid />

                </div>


                <div className="our-public-summary-number">

                  120+

                </div>


                <p>

                  објављених наслова током више од
                  три деценије издавачке делатности.

                </p>

              </div>

            </Col>


          </Row>

        </section>


        {/* ===================================================
            CATEGORIES
        =================================================== */}

        <div className="our-public-categories">


          {categories.map((category, categoryIndex) => (

            <section
              className="our-public-category"
              key={category.title}
            >


              {/* CATEGORY HEADER */}

              <div className="our-public-category-header">

                <div>

                  <span>
                    {category.label}
                  </span>


                  <h2>
                    {category.title}
                  </h2>

                </div>


                <div className="our-public-category-number">

                  {String(categoryIndex + 1).padStart(2, "0")}

                </div>

              </div>


              <div className="our-public-divider"></div>


              {/* BOOK GRID */}

              <Row className="g-4 our-public-books">


                {category.books.map((book) => (

                  <Col
                    key={book.title}
                    xs={12}
                    sm={6}
                    md={4}
                  >


                    <article className="our-public-book-card">


                      <button
                        type="button"
                        className="our-public-book-image-button"
                        onClick={() =>
                          handleImageClick(
                            book.image,
                            book.title,
                            book.title
                          )
                        }
                        aria-label={`Погледајте већу слику: ${book.title}`}
                      >


                        <div className="our-public-book-image-wrapper">


                          <img
                            src={book.image}
                            alt={book.title}
                            width="300"
                            height="400"
                            loading="lazy"
                            className="our-public-book-image"
                          />


                          <div className="our-public-book-overlay">

                            <span>
                              Погледај
                            </span>

                          </div>


                        </div>

                      </button>


                      <div className="our-public-book-info">

                        <h3>
                          {book.title}
                        </h3>

                      </div>


                    </article>

                  </Col>

                ))}


              </Row>


            </section>

          ))}


        </div>


        {/* ===================================================
            FINAL STATEMENT
        =================================================== */}

        <section className="our-public-final">


          <div className="our-public-final-icon">

            <LiaBookSolid />

          </div>


          <div>

            <span>
              ГРАДСКА БИБЛИОТЕКА „АТАНАСИЈЕ СТОЈКОВИЋ“
            </span>


            <h2>

              Књиге које чувају
              <br />
              завичајно сећање.

            </h2>


            <p>

              Истражите наша издања и откријте део
              културног и књижевног наслеђа Руме.

            </p>

          </div>


        </section>


        {/* ===================================================
            BOTTOM DECORATION
        =================================================== */}

        <div className="our-public-books-decoration">

          <LiaBookSolid />

          <LiaBookSolid />

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


export default OurPublic;