import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://github.com/ZenithPopat"
        Icon={FaGithub}
      />
      <SingleContactSocial
        link="https://www.linkedin.com/in/zenith-popat/"
        Icon={FaLinkedin}
      />
      <SingleContactSocial
        link="https://www.instagram.com/zenith004/"
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
