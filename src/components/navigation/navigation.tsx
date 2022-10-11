import Logo from "../../../public/assets/Logo_1.svg";
import Facebook from "../../../public/assets/Facebook.svg";
import Instagram from "../../../public/assets/Instagram.svg";
import Linkedin from "../../../public/assets/Linkedin.svg";
import Twitter from "../../../public/assets/Twitter.svg";

const socialIcons = {
  Facebook: {
    img: Facebook,
  },
  Instagram: {
    img: Instagram,
  },
  Linkedin: {
    img: Linkedin,
  },
  Twitter: {
    img: Twitter,
  },
};

const buttons = ["About", "FAQ", "Sponsors", "Contact"];

const SocialIcon = ({ logo, title }: { logo: any; title: string }) => {
  return (
    <a href="#" className="mr-2 filter hover:brightness-90">
      <img src={logo} alt={title} className="h-8 w-8"></img>
    </a>
  );
};

const NavButton = ({ title }: { title: string }) => {
  return (
    <a
      href="#"
      className="font-minecraft font-white text-white font-light mr-3"
    >
      {title}
    </a>
  );
};

const Navigation = () => {
  return (
    <div className="flex justify-between items-center bg-slate-600 bg-opacity-40 w-full h-12">
      <div className="flex justify-center items-center">
        <a href="#" target="_blank" className="ml-8">
          <img src={Logo} alt="Deltahacks logo" className="h-10 w-10 mr-4" />
        </a>
        {buttons.map((title) => (
          <NavButton key={title} title={title} />
        ))}
      </div>
      <div className="flex justify-center align-center mr-8">
        {Object.entries(socialIcons).map(([key, value]) => (
          <SocialIcon key={key} title={key} logo={value.img} />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
