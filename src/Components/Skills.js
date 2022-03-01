import { useState } from 'react';

function Skills() {

    const [toggle, setToggle] = useState(1);
    
    const toggleTab = (index) => {
        setToggle(index)
    }
    return (
        <section className="px-4 py-20 sm:px-6 lg:px-8 flex flex-col items-center">
            <h1 className="text-green-400 font-bold mb-3">SKILLS</h1>
            <p className="text-gray-200 text-4xl font-bold mb-3">The Stack i Work With</p>
            <div className="mt-4">
                <ul className="flex flex-row rounded-md">
                    <div onClick={() => toggleTab(1)} className={`${toggle === 1 ? 'tabs active-tabs' : 'tabs'} font-bold bg-gray-700 text-md px-3 py-2`}>Highlight</div>
                    <div onClick={() => toggleTab(2)} className={`${toggle === 2 ? 'tabs active-tabs' : 'tabs'} font-bold bg-gray-700 text-md px-3 py-2`}>frontend</div>
                    <div onClick={() => toggleTab(3)} className={`${toggle === 3 ? 'tabs active-tabs' : 'tabs'} font-bold bg-gray-700 text-md px-3 py-2`}>Backend</div>
                    <div onClick={() => toggleTab(4)} className={`${toggle === 4 ? 'tabs active-tabs' : 'tabs'} font-bold bg-gray-700 text-md px-3 py-2`}>Fullstack</div>
                </ul>
            </div>
            <div className="content-tabs">
                <div className={`${toggle === 1 ? 'content active-content' : 'content'} flex flex-row mt-7 flex-wrap`}>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">FLUTTER</p>
                        <img src="images/skills/flutter.png" alt="flutter.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">REACT.JS</p>
                        <img src="images/skills/react.png" alt="react.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">TAILWINDCSS</p>
                        <img src="images/skills/tailwindcss.png" alt="tailwindcss.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">NODE.JS</p>
                        <img src="images/skills/node.png" alt="node.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">HTML</p>
                        <img src="images/skills/html.png" alt="html.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">POSTGRESQL</p>
                        <img src="images/skills/postgres.png" alt="postgres.png" className="w-10 h-10 object-center" />
                    </div>
                </div>
                <div className={`${toggle === 2 ? 'content active-content' : 'content'} flex flex-row mt-7 flex-wrap`}>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">HTML</p>
                        <img src="images/skills/html.png" alt="html.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">CSS</p>
                        <img src="images/skills/css.png" alt="css.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">REACT.JS</p>
                        <img src="images/skills/react.png" alt="react.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">FLUTTER</p>
                        <img src="images/skills/flutter.png" alt="flutter.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">TAILWINDCSS</p>
                        <img src="images/skills/tailwindcss.png" alt="tailwindcss.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">BOOTSTRAP</p>
                        <img src="images/skills/bootstrap.png" alt="bootstrap.png" className="w-10 h-10 object-center" />
                    </div>
                </div>
                <div className={`${toggle === 3 ? 'content active-content' : 'content'} flex flex-row mt-7 flex-wrap`}>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">NODE.JS</p>
                        <img src="images/skills/node.png" alt="node.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">EXPRESS</p>
                        <img src="images/skills/express.png" alt="express.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">LARAVEL</p>
                        <img src="images/skills/laravel.png" alt="laravel.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">MYSQL</p>
                        <img src="images/skills/mysql.png" alt="mysql.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">POSTGRESQL</p>
                        <img src="images/skills/postgres.png" alt="postgres.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">MONGODB</p>
                        <img src="images/skills/mongodb.png" alt="mongodb.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">FIREBASE</p>
                        <img src="images/skills/firebase.png" alt="firebase.png" className="w-10 h-10 object-center" />
                    </div>
                </div>
                <div className={`${toggle === 4 ? 'content active-content' : 'content'} flex flex-row mt-7 flex-wrap`}>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">HTML</p>
                        <img src="images/skills/html.png" alt="html.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">CSS</p>
                        <img src="images/skills/css.png" alt="css.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">REACT.JS</p>
                        <img src="images/skills/react.png" alt="react.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">FLUTTER</p>
                        <img src="images/skills/flutter.png" alt="flutter.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">TAILWINDCSS</p>
                        <img src="images/skills/tailwindcss.png" alt="tailwindcss.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">BOOTSTRAP</p>
                        <img src="images/skills/bootstrap.png" alt="bootstrap.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">NODE.JS</p>
                        <img src="images/skills/node.png" alt="node.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">EXPRESS</p>
                        <img src="images/skills/express.png" alt="express.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">LARAVEL</p>
                        <img src="images/skills/laravel.png" alt="laravel.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">MYSQL</p>
                        <img src="images/skills/mysql.png" alt="mysql.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">POSTGRESQL</p>
                        <img src="images/skills/postgres.png" alt="postgres.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">MONGODB</p>
                        <img src="images/skills/mongodb.png" alt="mongodb.png" className="w-10 h-10 object-center" />
                    </div>
                    <div className="flex flex-col m-3 items-center py-1">
                        <p className="text-sm">FIREBASE</p>
                        <img src="images/skills/firebase.png" alt="firebase.png" className="w-10 h-10 object-center" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;