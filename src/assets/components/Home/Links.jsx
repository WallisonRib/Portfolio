import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp, AiFillInstagram } from "react-icons/ai"

function Links() {
    return (

        <div className="mt-8 flex ">
            <button type="button" className=" text-white bg-black  hover:bg-gray-900 hover:ring-1 hover:ring-white border-2 rounded-full text-3xl p-1 mr-5 "> <a href="https://www.linkedin.com/in/wallisonribeirosantos/" target="_blank" > <AiFillLinkedin /> </a> </button>
            <button type="button" className=" text-white bg-black  hover:bg-gray-900 hover:ring-1 hover:ring-white border-2 rounded-full text-3xl p-1 mr-5 "> <a href="https://github.com/WallisonRib" target="_blank" > <AiFillGithub /> </a> </button>
            <button type="button" className=" text-white bg-black  hover:bg-gray-900 hover:ring-1 hover:ring-white border-2 rounded-full text-3xl p-1 mr-5 "> <a href="https://www.instagram.com/wallisonrib" target="_blank" ><AiFillInstagram /> </a> </button>
            <button type="button" className=" text-white bg-black  hover:bg-gray-900 hover:ring-1 hover:ring-white border-2 rounded-full text-3xl p-1 mr-5 "> <a href="https://api.whatsapp.com/send/?phone=%2B5538999011905&text&type=phone_number&app_absent=0" target="_blank" ><AiOutlineWhatsApp /> </a> </button>
            <button type="button" className=" text-white bg-black border-2 hover:bg-gray-900 font-medium rounded-full text-sm px-1 py-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" > <a href="https://drive.google.com/file/d/1bMO3Nm3e1qAzIyNeOiZRARd6JUjSGHsY/view" target="_blank"> Download CV</a> </button>
        </div>
    );
}

export default Links;