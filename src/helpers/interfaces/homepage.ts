import { AnimationProps } from "framer-motion";

export interface Homepage {
  tabs: Array<Tab>;
  sections: Array<Section>;
}


export interface Tab {
  id: number;
  selected: boolean;
  iconSrc: string;
  text: string;
}

export interface Section {
  id: string;
  images: Array<SectionImages>;
  header: string;
  subheader: string;
  buttonText: string;
  content: string;
}

export interface SectionImages {
  imgSrc: string;
  animation: AnimationProps;
  className?: string;
}