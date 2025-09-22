import type { ButtonProps } from "@components/layout/types";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  href
}) => {
  const baseClasses =
    "font-semibold transition-all duration-300 flex items-center justify-center";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-white text-gray-800 hover:bg-gray-100 shadow-md hover:shadow-lg",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-gray-800",
    phone:
      "bg-red-600 hover:bg-red-800 text-white shadow-lg hover:shadow-xl cursor-pointer"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-2.5 text-sm rounded-lg",
    lg: "px-8 py-3 text-base rounded-lg"
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
