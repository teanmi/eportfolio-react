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
import emailjs from "@emailjs/browser";

function App() {
  const contact = (event) => {
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");

    event.preventDefault();

    loading.classList += " modal__overlay--visible";
    emailjs
      .sendForm(
        "service_iw14wxo",
        "template_ahkrqok",
        event.target,
        "INM3kekNo10VyVuuF"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch((error) => {
        console.log(error);
        loading.classList.remove("modal__loading--visible");
        alert(
          "The email service is temporarily unavailable. Please reach me directly at michael@mtelakowicz.com"
        );
      });
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
              I'm a <span className="purple">Full-Stack Developer</span> driven
              by a passion for crafting exceptional websites that cultivate a
              positive user experience.
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

              <a
                target="_blank"
                href="../images/MTELAKOWICZ_RESUME.pdf"
                className="about-me__link click"
              >
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
              Full-Stack Software Engineer
            </h4>
            <p className="modal__para">
              I'm a <span className="purple">full-stack developer</span> with a
              strong desire to contiue learning more in the field.
              <br />
              I'm currently in college at the{" "}
              <span className="purple">University of Akron</span> while working
              part-time as a full-stack developer. Everyday I am continuing to
              learn and grow as a <span className="purple">developer</span>.
            </p>
            <div className="modal__languages">
              <figure className="modal__language">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                  alt="HTML"
                />
                <span className="language__name">HTML</span>
              </figure>
              <figure className="modal__language">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                  alt="CSS"
                />
                <span className="language__name">CSS</span>
              </figure>
              <figure className="modal__language">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                  alt="JavaScript"
                />
                <span className="language__name">JavaScript</span>
              </figure>
              <figure className="modal__language">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
                  alt="React"
                />
                <span className="language__name">React</span>
              </figure>
              <figure className="modal__language">
                <img src="./images/typescript.png" alt="TypeScript" />
                <span className="language__name">TypeScript</span>
              </figure>
              <figure className="modal__language">
                <img src="./images/sass.png" alt="SASS" />
                <span className="language__name">SASS</span>
              </figure>
              <figure className="modal__language">
                <img src="./images/tailwind.png" alt="Tailwind" />
                <span className="language__name">Tailwind</span>
              </figure>
              <figure className="modal__language">
                <img src="./images/nextjs.svg" alt="Next.js" />
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
      <section id="experience">
        <div className="container">
          <div className="row">
            <h1 className="section__title">
              Professional <span className="purple">Experience</span>
            </h1>
            <ul className="experience__list">
              <div className="experience__wrapper">
                <li className="experience">
                  <h4
                    id="frontendSimplified"
                    className="experience__company open-sans"
                  >
                    <span className="lilita">
                      &lt;<span className="pacifico">/</span>&gt;
                    </span>{" "}
                    <span>
                      <span className="bold">Frontend</span> Simplified
                    </span>
                  </h4>
                  <ul>
                    <li className="experience__title">
                      Front-End Developer Intern
                    </li>
                    <li className="experience__technologies">
                      <span className="experience__technologies--title">
                        Technologies:
                      </span>{" "}
                      HTML, CSS, JS, React.js
                    </li>
                    <li className="experience__date">Sep 2022 - Feb 2023</li>
                  </ul>
                </li>
              </div>
              <div className="experience__wrapper">
                <li className="experience">
                  <div
                    id="prcSaltillo"
                    className="experience__company open-sans"
                  >
                    <img
                      id="prcSaltillo__logo"
                      src="./images/PRC-Saltillo_Logo-modified.png"
                      alt="logo"
                    />
                    prc-saltillo
                  </div>
                  <ul>
                    <li className="experience__title">
                      Full-Stack Developer Intern
                    </li>
                    <li className="experience__technologies">
                      <span className="experience__technologies--title">
                        Technologies:
                      </span>{" "}
                      HTML, Tailwind, JS, Vue.js, PHP, Laravel
                    </li>
                    <li className="experience__date">Jul 2023 - Aug 2023</li>
                  </ul>
                </li>
              </div>
              <div className="experience__wrapper">
                <li className="experience">
                  <div
                    id="codehouseSolutions"
                    className="experience__company poppins"
                  >
                    <img
                      id="codehouse__logo"
                      src="./images/Code_House_Solutions_Logo.jpg"
                      alt="logo"
                    />
                    CODEHOUSE SOLUTIONS
                  </div>
                  <ul>
                    <li className="experience__title">
                      Full-Stack Developer Intern
                    </li>
                    <li className="experience__technologies">
                      <span className="experience__technologies--title">
                        Technologies:
                      </span>{" "}
                      HTML, Tailwind, TS, React.js, Next.js, AWS
                    </li>
                    <li className="experience__date">Jun 2023 - Current</li>
                  </ul>
                </li>
              </div>
              <div className="experience__list--triangle"></div>
            </ul>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="container">
          <div className="row">
            <h1 className="section__title">
              Personal <span className="purple">Projects</span>
            </h1>
            <ul className="project__list">
              <li className="project">
                <div className="project__wrapper project__wrapper--space-model">
                  <img
                    src="./images/space-model.png"
                    className="project__mockup"
                    alt="Gamemart"
                  />
                  <div className="project__wrapper--bg"></div>
                  <div className="project__description">
                    <h3 className="project__description--title">Space Model</h3>
                    <h4 className="project__description--sub-title">
                      Html, CSS, JS, React, Three.js
                    </h4>
                    <p className="project__description--para">
                      I created a 3D model of the Milky Way galaxy using
                      React.js and Three.js, making it visually appealing with
                      smooth transitions thanks to Tween.js. Additionally, I
                      enriched the experience by fetching detailed planet
                      descriptions from an API, adding an educational touch to
                      the project
                    </p>
                    <div className="project__description--links">
                      <a
                        target="_blank"
                        href="https://github.com/teanmi/space-model"
                        className="project__description--link"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a
                        target="_blank"
                        href="https://space-model.web.app/"
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
                    src="./images/gamemart.png"
                    className="project__mockup"
                    alt="Gamemart"
                  />
                  <div className="project__wrapper--bg"></div>
                  <div className="project__description">
                    <h3 className="project__description--title">Game Mart</h3>
                    <h4 className="project__description--sub-title">
                      Html, CSS, JS, React, Redux
                    </h4>
                    <p className="project__description--para">
                      I designed a comprehensive React-based multi-page website
                      for a video game eCommerce store. The website boasted
                      user-friendly features such as a search bar for easy game
                      discovery and an integrated shopping cart. Leveraging API
                      calls, I dynamically fetched and displayed video game
                      data, ensuring an engaging and seamless shopping
                      experience for users.
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
                    alt="Twitter Clone"
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
                      I developed a fully responsive dark mode adaptation of
                      Twitter using React.js. Leveraging Firebase, I implemented
                      a dynamic posting system that allows anyone to share their
                      thoughts with a global audience.
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
                    alt="LinkedIn Clone"
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
                      I crafted a LinkedIn Clone using React and Firebase,
                      offering users the choice of secure Gmail login or guest
                      access. The platform seamlessly integrates with Gmail
                      profiles, displaying users' profile pictures for a
                      personalized experience. Furthermore, I implemented the
                      ability to share video content alongside traditional
                      posts, enhancing engagement and user interaction within
                      this professional networking platform.
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
                    alt="Google Clone"
                  />
                  <div className="project__wrapper--bg"></div>
                  <div className="project__description">
                    <h3 className="project__description--title">
                      Google Clone
                    </h3>
                    <h4 className="project__description--sub-title">
                      Html, CSS, JavaScript, React
                    </h4>
                    <p className="project__description--para">
                      I engineered a Google Clone using React that harnesses the
                      power of Google's own API. This intuitive platform
                      empowers users to perform real-time searches on their
                      chosen topics, providing instant access to Google's search
                      results and information, all within a streamlined and
                      responsive interface.
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
                    alt="WordSearch"
                  />
                  <div className="project__wrapper--bg"></div>
                  <div className="project__description">
                    <h3 className="project__description--title">Word Search</h3>
                    <h4 className="project__description--sub-title">
                      Html, CSS, JavaScript
                    </h4>
                    <p className="project__description--para">
                      I developed a Dictionary API using vanilla JavaScript that
                      offers a user-friendly experience. With a thoughtful
                      loading state, this tool enables users to search for words
                      and promptly receive comprehensive lists of definitions,
                      enhancing their language comprehension and communication
                      skills.
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
                target="_blank"
                href="../images/MTELAKOWICZ_RESUME.pdf"
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
