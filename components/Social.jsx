import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const socials = [
  { icon: <FaInstagram />, path: "https://www.instagram.com/nutri.stephanorlandi/" },
  { icon: <FaTiktok />, path: "https://www.tiktok.com/@nutristephan" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`flex gap-4 items-center justify-center flex ${containerStyles}`}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer">
          <div className={`text-2xl hover:text-green-400 ${iconStyles}`}>
            {item.icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Social;
