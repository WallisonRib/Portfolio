import foto from "../images/Rib.jpg"
import Links from "../../Links";

function Home() {
    return (
        <div className="flex text place-items-center align-middle justify-between px-5 mx-0 my-20 xl:mx-40  flex-col 2xl:flex-row 2xl:px-20 ">
            <div className="justify-center flex z-[1]">
                <img className="perfil rounded-full border-2 justify-center mb-8 w-96 h-96 2xl:w-[30vw] 2xl:h-full " src={foto} alt="image description" />
            </div>
            <div className="text-white">
            <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-3xl md:text-6xl text-white font-bold">Wallison Ribeiro Santos</h1>
                <h2 className="text-xl 2xl:text-4xl">Desenvolvedor Full-Stack</h2>
                <Links />
            </div>
        </div>
    );
}

export default Home;