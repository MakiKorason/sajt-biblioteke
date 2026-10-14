import React from "react";

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

import "./History.css";
import "./Stojkovic.css";


const Stojkovic = () => {

  const pageTitle =
    "Атанасије Стојковић (1773–1832)";

  const pageDescription =
    "Атанасије Стојковић, српски научник и књижевник из Руме, професор и ректор Харковског универзитета, аутор првог уџбеника физике на српском језику.";


  return (
    <>
      <Helmet>

        <title>
          {pageTitle}
        </title>

        <meta
          name="description"
          content={pageDescription}
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

            <div className="history-hero-label">

              ГРАДСКА БИБЛИОТЕКА „АТАНАСИЈЕ СТОЈКОВИЋ“

            </div>

            <h1>
              <em>Атанасије</em> Стојковић
            </h1>

            <p>
              1773–1832. Српски научник и књижевник из Руме,
              професор и ректор Харковског универзитета,
              један од првих Срба са великим признањима на Истоку и Западу.
            </p>

          </div>

        </Container>

      </section>


      <Container className="history-page">


        <section className="history-intro">

          <div className="history-section-heading">

            <span>
              ЖИВОТ И ШКОЛОВАЊЕ
            </span>

            <h2>
              Од Руме до Гетингена и Харкова
            </h2>

          </div>


          <Row className="g-5 align-items-start">

            <Col lg={8}>

              <div className="history-text">

                <p>
                  Атанасије Стојковић рођен је 20. септембра 1773.
                  године у Руми. Био је уједно и један од првих Срба
                  који је добио велика признања на Западу. У Русији
                  је био веома цењен као професор и ректор Харковског
                  универзитета. У Харкову је предавао на катедри за
                  физику и два пута је биран за ректора.
                </p>
                <Col md-6 className='text-center'>
            <AnimatedImage
  src={Atanasije}
alt='Atanasije Stojkovic'
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
                <p>
                  У родном граду изградио је основу за даља знања
                  која су му омогућила висока признања у старим
                  немачким универзитетским градовима – Гетингену
                  и Јени. У 18. веку Српска гимназија у Руми била је
                  међу првим основним школама, а њу је похађао и
                  Атанасије Стојковић.
                </p>

                <p>
                  По завршетку школе у Руми желео је да настави
                  школовање у иностранству. У Сегедину завршава
                  филозофију, односно 7. и 8. разред гимназије,
                  са одличним успехом. И поред тешких услова, без
                  довољно средстава, уписује се на правни одсек
                  Пожунске академије. Митрополит Стратимировић
                  слао му је новчану помоћ, а током 1796. године
                  Стојковић је тражио добротворе који би му
                  омогућили боравак у Немачкој.
                </p>

                <p>
                  Успео је да добије 300 форинти за школовање у
                  Гетингену, где 1799. године докторира филозофију.
                  Гетинген је тада био један од најбољих универзитета
                  у Европи, са изузетно јаком катедром за природне
                  науке. У исто време тамо је студирао и такозвани
                  „принц математичара“ Гаус.
                </p>

                <p>
                  Стојковић је показивао интересовање за физику,
                  математику, историју, а бавио се и поезијом.
                  Након доктората постао је члан чувеног Гетингенског
                  друштва 1802. године. Кратко је боравио и у Бечу,
                  где је упознао Доситеја Обрадовића, на чији наговор
                  је писао своје тротомно дело <em>Физика</em>, које је
                  посветио професорима из Руме. Време у којем је
                  стварао у српској књижевности назива се Доситејева
                  епоха.
                </p>

              </div>

            </Col>


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
                    1773.
                  </strong>

                  <p>
                    Рођен 20. септембра у Руми.
                  </p>

                </div>


                <div className="history-year">

                  <strong>
                    1799.
                  </strong>

                  <p>
                    Докторира филозофију у Гетингену.
                  </p>

                </div>


                <div className="history-year">

                  <strong>
                    1801–1803.
                  </strong>

                  <p>
                    Објављује тротомну <em>Физику</em> у Будиму.
                  </p>

                </div>


                <div className="history-year">

                  <strong>
                    1802.
                  </strong>

                  <p>
                    Роман <em>Аристид и Наталија</em> и чланство
                    у Гетингенском друштву.
                  </p>

                </div>


                <div className="history-year">

                  <strong>
                    1807.
                  </strong>

                  <p>
                    Књига о метеоритима, прва те врсте у свету.
                  </p>

                </div>


                <div className="history-year">

                  <strong>
                    1815.
                  </strong>

                  <p>
                    Од руског цара добија поседе у Бесарабији.
                  </p>

                </div>


                <div className="history-year">

                  <strong>
                    1828.
                  </strong>

                  <p>
                    Члан Руске академије.
                  </p>

                </div>

              </div>

            </Col>

          </Row>


          <div className="history-highlight">

            <div className="history-highlight-icon">

              <LiaBookSolid />

            </div>

            <div>

              <span>
                МОТО
              </span>

              <p className="stojkovic-quote">
                „Сви знају о томе, свако помало, а нико довољно.“
              </p>

              <p className="stojkovic-quote-source">
                Латински мото из дела „О ваздушном камењу
                и њиховом пореклу“ (1807)
              </p>

            </div>

          </div>

        </section>


        <section className="history-cultural-building">

          <Row className="g-2 align-items-center">

          
            <Col lg={12}>

              <div className="history-section-heading history-heading-left">

                <span>
                  ФИЗИКА
                </span>

                <h2>
                  Први уџбеник физике на српском језику
                </h2>

              </div>
                 <Col lg={8} >

              <div className="history-image-card">

                <AnimatedImage
                  src={zavicajno}
                alt='fizika'
                  className="history-main-image"
                />

    
              </div>

            </Col>
            <br/>
              <div className="history-text">

                <p>
                  Капитално Стојковићево дело <em>Физика</em>, на чијој
                  насловној страни пише „простим језиком списана
                  за род славено-сербскиј“, први је уџбеник физике
                  на српском језику. У српској литератури дотад није
                  било књига ове врсте. Објављена је у Будиму
                  (данашња Будимпешта) 1801, 1802. и 1803. године,
                  у три књиге.
                </p>

                <p>
                  У тренутку њене појаве Вук Караџић тек је напунио
                  13 година; са њим је Стојковић касније био у сукобу
                  око превода Новог завета. Стојковићев превод Новог
                  завета на славеносрпски једини је такав превод који
                  Срби имају.
                </p>

                <p>
                  <em>Физика</em> није преведена на савремени српски језик.
                  Њена појава била је догађај европских размера, јер
                  такву књигу тада нису имали ни просвећенији народи
                  у Европи. Појам физике обухватао је науку о природи
                  и све природне науке осим хемије.
                </p>

                <p>
                  Стојковић је био свестан сујеверја у Европи, посебно
                  код Срба, па је у <em>Физици</em> позивао читаоце да се
                  против њега боре. Радећи на делу ковао је и нове
                  речи, стога књига садржи регистар појмова.
                  Претплаћено је било 1262 пренумеранта, а продато
                  укупно 1851 књига.
                </p>

                <p>
                  Животни век је углавном провео у Русији, писао је
                  научне радове на руском и саставио уџбеник физике
                  на руском језику за студенте руских универзитета.
                </p>

              </div>

            </Col>

          </Row>

        </section>


        <section className="history-building">

          <div className="history-section-heading">

            <span>
              АСТРОНОМИЈА
            </span>

            <h2>
              Прва књига о метеоритима на свету
            </h2>

            <p>
              У Русији је као научник највише цењен по радовима
              из астрономије.
            </p>

          </div>


          <Row className="g-5 align-items-center">

            <Col lg={6}>

              <div className="history-text">

                <p>
                  Дело „О ваздушном камењу и њиховом пореклу“
                  важи за прву књигу о метеоритима на свету, а њено
                  објављивање утицало је на развој руске метеоритике.
                  Изашло је 1807. године.
                </p>

                <p>
                  Захваљујући тематици и обради ове књиге, једно
                  брдо у Сибиру, у Тунгузији, названо је Стојковићево
                  брдо. Назив је дао руски истраживач Тунгуског
                  метеорита Леонид Кулик.
                </p>

                <p>
                  Тунгуска експлозија догодила се 30. јуна 1908.
                  године. Опустошила је 2000 квадратних метара тајге
                  и порушила око 80 милиона дрвећа. Остаје најснажнија
                  експлозија те врсте забележена у историји и,
                  према неким проценама, произвела је око 185 пута
                  више енергије од атомске бомбе бачене на Хирошиму.
                </p>

              </div>

            </Col>


            <Col lg={6}>

              <div className="history-image-card">

                <AnimatedImage
                  src='https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/487485063_1079797184181944_5934430657574610169_n.jpg?stp=dst-jpg_tt6&cstp=mx628x840&ctp=s628x840&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=C5Pj_X4hGosQ7kNvwGePFDr&_nc_oc=Adq4iII20qg9NQbUiLciLT4_yJE4nsGuUunwEOEgxVb5IkAObSzkziZ2bhO0ppu0KnI&_nc_zt=23&_nc_ht=scontent.fbeg4-1.fna&_nc_gid=n8lCLHbn_c8jpzG9kpSDIA&_nc_ss=7b2a8&oh=00_AQMBTv1x73qBIl_NCLNjHO3SItEAaYoDwDUE6Lk25dOy1Q&oe=6AD566AD'
                  alt="Knjige Atanasija Stojkovica"
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
                  alt="Aristid i Natalija"
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
                  alt="Aristid i Natalija"
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
                  КЊИЖЕВНОСТ
                </span>

                <h2>
                  Уметник речи и први српски роман
                </h2>

              </div>

              <div className="history-text">

                <p>
                  Стојковића је стално тиштала жеља ка родном крају,
                  чему сведочи песма „Ода на источник Борковачкиј“,
                  посвећена борковачком извору. Цео текст објављен је
                  у часопису „Јавор“. Милорад Павић високо је оценио
                  његове песме и сматрао да посебну пажњу заслужује
                  Стојковићев допринос развоју хексаметра у српској
                  поезији.
                </p>

                <p>
                  Године 1800. у Будиму је објавио дело око којег се
                  и данас води дилема о жанру – да ли је роман,
                  филозофски спис или филозофски роман. Реч је о
                  делу „Кандор или откровење египатски тајни“.
                  Кандор на латинском значи искреност; наслов подсећа
                  на Волтеровог Кандида, с тим што је Волтер узео
                  француску, а Атанасије латинску реч истог значења.
                </p>

                <p>
                  Кандор је књига о трагању за мудрошћу. Млади Кандор,
                  син сиромашних родитеља, једног јутра одлази из
                  родног краја ка Египту у којем цветају све науке.
                  Намеру омете појава тајанственог старца који га води
                  у врт и данима га упућује у „египатске тајне“,
                  односно тајне мудрости. Филозофска учења личе на
                  Кантову моралну филозофију, али се Кантово име
                  нигде не спомиње јер су му дела тада била забрањена
                  у Аустрији.
                </p>

                <p>
                  Посебно место у историји српске књижевности заузима
                  роман <em>Аристид и Наталија</em>, који се сматра првим
                  романом у новијој српској књижевности. Објављен је
                  у Будиму 1802. године и уводи нас у свет осећања:
                  пријатељство, родитељску љубав, љубав према сеоском
                  животу и раду, љубав према природи.
                </p>

                <p>
                  Треба истаћи и дело „Српски секретар“, које је имало
                  за циљ да поучи како се пишу писма, обвезнице,
                  тестаменти и уговори. То не изненађује ако се зна
                  да је последње године живота провео у Санкт
                  Петербургу као царски државни саветник и да је од
                  цара Александра I добио орден Светог Владимира.
                </p>

              </div>

            </Col>

          </Row>

        </section>


        <section className="history-building">

          <div className="history-section-heading">

            <span>
              РУСИЈА И ПОЛИТИЧКИ ЖИВОТ
            </span>

            <h2>
              Спона између Срба и руских власти
            </h2>

          </div>


          <Row className="g-5 align-items-center">

            <Col lg={6}>

              <div className="history-text">

                <p>
                  Од руског цара 1815. године добио је земљишне
                  поседе у Бесарабији (данашња Молдавија). Живео је
                  са Рускињом и нису имали потомака.
                </p>

                <p>
                  У Бесарабији је био окренут политичком животу и
                  одржавао је везе како са руским централним властима,
                  тако и са Карађорђем, кога је изузетно ценио.
                  После пропасти Првог српског устанка Карађорђе је
                  боравио у Бесарабији, а из сачуваних података може
                  се закључити да је Стојковић био у контакту с њим.
                  У Кишињеву се сусретао и с Пушкином.
                </p>

                <p>
                  Увек је био спона између Срба и руских власти, па
                  је био у контакту и са црногорским митрополитом
                  Петром I Петровићем Његошем. У писму се нуди да као
                  пријатељ свог народа буде посредник између Његоша
                  и руског цара.
                </p>

                <p>
                  Из писама митрополиту Стратимировићу види се да је
                  силно желео да напише историју српског народа –
                  политичку, културну и економску – али ту замисао
                  није остварио.
                </p>

                <p>
                  Био је члан више страних научних друштава. Његовом
                  заслугом основано је Учено друштво у Харкову, а
                  1828. постаје члан Руске академије која се бавила
                  питањима руског језика и словесности. Пред крај
                  живота бавио се и преводилачким радом. Знао је
                  руски, немачки, мађарски, француски, латински и
                  скоро све словенске језике.
                </p>

                <p>
                    <strong> Градска библиотека у Руми сваке године расписује
              конкурс за „Награду за први необјављени роман на
              српском језику“. Од 2011. године установа свом називу
              додаје и име овог знаменитог Румљанина.
                  архивима.</strong>
                </p>

              </div>

            </Col>


            <Col lg={6}>

              <div className="history-image-card history-image-card-small">

                <AnimatedImage
                  src='https://static.kupindoslike.com/Novi-Zavet-prevod-Atanasije-Stojkovic-1830-god-_slika_XL_147874129.jpg'
                  alt="Novi zavet -prevod Atanasija Stojkovica"
                  className="history-main-image"
                />

              </div>

              <div className="history-image-card history-image-card-small">

                <AnimatedImage
                  src={konkurs}
                  alt="Награда Атанасије Стојковић за први необјављени роман"
                  className="history-main-image"
                />

              </div>

            </Col>

          </Row>

     


 


          <div className="history-text">

            <p>
              Градска библиотека у Руми сваке године расписује
              конкурс за „Награду за први необјављени роман на
              српском језику“. Од 2011. године установа свом називу
              додаје и име овог знаменитог Румљанина.
            </p>

          </div>


          <div className="history-final">

            <div className="history-final-icon">

              <LiaBookSolid />

            </div>

            <p>
              Атанасије Стојковић умро је 1832. године. Научник,
              просветитељ и књижевник из Руме остао је спона између
              српске културе и европске науке, а његово име данас
              носи Градска библиотека у родном граду.
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
