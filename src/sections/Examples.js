import Yellow from '../media/yellow.png'
import Red from '../media/red.png'
import Blur from '../media/blur.png'

export function Examples() {
  return (
    <section className="bg-gray-50">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="subpixel-antialiased">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900">
            Przeglądaj swoją tablicę bez obaw
          </h1>
          <p className="text-gray-500 font-light sm:text-xl mb-2">
            Wtyczka automatycznie sprawdza posty pojawiające się na Twojej
            tablicy. W zależności od tego, jak bardzo model jest pewny, że
            użytkownikowi może nie podobać się dana treść, podejmuje odpowiednią
            akcje.
          </p>
          <p className="text-gray-500 font-light sm:text-xl">
            Akcje dzielą się na:
            <ul className="list-disc list-inside">
              <li>oznaczenie posta żółtym lub czerwonym ostrzeżeniem,</li>
              <li>rozmycie treści, z możliwością odkrycia,</li>
              <li>całkowite usunięcie posta z tablicy.</li>
            </ul>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4 lg:mt-8 lg:p-4 md:order-first">
          <img
            src={Yellow}
            className="w-full rounded-lg border border-gray-500 col-span-2"
            alt="yellow-exclamation-mark"
          />
          <div></div>
          <div></div>
          <img
            src={Red}
            className="w-full rounded-lg border border-gray-500 col-span-2"
            alt="red-exclamation-mark"
          />
          <img
            src={Blur}
            className="w-full rounded-lg border border-gray-500 col-span-2"
            alt="blur"
          />
          <div></div>
        </div>
      </div>
    </section>
  )
}
