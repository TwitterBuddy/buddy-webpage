export function Divider({ rightAlign, title }) {
  const marginClass = rightAlign ? 'ml-4' : 'mr-4'
  const line = <div className="flex-grow border-t border-black"></div>

  return (
    <div className="relative flex items-center">
      {rightAlign && line}
      <span className={`flex-shrink ${marginClass} text-black`}>{title}</span>
      {!rightAlign && line}
    </div>
  )
}
