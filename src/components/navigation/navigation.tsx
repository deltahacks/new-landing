import Logo from "../../../public/DH9.svg";
import Facebook from "../../../public/Facebook.svg";
import Instagram from "../../../public/Instagram.svg";
import Linkedin from "../../../public/LinkedIn.svg";
import Twitter from "../../../public/Twitter.svg";

const socialIcons = {
  Facebook: {
    img: Facebook,
    url: "https://www.facebook.com/thedeltahacks/",
  },
  Instagram: {
    img: Instagram,
    url: "https://www.instagram.com/deltahacks/?hl=en",
  },
  Linkedin: {
    img: Linkedin,
    url: "https://www.linkedin.com/company/deltahacks/mycompany/",
  },
  Twitter: {
    img: Twitter,
    url: "https://twitter.com/deltahacks",
  },
};

const buttons = ["About", "FAQ", "Sponsors", "Contact"];

export const SocialIcon = ({
  logo, title, url, dimensions
}: {
  logo: any;
  title: string;
  url: string;
  dimensions: string;
}) => {
  return (
    <a href={url} className="mr-2 filter hover:brightness-90" target="_blank">
      <img src={logo} alt={title} className={`h-${dimensions} w-${dimensions}`}></img>
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
      <div className="h-9 w-9 flex justify-center align-center ml-2">
        <img src={Logo} alt="Deltahacks logo" />
      </div>
      {/* <div>
                {buttons.map((title) => (
                    <NavButton key={title} title={title} />
                ))}
            </div> */}

      <div className="flex justify-center align-center">
        {Object.entries(socialIcons).map(([key, value]) => (
          <SocialIcon key={key} title={key} logo={value.img} url={value.url} dimensions="8" />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
