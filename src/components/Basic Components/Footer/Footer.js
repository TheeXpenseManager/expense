import React from "react";
import "./footer.scss";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Button from "@mui/material/Button";

import Logo from "../../../media/Logo/logo.png";
import PratikImg from "../../../media/Developers/pratik.jpg";

const Footer = () => {
  const [tab, setTab] = React.useState(0);

  const developers = [
    {
      id: 1,
      name: "Pratik Kumar",
      image: PratikImg,
      github: "https://github.com/Pratik-Kumar-621",
      linkedin: "https://www.linkedin.com/in/pratik-kumar-5b14b7194/",
      instagram: "https://www.instagram.com/pratik_kumar_621/",
      gmail: "119cs0030@iiitk.ac.in",
    },
    {
      id: 2,
      name: "Puneet Priyadarshi",
      image: PratikImg,
      github: "",
      linkedin: "",
      instagram: "",
      gmail: "",
    },
    {
      id: 3,
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
          <Button>
            <CreditCardIcon />
            &nbsp; Contribute
          </Button>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Adipisci, labore facere. Repellat, eos quod error corporis veniam
              veritatis! Modi fugit natus quis eveniet incidunt repellat nam
              sunt? Tenetur quo laudantium earum iure doloremque culpa ipsum
              facilis itaque accusamus id aut nostrum in at non commodi nihil
              minus quibusdam, nobis ex?
            </div>
          </div>
        )}
        {tab === 1 && (
          <div className="developers">
            {developers.map((developer, key) => (
              <div className="developer" key={developer.id}>
                <div className="developer-image">
                  <img src={developer.image} alt="developer" />
                </div>
                <div className="developer-name">{developer.name}</div>
                <div className="developer-links">
                  <a
                    href={developer.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/github.png"
                      alt="github"
                    />
                  </a>

                  <a
                    href={developer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://img.icons8.com/doodle/48/000000/linkedin--v2.png"
                      alt="linkedin"
                    />
                  </a>

                  <a
                    href={developer.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://img.icons8.com/doodle/48/000000/inshot.png"
                      alt="instagram"
                    />
                  </a>

                  <a
                    href={`mailto:${developer.gmail}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
