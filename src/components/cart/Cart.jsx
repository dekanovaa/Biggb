export const Card = ({ children, className = "" }) => {
    return <div className={`bg-slate-800/50 border border-slate-700 rounded-lg ${className}`}>{children}</div>
  }
  
  export const CardHeader = ({ children, className = "" }) => {
    return <div className={`p-4 pb-2 ${className}`}>{children}</div>
  }
  
  export const CardContent = ({ children, className = "" }) => {
    return <div className={`p-4 pt-2 ${className}`}>{children}</div>
  }
  
  export const CardTitle = ({ children, className = "" }) => {
    return <h3 className={`text-lg font-semibold text-white ${className}`}>{children}</h3>
  }
  