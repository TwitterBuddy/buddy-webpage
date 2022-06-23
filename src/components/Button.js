export function Button({ text, link, children }) {
  return (
    <a
      href={link}
      className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300"
      target="_blank"
      rel="noreferrer"
    >
      {text}
      {children}
    </a>
  )
}
