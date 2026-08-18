import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageModal from "../ImageModal";

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

import { Helmet } from "react-helmet-async";

import "./OurPublic.css";

const OurPublic = () => {
  const [showImageModal, setShowImageModal] = useState(false);

  const [selectedImage, setSelectedImage] = useState({
    src: "",
    alt: "",
    title: "",
  });

  const handleImageClick = (imageSrc, imageAlt, imageTitle) => {
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
      <Helmet>
        <title>Наша издања – Библиотека Рума</title>

        <meta
          name="description"
          content="Издања Градске библиотеке „Атанасије Стојковић“ у Руми. Погледајте библиотечка издања из области прозе, поезије, дечје и научне литературе."
        />

        <link
          rel="canonical"
          href="https://www.bibliotekaruma.rs/nasa-izdanja"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Наша издања – Библиотека Рума",
              "url": "https://www.bibliotekaruma.rs/nasa-izdanja",
              "description": "Издања Градске библиотеке „Атанасије Стојковић“ у Руми.",
              "inLanguage": "sr-RS",
              "publisher": {
                "@type": "Organization",
                "name": "Градска библиотека „Атанасије Стојковић“",
                "url": "https://www.bibliotekaruma.rs/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.bibliotekaruma.rs/logo.webp"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <main className="our-public-page">
        <Container className="our-public-container">

          {/* HERO */}

          <section className="our-public-hero">

            <div className="our-public-hero-decoration our-public-hero-decoration-left"></div>
            <div className="our-public-hero-decoration our-public-hero-decoration-right"></div>

            <div className="our-public-hero-content">

              <span className="our-public-label">
                ИЗДАВАЧКА ДЕЛАТНОСТ
              </span>

              <h1>Наша издања</h1>

              <p>
                Током три деценије постојања издавачке делатности,
                Градска библиотека „Атанасије Стојковић“ објавила је
                више од 120 наслова.
              </p>

            </div>

          </section>


          {/* UVOD */}

          <section className="our-public-intro">

            <div className="our-public-intro-line"></div>

            <p>
              Међу библиотечким издањима посебно место заузимају
              публикације посвећене књижевности, историји, култури
              и завичајној баштини. Посебно се истичу дела која
              повезују историју наше библиотеке са именом
              Атанасија Стојковића.
            </p>

          </section>


          {/* KATEGORIJE */}

          <div className="our-public-categories">

            {categories.map((category, categoryIndex) => (

              <section
                className="our-public-category"
                key={category.title}
              >

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


                <Row className="our-public-books">

                  {category.books.map((book) => (

                    <Col
                      key={book.title}
                      xs={12}
                      sm={6}
                      md={4}
                      className="our-public-book-col"
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


          {/* ZAVRŠNA PORUKA */}

          <section className="our-public-bottom">

            <span>
              ГРАДСКА БИБЛИОТЕКА „АТАНАСИЈЕ СТОЈКОВИЋ“
            </span>

            <h2>
              Књиге које чувају
              <br />
              завичајно сећање.
            </h2>

            <p>
              Истражите наша издања и откријте део културног
              и књижевног наслеђа Руме.
            </p>

          </section>

        </Container>
      </main>


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