import React, {
  useState,
  useCallback,
  useMemo,
  Suspense
} from 'react';

import './Home.css';

import {
  Button,
  Col,
  Container,
  Row,
  Modal
} from 'react-bootstrap';

import {
  FaArrowRight,
  FaCalendarAlt,
  FaBookOpen,
  FaHeadphones,
  FaSearch,
  FaFileAlt,
  FaUsers,
  FaTimes
} from 'react-icons/fa';

import { Helmet } from 'react-helmet-async';

import ImageModal from './ImageModal';
import AnimatedCard from './Department/AnimatedCard';
import cobbis from '../images/cobbis.webp';
import matica from '../images/matica.webp';
import narodna from '../images/narodna.webp';
import ministarstvo from '../images/ministarstvo.webp';
import opstina from '../images/opstina.webp';
import konkurs from '../images/konkurs.webp';
import muzej from '../images/muzej.webp';
import kc from '../images/kc.webp';
import turisticka from '../images/turisticka.webp';
import logoDigitalna from '../images/logoDigitalna.webp';
import filmTesla from '../images/filmTesla.png';
import kosare from '../images/kosare.png';
import karavansaraj from '../images/karavansaraj.png';
import saradnja from '../images/saradnja.jpg';
import saradnja1 from '../images/saradnja1.webp';
import saradnja2 from '../images/saradnja2.webp';
import saradnja3 from '../images/saradnja3.webp';
import beke from '../images/beke.webp';
import Frigo from '../images/Frigo.webp';
import Boss from '../images/Boss.webp';
// import trkulja from '../images/trkulja.png';
import books from '../images/books.webp';
import Panonija from '../images/Panonija.webp';
import karoselSlika from '../images/karoselSlika.webp';
import digitalna from '../images/digitalna.webp';
import pokrajina from '../images/pokrajina.webp';
import biblioteka from '../images/biblioteka.webp';
import prijavaKonkurs from '../images/prijavaKonkurs.jpg';
import 'react-calendar/dist/Calendar.css';

const Calendar = React.lazy(() => import('react-calendar'));



