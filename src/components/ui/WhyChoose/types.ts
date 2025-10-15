export interface GearProps {
  image: React.ReactNode;
  color: 'blue' | 'darkBlue' | string;
  linePosition?: 'top' | 'bottom' | 'left' | 'right';
}

export interface CardProps {
  title: string;
  description: string;
  position: "top" | "bottom" | "left" | "left" | "right";
}

