import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
                <div className='footer__logo'>
                    <img  src='https://www.mmturismo.com.br/imagem/logo.gif' />
                </div>
                <div className='footer__banner'>
                    <img  src='https://www.mmturismo.com.br/imagem/banner.gif' />
                </div>

                <div className='footer__texto'>
                    <p>
                        Todos os direitos reservados a MM TOUR
                        LOCAÇÃO DE VEÍCULOS, TURISMO E EVENTOS LTDA - © 2009
                    </p>
                </div>
        </footer>
    )
}

export default Footer