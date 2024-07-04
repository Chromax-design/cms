export interface socialType {
  id: number;
  alt: string;
  icon: React.ReactElement;
  href: string;
}

export interface navLinkType {
  id: number;
  title: string;
  href: string;
}

export interface featureType {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactElement;
}

export interface aboutPageTextType {
  id: number;
  subtitle?: string;
  title: string;
  desc: string;
  img: string;
  showButton?: boolean
}
