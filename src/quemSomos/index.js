import './QuemSomos.css'

const QuemSomos = () => {
    return(
        <section className='quemSomos'>
            
                <div className='quemSomos__img'>
                    <img src='https://encurtador.com.br/diBFY' alt='motorista dirigindo'
                    width={'637px'} height={'626px'}/>
                </div>
                <div className='quemSomos__titulo'>
                    <h1>QUEM SOMOS ?</h1>
                </div>
                <div className='quemSomos__conteudo'>
                    <p> A MMTOUR é uma empresa que procura inovar no cenário nacional, propomos demonstrar ao consumidor exigente, 
                        qualidade no atendimento que é diferenciado na prestação de serviços, tais como: 
                        Aeroportos, Viagens á cidades históricas, além das belezas naturais de Minas Gerais como: Grutas, Serras, Cachoeiras.
                    </p>
                </div>
                
        </section>
    )
}

export default QuemSomos