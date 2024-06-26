import story from "../../assets/images/about/xplainPhoto2.webp";
import aboutMac from "../../assets/images/hero/grid/about_mac.jpg";
import aboutWin from "../../assets/images/hero/grid/about_windows.jpg";
import detectOS from "../../utils/detectOS";

const os = detectOS();
const heroImage = os === "macOS" ? aboutMac : aboutWin;

interface ColumnData {
  image: string;
  title: string;
  text: string;
}

export const data: ColumnData[] = [
  {
    image: story,
    title: "Developed for derivatives specialists, by derivatives specialists",
    text: "Operating for 15 years as a London derivatives consultancy staffed by former traders, quants and structurers from T1 investment banks, we knew the problem. Pricing and accounting changes post-2008 had outpaced software solutions. Xplain is our answer.",
  },
];

interface ImageData {
  src: string;
  alt: string;
}

export const image: ImageData = {
  src: heroImage,
  alt: "About Image",
};
