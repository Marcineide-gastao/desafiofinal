import S from './queroDoar.module.scss'
import livro from '../../assets/Vector.png'

export default function QueroDoar(){
    return(
        <section className={S.principal}>
            <section className={S.container}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                <form action="">
                    <div>
                        <img src={livro} alt="ícone de um livro" />
                        <p>Informações do Livro</p>
                    </div>
                    <input type="text" placeholder='Título' />
                    <input type="text" placeholder='Categoria' />
                    <input type="text" placeholder='Autor' />
                    <input type="text" placeholder='Link da imagem' />
                    <input type="submit" value="Doar" />
                </form>
            </section>
        </section>
    )
}
