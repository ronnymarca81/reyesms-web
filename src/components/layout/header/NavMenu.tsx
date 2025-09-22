import { useState } from "react";
import type { MenuItem } from "@components/layout/types";
import { ChevronDown } from "lucide-react";
// Navigation Menu Component
export const NavMenu: React.FC<{
  items: MenuItem[];
  isMobile?: boolean;
  onItemClick?: () => void;
}> = ({ items, isMobile = false, onItemClick }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    if (!isMobile) {
      setOpenDropdown(label);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setOpenDropdown(null);
    }
  };

  const handleMobileDropdownToggle = (label: string) => {
    if (isMobile) {
      setOpenDropdown(openDropdown === label ? null : label);
    }
  };
  return (
    <nav
      className={
        isMobile ? "flex flex-col space-y-4" : "flex items-center space-x-8"
      }
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="relative group"
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center">
            <a
              href={item.href}
              className={`text-white hover:text-cyan-400 transition-all duration-300 flex items-center space-x-1 relative ${
                isMobile ? "text-lg py-2" : "text-sm font-medium py-2 px-1"
              } group/link`}
              onClick={onItemClick}
            >
              <span className="relative">
                {item.label}
                {!isMobile && (
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover/link:w-full transition-all duration-300"></div>
                )}
              </span>
            </a>
            {item.subItems && isMobile && (
              <button
                onClick={() => handleMobileDropdownToggle(item.label)}
                className="ml-2 text-white hover:text-cyan-400"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openDropdown === item.label ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}
          </div>

          {/* Dropdown Menu */}
          {item.subItems && (
            <div
              className={`
              ${
                isMobile
                  ? `ml-4 mt-2 space-y-2 ${
                      openDropdown === item.label ? "block" : "hidden"
                    }`
                  : `absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50 
                 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0
                 before:content-[''] before:absolute before:-top-2 before:left-6 before:w-4 before:h-4 
                 before:bg-white before:rotate-45 before:border-l before:border-t before:border-gray-100`
              }
            `}
            >
              {item.subItems.map((subItem, index) => (
                <a
                  key={subItem.label}
                  href={subItem.href}
                  className={`
                    block transition-all duration-200 relative
                    ${
                      isMobile
                        ? "text-gray-300 hover:text-cyan-400 text-base py-1"
                        : `px-6 py-3 text-gray-700 hover:text-cyan-600 hover:bg-gradient-to-r 
                       hover:from-cyan-50 hover:to-blue-50 text-sm font-medium
                       border-l-2 border-transparent hover:border-cyan-500
                       ${
                         index !== item.subItems!.length - 1
                           ? "border-b border-gray-100"
                           : ""
                       }
                       group/item relative overflow-hidden`
                    }
                  `}
                  onClick={onItemClick}
                >
                  <span className="relative z-10 flex items-center justify-between">
                    {subItem.label}
                    {!isMobile && (
                      <div className="w-2 h-2 bg-cyan-500 rounded-full opacity-0 transform translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200"></div>
                    )}
                  </span>
                  {!isMobile && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 transform scale-x-0 origin-left group-hover/item:scale-x-100 transition-transform duration-300"></div>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};
