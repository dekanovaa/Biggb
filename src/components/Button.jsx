"use client"

export const Button = ({ children, className = "", size = "md", variant = "default", onClick }) => {
  const baseClasses = "rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"

  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  }

  const variantClasses = {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border border-slate-600 hover:bg-slate-700 text-white",
  }

  return (
    <button className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
