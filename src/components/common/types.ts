export interface HeaderProps {
  backgroundImage: string;
  title: string;
  description: string;
  button?: React.ReactNode;
  view?: 'left' | 'right' | 'center' | 'card';
  height?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'phone' | 'contact' | 'custom';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  href?: string;
}

export interface ContentGaleryProps {
  title: string;
  paragraphs: string[];
  buttons: ButtonProps[];
  images: string | string[]; // ✅ supports one or multiple images
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
