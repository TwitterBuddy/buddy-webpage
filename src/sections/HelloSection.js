import { VideoCameraIcon } from '@heroicons/react/solid'

import { Button } from '../components/Button'

import HelloImg from '../media/hello.png'
import PosterPDF from '../media/poster.pdf'
import PresentationPDF from '../media/presentation.pdf'

export function HelloSection() {
  return (
    <section className="bg-white">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light sm:text-lg subpixel-antialiased">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none mg:text-5xl xl:text-6xl">
            Twój osobisty moderator treści w internecie
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Wtyczka zapewniająca spersonalizowaną moderację poprzez wykrywanie
            mowy nienawiści oraz fałszywych informacji.
          </p>
          <div className="flex flex-col items-center lg:block">
            <Button text="Prezentacja" link={PresentationPDF} />
            <Button text="Plakat" link={PosterPDF} />
            <Button
              text="Wideo demo"
              link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              <VideoCameraIcon className="ml-2 h-6 w-6" />
            </Button>
          </div>
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
