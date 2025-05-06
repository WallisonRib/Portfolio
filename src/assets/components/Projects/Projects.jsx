import Card from "./Card";
import foto_ml from "../../images/preview_clone_ml.png"
import circuito from "../../images/circuito.png"
import swagger from "../../images/swagger.png"


function Projects() {
    return (
        <section id="projetos" className="h-full bg-black 2xl:p-8 p-2 text-white ">
            <h1 className="font-bold text-3xl md:text-4xl flex py-10 justify-center">Projetos</h1>
            <div className="wrap flex justify-center">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-white 2xl:mx-60 m-5">
                    <Card foto={circuito} titulo="Site do Circuito de Conhecimentos" texto="Site criado em Laravel, PHP e MySQL para gerenciamento e exposição de conteudos referentes ao CDC" repositorio={"https://github.com/WallisonRib/CircuitoDeConhecimentos"} />
                    <Card foto={swagger} titulo="API Node + Swagger + Postgree" texto="API criada com Node, Swagger e Postgree para alimentação de dados para o site Econolivros, feito em React" repositorio={"https://github.com/WallisonRib/SwaggerAPI_PostgreeSQL"} />

                    <Card foto={foto_ml} titulo="Clone funcional do ML" texto="Consumo de API e exposição de dados dos produtos " repositorio={"https://github.com/WallisonRib/Clone-Funcional-MercadoLivre"} />
                </div>
            </div>
        </section>
    );
}

export default Projects;