import proptypes from 'prop-types'
import style from './Repository.module.css'


export const Repository = ({titulo, descricao, destacar}) => {
    return(
        <article className={style.article}>
           
            <div className={style.box1}>

                <h3 className={style.h3}>{titulo}</h3>
                <span className={style.destaque}>{destacar}</span>
                {destacar === true ? 
                (
                    'Em destaque' 
                ): 
                (
                    ''
                )}
            </div>
           
            <div>
                <p className={style.p}>{descricao}</p>
           l
            </div>

        </article>
    )
}

Repository.propTypes = {
    titulo: proptypes.string.isRequired,
    descricao: proptypes.string,
    destacar: proptypes.bool,

}





