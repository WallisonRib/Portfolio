import logo_unimontes from "../../images/logo_unimontes.jpg"
import logo_PRP from "../../images/PRP.jpg"
import logo_cead from "../../images/logo_cead.jpg"


function Experiencies() {
    return ( 
        
        <div className="text-white flex flex-col p-10 2xl:p-20 2xl:flex-col 2xl:justify-between space-y-4 items-center ">

        <div className="">
            <h1 className="font-bold text-3xl md:text-4xl flex mb-10">Experiências</h1>
        </div>

        <a href="https://unimontes.br/unidades/ccbs/defd/"  target="blank"class=" flex items-center border rounded-lg shadow flex-row  md:max-w-xl border-gray-700 bg-black hover:bg-[] mb-10 2xl:m-0">
            <img class="object-cover rounded-t-lg w-56 rounded-none rounded-s-lg 2xl:w-48  " src={logo_cead} alt="" />
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

            
        <a href="https://unimontes.br/unidades/ccbs/defd/"  target="blank"class=" space-x-4 flex items-center border rounded-lg shadow flex-row  md:max-w-xl border-gray-700 bg-black hover:bg-[] mb-10 2xl:m-0">
            <img class="object-cover rounded-t-lg w-56 rounded-none rounded-s-lg 2xl:w-48" src={logo_unimontes} alt="" />
            <div class="flex flex-col justify-between leading-normal">

                <h5 class="text-2xl font-bold tracking-tight text-white m-2">Estágio na Coordenação de Educação Fisica</h5>
                <p class="mb-3 font-normal m-2"> Estágio Administrativo, prestando aopio a Coordenação de Curso dos cursos de Educação Fisica Bacharelado e Licenciatura.</p>
                <p class="mb-3 font-normal text-gray-200 m-2">fev 2024 - maio 2024</p>
            
            </div>
        </a>

        </div>

     );
}

export default Experiencies;