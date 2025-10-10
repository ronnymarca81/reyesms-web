import type { LogoProps } from '@components/layout/types';
import { defaultBrandName, defaultLastName } from '@myTypes/CompanyApi';
import RMLogo from '@assets/logo/reyesms.svg';

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="w-12 h-12  rounded-lg flex items-center justify-center overflow-hidden">
        <img src={RMLogo} alt="RM Logo" className="w-12 h-12 object-contain" loading="lazy" />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-white font-bold text-xl">{defaultBrandName}</span>
        <span className="text-cyan-400 text-xs">{defaultLastName}</span>
      </div>
    </div>
  );
};

export default Logo;
