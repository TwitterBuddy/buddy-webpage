import { VideoCameraIcon } from '@heroicons/react/solid'

import { Button } from '../components/Button'

import HelloImg from '../media/hello.png'
import PosterPDF from '../media/poster.pdf'
import PresentationPDF from '../media/presentation.pdf'

export function HelloSection() {
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 subpixel-antialiased">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none mg:text-5xl xl:text-6xl">
            Twój osobisty moderator treści w internecie
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Wtyczka zapewniająca spersonalizowaną moderację poprzez wykrywanie
            mowy nienawiści oraz fałszywych informacji.
          </p>
          <Button text="Prezentacja" link={PresentationPDF} />
          <Button text="Plakat" link={PosterPDF} />
          <Button
            text="Wideo demo"
            link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            <VideoCameraIcon className="ml-2 h-6 w-6" />
          </Button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={HelloImg} alt="hello-img" />
        </div>
      </div>
    </section>
  )
}