const Home = () => {
  const [date, setDate] = useState(new Date());

  const [showImage, setShowImage] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const [showFriends, setShowFriends] = useState(false);

  const [showImageModal, setShowImageModal] = useState(false);

  const [selectedImage, setSelectedImage] = useState({
    src: '',
    alt: '',
    title: '',
    size: 'lg'
  });

  /*
   * --------------------------------------------------
   * DOGAĐAJI
   * --------------------------------------------------
   */

  const events = useMemo(
    () => ({
      '2026-08-10': {
        image: filmTesla,
        title: 'Никола Тесла: између књиге и идеје'
      },
      '2026-08-26': {
        image: karavansaraj,
        title: 'Каравансарај'
      },
      '2026-08-28': {
        image: kosare,
        title: 'Кошаре'
      }
    }),
    []
  );

  const getDateKey = useCallback((selectedDate) => {
    if (!(selectedDate instanceof Date)) {
      return '';
    }

    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const day = String(selectedDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }, []);

  const tileClassName = useCallback(
    ({ date: calendarDate, view }) => {
      if (view !== 'month' || !(calendarDate instanceof Date)) {
        return undefined;
      }

      const key = getDateKey(calendarDate);

      if (events[key]) {
        return 'marked-date';
      }

      return undefined;
    },
    [events, getDateKey]
  );

  const handleCalendarChange = useCallback(
    (selectedDate) => {
      setDate(selectedDate);

      const key = getDateKey(selectedDate);
      const selectedEvent = events[key];

      if (selectedEvent) {
        setModalImage(selectedEvent.image);
        setShowImage(true);
      } else {
        setShowImage(false);
        setModalImage(null);
      }
    },
    [events, getDateKey]
  );

  /*
   * --------------------------------------------------
   * IMAGE MODAL
   * --------------------------------------------------
   */

  const handleImageClick = useCallback(
    (image, title, modalSize = 'lg') => {
      setSelectedImage({
        src: image,
        alt: title,
        title,
        size: modalSize
      });

      setShowImageModal(true);
    },
    []
  );

  const handleCloseImageModal = useCallback(() => {
    setShowImageModal(false);

    setSelectedImage({
      src: '',
      alt: '',
      title: '',
      size: 'lg'
    });
  }, []);

  /*
   * --------------------------------------------------
   * CAROUSEL
   * --------------------------------------------------
   */

  const carouselSlides = useMemo(
    () => [
      {
        image: biblioteka,
        alt: 'Зграда Градске библиотеке у Руми',
        title: 'ВАЖНО ОБАВЕШТЕЊЕ',
        text:
          'Поштовани корисници, уколико желите да поклоните књиге Градској библиотеци, молимо вас да се пре доношења истих најпре консултујете са библиотекарима.',
        button: null
      },
      {
        image: digitalna,
        alt: 'Атанасије Стојковић',
        title: 'АТАНАСИЈЕ СТОЈКОВИЋ',
        text:
          'Румљанин Атанасије Стојковић био је најобразованији Србин прве трећине 19. века.',
        button: {
          href: 'https://www.facebook.com/watch/?v=1235424304400303',
          text: 'ДЕТАЉНИЈЕ'
        }
      },
      {
        image: karoselSlika,
        alt: 'Култура за све',
        title: 'КУЛТУРА ЗА СВЕ',
        text:
          'Пројекат „Култура за све“ представља јачање техничких капацитета наше установе.',
        button: {
          href: 'https://sremskevesti.rs/sva-odeljenja-rumske-gradske-biblioteke-atanasije-stojkovic-dostupna-ljudima-ostecenog-sluha-slepim-i-slabovidim-osobama/',
          text: 'ДЕТАЉНИЈЕ'
        }
      },
      {
        image: books,
        alt: 'Омиљене књиге наших корисника',
        title: 'ОМИЉЕНЕ КЊИГЕ НАШИХ КОРИСНИКА',
        text:
          'Погледајте које су књиге најомиљеније међу корисницима Градске библиотеке.',
        button: {
          href: 'https://www.facebook.com/bibliotekaatanasijestojkovic.ruma/videos/967554408223187',
          text: 'ДЕТАЉНИЈЕ'
        }
      }
    ],
    []
  );

  /*
   * --------------------------------------------------
   * PARTNERI
   * --------------------------------------------------
   */

  const institutionalPartners = [
    {
      image: ministarstvo,
      alt: 'Министарство културе Србије',
      className: 'partner-cultural'
    },
    {
      image: opstina,
      alt: 'Општина Рума',
      className: 'partner-municipality'
    },
    {
      image: pokrajina,
      alt: 'Покрајински секретаријат за културу',
      className: 'partner-province'
    },
    {
      image: matica,
      alt: 'Матица српска',
      className: 'partner-cultural'
    },
    {
      image: narodna,
      alt: 'Народна библиотека Србије',
      className: 'partner-cultural'
    },
    {
      image: muzej,
      alt: 'Музеј у Руми',
      className: 'partner-cultural'
    },
    {
      image: turisticka,
      alt: 'Туристичка организација Рума',
      className: 'partner-cultural'
    },
    {
      image: kc,
      alt: 'Културни центар Рума',
      className: 'partner-cultural'
    }
  ];

  const friends = [
    {
      image: Panonija,
      alt: 'Панонија књижара у Руми'
    },
    {
      image: Boss,
      alt: 'Босс компанија Рума'
    },
    // {
    //   image: trkulja,
    //   alt: 'Тркуља керамика Рума'
    // },
    {
      image: Frigo,
      alt: 'Фриго Жика Рума'
    },
    {
      image: beke,
      alt: 'Беке компанија Рума'
    }
  ];

  return (
    <>
      <Helmet>
        <title>
          Градска библиотека Атанасије Стојковић Рума
        </title>

        <meta
          name="description"
          content="Градска библиотека Атанасије Стојковић у Руми нуди широк избор књига, дигитални фонд, културне догађаје и образовне програме."
        />

        <meta
          name="keywords"
          content="библиотека, Рума, књиге, догађаји, препоруке, Атанасије Стојковић"
        />

        <link
          rel="canonical"
          href="https://www.bibliotekaruma.rs/"
        />

        <meta
          property="og:title"
          content="Градска библиотека Атанасије Стојковић Рума – званични сајт"
        />

        <meta
          property="og:description"
          content="Званични сајт Градске библиотеке Атанасије Стојковић у Руми."
        />

        <meta
          property="og:image"
          content="https://www.bibliotekaruma.rs/logo.webp"
        />

        <meta
          property="og:url"
          content="https://www.bibliotekaruma.rs/"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="Градска библиотека Рума"
        />

        <meta
          property="og:locale"
          content="sr_RS"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Градска библиотека Атанасије Стојковић Рума"
        />

        <meta
          name="twitter:description"
          content="Званични сајт Градске библиотеке Атанасије Стојковић у Руми."
        />

        <meta
          name="twitter:image"
          content="https://www.bibliotekaruma.rs/logo.webp"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.bibliotekaruma.rs/#website",
                  "url": "https://www.bibliotekaruma.rs/",
                  "name": "Градска библиотека Рума",
                  "alternateName": "Градска библиотека Атанасије Стојковић Рума",
                  "description": "Званични сајт Градске библиотеке у Руми",
                  "publisher": {
                    "@id": "https://www.bibliotekaruma.rs/#organization"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.bibliotekaruma.rs/#organization",
                  "name": "Градска библиотека Рума",
                  "alternateName": "Градска библиотека Атанасије Стојковић Рума",
                  "url": "https://www.bibliotekaruma.rs/",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.bibliotekaruma.rs/logo.webp"
                  },
                  "sameAs": [
                    "https://www.facebook.com/bibliotekaatanasijestojkovic.ruma",
                    "https://www.instagram.com/gradska_biblioteka_ruma",
                    "https://youtube.com/@gradskabibliotekaruma"
                  ]
                }
              ]
            }
          `}
        </script>
      </Helmet>

      {/* =====================================================
          HERO CAROUSEL
      ====================================================== */}

      <section className="home-hero">
        <div
          id="bibliotekaCarousel"
          className="carousel slide home-carousel"
          data-bs-ride="carousel"
          data-bs-interval="30000"
          data-bs-wrap="true"
          data-bs-keyboard="true"
          data-bs-pause="hover"
        >
          <div className="carousel-indicators">
            {carouselSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                data-bs-target="#bibliotekaCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-label={`Слајд ${index + 1}`}
              />
            ))}
          </div>

          <div className="carousel-inner">
            {carouselSlides.map((slide, index) => (
              <div
                className={`carousel-item ${
                  index === 0 ? 'active' : ''
                }`}
                key={slide.title}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="d-block w-100 home-carousel-image"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  width="1200"
                  height="675"
                  onClick={() =>
                    handleImageClick(
                      slide.image,
                      slide.alt
                    )
                  }
                />

                <div className="carousel-overlay" />

                <div className="carousel-caption home-caption">
                  <div className="caption-content">
                    <span className="caption-kicker">
                      {index === 0
                        ? 'ВАЖНО ОБАВЕШТЕЊЕ'
                        : 'ГРАДСКА БИБЛИОТЕКА РУМА'}
                    </span>

                    <h2>{slide.title}</h2>

                    <p>{slide.text}</p>

                    {slide.button && (
                      <a
                        href={slide.button.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home-button home-button-light"
                      >
                        {slide.button.text}
                        <FaArrowRight />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#bibliotekaCarousel"
            data-bs-slide="prev"
            aria-label="Претходни слајд"
          >
            <span className="carousel-control-prev-icon" />
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#bibliotekaCarousel"
            data-bs-slide="next"
            aria-label="Следећи слајд"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </section>

      {/* =====================================================
          KONKURS
      ====================================================== */}

      <section className="home-section">
        <Container>
          <div className="notice-card">
            <div className="notice-image">
              <img
                src={prijavaKonkurs}
                alt="Пријава за конкурс"
                loading="lazy"
              />
            </div>

            <div className="notice-content">
              <span className="section-kicker">
                АКТУЕЛНО
              </span>

              <h2>
                Пријава за конкурс
              </h2>

              <p>
                Погледајте актуелни конкурс и
                информације о начину пријављивања.
              </p>

              <a
                href="https://www.bibliotekaruma.rs/konkurs-biblioteke"
                className="home-button"
              >
                ДЕТАЉНИЈЕ
                <FaArrowRight />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          EVENTS
      ====================================================== */}

      <section className="home-section events-section">
        <Container>
          <div className="section-heading">
            <span className="section-kicker">
              КАЛЕНДАР
            </span>

            <h2>
              Огласна табла актуелних догађаја
            </h2>

            <p>
              Изаберите означени датум за више
              информација о догађају.
            </p>
          </div>

          <Row className="align-items-center g-4">
            <Col lg={4}>
              <div className="calendar-card">
                <div className="calendar-icon">
                  <FaCalendarAlt />
                </div>

                <Suspense
                  fallback={
                    <div className="calendar-loading">
                      Учитавање календара...
                    </div>
                  }
                >
                  <Calendar
                    onChange={handleCalendarChange}
                    value={date}
                    tileClassName={tileClassName}
                    locale="sr-Latn"
                  />
                </Suspense>
              </div>
            </Col>

            <Col lg={8}>
              <div className="events-gallery">
                <div className="events-gallery-header">
                  <span className="section-kicker">
                    НАЈАВЕ
                  </span>

                  <h3>
                    Догађаји библиотеке
                  </h3>
                </div>

                <div className="event-images">
                  <img
                    src={filmTesla}
                    alt="Никола Тесла: између књиге и идеје — пројекција филма"
                    loading="lazy"
                    onClick={() =>
                      handleImageClick(
                        filmTesla,
                        'Никола Тесла: између књиге и идеје'
                      )
                    }
                  />

                  <img
                    src={karavansaraj}
                    alt="Каравансарај — промоција"
                    loading="lazy"
                    onClick={() =>
                      handleImageClick(
                        karavansaraj,
                        'Каравансарај'
                      )
                    }
                  />

                  <img
                    src={kosare}
                    alt="Кошаре — промоција"
                    loading="lazy"
                    onClick={() =>
                      handleImageClick(
                        kosare,
                        'Кошаре'
                      )
                    }
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* EVENT MODAL */}

      <Modal
        show={showImage}
        onHide={() => setShowImage(false)}
        centered
        size="lg"
        className="event-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Догађај
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {modalImage && (
            <img
              src={modalImage}
              alt="Слика за изабрани датум"
              className="event-modal-image"
            />
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowImage(false)}
          >
            Затвори
          </Button>
        </Modal.Footer>
      </Modal>

      {/* =====================================================
          AUDIO BOOKS
      ====================================================== */}

      <section className="home-section audio-section">
        <Container>
          <div className="section-heading">
            <span className="section-kicker">
              НОВА УСЛУГА
            </span>

            <h2>
              Аудио-књиге
            </h2>

            <p>
              Нова могућност за све кориснике
              Градске библиотеке.
            </p>

            <a
              href="https://izdavanje.knjigaprica.com/r/ABlQaR6Ev0Tsgs0ZVByXLV1IMqA3"
              target="_blank"
              rel="noopener noreferrer"
              className="section-link"
            >
              Регистрација и слање захтева
              <FaArrowRight />
            </a>
          </div>

          <Row className="align-items-center g-2">
            <Col lg={6}>
              <div className="audio-images">
          

                <img
                  src={saradnja}
                  alt="Сарадња на пројекту аудио-књига"
                  loading="lazy"
                />
              </div>
            </Col>

            <Col lg={6}>
              <div className="content-card">
                <div className="content-card-icon">
                  <FaHeadphones />
                </div>

                <p>
                  Почев од 23. априла, у Градској
                  библиотеци „Атанасије Стојковић“
                  у Руми доступан је пилот пројекат
                  „Књига прича“, који доноси могућност
                  слушања аудио-књига.
                </p>

                <p>
                  Током шест месеци трајања пројекта,
                  корисницима је омогућен једноставан
                  приступ садржају – довољно је
                  скенирати QR код у библиотеци или
                  приступити платформи директно путем
                  <a
                    href="https://izdavanje.knjigaprica.com/r/ABlQaR6Ev0Tsgs0ZVByXLV1IMqA3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}овог линка
                  </a>.
                </p>

                <p>
                  Ова услуга намењена је свима који
                  желе другачији начин уживања у
                  књигама, посебно особама са
                  оштећењем вида, али и онима који,
                  због свакодневних обавеза, немају
                  времена за читање.
                </p>

                <p>
                  Понуда обухвата разноврсне жанрове,
                  укључујући књижевност, популарну
                  психологију, историју и школску
                  лектиру.
                </p>
              </div>
            </Col>
          </Row>

          <div className="instructions-card">
            <div className="instructions-header">
              <FaBookOpen />
              <h3>
                Правила за коришћење и регистрацију
              </h3>
            </div>

            <ol>
              <li>
                Преузмите на свој мобилни телефон
                Knjigapriča апликацију.
              </li>

              <li>
                Отворите налог.
              </li>

              <li>
                Аудио-књиге можете позајмити без
                доласка у Библиотеку, скенирањем
                QR кода или кликом на
                <a
                  href="https://izdavanje.knjigaprica.com/r/ABlQaR6Ev0Tsgs0ZVByXLV1IMqA3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}линк за регистрацију
                </a>.
              </li>

              <li>
                Попуните форму и пошаљите је.
                На Ваш имејл ћете добити обавештење
                да Вам је омогућен приступ аудио-књизи.
              </li>

              <li>
                За позајмицу аудио-књига можете се
                обратити и библиотекару.
              </li>

              <li>
                У случају да захтев подносите лично
                у Библиотеци, неопходно је да
                библиотекару дате своју имејл адресу.
              </li>

              <li>
                Када добијете информацију о позајмици,
                у свом налогу одаберите књигу коју сте
                позајмили.
              </li>
            </ol>
          </div>
        </Container>
      </section>

      {/* =====================================================
          QUICK ACCESS
      ====================================================== */}

      <section className="home-section quick-section">
        <Container>
          <div className="section-heading">
            <span className="section-kicker">
              БРЗИ ПРИСТУП
            </span>

            <h2>
              Истражите наше дигиталне услуге
            </h2>
          </div>

          <Row className="g-4">
            <Col md={4}>
              <AnimatedCard>
                <a
                  href="https://plus.cobiss.net/cobiss/sr/sr/search/cobib?lib=gbru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-card"
                >
                  <div className="quick-icon">
                    <FaSearch />
                  </div>

                  <h3>
                    Претражите наш фонд
                  </h3>

                  <img
                    src={cobbis}
                    alt="COBISS"
                    loading="lazy"
                  />

                  <span>
                    Претражи фонд
                    <FaArrowRight />
                  </span>
                </a>
              </AnimatedCard>
            </Col>

            <Col md={4}>
              <AnimatedCard>
                <a
                  href="https://www.digitalna.bibliotekaruma.rs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-card"
                >
                  <div className="quick-icon">
                    <FaBookOpen />
                  </div>

                  <h3>
                    Наш дигитални фонд
                  </h3>

                  <img
                    src={logoDigitalna}
                    alt="Дигитална библиотека Рума"
                    className="digital-logo"
                    loading="lazy"
                  />

                  <span>
                    Отвори дигиталну библиотеку
                    <FaArrowRight />
                  </span>
                </a>
              </AnimatedCard>
            </Col>

            <Col md={4}>
              <AnimatedCard>
                <a
                  href="https://www.facebook.com/photo/?fbid=1326535312805422&set=a.512519967540298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-card"
                >
                  <div className="quick-icon">
                    <FaFileAlt />
                  </div>

                  <h3>
                    Књижевни конкурс
                  </h3>

                  <img
                    src={konkurs}
                    alt="Књижевни конкурс"
                    className="contest-logo"
                    loading="lazy"
                  />

                  <span>
                    Погледај конкурс
                    <FaArrowRight />
                  </span>
                </a>
              </AnimatedCard>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =====================================================
          MATICA
      ====================================================== */}

      <section className="home-section matica-section">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <div className="matica-gallery">
                <img
                  src={saradnja1}
                  alt="Сарадња са Матицом српском"
                  loading="lazy"
                />

                <div>
                  <img
                    src={saradnja3}
                    alt="Сарадња са Матицом српском"
                    loading="lazy"
                  />

                  <img
                    src={saradnja2}
                    alt="Сарадња са Матицом српском"
                    loading="lazy"
                  />
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="matica-content">
                <span className="section-kicker">
                  САРАДЊА
                </span>

                <h2>
                  Матица српска
                </h2>

                <p>
                  Година 2025. завршена је на најлепши
                  могући начин, а сам крај године
                  обележио је најсјајнији тренутак наше
                  сарадње са Матицом српском, која нам
                  је доделила захвалницу за сарадњу,
                  помоћ и подршку током протекле године.
                </p>

                <p>
                  Награда, коју је у име библиотеке
                  примио директор Дамир Васиљевић
                  Тоскић, још једном потврђује значајну
                  улогу наше библиотеке у културном и
                  просветном животу заједнице.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =====================================================
          DOCUMENTS
      ====================================================== */}

      <section className="home-section documents-section">
        <Container>
          <div className="section-heading">
            <span className="section-kicker">
              ДОКУМЕНТИ
            </span>

            <h2>
              Званични документи библиотеке
            </h2>

            <p>
              Преглед основних аката Градске библиотеке
              „Атанасије Стојковић“ у Руми.
            </p>
          </div>

          <Row className="g-4 justify-content-center">
            <Col md={6}>
              <div className="document-card">
                <div className="document-icon">
                  <FaFileAlt />
                </div>

                <h3>
                  Правилник о условима и начину
                  коришћења библиотечке грађе
                </h3>

                <Button
                  variant="secondary"
                  onClick={() =>
                    window.open(
                      '/Pravilnik.pdf',
                      '_blank'
                    )
                  }
                >
                  ДЕТАЉНИЈЕ
                  <FaArrowRight />
                </Button>
              </div>
            </Col>

            <Col md={6}>
              <div className="document-card">
                <div className="document-icon">
                  <FaFileAlt />
                </div>

                <h3>
                  Статут установе Градске библиотеке
                  „Атанасије Стојковић“ Рума
                </h3>

                <Button
                  variant="secondary"
                  onClick={() =>
                    window.open(
                      '/Statut.pdf',
                      '_blank'
                    )
                  }
                >
                  ДЕТАЉНИЈЕ
                  <FaArrowRight />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =====================================================
          PARTNERS
      ====================================================== */}

      <section className="home-section partners-section">
        <Container>
          <div className="section-heading">
            <span className="section-kicker">
              САРАДЊА
            </span>

            <h2>
              Пријатељи и сарадници библиотеке
            </h2>
          </div>

          <div className="partners-grid">
            {institutionalPartners.map((partner) => (
              <div
                className="partner-logo"
                key={partner.alt}
              >
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className={partner.className}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="friends-box">
            <div className="friends-header">
              <div>
                <span className="section-kicker">
                  ПОДРШКА
                </span>

                <h3>
                  Пријатељи библиотеке
                </h3>
              </div>

              <button
                type="button"
                className="friends-toggle"
                onClick={() =>
                  setShowFriends(!showFriends)
                }
                aria-expanded={showFriends}
              >
                {showFriends ? (
                  <>
                    <FaTimes />
                    Затвори
                  </>
                ) : (
                  <>
                    <FaUsers />
                    Прикажи пријатеље
                  </>
                )}
              </button>
            </div>

            {showFriends && (
              <div className="friends-grid">
                {friends.map((friend) => (
                  <div
                    className="friend-logo"
                    key={friend.alt}
                  >
                    <img
                      src={friend.image}
                      alt={friend.alt}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* =====================================================
          IMAGE MODAL
      ====================================================== */}

      <ImageModal
        show={showImageModal}
        onHide={handleCloseImageModal}
        imageSrc={selectedImage.src}
        imageAlt={selectedImage.alt}
        title={selectedImage.title}
        size={selectedImage.size || 'lg'}
      />
    </>
  );
};

export default Home;