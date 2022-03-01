/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import '../index.css';

function Overlay({ message, pictures = [], tools = [], func }) {

    const [pictureChange, setPictureChange] = useState(pictures[0]);

    const pictureChangeHandler = (key) => {
        setPictureChange(key);
    }

    return (

        <div id='popup' className="inline-block align-bottom home-bg rounded-lg text-left shadow-xl z-50
         transform transition-all sm:my-8 sm:align-middle lg:w-4/5 md:w-full sm:w-full">
            <div className='home-bg px-4 pt-5 pb-1 sm:p-6 sm:pb-4'>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex-1 flex justify-center '>
                        <div className=' '>
                            <div className=''>
                                <div class=" bottom w-2/4">

                                    <div className="flex flex-col">
                                        <div className="">
                                            <img className=""
                                                src={pictureChange} />
                                        </div>
                                        <div className='flex flex-row px-2 py-2 w-1/4 h-1/4'>
                                            {
                                                pictures.map(picture => (
                                                    <button key={picture} onClick={() => pictureChangeHandler(picture)} className='p-1'><img className=""
                                                        src={picture} /></button>
                                                ))
                                            }


                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 md:px-4">
                        <h2 className="text-lg leading-6 font-medium text-gray-200 mt-2 md:mt-0"
                            id="headlessui-dialog-title-82">Pick A Fist</h2>
                        <p className="flex flex-wrap items-center">
                            {tools.map(tool => (
                                <span key={tool} className="text-xs px-3 py-1 bg-gray-700 text-green-400 rounded-2xl mt-2 mr-1">{tool}</span>
                            ))}
                        </p>
                        <p className="text-sm text-gray-400 mt-0 md:mt-3">
                            {/* message */}
                            <div>{message}</div></p>
                        <div className="mt-3 flex">
                            <a href="https://hand-pick-game.netlify.app/" target="_blank" rel="noopener noreferrer"
                                className="text-green-400 mr-4 flex items-center">LINK
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="ml-1 h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="app-bg px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={func} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border 
            border-gray-300 shadow-sm px-4 py-2 bg-gray-300 text-base font-medium text-gray-700 
            hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Close</button>
            </div>
        </div>
    )
}

export default Overlay;