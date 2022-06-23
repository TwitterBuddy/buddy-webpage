import './App.css'
import { ContentCard } from './components'

function App() {
  const poster = process.env.PUBLIC_URL + '/poster.pdf'
  const presentation = process.env.PUBLIC_URL + '/presentation.pdf'

  return (
    <div className="App bg-white">
      <header className="shadow-lg bg-gradient-to-br from-sky-500 to-teal-500">
        <div className="flex-none relative z-50 py-5 text-sm font-medium text-white">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center flex-wrap sm:flex-nowrap">
              <div className="flex-none text-6xl font-bold pt-8">
                <span className="subpixel-antialiased">#TwitterBuddy</span>
              </div>
              <p className="block text-2xl font-normal py-4">Jakiś ten msg</p>
              <div className="flex flex-row items-center content-center pb-6">
                <a
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4 shadow-md"
                  href={poster}
                >
                  Nasz plakat
                </a>
                <a
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 shadow-md"
                  href={presentation}
                >
                  Prezentacja projektu
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-auto">
        <div className="-mt-32 overflow-hidden pt-32 text-gray-300">
          <div className="bg-white">
            <ContentCard title="Content" rightAlign={false}>
              Some longer text longer text longer text longer text longer text
              longer text longer text longer text longer text longer text
            </ContentCard>
            <ContentCard title="Other" rightAlign={true}>
              Some longer text longer text longer text longer text longer text
              longer text longer text longer text longer text longer text
            </ContentCard>
            <ContentCard title="More other" rightAlign={false}>
              Some longer text longer text longer text longer text longer text
              longer text longer text longer text longer text longer text
            </ContentCard>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
