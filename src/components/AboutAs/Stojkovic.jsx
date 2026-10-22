import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import zavicajno from '../../images/zavicajno.webp'
import { Helmet } from "react-helmet-async";
import { GiOpenBook } from "react-icons/gi";
import AnimatedImage from "../Department/AnimatedImage";
import Atanasije from '../../images/Atanasije.webp';
import public4 from '../../images/Ourpublic/public4.webp'
import Kandor from '../../images/Ourpublic/Kandor.webp'
import konkurs from '../../images/konkurs.webp'

import {
  LiaBookSolid,
  LiaLandmarkSolid,
} from "react-icons/lia";

import { stojkovicCopy, stojkovicLanguages } from "./stojkovicCopy";

import "./History.css";
import "./Stojkovic.css";


const Stojkovic = () => {

  const [lang, setLang] = useState("sr");
  const t = stojkovicCopy[lang];


  return (
    <>
      <Helmet>

        <html lang={lang === "sr" ? "sr" : lang} />

        <title>
          {t.pageTitle}
        </title>

        <meta
          name="description"
          content={t.pageDescription}
        />

        <meta
          name="robots"
          content="noindex, nofollow, noarchive"
        />

        <meta
          name="googlebot"
          content="noindex, nofollow, noarchive"
        />

      </Helmet>


      <section className="history-hero">

        <div className="history-hero-background">

          <div className="history-hero-circle circle-one"></div>

          <div className="history-hero-circle circle-two"></div>

        </div>


        <div className="history-hero-book history-book-left">

          <LiaLandmarkSolid />

        </div>

        <div className="contact-hero-book contact-book-right">

          <GiOpenBook />

        </div>


        <Container>

          <div className="history-hero-content">

            <div
              className="stojkovic-lang"
              role="group"
              aria-label="Language"
            >

              {stojkovicLanguages.map((option) => (

                <button
                  key={option.id}
                  type="button"
                  className={
                    lang === option.id
                      ? "stojkovic-lang-btn is-active"
                      : "stojkovic-lang-btn"
                  }
                  onClick={() => setLang(option.id)}
                >

                  {option.label}

                </button>

              ))}

            </div>

            <div className="history-hero-label">

              {t.heroLabel}

            </div>

            <h1>
              <em>{t.heroFirst}</em> {t.heroLast}
            </h1>

            <p>
              {t.heroLead}
            </p>

          </div>

        </Container>

      </section>


      <Container className="history-page">


        <section className="history-intro">

          <div className="history-section-heading">

            <span>
              {t.lifeEyebrow}
            </span>

            <h2>
              {t.lifeTitle}
            </h2>

          </div>


          <Row className="g-5 align-items-start">

            <Col lg={8}>

              <div className="history-text">

                <p>
                  {t.life[0]}
                </p>

                <Col md-6 className='text-center'>
            <AnimatedImage
  src={Atanasije}
alt={t.altPortrait}
  style={{
    width: '30%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '20px',
    display: 'block',
    margin: '0 auto',
    objectFit: 'cover'
  }}
/>
                </Col>
                <br/>

                {t.life.slice(1).map((paragraph) => (

                  <p key={paragraph.slice(0, 40)}>
                    {paragraph}
                  </p>

                ))}

              </div>

            </Col>


            <Col lg={4}>

              <div className="history-years-card">

                <div className="history-years-header">

                  <span>
                    {t.yearsTitle}
                  </span>

                  <LiaBookSolid />

                </div>


                {t.years.map((item) => (

                  <div className="history-year" key={item.year}>

                    <strong>
                      {item.year}
                    </strong>

                    <p>
                      {item.text}
                    </p>

                  </div>

                ))}

              </div>

            </Col>

          </Row>


          <div className="history-highlight">

            <div className="history-highlight-icon">

              <LiaBookSolid />

            </div>

            <div>

              <span>
                {t.mottoLabel}
              </span>

              <p className="stojkovic-quote">
                {t.mottoQuote}
              </p>

              <p className="stojkovic-quote-source">
                {t.mottoSource}
              </p>

            </div>

          </div>

        </section>


        <section className="history-cultural-building">

          <Row className="g-2 align-items-center">


            <Col lg={12}>

              <div className="history-section-heading history-heading-left">

                <span>
                  {t.physicsEyebrow}
                </span>

                <h2>
                  {t.physicsTitle}
                </h2>

              </div>
                 <Col lg={8} >

              <div className="history-image-card">

                <AnimatedImage
                  src={zavicajno}
                alt={t.altPhysics}
                  className="history-main-image"
                />


              </div>

            </Col>
            <br/>
              <div className="history-text">

                {t.physics.map((paragraph) => (

                  <p key={paragraph.slice(0, 40)}>
                    {paragraph}
                  </p>

                ))}

              </div>

            </Col>

          </Row>

        </section>


        <section className="history-building">

          <div className="history-section-heading">

            <span>
              {t.astroEyebrow}
            </span>

            <h2>
              {t.astroTitle}
            </h2>

            <p>
              {t.astroLead}
            </p>

          </div>


          <Row className="g-5 align-items-center">

            <Col lg={6}>

              <div className="history-text">

                {t.astro.map((paragraph) => (

                  <p key={paragraph.slice(0, 40)}>
                    {paragraph}
                  </p>

                ))}

              </div>

            </Col>


            <Col lg={6}>

              <div className="history-image-card">

                <AnimatedImage
                  src='https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/487485063_1079797184181944_5934430657574610169_n.jpg?stp=dst-jpg_tt6&cstp=mx628x840&ctp=s628x840&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=C5Pj_X4hGosQ7kNvwGePFDr&_nc_oc=Adq4iII20qg9NQbUiLciLT4_yJE4nsGuUunwEOEgxVb5IkAObSzkziZ2bhO0ppu0KnI&_nc_zt=23&_nc_ht=scontent.fbeg4-1.fna&_nc_gid=n8lCLHbn_c8jpzG9kpSDIA&_nc_ss=7b2a8&oh=00_AQMBTv1x73qBIl_NCLNjHO3SItEAaYoDwDUE6Lk25dOy1Q&oe=6AD566AD'
                  alt={t.altBooks}
                  className="history-main-image"
                />

              </div>

            </Col>

          </Row>

        </section>


        <section className="history-cultural-building">

          <Row className="g-5 align-items-center">

            <Col lg={6}>

              <div className="history-image-card">

                <AnimatedImage
                  src={public4}
                  alt={t.altAristid}
                 style={{
    width: '70%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '20px',
    display: 'block',
    margin: '0 auto',
    objectFit: 'cover'
  }}
                />
                <hr/>
                    <AnimatedImage
                  src={Kandor}
                  alt={t.altKandor}
                 style={{
    width: '70%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '20px',
    display: 'block',
    margin: '0 auto',
    objectFit: 'cover'
  }}
                />

              </div>

            </Col>


            <Col lg={6}>

              <div className="history-section-heading history-heading-left">

                <span>
                  {t.litEyebrow}
                </span>

                <h2>
                  {t.litTitle}
                </h2>

              </div>

              <div className="history-text">

                {t.lit.map((paragraph) => (

                  <p key={paragraph.slice(0, 40)}>
                    {paragraph}
                  </p>

                ))}

              </div>

            </Col>

          </Row>

        </section>


        <section className="history-building">

          <div className="history-section-heading">

            <span>
              {t.russiaEyebrow}
            </span>

            <h2>
              {t.russiaTitle}
            </h2>

          </div>


          <Row className="g-5 align-items-center">

            <Col lg={6}>

              <div className="history-text">

                {t.russia.map((paragraph) => (

                  <p key={paragraph.slice(0, 48)}>
                    {paragraph}
                  </p>

                ))}

              </div>

            </Col>


            <Col lg={6}>

              <div className="history-image-card history-image-card-small">

                <AnimatedImage
                  src='https://static.kupindoslike.com/Novi-Zavet-prevod-Atanasije-Stojkovic-1830-god-_slika_XL_147874129.jpg'
                  alt={t.altNewTestament}
                  className="history-main-image"
                />

              </div>

              <div className="history-image-card history-image-card-small">

                <AnimatedImage
                  src={konkurs}
                  alt={t.altAward}
                  className="history-main-image"
                />

              </div>

            </Col>

          </Row>


          <div className="history-text">

            <p>
              {t.prize}
            </p>

          </div>


          <div className="history-final">

            <div className="history-final-icon">

              <LiaBookSolid />

            </div>

            <p>
              {t.final}
            </p>

          </div>

        </section>


        <div className="history-books-decoration">

          <LiaBookSolid />

          <LiaBookSolid />

          <LiaBookSolid />

        </div>


      </Container>

    </>
  );
};


export default Stojkovic;
