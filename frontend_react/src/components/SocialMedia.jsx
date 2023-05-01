import React from "react";
import{FaGithub, FaLinkedin} from "react-icons/fa"; 
const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/ahmed-hosam28/" target="blank">
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/ahmedhosam283843" target="blank">
        <FaGithub />
      </a>
    </div>
  </div>
);
export default SocialMedia;
