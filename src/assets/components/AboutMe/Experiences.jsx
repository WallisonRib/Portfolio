import logo_unimontes from "../../images/logo_unimontes.jpg"
import logo_PRP from "../../images/PRP.jpg"
import logo_cead from "../../images/logo_cead.jpg"


function Experiencies() {
    return (

        <div className="text-white flex flex-col p-10 2xl:p-20 2xl:flex-col 2xl:justify-between space-y-4 items-center ">

            <div className="">
                <h1 className="font-bold text-3xl md:text-4xl flex mb-10">Experiências</h1>
            </div>

            <ol class="relative border-s border-gray-200">

                <li class="mb-10 ms-4 flex items-start space-x-6">
                    <div class="relative">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    </div>
                    <div>
                        <img class="object-cover w-24 h-24 rounded-2xl md:h-32 md:w-32" src={logo_PRP} alt="Logo PRP" />
                    </div>
                    <div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">mar 2024 - o momento</time>
                        <h3 class="text-lg font-semibold text-white">Iniciação Científica Voluntária</h3>
                        <p class="mb-4 text-base font-normal text-gray-200 max-w-3xl">Participação em um projeto de iniciação científica focado na análise de dados e na experiência do usuário (User Experience) dos estudantes da Universidade Estadual de Montes Claros. O trabalho inclui a coleta e análise de dados para identificar áreas de melhoria no contexto da Universidade Aberta do Brasil (UaB), visando aprimorar a qualidade do ensino a distância.</p>
                    </div>
                </li>

                <li class="mb-10 ms-4 flex items-start space-x-6">
                    <div class="relative">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    </div>
                    <div>
                        <img class="object-cover w-24 h-24 rounded-2xl md:h-32 md:w-32" src={logo_cead} alt="Logo CEAD" />
                    </div>
                    <div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">maio 2024 - o momento</time>
                        <h3 class="text-lg font-semibold text-white">Estágio no Centro de Educação a Distância</h3>
                        <p class="mb-4 text-base font-normal text-gray-200 max-w-3xl">Atuando no Departamento de Desenvolvimento de Tecnologias Educacionais (DTE), sou responsável pela criação e manutenção de sistemas usados no cotidiano de toda a operação do Ensino a Distância da Unimontes. Este estágio envolve a análise de necessidades, desenvolvimento de novos recursos e a otimização de ferramentas existentes para melhorar a experiência de ensino e aprendizagem.</p>
                    </div>
                </li>

                <li class="ms-4 flex items-start space-x-6">
                    <div class="relative">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    </div>
                    <div>
                        <img class="object-cover w-24 h-24 rounded-2xl md:h-32 md:w-32" src={logo_unimontes} alt="Logo Unimontes" />
                    </div>
                    <div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">fev 2024 - maio 2024</time>
                        <h3 class="text-lg font-semibold text-white">Estágio na Coordenação de Educação Física</h3>
                        <p class="mb-4 text-base font-normal text-gray-200 max-w-3xl">Realização de estágio administrativo na Coordenação de Curso dos cursos de Educação Física Bacharelado e Licenciatura. As atividades incluíram a organização de documentos acadêmicos, apoio nas reuniões de coordenação, e assistência na gestão de eventos e atividades para os alunos, contribuindo para a melhoria da comunicação e processos administrativos da coordenação.</p>
                    </div>
                </li>

            </ol>

            {/*             
          

            <a href="https://unimontes.br/unidades/ccbs/defd/" target="blank" class=" flex items-center border rounded-lg shadow flex-row  md:max-w-xl border-gray-700 bg-black hover:bg-[] mb-10 2xl:m-0">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={logo_cead} alt="" />
                <div class="flex flex-col justify-between leading-normal">

                    <h5 class="text-2xl font-bold tracking-tight text-white m-2">Estágio no Centro de Educação a Distância</h5>
                    <p class="mb-3 font-normal m-2">Atuando no Departamento de Desenvolvimento de tecnologias Educacionais (DTE)
                        sou responsável pela criação e manutenção de sistemas usados no cotidiano de toda a operação do Ensino a Distância da Unimontes.</p>
                    <p class="mb-3 font-normal text-gray-200 m-2">maio 2024 - o momento</p>

                </div>
            </a>


            <a href="https://unimontes.br/edital/edital-proinic-prp-06-2023/" target="blank" class="space-x-4  flex items-center border rounded-lg shadow flex-row md:max-w-xl border-gray-700 bg-black hover:bg-[]">
                <img class="object-cover rounded-t-lg w-56 rounded-none rounded-s-lg 2xl:w-48" src={logo_PRP} alt="" />
                <div class="flex flex-col justify-between leading-normal">

                    <h5 class="text-2xl font-bold tracking-tight text-white m-2">Iniciação Científica Voluntária</h5>
                    <p class="mb-3 font-normal m-2">Iniciação voltada a analise de dados, analsiando a UserXperience dos estudantes da Universidade Estadual de Montes Claros no contexto da UaB. </p>
                    <p class="mb-3 font-normal text-gray-200 m-2">mar 2024 - o momento</p>

                </div>
            </a>


            <a href="https://unimontes.br/unidades/ccbs/defd/" target="blank" class=" space-x-4 flex items-center border rounded-lg shadow flex-row  md:max-w-xl border-gray-700 bg-black hover:bg-[] mb-10 2xl:m-0">
                <img class="object-cover rounded-t-lg w-56 rounded-none rounded-s-lg 2xl:w-48" src={logo_unimontes} alt="" />
                <div class="flex flex-col justify-between leading-normal">

                    <h5 class="text-2xl font-bold tracking-tight text-white m-2">Estágio na Coordenação de Educação Fisica</h5>
                    <p class="mb-3 font-normal m-2"> Estágio Administrativo, prestando aopio a Coordenação de Curso dos cursos de Educação Fisica Bacharelado e Licenciatura.</p>
                    <p class="mb-3 font-normal text-gray-200 m-2">fev 2024 - maio 2024</p>

                </div>
            </a>
 */}



        </div>

    );
}

export default Experiencies;