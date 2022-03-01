/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Overlay from "./Components/Overlay";
import Services from "./Components/Services";
import Skills from "./Components/Skills";


function App() {

  const [toggleOver, setToggleOver] = useState(0);



  const toggleOverlay = (index) => {
    setToggleOver(index)
    console.log(index);
  }

  // const close =(e) => {
  //   e.preventDefault();
  // }

  return (
    <div>
      <div className="text-gray-300">
        <nav className="flex items-center bg-slate-900 fixed top-0 shadow w-full z-50 justify-between">
          <div className="font-bold">
            <h3><a href="#Home"><span className="text-green-400 text-4xl">O</span>SBEY</a></h3>
          </div>
          <div className="hidden md:block justify-end items-center mr-9">
            <ul className="flex px-2">
              <li className="px-3 py-2 hover:text-green-400 font-medium border-b-2 border-green-400"><a href="#Home">Home</a></li>
              <li className="px-3 py-2 hover:text-green-400 font-medium  border-green-400"><a href="#Home">Service</a></li>
              <li className="px-3 py-2 hover:text-green-400 font-medium  border-green-400"><a href="#Home">Skill</a></li>
              <li className="px-3 py-2 hover:text-green-400 font-medium  border-green-400"><a href="#Home">Portfolio</a></li>
              <li className="px-3 py-2 hover:text-green-400 font-medium  border-green-400"><a href="#Home">Contact</a></li>

            </ul>
          </div>
        </nav>
        {/* INTRODUCTION */}

        <div className="flex flex-row  items-center mt-20 justify-center relative">
          <div className="flex flex-col -mt-36 mr-20">
            <span className="bg-green-400 w-40 text-black p-1 rounded-md mb-3">Software Developer</span>
            <h1 className="text-3xl font-bold py-3 mt-3">I am Clifford Osei</h1>
            <p className="px-2 mt-4 ">A passionate software developer with 3+ years of experience</p>
            <div className="flex flex-row mt-10">
              <a href="#portfolio" className="rounded-3xl border border-green-400 shadow-gray-300 px-6 py-2 text-sm mr-3">My Portfolio</a>
              <a href="#cv" className="rounded-3xl border  shadow-gray-300 px-6 py-2 font-bold text-green-400 mr-3 bg-gray-700">My CV</a>
            </div>
            <div class="flex flex-row items-center mt-8">
              <p class="text-4xl mr-3">15+</p>
              <div class="text-xs text-gray-400">
                <p>YEARS</p>
                <p>EXPERIENCE</p>
              </div>
            </div>
          </div>
          <div className="p-2">
            <img src="images/4.jpg" alt="not Found" />
          </div>
        </div>
        <Services></Services>
        <Skills></Skills>

        {/* PORTFOLIO */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-green-400 font-bold mb-3">PORTFOLIO</h1>
          <p className="text-gray-200 text-2xl font-bold mb-3">These are some of my current projects</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10">
            {/* first project */}
            <div className="bg-gray-800 flex flex-col m-3 overflow-hidden rounded-2xl">
              <div className="group relative h-40 overflow-hidden cursor-pointer">
                <div className="transition duration-500 ease-in-out bg-gray-800 bg-opacity-40 opacity-0 group-hover:opacity-100 absolute left-0 top-0 z-10 h-full w-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-green-100">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7">
                    </path>
                  </svg>
                </div>
                <img className="w-full h-auto object-center absolute left-0 top-0 z-0"
                  src="images/4.jpg" alt="images/4.jpg" />
              </div>
              <div className="px-5 pb-5">
                <button onClick={() => toggleOverlay(2)} className="mt-2 float-right border border-green-400 hover:bg-green-400 hover:text-gray-800 text-green-400 px-2 py-1 rounded-3xl text-sm ml-1 font-bold">details</button>
                <p className="text-lg mt-3 font-bold">Pick A Fist</p>
                <p className="text-smmt-2 cursor-pointer hover:text-green-400 line-clamp-1">
                  A simple fun game i developed with ember.js in less than a day to refresh my ember.js skills
                  since i have been working with other frameworks for a while now. You guess which fist is holding the key,
                  and it scores you vs the computer.</p>
                <p className="flex flex-wrap items-center min-h-min">
                  <span className="text-xs px-3 py-1 bg-gray-700 text-green-400 rounded-2xl mt-2 mr-1">Ember.js</span>
                  <span className="text-xs px-3 py-1 bg-gray-700 text-green-400 rounded-2xl mt-2 mr-1">Tailwindcss</span>
                </p>
                <div className="flex mt-4 space-children">
                  <a href="https://hand-pick-game.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center text-center bg-green-600 hover:bg-green-700 text-gray-100 font-semibold rounded py-2">
                    <span className="mr-3">LINK</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                      </path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* second project */}
            <div className="bg-gray-800 flex flex-col m-3 overflow-hidden rounded-2xl">
              <div className="group relative h-40 overflow-hidden cursor-pointer">
                <div className="transition duration-500 ease-in-out bg-gray-800 bg-opacity-40 opacity-0 group-hover:opacity-100 absolute left-0 top-0 z-10 h-full w-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-green-100">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7">
                    </path>
                  </svg>
                </div>
                <img className="w-full h-auto object-center absolute left-0 top-0 z-0"
                  src="images/4.jpg" alt="images/4.jpg" />
              </div>
              <div className="px-5 pb-5">
                <button onClick={() => toggleOverlay(2)} className="mt-2 float-right border border-green-400 hover:bg-green-400 hover:text-gray-800 text-green-400 px-2 py-1 rounded-3xl text-sm ml-1 font-bold">details</button>
                <p className="text-lg mt-3 font-bold">Pick A Fist</p>
                <p className="text-smmt-2 cursor-pointer hover:text-green-400 line-clamp-1">
                  A simple fun game i developed with ember.js in less than a day to refresh my ember.js skills
                  since i have been working with other frameworks for a while now. You guess which fist is holding the key,
                  and it scores you vs the computer.</p>
                <p className="flex flex-wrap items-center min-h-min">
                  <span className="text-xs px-3 py-1 bg-gray-700 text-green-400 rounded-2xl mt-2 mr-1">Ember.js</span>
                  <span className="text-xs px-3 py-1 bg-gray-700 text-green-400 rounded-2xl mt-2 mr-1">Tailwindcss</span>
                </p>
                <div className="flex mt-4 space-children">
                  <a href="https://hand-pick-game.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center text-center bg-green-600 hover:bg-green-700 text-gray-100 font-semibold rounded py-2">
                    <span className="mr-3">LINK</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                      </path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* third project */}
            <div className="bg-gray-800 flex flex-col m-3 overflow-hidden rounded-2xl">
              <div className="group relative h-40 overflow-hidden cursor-pointer">
                <div className="transition duration-500 ease-in-out bg-gray-800 bg-opacity-40 opacity-0 group-hover:opacity-100 absolute left-0 top-0 z-10 h-full w-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-green-100">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7">
                    </path>
                  </svg>
                </div>
                <img className="w-full h-auto object-center absolute left-0 top-0 z-0"
                  src="images/4.jpg" alt="images/4.jpg" />
              </div>
              <div className="px-5 pb-5">
                <button onClick={() => toggleOverlay(2)} className="mt-2 float-right border border-green-400 hover:bg-green-400 hover:text-gray-800 text-green-400 px-2 py-1 rounded-3xl text-sm ml-1 font-bold">details</button>
                <p className="text-lg mt-3 font-bold">Pick A Fist</p>
                <p className="text-smmt-2 cursor-pointer hover:text-green-400 line-clamp-1">
                  A simple fun game i developed with ember.js in less than a day to refresh my ember.js skills
                  since i have been working with other frameworks for a while now. You guess which fist is holding the key,
                  and it scores you vs the computer.</p>
                <p className="flex flex-wrap items-center min-h-min">
                  <span className="text-xs px-3 py-1 bg-gray-700 text-green-400 rounded-2xl mt-2 mr-1">Ember.js</span>
                  <span className="text-xs px-3 py-1 bg-gray-700 text-green-400 rounded-2xl mt-2 mr-1">Tailwindcss</span>
                </p>
                <div className="flex mt-4 space-children">
                  <a href="https://hand-pick-game.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center text-center bg-green-600 hover:bg-green-700 text-gray-100 font-semibold rounded py-2">
                    <span className="mr-3">LINK</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                      </path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT ME SECTION */}
        <Contact></Contact>
        {/* FOOTER */}
        <Footer></Footer>
      </div>
      {
        (toggleOver === 2 &&
          <Overlay tools={['react', 'tailwind']}
            func={() => toggleOverlay(0)}
            pictures={["images/3.jpg", 'images/2.jpg', 'images/4.jpg']}
            message='A simple fun game i developed with ember.js in less than a day to refresh my ember.js
             skills since i have been working with other frameworks for a while now. You guess which fist
              is holding the key, and it scores you vs the computer.'
          ></Overlay>
        )
      }
    </div>
  );
}

export default App;
