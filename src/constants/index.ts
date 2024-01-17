import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxAccessibility,
} from "react-icons/rx";

import SpaceCity1 from "../assets/patriot.png";
import SpaceCity2 from "../assets/patriot.png";
import SpaceCity3 from "../assets/patriot.png";
import SpaceCity4 from "../assets/SpaceCity4.jpeg";
import SpaceCity5 from "../assets/SpaceCity5.jpeg";
/*import SpaceCity6 from "../assets/SpaceCity6.jpeg";*/

interface Service {
  id: number;
  icon: React.ComponentType<{
    className?: string;
  }>;

  title: string;
  content: string;
  backgroundImage: string;
}

export const ServiceData: Service[] = [
  {
    id: 1,
    icon: RxCrop,
    title: "3-тя окрема штурмова бригада",
    content:
      "Lorem ipsum dolor sit /amet, consectetur adipiscing elitLorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity1,
  },
  {
    id: 2,
    icon: RxPencil2,
    title: "3-тя окрема штурмова бригада",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity2,
  },
  {
    id: 3,
    icon: RxDesktop,
    title: "3-тя окрема штурмова бригада",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity3,
  },
  {
    id: 4,
    icon: RxReader,
    title: "3-тя окрема штурмова бригада",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity4,
  },
  {
    id: 5,
    icon: RxAccessibility,
    title: "3-тя окрема штурмова бригада",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity5,
  },
  {
    id: 6,
    icon: RxAccessibility,
    title: "3-тя окрема штурмова бригада",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity2,
  },
  {
    id: 7,
    icon: RxAccessibility,
    title: "3-тя окрема штурмова бригада",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity3,
  },
];
