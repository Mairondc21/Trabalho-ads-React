import './Servico.css'

const Servico = () => {
    return (
        <section className='servico'>
            <div className='servico__titulo'>
                <h1>SERVICOS</h1>
            </div>
            <div className='servico__conteudo'>
                <div className='servico__conteudo__item'>
                    <h1>MOTORISTA</h1>
                    <p>Transporte executivo,
                        Traslados,
                        Receptivos em aeroportos,
                        Turismo,
                        Oferecemos Vans e veículos executivos.
                    </p>
                </div>

                <div className='servico__conteudo__item'>
                    <h1>MANOBRISTA</h1>
                    <p>Temos uma equipe de manobristas em Belo Horizonte sendo profissionais 
                        altamente qualificados e preparados para recepcionar e abordar os seus 
                        convidados e conduzir veículos nacionais e importados, com segurança.
                    </p>
                </div>

                <div className='servico__conteudo__item'>
                    <h1>APOIO</h1>
                    <p>Situação de altos riscos eminentes;
                        Controle de entrada e saída de pessoas;
                        Controle de entrada e saída de veículos;
                        Comportamento em caso de roubos e furtos.
                    </p>
                </div>

                <div className='servico__conteudo__item'>
                    <h1>VIGIA</h1>
                    <p>Disponibilizamos de profissionais capacitados para fazer 
                        o serviço extra de inspeção em lojas, galpões, empresas, stands, feiras...
                    </p>
                </div>
            </div>


        </section>
    )
}

export default Servico