import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/priyanshu-pareek-225942295"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — linkedin.com/in/priyanshu
              </a>
            </p>
            <p>
              <a href="mailto:sharry.pareek@gmail.com" data-cursor="disable">
                Email — sharry.pareek@gmail.com
              </a>
            </p>
            <p>Phone — +91-9610279001</p>
            <h4>Education</h4>
            <p>
              M.S. (Chemistry), BITS Pilani (Pilani Campus) — 2021–2025
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Sharry2205"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/priyanshu-pareek-225942295"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:sharry.pareek@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Priyanshu Pareek</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
