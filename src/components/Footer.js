import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaInstagramSquare, FaTelegram } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

const Footer = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to Get Started ?</h3>
            <h3>Talk to us Today !</h3>
          </div>
          <div>
            <Button>
              <NavLink to="/contact">GET STARTED</NavLink>
            </Button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>EasyShoppe</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>

          <div className="footer-subscribe">
            <h3>Subscribe to Get Important Updates</h3>
            <form action="#">
              <input type="email" placeholder="Enter Email" value={isAuthenticated ? user.email : ""}/>
              <input type="submit" value="SUBSCRIBE" />
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="footer-social--icons">
              <div>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagramSquare className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://web.telegram.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTelegram className="icons" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call us</h3>
            <h3>
              <a href="tel:+91 9876543210" style={{ color: "white" }}>
                +91 9876543210
              </a>
            </h3>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@ {new Date().getFullYear()} EasyShoppe. All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
