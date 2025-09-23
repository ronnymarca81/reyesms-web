import React from 'react';
import { BarChart3, Handshake , Users, Monitor } from 'lucide-react';

interface GearProps {
  image: React.ReactNode;
  color: 'blue' | 'darkBlue';
  linePosition?: 'top' | 'bottom' | 'left' | 'right';
  size?: 'small' | 'large';
}

interface CardProps {
  title: string;
  description: string;
  position: 'top' | 'bottom';
}

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

interface RightContentProps {
  title: string;
  content: string;
}

const Gear: React.FC<GearProps> = ({ image, color, linePosition, size = 'large' }) => {
  // All gears are now the same size
  const sizeClasses = 'w-28 h-28';
  const colorClasses = color === 'blue' ? 'bg-blue-500' : 'bg-blue-900';
  const iconSize = 'w-7 h-7';
  const gearSize = 112; // consistent pixel size for all gears
  const teethCount = 14; // same number of teeth for proper meshing
  
  const renderLine = () => {
    if (!linePosition) return null;
    
    const lineClasses = {
      top: 'absolute -top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-300',
      bottom: 'absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-300',
      left: 'absolute -left-16 top-1/2 transform -translate-y-1/2 h-0.5 w-16 bg-gray-300',
      right: 'absolute -right-16 top-1/2 transform -translate-y-1/2 h-0.5 w-16 bg-gray-300'
    };
    
    return <div className={lineClasses[linePosition]} />;
  };

  const renderGearTeeth = () => {
    const teeth = [];
    const radius = gearSize / 2;
    const toothHeight = 8;
    const toothWidth = 10;
    
    for (let i = 0; i < teethCount; i++) {
      const angle = (i * 360) / teethCount;
      const radian = (angle * Math.PI) / 180;
      
      // Position tooth on the outer edge
      const x = Math.cos(radian) * (radius - toothHeight / 2);
      const y = Math.sin(radian) * (radius - toothHeight / 2);
      
      teeth.push(
        <div
          key={i}
          className={`absolute ${colorClasses} transition-all duration-500`}
          style={{
            width: `${toothWidth}px`,
            height: `${toothHeight}px`,
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            transform: `translate(-50%, -50%) rotate(${angle}deg)`,
            borderRadius: '2px',
          }}
        />
      );
    }
    return teeth;
  };

  return (
    <div className="relative">
      {renderLine()}
      <div className="relative">
        {/* Gear teeth */}
        <div className="absolute inset-0">
          {renderGearTeeth()}
        </div>
        
        {/* Main gear body */}
        <div className={`
          ${sizeClasses} ${colorClasses} 
          rounded-full flex items-center justify-center text-white
          transition-all duration-500 ease-in-out
          hover:scale-110 hover:rotate-45 hover:shadow-2xl hover:shadow-blue-500/40
          cursor-pointer relative
          shadow-lg
        `}>
          {/* Inner circle with gradient */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 via-transparent to-black/20" />
          
          {/* Center hub */}
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-white/30 to-black/20 shadow-inner" />
          
          {/* Icon */}
          <div className={`${iconSize} text-white z-10 transition-transform duration-500 hover:scale-110`}>
            {image}
          </div>
          
          {/* Inner gear details */}
          <div className="absolute inset-0 rounded-full">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-4 bg-white/20"
                style={{
                  top: '20%',
                  left: '50%',
                  transformOrigin: `50% ${gearSize * 0.3}px`,
                  transform: `translateX(-50%) rotate(${i * 45}deg)`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, description, position }) => {
  const positionClasses = position === 'top' ? 'mb-8' : 'mt-8';
  
  return (
    <div
      className={`text-center max-w-xs hover:border-t-4 rounded-4xl my-3 ${positionClasses}`}
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-orange-400 hover:bg-orange-500 
        text-white font-bold py-4 px-8 rounded-full
        transition-all duration-300 ease-in-out
        hover:shadow-lg hover:scale-105 hover:shadow-orange-500/30
        focus:outline-none focus:ring-4 focus:ring-orange-300
        transform active:scale-95
      "
    >
      {children}
    </button>
  );
};

const RightContent: React.FC<RightContentProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col justify-center h-full max-w-xl">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
        {title}
      </h1>
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          With years of experience serving Canadian businesses, Reyes Maintenance 
          Service Inc. has built a reputation for reliability, professionalism, and 
          exceptional results. We understand that a clean workspace isn't just about 
          appearance—it's about creating a healthy, productive environment for your 
          employees and a positive impression for your clients.
        </p>
        <p>
          Our comprehensive approach combines state-of-the-art equipment, eco-friendly 
          cleaning products, and highly trained staff to deliver superior results. 
          We're not just a cleaning service; we're your facility maintenance partner, 
          committed to maintaining the highest standards of cleanliness and hygiene in 
          your commercial space.
        </p>
      </div>
      <div className="mt-8">
        <Button onClick={() => console.log('Contact clicked!')}>
          CONTACT US
        </Button>
      </div>
    </div>
  );
};

const ReyesMaintenancePage: React.FC = () => {
  return (
    <div className="bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Gears and Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-16 items-center justify-items-center">
              {/* Top Row */}
              <div className="flex flex-col items-center hover:bg-gray-300 rounded-4xl">
                <Card
                  title="Products"
                  description="High-quality supplies for every cleaning need."
                  position="top"
                />
                <Gear
                  image={<BarChart3 />}
                  color="blue"
                  size="small"
                  linePosition="right"
                />
              </div>

              <div className="flex flex-col items-center hover:bg-gray-300 rounded-4xl">
                <Card
                  title="Partnership"
                  description="Collaborating for comprehensive solutions."
                  position="top"
                />
                <Gear image={<Handshake />} color="darkBlue" size="large" />
              </div>

              {/* Bottom Row */}
              <div className="flex flex-col items-center hover:bg-gray-300 rounded-4xl">
                <Gear
                  image={<Monitor />}
                  color="darkBlue"
                  size="large"
                  linePosition="right"
                />
                <Card
                  title="Service"
                  description="The core of our offering and commitment."
                  position="bottom"
                />
              </div>

              <div className="flex flex-col items-center hover:bg-gray-300 rounded-4xl">
                <Gear image={<Users />} color="blue" size="small" />
                <Card
                  title="Staff & Equipment"
                  description="Trained professionals and modern tools."
                  position="bottom"
                />
              </div>
            </div>

            {/* Connecting lines overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Horizontal connecting line */}
              <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gray-300 transform -translate-y-1/2" />
              {/* Vertical connecting line */}
              <div className="absolute left-1/2 top-1/4 bottom-1/4 w-0.5 bg-gray-300 transform -translate-x-1/2" />
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <RightContent
              title="Why Choose Reyes Maintenance Service?"
              content="Our comprehensive maintenance solutions"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReyesMaintenancePage;
