import Timeline from "./TimeLine";
import Experiencies from "./Experiences";


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
                        Eu adoro trabalhar em equipe e estou entusiasmado para colaborar em projetos que me permitam crescer e aprender. Estou em busca de uma oportunidade de estágio em áreas da tecnologia para me inserir no mercado de trabalho e aplicar minhas habilidades em um ambiente profissionale muita vontade de aprender.
                    </p>

                </blockquote>
            </div>

            <Experiencies/>

        </section>
    );
}

export default AboutMe;
