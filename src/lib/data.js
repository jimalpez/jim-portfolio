import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa";

export const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "works",
    path: "/works",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export const socials = [
  { icon: <FaGithub />, path: "https://github.com/jimalpez" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/jim-alpez/" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/JimAlpez/" },
];

export const stats = [
  {
    num: 3,
    text: "Years of experience",
  },
  {
    num: 10,
    text: "Projects completed",
  },
  {
    num: 5,
    text: "Technologies mastered",
  },
  {
    num: 500,
    text: "Code commits",
  },
];
