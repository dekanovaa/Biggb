export const Badge = ({ children, className = "", variant = "default" }) => {
    const variantClasses = {
      default: "bg-blue-600 text-white",
      secondary: "bg-slate-600 text-white",
    }
  
    return (
      <span
        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}
      >
        {children}
      </span>
    )
  }
  