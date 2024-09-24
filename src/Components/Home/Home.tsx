import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="v-middle">
        <div className="container">
          <div className="row">
            <motion.div
              className="caption text-center"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <h1 className="text-center text-5xl text-bold text-white">
                Hi , I am.... <br /> Mahmoud Saeed
              </h1>
              <div className="icons mt-4">
                <a
                  className="icon"
                  href="https://github.com/justmahmoud31"
                  target="_blank"
                >
                  <GitHubIcon fontSize="large" />
                </a>
                <a
                  href="https://x.com/Mahmoud3152003"
                  className="icon"
                  target="_blank"
                >
                  <XIcon fontSize="large" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mahmoud-saeed-30814b218/"
                  className="icon"
                  target="_blank"
                >
                  <LinkedInIcon fontSize="large" />
                </a>
                <a
                  className="icon"
                  href="mailto:justmahmoudv3152003@gmail.com"
                  target="_blank"
                >
                  <EmailIcon fontSize="large" />
                </a>
                <a
                  className="icon"
                  href="https://wa.me/qr/WV5FVHQQPPYNA1"
                  target="_blank"
                >
                  <WhatsAppIcon fontSize="large" />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="buttons text-center text-xl mt-4">
            <a
              href="https://drive.google.com/file/d/15GWIkmRR__bJw37xv4OpISDhZKr62Qq-/view?usp=sharing"
              className="cv-button p-3 w-100 text-center"
              target="_blank"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
