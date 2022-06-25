import HelloImg from '../media/hello.png'

export function PersonalizedHS() {
  return (
    <section className="bg-white">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="subpixel-antialiased">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900">
            Twój osobisty moderator treści w internecie
          </h1>
          <p className="text-gray-500 sm:text-xl">
            Wtyczka zapewniająca spersonalizowaną moderację poprzez wykrywanie
            mowy nienawiści oraz fałszywych informacji.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4 lg:mt-8 lg:p-4">
          <img
            src={HelloImg}
            className="w-full rounded-lg border border-gray-500"
            alt="hello-img"
          />
        </div>
      </div>
    </section>
  )
}
