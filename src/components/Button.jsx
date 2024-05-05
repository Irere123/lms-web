import React from "react";

const sizeClassnames = {
  big: "py-2 px-6 text-sm rounded-lg",
  small: "px-2 py-1 text-sm rounded-md",
  tiny: "px-1 text-sm rounded-5",
};

const colorClassnames = {
  primary:
    "text-button bg-emerald-500 transition duration-200 ease-in-out hover:bg-emerald-400 disabled:text-emerald-300 disabled:bg-emerald-400",
  secondary:
    "text-button bg-primary-700 hover:bg-primary-600 disabled:text-primary-300",
  "secondary-800":
    "text-button bg-primary-800 hover:bg-primary-600 disabled:text-primary-300",
  "primary-300":
    "text-button bg-primary-700 hover:bg-primary-600 disabled:text-primary-300",
  transparent: "text-button bg-transparent",
  "accent-secondary":
    "text-button bg-secondary hover:bg-secondary-washed-out disabled:text-secondary-washed-out",
};

export const Button = ({
  children,
  size = "big",
  color = "primary",
  disabled,
  loading,
  icon,
  className = "",
  transition,
  ...props
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={`flex outline-none focus:ring-4 focus:ring-${color} ${
        sizeClassnames[size]
      } ${transition ? `transition duration-200 ease-in-out` : ``} ${
        colorClassnames[color]
      } font-bold flex items-center justify-center ${className}`}
      data-testid="button"
      {...props}
    >
      <span className={loading ? "opacity-0" : `flex items-center`}>
        {icon ? <span className={`mr-2 items-center`}>{icon}</span> : null}
        {children}
      </span>
    </button>
  );
};
