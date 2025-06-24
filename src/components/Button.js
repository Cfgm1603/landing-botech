export function Button({ children, variant = "default", size = "default", className = "", ...props }) {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-primary-botech text-white hover:bg-primary-botech/90",
    ghost: "hover:bg-gray-100 hover:text-primary-botech",
    outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700"
  };
  
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 text-sm"
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
} 