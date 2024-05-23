import Timeline from "./TimeLine";
import logo_unimontes from "../images/logo_unimontes.jpg"


function AboutMe() {
    return (
        <section id="aboutme" className="h-full bg-neutral-950">
            <div className="text-white  p-10 justify-between flex flex-col 2xl:flex-row 2xl:px-20">
                <div className="h-[50%] w-[100%]">

                    <h1 className="font-bold text-3xl ">Sobre mim</h1>
                    <h1 className="font-bold text-3xl md:text-4xl">Wallison Ribeiro Santos</h1>
                    <h2 className="text-xl 2xl:text-3xl">Desenvolvedor Full-Stack</h2>

                    <Timeline />

                </div>

                <blockquote className="flex justify-center flex-col">
                    <p class="text-lg font-medium pb-10">
                        Minhas habilidades em desenvolvimento incluem domínio de linguagens como React, Node, JavaScript, SQL e conhecimento básico em PHP e Laravel, tornando-me um desenvolvedor full stack. Minha formação inclui um diploma em Técnico em Informática pelo Instituto Federal do Norte de Minas Gerais (IFNMG), e atualmente estou cursando Sistemas de Informação na Unimontes.
                    </p>
                    <p class="text-lg font-medium">
                        Eu adoro trabalhar em equipe e estou entusiasmado para colaborar em projetos que me permitam crescer e aprender. Estou em busca de uma oportunidade de estágio para me inserir no mercado de trabalho e aplicar minhas habilidades em um ambiente profissional.
                    </p>

                </blockquote>
            </div>

            <div className="text-white 2xl:justify-between flex flex-col 2xl:p-20 2xl:flex-row p-10 ">

                <div>
                    <h1 className="font-bold text-3xl md:text-4xl flex ">Experiências</h1>

                </div>
                    
                <a href="#" class="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 border-gray-700 bg-black hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={logo_unimontes} alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Noteworthy technology acquisitions 2021</h5>
                        <p class="mb-3 font-normal text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </a>

                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={logo_unimontes} alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </a>

                </div>


        </section>
    );
}

export default AboutMe;
