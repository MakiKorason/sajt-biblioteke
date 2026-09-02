import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { GiOpenBook } from "react-icons/gi";
import { Helmet } from "react-helmet-async";

import ImageModal from "../ImageModal";

import {
  LiaBookSolid,
  LiaPenFancySolid,
} from "react-icons/lia";

import cobbis from "../../images/cobbis.webp";

import "./BooksSearche.css";


const BooksSearche = () => {

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
    "Претраживање фонда – Градска библиотека „Атанасије Стојковић“ Рума";

  const pageDescription =
    "Претражите библиотечки фонд преко COBISS+ и MCOBISS апликације. Прегледајте књиге, ауторе и доступност у Градској библиотеци „Атанасије Стојковић“ у Руми.";

  const canonicalUrl =
    "https://www.bibliotekaruma.rs/pretrazivanje-fonda";


  const structuredData = {

    "@context": "https://schema.org",

    "@type": "WebPage",

    "@id": `${canonicalUrl}#page`,

    name: pageTitle,

    url: canonicalUrl,

    description: pageDescription,

    inLanguage: "sr-RS",

    publisher: {

      "@type": "Library",

      name:
        "Градска библиотека „Атанасије Стојковић“ Рума",

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
          content="https://www.bibliotekaruma.rs/images/cobbis.webp"
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
          content="https://www.bibliotekaruma.rs/images/cobbis.webp"
        />


        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

      </Helmet>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="books-search-hero">

        <div className="books-search-hero-background">

          <div className="books-search-hero-circle circle-one"></div>

          <div className="books-search-hero-circle circle-two"></div>

        </div>


        {/* HERO BOOK */}

        <div className="books-search-hero-book books-search-book-left">

          <LiaBookSolid />

        </div>
 <div className="contact-hero-book contact-book-right">
    <GiOpenBook />
  </div>

        <Container>

          <div className="books-search-hero-content">

            <div className="books-search-hero-label">

              БИБЛИОТЕЧКИ ФОНД

            </div>


            <h1>

              <em>Претраживање</em>
              <br />
              фонда

            </h1>


            <p>

              Пронађите књиге, ауторе и друге публикације
              у фонду Градске библиотеке „Атанасије
              Стојковић“ у Руми.

            </p>

          </div>

        </Container>

      </section>


      {/* =====================================================
          MAIN PAGE
      ===================================================== */}

      <Container className="books-search-page">


        {/* ===================================================
            UVOD
        =================================================== */}

        <section className="books-search-intro">

          <div className="books-search-section-heading">

            <span>
              БИБЛИОТЕЧКИ СИСТЕМ
            </span>


            <h2>

              Пронађите књигу
              <br />
              у нашем фонду

            </h2>

          </div>


          <Row className="g-5 align-items-start">


            <Col lg={8}>

              <div className="books-search-text">

                <p>

                  У савременом друштву модерне библиотеке,
                  као важни центри знања, захтевају савремену
                  информациону технологију и повезивање у
                  заједнички библиотечко-информациони систем
                  као што је COBISS.

                </p>


                <p>

                  COBISS (Co-operative Online Bibliographic
                  System and Services) омогућава корисницима
                  да једноставно претражују библиотечке
                  каталоге и пронађу публикације које су им
                  потребне.

                </p>


                <div className="books-search-highlight">

                  <div className="books-search-highlight-icon">

                    <LiaPenFancySolid />

                  </div>


                  <div>

                    <span>
                      ПРЕТРАЖИВАЊЕ ФОНДА
                    </span>


                    <p>

                      Преко COBISS система можете проверити
                      да ли се одређена књига налази у фонду
                      наше библиотеке и да ли је доступна
                      за коришћење.

                    </p>

                  </div>

                </div>

              </div>

            </Col>


            <Col lg={4}>

              <div className="books-search-summary-card">

                <div className="books-search-summary-header">

                  <span>
                    COBISS
                  </span>


                  <LiaBookSolid />

                </div>


                <div className="books-search-summary-number">

                  +

                </div>


                <p>

                  Претражите библиотечки фонд,
                  каталоге и доступност публикација
                  путем интернета.

                </p>

              </div>

            </Col>


          </Row>

        </section>


        {/* ===================================================
            COBISS IMAGE
        =================================================== */}

        <section className="books-search-system">

          <div className="books-search-section-heading">

            <span>
              КАКО ФУНКЦИОНИШЕ
            </span>


            <h2>
              COBISS+
            </h2>

          </div>


          <div className="books-search-image-card">

            <img
              src={cobbis}
              alt="Претрага библиотечког фонда преко COBISS система"
              width="1200"
              height="700"
              loading="lazy"
              className="books-search-main-image"
              onClick={() =>
                handleImageClick(
                  cobbis,
                  "Претрага библиотечког фонда преко COBISS система",
                  "COBISS"
                )
              }
            />

          </div>

        </section>


        {/* ===================================================
            COBISS CARD
        =================================================== */}

        <section className="books-search-card-section">

          <div className="books-search-info-card">

            <div className="books-search-card-label">
              COBISS+
            </div>


            <h2>
              Претражите фонд наше библиотеке
            </h2>


            <p>

              COBISS+ је веб апликација која библиотекарима
              и корисницима омогућава приступ претраживању
              различитих база података.

            </p>


            <ul>

              <li>
                Апликација је бесплатна за све кориснике.
              </li>

              <li>
                Омогућава претраживање библиотечких каталога
                и проналажење релевантне грађе.
              </li>

              <li>
                Корисници могу приступити свом налогу
                „Моја библиотека“ и користити различите
                библиотечке услуге путем интернета.
              </li>

            </ul>


            <a
              href="https://plus.cobiss.net/cobiss/sr/sr/search/cobib?lib=gbru"
              target="_blank"
              rel="noopener noreferrer"
              className="books-search-button"
            >

              Претражите фонд библиотеке

            </a>

          </div>

        </section>


        {/* ===================================================
            MCOBISS
        =================================================== */}

        {/* <section className="books-search-mobile-section">

          <div className="books-search-mobile-card">

            <div className="books-search-card-label">
              МОБИЛНА АПЛИКАЦИЈА
            </div>


            <h2>
              MCOBISS
            </h2>


            <p>

              Корисницима је на располагању прилагођена
              верзија MCOBISS апликације за мобилне уређаје.

            </p>


            <p>

              Апликација је бесплатна и може се преузети
              преко Google Play продавнице.

            </p>


            <a
              href="https://play.google.com/store/apps/details?id=si.izum.mcobiss&hl=sr&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="books-search-button"
            >

              Преузмите MCOBISS

            </a>

          </div>

        </section>  */}


        {/* ===================================================
            UPUTSTVO
        =================================================== */}

        <section className="books-search-instruction">

          <div className="books-search-instruction-card">

            <div className="books-search-card-label">
              КОРАК ПО КОРАК
            </div>


            <h2>

              Упутство за коришћење COBISS-а

            </h2>


            <p>

              Претраживање библиотечког фонда је једноставно.
              Пратите неколико основних корака како бисте
              пронашли жељену публикацију и проверили њену
              доступност.

            </p>


            <ol>

              <li>

                Посетите платформу{" "}

                <a
                  href="https://sr.cobiss.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  COBISS
                </a>.

              </li>


              <li>

                Унесите назив књиге, име аутора или кључне
                речи у поље за претрагу.

              </li>


              <li>

                Изаберите библиотеку из падајућег менија
                како бисте видели доступност публикације.

              </li>


              <li>

                Кликните на жељену књигу за више детаља
                или је резервишите уколико је доступна
                за резервацију.

              </li>

            </ol>

          </div>

        </section>


        {/* ===================================================
            FINAL STATEMENT
        =================================================== */}

        <section className="books-search-final">

          <div className="books-search-final-icon">

            <LiaBookSolid />

          </div>


          <div>

            <span>
              ГРАДСКА БИБЛИОТЕКА „АТАНАСИЈЕ СТОЈКОВИЋ“
            </span>


            <h2>

              Пронађите своју
              <br />
              следећу књигу.

            </h2>


            <p>

              Истражите библиотечки фонд и откријте
              књиге које вас очекују у Градској библиотеци
              „Атанасије Стојковић“.

            </p>

          </div>

        </section>


        {/* ===================================================
            BOTTOM DECORATION
        =================================================== */}

        <div className="books-search-books-decoration">

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


export default BooksSearche;