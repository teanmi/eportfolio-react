/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleHalfStroke,
  faEnvelope,
  faFilePdf,
  faTimes,
  faSpinner,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  const contact = (event) => {
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");

    event.preventDefault();

    loading.classList += " modal__overlay--visible";
    // emailjs
    //   .sendForm(
    //     "service_iw14wxo",
    //     "template_ahkrqok",
    //     event.target,
    //     "INM3kekNo10VyVuuF"
    //   )
    //   .then(() => {
    //     loading.classList.remove("modal__overlay--visible");
    //     success.classList += " modal__overlay--visible";
    //   })
    //   .catch(() => {
    //     loading.classList.remove("modal__loading--visible");
    //     alert(
    //       "The email service is temporarily unavailable. Please reach me directly at teanmi6@gmail.com."
    //     );
    //   });
  };

  const toggleModal = () => {
    document.getElementById("body").classList.toggle("modal--open");
  };

  const toggleContrast = () => {
    document.getElementById("body").classList.toggle("dark-theme");
  };

  const moveBackground = (event) => {
    const shapes = document.querySelectorAll(".shape");
    const scaleFactor = 1 / 20;

    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
      if (i % 2 === 0) {
        shapes[i].style.transform = `translate(${x}px, ${y}px)`;
      } else {
        shapes[i].style.transform = `translate(${-x}px, ${-y}px)`;
      }
    }
  };

  return (
    <div id="body" onMouseMove={(event) => moveBackground(event)}>
      <a href="#landing-page">
        <button className="mail__btn click" onClick={() => toggleModal()}>
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
      </a>
      <section id="landing-page">
        <nav>
          <h2 className="logo">M|T</h2>
          <ul className="nav__link--list">
            <li className="nav__link">
              <a
                href="#"
                onClick={() => toggleModal()}
                className="nav__link--anchor link__hover-effect link__hover-effect--black click"
              >
                About
              </a>
            </li>
            <li className="nav__link">
              <a
                href="#projects"
                className="nav__link--anchor link__hover-effect link__hover-effect--black click"
              >
                Projects
              </a>
            </li>
            <li className="nav__link">
              <a
                href="#"
                onClick={() => toggleModal()}
                className="nav__link--anchor link__hover-effect link__hover-effect--black click"
              >
                Contact
              </a>
            </li>
            <li
              className="nav__link click dark-mode--btn"
              onClick={() => toggleContrast()}
            >
              <a
                href="#"
                className="nav__link--anchor link__hover-effect link__hover-effect--black"
              >
                <FontAwesomeIcon icon={faCircleHalfStroke} />
              </a>
            </li>
          </ul>
        </nav>
        <header className="header">
          <div className="header__content">
            <h1 className="title">Hey</h1>
            <h1 className="title second--title purple">I'm Michael.</h1>
            <p className="header__para">
              I'm a <span className="purple">Frontend Developer</span> with a
              desire to create great websites to spark a positive experience for
              users.
              <br />
              Here is some more
              <span className="purple ml4 click" onClick={() => toggleModal()}>
                about me.
              </span>
            </p>
            <div className="about-me__links">
              <a
                href="https://www.linkedin.com/in/michael-telakowicz-0a1189222/"
                target="_blank"
                className="about-me__link click"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://github.com/teanmi"
                target="_blank"
                className="about-me__link click"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a href="" className="about-me__link click">
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
          </div>
        </header>

        <a href="#projects" className="scroll">
          <div className="scroll__icon click"></div>
        </a>
        <div className="modal">
          <div className="modal__half modal__about">
            <h3 className="modal__title--about modal__title">
              Here's a bit about me.
            </h3>
            <h4 className="modal__sub-title modal__sub-title--about">
              Frontend Software Engineer
            </h4>
            <p className="modal__para">
              I'm a <span className="purple">frontend developer</span> with a
              strong desire to develop websites that can easily be used
              <span className="purple">by all.</span>
              <br />I currently take on challenging tasks and learn from these
              experiences to become a more
              <span className="purple">experienced</span> software enginner.
            </p>
            <div className="modal__languages">
              <figure className="modal__language">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                  alt=""
                />
                <span className="language__name">HTML</span>
              </figure>
              <figure className="modal__language">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                  alt=""
                />
                <span className="language__name">CSS</span>
              </figure>
              <figure className="modal__language">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                  alt=""
                />
                <span className="language__name">JavaScript</span>
              </figure>
              <figure className="modal__language">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
                  alt=""
                />
                <span className="language__name">React</span>
              </figure>
              <figure className="modal__language">
                <img src="./images/typescript.png" alt="" />
                <span className="language__name">TypeScript</span>
              </figure>
              <figure className="modal__language">
                <img src="./images/sass.png" alt="" />
                <span className="language__name">SASS</span>
              </figure>
              <figure className="modal__language">
                <img src="./images/tailwind.png" alt="" />
                <span className="language__name">Tailwind</span>
              </figure>
              <figure className="modal__language">
                <img src="./images/nextjs.svg" alt="" />
                <span className="language__name">Next.js</span>
              </figure>
            </div>
          </div>
          <div className="modal__half modal__contact">
            <FontAwesomeIcon
              icon={faTimes}
              className="click modal__exit"
              onClick={() => toggleModal()}
            />

            <h3 className="modal__title modal__title--contact">
              Let's have a chat!
            </h3>
            <h3 className="modal__sub-title modal__sub-title--contact">
              I'm looking forward to hearing from you.
            </h3>
            <form id="contact__form" onSubmit={(event) => contact(event)}>
              <div className="form__item">
                <label htmlFor="name" className="form__item--label">
                  Name
                </label>
                <input
                  className="input"
                  name="user_name"
                  type="text"
                  required
                />
              </div>
              <div className="form__item">
                <label htmlFor="name" className="form__item--label">
                  Email
                </label>
                <input
                  className="input"
                  name="user_email"
                  type="email"
                  required
                />
              </div>
              <div className="form__item">
                <label htmlFor="name" className="form__item--label">
                  Message
                </label>
                <textarea
                  className="input"
                  name="message"
                  type="text"
                  required
                ></textarea>
              </div>
              <button id="contact__submit" className="form__submit">
                Send it my way
              </button>
            </form>
            <div className="modal__overlay modal__overlay--loading">
              <FontAwesomeIcon icon={faSpinner} />
            </div>
            <div className="modal__overlay modal__overlay--success">
              Thanks for the message! Can't wait to speak to you soon!
            </div>
          </div>
        </div>
        <img src="./images/semi circle.svg" className="shape shape--0" />
        <img src="./images/circle.svg" className="shape shape--1" />
        <img src="./images/squiggly.svg" className="shape shape--2" />
        <img src="./images/circle.svg" className="shape shape--3" />
        <img src="./images/triangle.svg" className="shape shape--4" />
        <img src="./images/circle.svg" className="shape shape--5" />
        <img src="./images/squiggly.svg" className="shape shape--6" />
        <img src="./images/circle.svg" className="shape shape--7" />
        <img src="./images/semi circle.svg" className="shape shape--8" />
      </section>
      <section id="projects">
        <div className="container">
          <div className="row">
            <h1 className="section__title">
              Here are some of my <span className="purple">projects</span>
            </h1>
            <ul className="project__list">
              <li className="project">
                <div className="project__wrapper">
                  <img
                    src="./images/gamemart.png"
                    className="project__mockup"
                    alt=""
                  />
                  <div className="project__wrapper--bg"></div>
                  <div className="project__description">
                    <h3 className="project__description--title">Game Mart</h3>
                    <h4 className="project__description--sub-title">
                      Html, CSS, JS, React, Redux
                    </h4>
                    <p className="project__description--para">
                      A multi page video game ecommerse website. Uses React
                      Redux to store values in a cart that saves after leaving
                      the store. Fetches video game data from an API and
                      displays it dynamically on the page.
                    </p>
                    <div className="project__description--links">
                      <a
                        target="_blank"
                        href="https://github.com/teanmi/video-game-store"
                        className="project__description--link"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a
                        target="_blank"
                        href="https://game-mart-1617a.firebaseapp.com/"
                        className="project__description--link"
                      >
                        <FontAwesomeIcon icon={faLink} />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="project">
                <div className="project__wrapper project__wrapper--twitter">
                  <img
                    src="./images/twitter.png"
                    className="project__mockup"
                    alt=""
                  />
                  <div className="project__wrapper--bg"></div>
                  <div className="project__description">
                    <h3 className="project__description--title">
                      Twitter Clone
                    </h3>
                    <h4 className="project__description--sub-title">
                      Html, CSS, JS, React, Firebase
                    </h4>
                    <p className="project__description--para">
                      A dark mode clone of the twitter website that is fully
                      responsive. Uses firebase to load posts that any user has
                      posted.
                    </p>
                    <div className="project__description--links">
                      <a
                        target="_blank"
                        href="https://github.com/teanmi/twitter-clone"
                        className="project__description--link"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a
                        target="_blank"
                        href="https://twitter-clone-ea158.web.app/"
                        className="project__description--link"
                      >
                        <FontAwesomeIcon icon={faLink} />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="project">
                <div className="project__wrapper">
                  <img
                    src="./images/linkedin.png"
                    className="project__mockup"
                    alt=""
                  />
                  <div className="project__wrapper--bg"></div>
                  <div className="project__description">
                    <h3 className="project__description--title">
                      LinkedIn Clone
                    </h3>
                    <h4 className="project__description--sub-title">
                      Html, CSS, JS, React, Firebase
                    </h4>
                    <p className="project__description--para">
                      A LinkedIn Clone that uses Firebase Authentication to
                      store your data. Can create posts that will save in
                      Firebase Storage and display when website is loaded.
                    </p>
                    <div className="project__description--links">
                      <a
                        target="_blank"
                        href="https://github.com/teanmi/linkedin-clone"
                        className="project__description--link"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a
                        target="_blank"
                        href="https://linkedin-clone-d8538.web.app/home"
                        className="project__description--link"
                      >
                        <FontAwesomeIcon icon={faLink} />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="project">
                <div className="project__wrapper">
                  <img
                    src="./images/google.png"
                    className="project__mockup"
                    alt=""
                  />
                  <div className="project__wrapper--bg"></div>
                  <div className="project__description">
                    <h3 className="project__description--title">
                      Google Mockup
                    </h3>
                    <h4 className="project__description--sub-title">
                      Html, CSS, JavaScript, React
                    </h4>
                    <p className="project__description--para">
                      A clone of the google search engine. Uses the google
                      search API to load results that the user has entered in
                      and dynamically displays the data.
                    </p>
                    <div className="project__description--links">
                      <a
                        target="_blank"
                        href="https://github.com/teanmi/google-clone"
                        className="project__description--link"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a
                        target="_blank"
                        href="https://fir-2b1d7.web.app/"
                        className="project__description--link"
                      >
                        <FontAwesomeIcon icon={faLink} />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="project">
                <div className="project__wrapper">
                  <img
                    src="./images/wordsearch.png"
                    className="project__mockup"
                    alt=""
                  />
                  <div className="project__wrapper--bg"></div>
                  <div className="project__description">
                    <h3 className="project__description--title">Word Search</h3>
                    <h4 className="project__description--sub-title">
                      Html, CSS, JavaScript
                    </h4>
                    <p className="project__description--para">
                      Multi page dictionary service that fetches data from an
                      API to display word entered in from user. Responsive for
                      all devices and features loading states.
                    </p>
                    <div className="project__description--links">
                      <a
                        target="_blank"
                        href="https://github.com/teanmi/dictionaryapi"
                        className="project__description--link"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a
                        target="_blank"
                        href="https://teanmi.github.io/dictionaryapi/index.html"
                        className="project__description--link"
                      >
                        <FontAwesomeIcon icon={faLink} />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row footer__row">
            <h2 className="logo footer__logo">M|T</h2>
            <div className="footer__social--list">
              <a
                href="https://github.com/teanmi"
                target="_blank"
                className="footer__social--link link__hover-effect link__hover-effect--white"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/michael-telakowicz-0a1189222/"
                target="_blank"
                className="footer__social--link link__hover-effect link__hover-effect--white"
              >
                LinkedIn
              </a>
              <a
                href="#"
                onClick={() => toggleModal()}
                className="footer__social--link link__hover-effect link__hover-effect--white"
              >
                Contact
              </a>

              <a
                href="#"
                className="footer__social--link link__hover-effect link__hover-effect--white"
              >
                Resume
              </a>
            </div>
            <p className="footer__copyright">
              Copyright &copy; 2023 Michael Telakowicz
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
