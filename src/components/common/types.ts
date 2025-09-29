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

export interface ContentImageProps {
  title: string;
  paragraphs: string[];
  buttons: ButtonProps[];
  image: string;
  reverse?: boolean; // false = content left | true = content right
  backgroundColor?: string;
}
