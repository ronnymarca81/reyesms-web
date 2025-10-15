import React from 'react';
import type { GearProps } from './types';

const Gear: React.FC<GearProps & { onClick?: () => void }> = ({
  image,
  color,
  linePosition,
  onClick,
}) => {
  const sizeClasses = 'w-28 h-28';
  const colorClasses = color === 'blue' ? 'bg-blue-500' : 'bg-blue-900';
  const iconSize = 'w-7 h-7';
  const gearSize = 112;
  const teethCount = 14;

  const renderLine = () => {
    if (!linePosition) return null;
    const lineClasses: Record<string, string> = {
      top: 'absolute -top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-300',
      bottom: 'absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-300',
      left: 'absolute -left-16 top-1/2 transform -translate-y-1/2 h-0.5 w-16 bg-gray-300',
      right: 'absolute -right-16 top-1/2 transform -translate-y-1/2 h-0.5 w-16 bg-gray-300',
    };
    return <div className={lineClasses[linePosition]} />;
  };

  const renderGearTeeth = () => {
    const teeth: React.ReactNode[] = [];
    const radius = gearSize / 2;
    const toothHeight = 8;
    const toothWidth = 10;

    for (let i = 0; i < teethCount; i++) {
      const angle = (i * 360) / teethCount;
      const radian = (angle * Math.PI) / 180;
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
        <div className="absolute inset-0">{renderGearTeeth()}</div>

        <div
          onClick={onClick}
          className={`
            ${sizeClasses} ${colorClasses}
            rounded-full flex items-center justify-center text-white
            transition-all duration-500 ease-in-out
            hover:scale-150 hover:rotate-180 hover:shadow-2xl hover:shadow-blue-500/40
            cursor-pointer relative shadow-lg
          `}
        >
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 via-transparent to-black/20" />
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-white/30 to-black/20 shadow-inner" />
          <div
            className={`${iconSize} text-white z-10 transition-transform duration-500 hover:scale-150`}
          >
            {image}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gear;
