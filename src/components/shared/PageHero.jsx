import React from "react";
import { Container } from "react-bootstrap";
import { GiBookshelf, GiOpenBook } from "react-icons/gi";

import "../../styles/PageLayout.css";

const DEFAULT_LABEL =
  'ГРАДСКА БИБЛИОТЕКА „АТАНАСИЈЕ СТОЈКОВИЋ“';

const PageHero = ({
  label = DEFAULT_LABEL,
  title,
  description,
  centered = false,
  children,
}) => {
  return (
    <section
      className={`page-hero${
        centered ? " page-hero-centered" : ""
      }`}
    >
      <div className="page-hero-background">
        <div className="page-hero-circle page-circle-one"></div>
        <div className="page-hero-circle page-circle-two"></div>
      </div>

      <div className="page-hero-book page-book-left">
        <GiOpenBook />
      </div>

      <div className="page-hero-book page-book-right">
        <GiBookshelf />
      </div>

      <Container>
        <div className="page-hero-content">
          <div className="page-hero-label">
            <span></span>
            {label}
            <span></span>
          </div>

          <h1>{title}</h1>

          {description && <p>{description}</p>}

          {children}
        </div>
      </Container>
    </section>
  );
};

export default PageHero;
