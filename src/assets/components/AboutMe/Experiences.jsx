import logo_unimontes from "../images/logo_unimontes.jpg"
import logo_PRP from "../images/PRP.jpg"

function Experiencies() {
    return ( 
        
        <div className="text-white flex flex-col p-10 2xl:p-20 2xl:flex-row 2xl:justify-between">

        <div className="">
            <h1 className="font-bold text-3xl md:text-4xl flex mb-10">Experiências</h1>

        </div>
            
        <a href="https://unimontes.br/unidades/ccbs/defd/"  target="blank"class=" flex items-center border rounded-lg shadow flex-row  md:max-w-xl border-gray-700 bg-black hover:bg-[] mb-10 2xl:m-0">
            <img class="object-cover rounded-t-lg w-36 rounded-none rounded-s-lg 2xl:w-48" src={logo_unimontes} alt="" />
            <div class="flex flex-col justify-between leading-normal">

                <h5 class="text-2xl font-bold tracking-tight text-white m-2">Estágio na Coordenação de Educação Fisica</h5>
                <p class="mb-3 font-normal text-gray-200 m-2">fev 2024 - o momento</p>
            
            </div>
        </a>

        <a href="https://unimontes.br/edital/edital-proinic-prp-06-2023/" target="blank" class=" flex items-center border rounded-lg shadow flex-row md:max-w-xl border-gray-700 bg-black hover:bg-[]">
            <img class="object-cover rounded-t-lg w-36 rounded-none rounded-s-lg 2xl:w-48" src={logo_PRP} alt="" />
            <div class="flex flex-col justify-between leading-normal">

                <h5 class="text-2xl font-bold tracking-tight text-white m-2">Iniciação Científica Voluntária</h5>
                <p class="mb-3 font-normal text-gray-200 m-2">mar 2024 - o momento</p>
            
            </div>
        </a>

        </div>

     );
}

export default Experiencies;