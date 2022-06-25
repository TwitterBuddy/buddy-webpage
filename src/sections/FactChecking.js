import HelloImg from '../media/hello.png'
import FactCheckImg from '../media/buttons_fact_check.png'

export function FactChecking() {
  return (
    <section className="bg-white">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16 lg:px-6">
        <div className="lg:col-span-2 subpixel-antialiased">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900">
            <span className="text-sky-500">Fact-Checking</span> na żądanie
          </h1>
          <p className="text-gray-500 font-light mb-4 sm:text-xl">
            Ze względu na wykazany fakt wykorzystywania fake-newsów do szerzenia
            mowy nienawiści, czy atakowania grup społecznych, wtyczka pozwala
            również na sprawdzenie prawdziwości danego posta. Weryfikacja
            wywoływana jest na życzenie użytkownika.
          </p>
          <p className="text-gray-500 font-normal mb-4 sm:text-xl">
            Na potrzeby zadania weryfikacji prawdziwości treści powstał autorski
            model{' '}
            <b>
              <i>ReCAN</i>
            </b>
            . Predykcja dokonywana jest na podstawie analizy przebiegu dyskusji,
            którą dany post wywołał. Cechą szczególną rozwiązania jest
            modelowanie lokalnej interakcji pomiędzy postami, a ich
            bezpośrednimi odpowiedziami za pomocą modułu <b>uwagi wspólnej</b>.
            Dodatkowo modelowane są także zmiany interakcji w czasie, co w
            ramach przeprowadzonych badań wykazało pozytywny wpływ na działanie
            metody.
          </p>
          <p className="text-gray-500 font-light sm:text-xl">
            Wykorzystane rozwiązanie jest ściśle dostosowane do środowiska, w
            którym ma zostać użyte, to znaczy do <i>Twittera</i> - platformy
            społecznościowe, gdzie użytkownicy mogą wchodzić ze sobą w
            interakcję i odpowiadać na swoje posty.
          </p>
        </div>
        <div className="grid lg:grid-cols-1 grid-cols-2 gap-4 mt-4 lg:mt-8 lg:p-4">
          <img
            src={HelloImg}
            className="w-full rounded-lg border border-gray-500 lg:ml-4"
            alt="pre-fact-check"
          />
          <img
            src={FactCheckImg}
            className="w-full rounded-lg border border-gray-500 lg:-ml-4"
            alt="post-fact-check"
          />
        </div>
      </div>
    </section>
  )
}
