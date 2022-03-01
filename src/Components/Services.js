
function Services() {
    return (
        <section className="px-4 py-20 sm:px-6 lg:px-8 flex flex-col items-center">
            <h1 className="text-green-400 font-bold mb-3">SERVICES</h1>
            <p className="text-gray-200 text-4xl font-bold mb-3">What i Offer</p>
            <p className=" mb-8">i develop web and mobile apps </p>
            <div className=" grid md:grid-cols-2 gap-6 mt-15 ">
                <div className="rounded flex flex-col px-5 py-5 bg-gray-800 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9">
                        </path>
                    </svg>
                    <h1 className="font-bold mt-3 text-xl">Web App Developement</h1>
                    <p className="mt-3">I develop both backend and frontend web application</p>
                </div>
                <div className="rounded flex flex-col px-5 py-5 bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z">
                        </path>
                    </svg>
                    <h1 className="font-bold mt-3 text-xl">Mobile App Developement</h1>
                    <p className="mt-3">I develop hybrid mobile application for android and ios</p>
                </div>
            </div>
        </section>
    )
}

export default Services;