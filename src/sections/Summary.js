export function Summary() {
  return (
    <section className="bg-gray-50">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="subpixel-antialiased">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900">
            Zobacz jak to działa!
          </h1>
          <p className="text-gray-500 font-light sm:text-xl">
            Przygotowaliśmy krótkie demo prezentujące działanie wtyczki&nbsp;
            <b>
              <i>TwitterBuddy</i>
            </b>
            .
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4 lg:mt-8 py-4 px-8 lg:px-0 lg:order-first">
          <div class="aspect-video">
            <iframe
              style={{ width: '100%', height: '100%' }}
              title="demo"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
