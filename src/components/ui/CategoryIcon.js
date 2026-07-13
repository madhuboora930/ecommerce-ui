import { FiCpu, FiHome } from "react-icons/fi";
import { GiShirt } from "react-icons/gi";
import { BsStars } from "react-icons/bs";

const ICONS = {
  cpu: FiCpu,
  shirt: GiShirt,
  home: FiHome,
  stars: BsStars,
};

export default function CategoryIcon({ icon, size = 20, className = "" }) {
  const Icon = ICONS[icon] ?? BsStars;
  return <Icon size={size} className={className} />;
}
