function Card({ foto, titulo, texto, repositorio }) {
    return (
        <div class="scale-100 max-w-sm bg-neutral-950 border-2 border-gray-600 rounded-lg shadow  hover:scale-110 transition delay-0 duration-300 ease-in-out ">
            <img class="rounded-t-lg" src={foto} alt="" /> 
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{titulo}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-400"> {texto}</p>
                <a target="#blank" href={repositorio} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-neutral-500 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Repositório
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>


    );
}

export default Card;