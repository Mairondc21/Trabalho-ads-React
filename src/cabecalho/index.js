import './Cabecalho.css'


const Cabecalho = () => {
    return (
        <header className='fundo'>
            <div className='fundo__img'>


                <img src='https://www.mmturismo.com.br/imagem/logo.gif' alt='logo empresa'
                    width={'350px'} height={'200px'} />
            </div>

            <div>
                <img className='fundo__img__bagagem' src='https://encurtador.com.br/vNTY5'
                    width={'400px'} />
            </div>
            <div>
                <h1>Vá a qualquer lugar com o a MMTour:</h1>
                <h2>
                    A MMTOUR se especializou em grandes congressos empresariais, procurando abranger este mercado,
                    priorizando os eventos que acontece em Belo Horizonte e demais regiões.
                    Oferecemos: coordenadores, veículos para locação, motorista, guia bilíngues, manobrista, agentes de apoio, recepção,
                    auxiliares de banheiro, garçons, cozinheiros e churrasqueiros
                </h2>

            </div>
            
        </header >
        
    )
}

export default Cabecalho