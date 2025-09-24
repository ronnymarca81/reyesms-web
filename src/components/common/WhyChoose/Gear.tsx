import type {GearProps} from './types.ts'

export const Gear: React.FC<GearProps> = ({ title, image, color, linePosition, size = 'large' }) => {
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
        <div className="absolute inset-0">{renderGearTeeth()}</div>

        {/* Main gear body */}
        <div
          className={`
          ${sizeClasses} ${colorClasses} 
          rounded-full flex items-center justify-center text-white
          transition-all duration-500 ease-in-out
          hover:scale-110 hover:rotate-45 hover:shadow-2xl hover:shadow-blue-500/40
          cursor-pointer relative
          shadow-lg
        `}
        >
          {/* Inner circle with gradient */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 via-transparent to-black/20" />

          {/* Center hub */}
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-white/30 to-black/20 shadow-inner" />

          {/* Icon */}
          <div
            className={`${iconSize} text-white z-10 transition-transform duration-500 hover:scale-110`}
          >
            {image}
          </div>
          {/* Icon */}
        
          {/* Inner gear details */}
          <div className="absolute inset-0 rounded-full">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-4 bg-white/20"
                style={{
                  top: "20%",
                  left: "50%",
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