import logo_if from "../images/logo_ifnmg.jpg"
import logo_unimontes from "../images/logo_unimontes.jpg"
function Timeline() {
    return (

        <ol class="my-10 items-center sm:flex">
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full ring-1 ring-white dark:bg-blue-900 sm:ring-1 dark:ring-gray-900 shrink-0">
                        <img src={logo_if}  className="w-12 rounded-full "alt="" />
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-white">Técnico em Informática</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2019 - 2022</time>
                    <p class="text-base font-normal text-gray-400">Curso técnico integrado ao ensino médio.</p>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                <div class="z-10 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full ring-1 ring-white dark:bg-blue-900 sm:ring-1 dark:ring-gray-900 shrink-0">
                        <img src={logo_unimontes}  className="w-12 rounded-full "alt="" />
                    </div>
                    <div class="hidden sm:flex w-24   bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-white">Sistemas de informação</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023 - em curso</time>
                    <p class="text-base font-normal text-gray-400">Curso superior de Bacharel em Sistemas de Informação.</p>
                </div>
            </li>
         
        </ol>


    );
}

export default Timeline;