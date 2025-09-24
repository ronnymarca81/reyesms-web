export interface GearProps {
  title?: string;  
  image: React.ReactNode;
  color: 'blue' | 'darkBlue';
  linePosition?: 'top' | 'bottom' | 'left' | 'right';
  size?: 'small' | 'large';
}

export interface CardProps {
  title: string;
  description: string;
  position: 'top' | 'bottom';
}

