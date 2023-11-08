import Card from "./Card";
import foto_ml from "../images/preview_clone_ml.png"
import foto_cep from "../images/preview_buscadordecep.png"

function Projects() {
    return (
        <section id="projetos" className="h-full bg-neutral-950 2xl:p-8 p-2 ">
            <h1 className="text-white font-bold text-3xl flex justify-center m-10">Projetos</h1>
            <div className="wrap flex justify-center">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-white 2xl:mx-60 m-5">
                    <Card foto={foto_ml} titulo="Clone funcional do ML" texto="Consumo de API e exposição de dados dos produtos " repositorio={"https://github.com/WallisonRib/Clone-Funcional-MercadoLivre"} />
                    <Card foto={foto_cep} titulo="Buscador de Cep" texto="Projeto realizado em React.js com consumo de API viacep e validação de campos para exposição de dados" repositorio={"https://github.com/WallisonRib/BuscadorDeCep"} />
                </div>
            </div>
        </section>
    );
}

export default Projects;