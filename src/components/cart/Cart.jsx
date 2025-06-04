export const Card = ({ children, className = "" }) => {
    return <div className={`border border-slate-700 rounded-lg ${className}`}
    style={{
        background: 'linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)',
      }}
    >{children}</div>
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
  