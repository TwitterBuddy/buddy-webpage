import { Divider } from './Divider'

export function ContentCard({
  title,
  children,
  rightAlign,
  coloredMsg,
  msg,
  shortText,
}) {
  return (
    <div className="mx-auto max-w-container px-4 pt-16 pb-16 sm:px-6 lg:px-8 lg:pt-9 xl:pt-20">
      <Divider title={title} rightAlign={rightAlign} />
      <div className="sm:mb-24 lg:flex xl:mb-32">
        <div
          className={
            'relative z-10 mx-auto mb-12 flex max-w-screen-sm flex-none flex-col ' +
            (rightAlign ? 'items-end' : 'items-start') +
            ' sm:mb-16 lg:mx-0 lg:mb-0 lg:max-w-2xl lg:pt-10 lg:pr-20'
          }
        >
          <h1 className="order-1 mb-4 text-3xl font-extrabold tracking-tight text-teal-400 sm:text-5xl sm:leading-none">
            <span className="text-teal-900">{coloredMsg}</span>
            {msg}
          </h1>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide">
            {shortText}
          </p>
          <p
            className={
              'order-2 mb-8 leading-relaxed ' +
              (rightAlign ? 'text-right' : 'text-left')
            }
          >
            {children}
          </p>
        </div>
      </div>
    </div>
  )
}
