import React from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShareIcon from "@mui/icons-material/Share";
import Button from "@mui/material/Button";

import Logo from "../../../media/Logo/logo.png";
import PratikImg from "../../../media/Developers/pratik.jpg";

const Footer = () => {
  const [tab, setTab] = React.useState(0);

  const developers = [
    {
      name: "Pratik Kumar",
      image: PratikImg,
      github: "https://github.com/Pratik-Kumar-621",
      linkedin: "https://www.linkedin.com/in/pratik-kumar-5b14b7194/",
      instagram: "https://www.instagram.com/pratik_kumar_621/",
      gmail: "119cs0030@iiitk.ac.in",
    },
    {
      name: "Puneet Priyadarshi",
      image: PratikImg,
      github: "",
      linkedin: "",
      instagram: "",
      gmail: "",
    },
    {
      name: "Mrinal Sinha",
      image: PratikImg,
      github: "",
      linkedin: "",
      instagram: "",
      gmail: "",
    },
  ];

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-tabs">
          <div
            className={`${tab === 0 && "active-tab-item"} tab-item`}
            onClick={() => setTab(0)}
          >
            <Button>About</Button>
          </div>
          <div
            className={`${tab === 1 && "active-tab-item"} tab-item`}
            onClick={() => setTab(1)}
          >
            <Button>Developed By</Button>
          </div>
        </div>
        <div className="footer-links">
          <div className="contribute">
            <Button>
              <CreditCardIcon />
              Contribute
            </Button>
          </div>
          <div className="share">
            <Button>
              <ShareIcon />
              Share
            </Button>
          </div>
        </div>
      </div>
      <div className="footer-body">
        {tab === 0 && (
          <div className="about-us">
            <div className="footer-logo">
              <img src={Logo} alt="logo" />
              <div className="footer-logo-name">The eXpense Manager</div>
            </div>
            <div className="footer-about-description">
              The eXpense Manager is a web application that helps you manage
              your expenses. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Praesentium culpa neque veniam autem est! Inventore harum
              quidem facere vitae reprehenderit unde dicta sequi necessitatibus
              accusamus sunt fugit impedit, magni vel?
            </div>
          </div>
        )}
        {tab === 1 && (
          <div className="developers">
            {developers.map((developer) => (
              <div className="developer">
                <div className="developer-image">
                  <img
                    src={developer.image}
                    alt="developer"
                    style={{
                      width: "100px",
                    }}
                  />
                </div>
                <div className="developer-name">{developer.name}</div>
                <div className="developer-links">
                  <a href={developer.github} target="_blank">
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/github.png"
                      alt="github"
                    />
                  </a>

                  <a href={developer.linkedin} target="_blank">
                    <img
                      src="https://img.icons8.com/doodle/48/000000/linkedin--v2.png"
                      alt="linkedin"
                    />
                  </a>

                  <a href={developer.instagram} target="_blank">
                    <img
                      src="https://img.icons8.com/doodle/48/000000/inshot.png"
                      alt="instagram"
                    />
                  </a>

                  <a href={`mailto:${developer.gmail}`} target="_blank">
                    <img
                      src="https://img.icons8.com/doodle/48/000000/gmail-new.png"
                      alt="gmail"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
