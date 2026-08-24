import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import ImageModal from "../ImageModal";
import AnimatedCounter from "../AnimatedCounter";
import AnimatedImage from "../Department/AnimatedImage";

import horhe from "../../images/horhe.webp";
import stiven from "../../images/stiven.webp";

import { Helmet } from "react-helmet-async";

import {
  FaUsers,
  FaBook,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";

import {
  GiBookshelf,
  GiOpenBook,
} from "react-icons/gi";

import { LiaBookSolid } from "react-icons/lia";

import PageHero from "../shared/PageHero";
import "./MisionAndVision.css";


const MisionAndVision = () => {

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


  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Helmet>

        <title>
          Визија и мисија – Градска библиотека „Атанасије Стојковић“ Рума
        </title>

        <meta
          name="description"
          content="Сазнајте више о визији и мисији Градске библиотеке „Атанасије Стојковић“ у Руми, њеној улози у образовању, култури, инклузији и развоју заједнице."
        />

        <link
          rel="canonical"
          href="https://www.bibliotekaruma.rs/vizija-misija-biblioteke"
        />

        <meta
          property="og:title"
          content="Визија и мисија – Градска библиотека „Атанасије Стојковић“ Рума"
        />

        <meta
          property="og:description"
          content="Визија и мисија Градске библиотеке „Атанасије Стојковић“ у Руми."
        />

        <meta
          property="og:url"
          content="https://www.bibliotekaruma.rs/vizija-misija-biblioteke"
        />

        <meta
          property="og:type"
          content="website"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Library",

            name:
              'Градска библиотека „Атанасије Стојковић“ Рума',

            url:
              "https://www.bibliotekaruma.rs/vizija-misija-biblioteke",

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
              "022/490-047",
          })}
        </script>

      </Helmet>


      {/* =====================================================
          HERO
      ===================================================== */}

      <PageHero
        title={
          <>
            Визија <em>&</em> мисија
          </>
        }
        description="Простор знања, културе, учења и сусрета — отворен за све генерације и све људе нашег grada."
      />


      {/* =====================================================
          MAIN CONTENT

            <div className="mission-hero-label">

              <span></span>

              ГРАДСКА БИБЛИОТЕКА „АТАНАСИЈЕ СТОЈКОВИЋ“

              <span></span>

            </div>


            <h1>
              Визија <em>&</em> мисија
            </h1>


            <p>
              Простор знања, културе, учења и сусрета —
              отворен за све генерације и све људе нашег града.
            </p>

          </div>

        </Container>

      </section>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <Container className="mission-page">


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="mission-intro">

          <div className="mission-eyebrow">

            <span></span>

            НАША ПРИЧА

          </div>


          <h2>
            Библиотека која расте
            <br />
            <em>заједно са својом заједницом.</em>
          </h2>


          <p className="mission-intro-text">
            Градска библиотека „Атанасије Стојковић“ представља
            простор у којем се сусрећу књига, знање, култура,
            технологија и људи. Наш рад усмерен је ка стварању
            библиотеке која одговара потребама савременог корисника,
            али истовремено чува вредности читања и културног наслеђа.
          </p>

        </section>


        {/* =====================================================
            STATISTICS / ANIMATED COUNTERS
        ===================================================== */}

        <section className="mission-stats">


          {/* 01 */}

          <div className="mission-stat">

            <div className="mission-stat-icon">
              <FaUsers />
            </div>

            <div className="mission-counter">

              <AnimatedCounter
                end={16800}
                title="Учлањени корисници"
                icon={null}
              />

            </div>

          </div>


          {/* 02 */}

          <div className="mission-stat">

            <div className="mission-stat-icon">
              <FaBook />
            </div>

            <div className="mission-counter">

              <AnimatedCounter
                end={80000}
                title="Књига у фонду"
                icon={null}
              />

            </div>

          </div>


          {/* 03 */}

          <div className="mission-stat">

            <div className="mission-stat-icon">
              <FaCalendarAlt />
            </div>

            <div className="mission-counter">

              <AnimatedCounter
                end={312}
                title="Дана рада годишње"
                icon={null}
              />

            </div>

          </div>


        </section>


        {/* =====================================================
            VISION
        ===================================================== */}

        <section className="mission-block mission-vision">

          <Row className="align-items-center g-5">


            {/* IMAGE */}

            <Col lg={6}>

              <div className="mission-image-wrapper">

                <AnimatedImage
                  className="mission-image clickable-image"
                  alt="Књиге у Градској библиотеци"
                  src={stiven}
                  onClick={() =>
                    handleImageClick(
                      stiven,
                      "Књиге у Градској библиотеци",
                      "Визија библиотеке"
                    )
                  }
                  title="Кликните за већу слику"
                />


                <div className="mission-image-caption">

                  <GiBookshelf />

                  <span>
                    Знање доступно свима
                  </span>

                </div>

              </div>

            </Col>


            {/* TEXT */}

            <Col lg={6}>

              <div className="mission-content">

                <div className="mission-number">
                  01
                </div>


                <div className="mission-eyebrow">

                  <span></span>

                  ВИЗИЈА

                </div>


                <h2>
                  Библиотека као
                  <em> центар знања и културе.</em>
                </h2>


                <p>
                  Наша визија је да постанемо ослонац у образовању
                  и културном развоју, пружајући подршку свим
                  потребама наших корисника.
                </p>


                <p>
                  Желимо да растемо као иновативни центар знања
                  и културе, у којем ће се користити најновије
                  технологије за пружање услуга и у којем ће сваки
                  корисник имати прилику да истражује, учи и
                  доприноси заједници.
                </p>


                <div className="mission-content-line">

                  <FaArrowRight />

                  <span>
                    Отворени за нове идеје
                  </span>

                </div>

              </div>

            </Col>

          </Row>

        </section>


        {/* =====================================================
            MISSION
        ===================================================== */}

        <section className="mission-block mission-mission">

          <Row
            className="align-items-center g-5 flex-lg-row-reverse"
          >


            {/* IMAGE */}

            <Col lg={6}>

              <div className="mission-image-wrapper">

                <AnimatedImage
                  className="mission-image clickable-image"
                  alt="Књиге и читање"
                  src={horhe}
                  onClick={() =>
                    handleImageClick(
                      horhe,
                      "Књиге и читање",
                      "Мисија библиотеке"
                    )
                  }
                  title="Кликните за већу слику"
                />


                <div className="mission-image-caption">

                  <GiOpenBook />

                  <span>
                    Читање као темељ учења
                  </span>

                </div>

              </div>

            </Col>


            {/* TEXT */}

            <Col lg={6}>

              <div className="mission-content">

                <div className="mission-number">
                  02
                </div>


                <div className="mission-eyebrow">

                  <span></span>

                  МИСИЈА

                </div>


                <h2>
                  Простор за
                  <em> све генерације.</em>
                </h2>


                <p>
                  Мисија наше библиотеке је да пружи приступ
                  информацијама, књигама и образовним ресурсима
                  свим нашим корисницима.
                </p>


                <p>
                  Библиотека је место инклузије, међусобног учења
                  и размене идеја. Зато је наш основни задатак да
                  код деце развијемо и подстичемо навике читања.
                </p>


                <p>
                  Циљ нам је да подржимо целоживотно учење,
                  културну размену и развој критичког размишљања.
                </p>


                <div className="mission-content-line">

                  <FaArrowRight />

                  <span>
                    Знање као заједничка вредност
                  </span>

                </div>

              </div>

            </Col>

          </Row>

        </section>


        {/* =====================================================
            FINAL STATEMENT
        ===================================================== */}

        <section className="mission-final">

          <div className="mission-final-decoration">

            <LiaBookSolid />

          </div>


          <div className="mission-eyebrow">

            <span></span>

            НАША ВРЕДНОСТ

            <span></span>

          </div>


          <h2>
            Књига повезује
            <br />
            <em>људе, идеје и генерације.</em>
          </h2>


          <p>
            Зато библиотеку градимо као отворено, доступно и
            подстицајно место за све.
          </p>

        </section>


        {/* =====================================================
            BOTTOM DECORATION
        ===================================================== */}

        <div className="mission-decoration">

          <span></span>

          <GiOpenBook />

          <span></span>

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


export default MisionAndVision;