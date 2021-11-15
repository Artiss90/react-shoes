import style from './Filter.module.scss'

export default function Filter  ({numberOfCategories, changeFilter}) {
const categories = Object.entries(numberOfCategories)
 return <div className={style.mainContainer}>
    <button onClick={()=>changeFilter('')} className={style.btn}>{'Все категории'}</button> 
{categories.map(item => {
    const name = item[0];
    const count = item[1];

    return (<button key={name} onClick={()=>changeFilter(name)} className={style.btn}>{`${name === 'null' ? 'Остальное' : name} - ${count}`}</button>)
})}
 </div>
}