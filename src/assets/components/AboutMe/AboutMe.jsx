import Timeline from "./TimeLine";
import SplitText from "./SplitText";


function AboutMe() {

    return (
        <section id="aboutme" className="h-full bg-neutral-950">
            <div className="text-white p-10 justify-between flex flex-col 2xl:flex-row 2xl:px-20">
                <div className="h-[50%] w-[100%]">
                    <h1 className="font-bold text-3xl ">Sobre mim</h1>
                    <h1 className="font-bold text-3xl md:text-4xl">Wallison Ribeiro Santos</h1>
                    <h2 className="text-xl 2xl:text-3xl">Desenvolvedor Full-Stack</h2>

                    <Timeline />

                </div>
                <blockquote className="flex justify-center flex-col">



                    <SplitText texto="Desenvolvedor Full Stack com 1 ano de experiência, atuando em todas as etapas do desenvolvimento web — desde o design da interface até a implementação do backend. Possuo habilidades em frontend, backend, bancos de dados e integração de sistemas, entregando soluções completas e funcionais com foco em desempenho, usabilidade e manutenção.
"/>
                    <p class="text-lg font-medium pb-10">
                    </p>

                    <p class="text-lg font-medium ">
                        Minhas habilidades em desenvolvimento incluem domínio de linguagens como React, Node, JavaScript, SQL e conhecimento básico em PHP e Laravel, tornando-me um desenvolvedor full stack. Minha formação inclui um diploma em Técnico em Informática pelo Instituto Federal do Norte de Minas Gerais (IFNMG), e atualmente estou cursando Sistemas de Informação na Unimontes.
                    </p>

                </blockquote>
            </div>
        </section>

    );


}

export default AboutMe;
