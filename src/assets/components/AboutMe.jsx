import Timeline from "./TimeLine";
import logo_unimontes from "../images/logo_unimontes.jpg"
import logo_PRP from "../images/PRP.jpg"



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

            <div className="text-white flex flex-col p-10 2xl:p-20 2xl:flex-row 2xl:justify-between">

                <div className="">
                    <h1 className="font-bold text-3xl md:text-4xl flex mb-10">Experiências</h1>

                </div>
                    
                <a href="#" class=" flex items-center border rounded-lg shadow flex-row  md:max-w-xl border-gray-700 bg-black hover:bg-[] mb-10 2xl:m-0">
                    <img class="object-cover rounded-t-lg w-36 rounded-none rounded-s-lg 2xl:w-48" src={logo_unimontes} alt="" />
                    <div class="flex flex-col justify-between leading-normal">

                        <h5 class="text-2xl font-bold tracking-tight text-white m-2">Estágio na Coordenação de Educação Fisica</h5>
                        <p class="mb-3 font-normal text-gray-200 m-2">fev 2024 - o momento</p>
                    
                    </div>
                </a>
   
                <a href="#" class=" flex items-center border rounded-lg shadow flex-row md:max-w-xl border-gray-700 bg-black hover:bg-[]">
                    <img class="object-cover rounded-t-lg w-36 rounded-none rounded-s-lg 2xl:w-48" src={logo_PRP} alt="" />
                    <div class="flex flex-col justify-between leading-normal">

                        <h5 class="text-2xl font-bold tracking-tight text-white m-2">Iniciação Científica Voluntária</h5>
                        <p class="mb-3 font-normal text-gray-200 m-2">mar 2024 - o momento</p>
                    
                    </div>
                </a>

                </div>


        </section>
    );
}

export default AboutMe;
