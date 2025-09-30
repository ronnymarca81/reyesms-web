export interface HeaderProps {
  backgroundImage: string;
  title: string;
  description: string;
  bottom?: React.ReactNode;
  view?: "left" | "right" | "center" | "card";
  height?: string;
}

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export interface ContentGaleryProps {
  title: string;
  paragraphs: string[];
  buttons: ButtonProps[];
  images: string[]; // ✅ supports multiple
  reverse?: boolean; // false = content left | true = content right
  backgroundColor?: string;
}
export interface ContentImageProps {
  title: string;
  paragraphs: string[];
  buttons: ButtonProps[];
  image: string; // ✅ support a single image
  reverse?: boolean; // false = content left | true = content right
  backgroundColor?: string;
}
