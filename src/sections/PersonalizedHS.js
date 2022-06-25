import HelloImg from '../media/hello.png'

export function PersonalizedHS() {
  return (
    <section className="bg-white">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="subpixel-antialiased">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900">
            <span className="text-sky-500">Spersonalizowany </span>
            model wykrywania mowy nienawiści
          </h1>
          <p className="text-gray-500 sm:text-xl">
            Nasze rozwiązanie pozwala na{' '}
            <b>dopasowanie się do wrażliwości każdego użytkownika</b>. Dzięki
            zastosowanym technikom, model jest w stanie, dla różnych
            użytkowników, dokonywać różnych predykcji dla tego samego tekstu.
            Zaletą użytego modelu jest również <b>łatwe</b> douczanie.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4 lg:mt-8 lg:p-4">
          <ol class="relative border-l border-blue-200">
            <li class="mb-8 ml-4">
              <div class="absolute w-3 h-3 bg-blue-500 rounded-full mt-1 -left-1.5 border border-white"></div>
              <h3 class="mb-1 leading-none text-lg font-semibold text-gray-900">
                Modelowanie tematyczne
              </h3>
              <p class="mb-4 text-base font-normal text-gray-500">
                Metoda swoje działanie rozpoczyna od modelowania tematycznego z
                wykorzystaniem modelu <b>BERTopic</b>. Na korpusie tekstów
                treningowych odkrywane są pewne, występujące w nim, abstrakcyjne
                tematy. Każdy tekst, już z całego używanego zbioru danych,
                przyporządkowany zostaje do pewnego, najbardziej prawdopodobnego
                dla niego tematu.
              </p>
            </li>
            <li class="mb-8 ml-4">
              <div class="absolute w-3 h-3 bg-blue-500 rounded-full mt-1 -left-1.5 border border-white"></div>
              <h3 class="mb-1 leading-none text-lg font-semibold text-gray-900">
                Wyznaczenie korelacji tematów
              </h3>
              <p class="text-base font-normal text-gray-500">
                Korelacja tematów określana jest na podstawie macierzy
                współwystępowania tematów oznaczonych przez danego użytkownika
                jako ofensywne.
              </p>
            </li>
            <li class="mb-8 ml-4">
              <div class="absolute w-3 h-3 bg-blue-500 rounded-full mt-1 -left-1.5 border border-white"></div>
              <h3 class="mb-1 leading-none text-lg font-semibold text-gray-900">
                Klasteryzacja tematów
              </h3>
              <p class="text-base font-normal text-gray-500">
                Na podstawie danych z macierzy przeprowadzana jest następnie
                klasteryzacja tematów. Jej celem jest zebranie w klastry tych
                tematów, które często są oznaczane jako agresywne przez te same
                osoby. Algorytmem do tego wykorzystywanym jest <i>k-means</i>.
              </p>
            </li>
            <li class="mb-8 ml-4">
              <div class="absolute w-3 h-3 bg-blue-500 rounded-full mt-1 -left-1.5 border border-white"></div>
              <h3 class="mb-1 leading-none text-lg font-semibold text-gray-900">
                Metryki wrażliwości użytkownika
              </h3>
              <p class="text-base font-normal text-gray-500">
                Dla każdego użytkownika, na podstawie dokonanych przez niego
                anotacji, obliczana jest indywidualna miara reprezentująca jego
                wrażliwość, osobno dla każdego klastra tematów. Miary
                użytkownika dla każdego klastra, konkatenowane są następnie w
                jeden wektor, który reprezentuje jego indywidualną wrażliwość.
              </p>
              <p class="text-base font-medium text-gray-500 mt-2">
                Metoda ta pozwala na łatwe douczanie, gdyż przy uzyskaniu nowych
                anotacji wystarczy wyznaczyć klaster, do których należą związane
                z nimi teksty, a następnie obliczyć nową miarę wrażliwości.
              </p>
            </li>
            <li class="ml-4">
              <div class="absolute w-3 h-3 bg-blue-500 rounded-full mt-1 -left-1.5 border border-white"></div>
              <h3 class="mb-1 leading-none text-lg font-semibold text-gray-900">
                Klasyfikacja
              </h3>
              <p class="text-base font-normal text-gray-500">
                Model podejmuje decyzję na podstawie wektora osadzeń tekstu
                (wyznaczonego za pomocą modelu <b>fastText</b>) oraz metryk
                wrażliwości użytkownika, tym samym dając spersonalizowaną
                predykcję.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}
