export function Card({ heading, content }) {
  return (
    <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {heading}
      </h5>
      <p className="font-normal text-gray-700">{content}</p>
    </div>
  )
}
