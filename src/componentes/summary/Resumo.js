import Validar from 'prop-types'
import style from './Resumo.module.css'

export const Resumo = ({imagem,nome}) => {
    return (
        <div className={style.container}> 
            <img className={style.img} src={imagem} alt={nome}></img>
            <h2 className={style.h2} alt={nome}>{nome}</h2>
        </div>
    )
}

Resumo.propTypes = {
    imagem: Validar.string.isRequired,
    nome: Validar.string.isRequired,
}