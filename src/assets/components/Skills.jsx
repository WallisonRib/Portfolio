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

                <div className="back justify-center bg-rock-400 m-0 2xl:m-20 border rounded-2xl p-10 my-10">
                    <h1 className="text-white flex text-4xl justify-center font-bold items-center pb-5">Back-end</h1>
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-10 text-white">


                        <div className='flex flex-col items-center justify-center'>
                            <BiLogoJavascript color='white' size={100} className='mb-2' />
                            <p>Javascript</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <div><FaNodeJs color='white' size={100} className='mb-2' /></div>
                            <p>Node.js</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <div><BiLogoMongodb color='white' size={100} className='mb-2' /></div>
                            <p>MongoDB</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <div><SiExpress color='white' size={100} className='mb-2' /></div>
                            <p>Express</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <div><SiInsomnia color='white' size={100} className='mb-2' /></div>
                            <p>Insomnia</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <div><BiLogoPostgresql color='white' size={100} className='mb-2' /></div>
                            <p>PostgreeSQL</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <div><FaPhp color='white' size={100} className='mb-2' /></div>
                            <p>Php</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div><FaLaravel color='white' size={100} className='mb-2' /></div>
                            <p>Laravel</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <div><BsGit color='white' size={100} className='mb-2' /></div>
                            <p>Git</p>
                        </div>
                    </div>

                </div>

                <div className="back justify-center bg-rock-400 2xl:m-20 border rounded-2xl p-10 m-0">
                    <h1 className="text-white flex text-4xl justify-center font-bold items-center pb-5">Front-end</h1>
                    <div class="grid grid-cols-3 md:grid-cols-3 gap-10 text-white">

                        <div className='flex flex-col items-center justify-center'>
                            <AiFillHtml5 color='white' size={100} className='mb-2' />
                            <p>HTML</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <div><BiLogoCss3 color='white' size={100} className='mb-2' /></div>
                            <p>CSS</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <BiLogoJavascript color='white' size={100} className='mb-2' />
                            <p>Javascript</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <div><BiLogoBootstrap color='white' size={100} className='mb-2' /></div>
                            <p>Bootstrap</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <div><BiLogoTailwindCss color='white' size={100} className='mb-2' /></div>
                            <p>Tailwind</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <div><FiFigma color='white' size={100} className='mb-2' /></div>
                            <p>Figma</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <div><BiLogoReact color='white' size={100} className='mb-2' /></div>
                            <p>React.js</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div><BiLogoTypescript color='white' size={100} className='mb-2' /></div>
                            <p>Typescript</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div><BiLogoWordpress color='white' size={100} className='mb-2' /></div>
                            <p>Wordpress</p>
                        </div>


                    </div>

                </div>
            </div>



        </section>
    );
}

export default Skills;