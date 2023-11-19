import './Profissionais.css'

const Profissionais = () => {
    return(
        <section className='profissionais'>
            <div className='profissionais__img'>
                    <img src='https://encurtador.com.br/lmACZ' alt='motorista dirigindo'
                    width={'626px'} height={'626px'}/>
                </div>
                <div className='profissionais__titulo'>
                    <h1>PROFISSIONAIS</h1>
                </div>
                <div className='profissionais__conteudo'>
                    <p> A MM TOUR possui um programa de seleção e contratação de pessoal, 
                        para atuação em eventos e demais ocasiões, 
                        buscando garantir assim uma excelente padrão de qualidade 
                        na prestação de serviços. Os Colaboradores são contratados mediante experiência profissional, 
                        onde são exigidos cursos de capacitação.
                    </p>
                </div>
        </section>
    )
}

export default Profissionais