import { BsGit } from 'react-icons/bs'
import { SiMysql, SiExpress, SiInsomnia } from 'react-icons/si'
import { BiLogoMongodb, BiLogoJavascript, BiLogoPostgresql } from 'react-icons/bi'
import { FaNodeJs, FaPhp, FaLaravel } from 'react-icons/fa'

import {
    BiLogoTailwindCss, BiLogoCss3, BiLogoReact, BiLogoBootstrap, BiLogoWordpress, BiLogoTypescript
} from 'react-icons/bi'
import { AiFillHtml5 } from 'react-icons/ai'
import { FiFigma } from 'react-icons/fi'



function Skills() {
    return (
        <section id="habilidades" className="h-full bg-black 2xl:p-8 p-2 ">
            <div className="2xl:flex justify-center">

                <div className="back justify-center bg-rock-400 m-0 2xl:m-20 border rounded-2xl p-10 my-10 ">
                    <h1 className="text-white flex text-4xl justify-center font-bold items-center pb-5">Back-end</h1>
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-10 text-white ">

                        <div className='flex flex-col items-center justify-center hover:scale-125 transition delay-0 duration-300 ease-in-out'>
                            <BiLogoJavascript color='white' size={100} className='mb-2' />
                            <p>Javascript</p>
                        </div>

                        <div className='flex flex-col items-center justify-center hover:scale-125 transition delay-0 duration-300 ease-in-out'>
                            <div><FaNodeJs color='white' size={100} className='mb-2' /></div>
                            <p>Node.js</p>
                        </div>

                        <div className='flex flex-col items-center justify-center hover:scale-125 transition delay-0 duration-300 ease-in-out'>
                            <div><BiLogoMongodb color='white' size={100} className='mb-2' /></div>
                            <p>MongoDB</p>
                        </div>

                        <div className='flex flex-col items-center justify-center hover:scale-125 transition delay-0 duration-300 ease-in-out'>
                            <div><SiExpress color='white' size={100} className='mb-2' /></div>
                            <p>Express</p>
                        </div>

                        <div className='flex flex-col items-center justify-center hover:scale-125 transition delay-0 duration-300 ease-in-out'>
                            <div><SiInsomnia color='white' size={100} className='mb-2' /></div>
                            <p>Insomnia</p>
                        </div>

                        <div className='flex flex-col items-center justify-center hover:scale-125 transition delay-0 duration-300 ease-in-out'>
                            <div><BiLogoPostgresql color='white' size={100} className='mb-2' /></div>
                            <p>PostgreeSQL</p>
                        </div>

                        <div className='flex flex-col items-center justify-center hover:scale-125 transition delay-0 duration-300 ease-in-out'>
                            <div><FaPhp color='white' size={100} className='mb-2' /></div>
                            <p>Php</p>
                        </div>

                        <div className='flex flex-col items-center justify-center hover:scale-125 transition delay-0 duration-300 ease-in-out'>
                            <div><FaLaravel color='white' size={100} className='mb-2' /></div>
                            <p>Laravel</p>
                        </div>

                        <div className='flex flex-col items-center justify-center hover:scale-125 transition delay-0 duration-300 ease-in-out'>
                            <div><BsGit color='white' size={100} className='mb-2' /></div>
                            <p>Git</p>
                        </div>

                    </div>

                </div>

                <div className="back justify-center bg-rock-400 2xl:m-20 border rounded-2xl p-10 m-0">
                    <h1 className="text-white flex text-4xl justify-center font-bold items-center pb-5">Front-end</h1>
                    <div class="grid grid-cols-3 md:grid-cols-3 gap-10 text-white">

                    <div className='flex flex-col items-center justify-center hover:scale-125 transition delay-0 duration-300 ease-in-out'>
    <div className='flex flex-col items-center justify-center'>
        <AiFillHtml5 color='white' size={100} className='mb-2' />
        <p>HTML</p>
    </div>
</div>

<div className='flex flex-col items-center justify-center hover:scale-125 transition delay-0 duration-300 ease-in-out'>
    <div className='flex flex-col items-center justify-center'>
        <BiLogoCss3 color='white' size={100} className='mb-2' />
        <p>CSS</p>
    </div>
</div>

<div className='flex flex-col items-center justify-center hover:scale-125 transition delay-0 duration-300 ease-in-out'>
    <div className='flex flex-col items-center justify-center'>
        <BiLogoJavascript color='white' size={100} className='mb-2' />
        <p>Javascript</p>
    </div>
</div>

<div className='flex flex-col items-center justify-center hover:scale-125 transition delay-0 duration-300 ease-in-out'>
    <div className='flex flex-col items-center justify-center'>
        <BiLogoBootstrap color='white' size={100} className='mb-2' />
        <p>Bootstrap</p>
    </div>
</div>

<div className='flex flex-col items-center justify-center hover:scale-125 transition delay-0 duration-300 ease-in-out'>
    <div className='flex flex-col items-center justify-center'>
        <BiLogoTailwindCss color='white' size={100} className='mb-2' />
        <p>Tailwind</p>
    </div>
</div>

<div className='flex flex-col items-center justify-center hover:scale-125 transition delay-0 duration-300 ease-in-out'>
    <div className='flex flex-col items-center justify-center'>
        <FiFigma color='white' size={100} className='mb-2' />
        <p>Figma</p>
    </div>
</div>

<div className='flex flex-col items-center justify-center hover:scale-125 transition delay-0 duration-300 ease-in-out'>
    <div className='flex flex-col items-center justify-center'>
        <BiLogoReact color='white' size={100} className='mb-2' />
        <p>React.js</p>
    </div>
</div>

<div className='flex flex-col items-center justify-center hover:scale-125 transition delay-0 duration-300 ease-in-out'>
    <div className='flex flex-col items-center justify-center'>
        <BiLogoTypescript color='white' size={100} className='mb-2' />
        <p>Typescript</p>
    </div>
</div>

<div className='flex flex-col items-center justify-center hover:scale-125 transition delay-0 duration-300 ease-in-out'>
    <div className='flex flex-col items-center justify-center'>
        <BiLogoWordpress color='white' size={100} className='mb-2' />
        <p>Wordpress</p>
    </div>
</div>



                    </div>

                </div>
            </div>



        </section>
    );
}

export default Skills;