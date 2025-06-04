export const Progress = ({ value, className = "" }) => {
  return (
    <div className={`w-full bg-slate-700 rounded-full h-2 ${className}`}>
      <div
        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}
