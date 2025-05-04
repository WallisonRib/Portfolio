import logo_unimontes from "../../images/logo_unimontes.jpg";
import logo_PRP from "../../images/PRP.jpg";
import logo_cead from "../../images/logo_cead.jpg";

function Exp() {
    const experiences = [
        {
            logo: logo_cead,
            alt: "Logo CEAD",
            date: "maio 2024 - o momento",
            title: "Estágio no Centro de Educação a Distância",
            description:
                "Atuando no Departamento de Desenvolvimento de Tecnologias Educacionais (DTE), sou responsável pela criação e manutenção de sistemas usados no cotidiano de toda a operação do Ensino a Distância da Unimontes. Este estágio envolve a análise de necessidades, desenvolvimento de novos recursos e a otimização de ferramentas existentes para melhorar a experiência de ensino e aprendizagem.",
        },
        {
            logo: logo_PRP,
            alt: "Logo PRP",
            date: "mar 2024 - o momento",
            title: "Iniciação Científica Voluntária",
            description:
                "Participação em um projeto de iniciação científica focado na análise de dados e na experiência do usuário (User Experience) dos estudantes da Universidade Estadual de Montes Claros. O trabalho inclui a coleta e análise de dados para identificar áreas de melhoria no contexto da Universidade Aberta do Brasil (UaB), visando aprimorar a qualidade do ensino a distância.",
        },
        {
            logo: logo_unimontes,
            alt: "Logo Unimontes",
            date: "fev 2024 - maio 2024",
            title: "Estágio na Coordenação de Educação Física",
            description:
                "Realização de estágio administrativo na Coordenação de Curso dos cursos de Educação Física Bacharelado e Licenciatura. As atividades incluíram a organização de documentos acadêmicos, apoio nas reuniões de coordenação, e assistência na gestão de eventos e atividades para os alunos, contribuindo para a melhoria da comunicação e processos administrativos da coordenação.",
        },
    ];

    return (
        <div className="text-white p-6 sm:p-10 2xl:p-20 bg-gray-black flex flex-col items-center">
            <h1 className="font-bold text-3xl md:text-4xl text-center mb-12">Experiências</h1>

            <div className="w-full max-w-4xl space-y-10  ">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="border-2 border-gray-800 space-x-2 bg-black rounded-2xl shadow-lg p-6 flex flex-row items-center text-center hover:scale-[1.01] transition-transform duration-200"
                    >
                        <img
                            className="w-24 h-24 md:w-48 md:h-48 rounded-2xl object-cover mb-4"
                            src={exp.logo}
                            alt={exp.alt}
                        />
                        <div className="ml-4 text-left">
                        <h3 className="text-m font-semibold text-white mb-2">{exp.title}</h3>
                        <p className="text-sm text-gray-400 mb-1">{exp.date}</p>
                        <p className="text-gray-300 text-sm text-justify">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Exp;
