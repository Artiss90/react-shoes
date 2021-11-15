import axios from 'axios';
import { useEffect, useState } from 'react';
import {styleNames} from '../../utils/styleNames'

import style from './TableShoes.module.scss';

import example from '../../example';
import Filter from '../Filter/Filter';
const sn = styleNames(style);


export default function TableShoes  ()  {
    const [listShoes, setListShoes] = useState([])
    const [filteredListShoes, setFilteredListShoes] = useState([])
    const [numberOfCategories, setNumberOfCategories] = useState('')
    const [filterValue, setFilterValue] = useState('')
useEffect(() => {
    // * запрос на получение данных
    axios({method: 'get', url: 'http://91.90.14.5/viagloria/hs/dropship/items',
    headers: {'Audivorization': 'Basic QWRtaW5pc3RyYXRvcjp3d3cxMjM='}
}).then(console.log)
    setListShoes(example?.items)
}, [])

useEffect(() => {
    // * подсчитаем количество повторяющихся категорий
    if(listShoes.length > 0){
      const countCategory = listShoes.reduce((acc, {category})=>{
        if (!acc.hasOwnProperty(category)) {
            acc[category] = 0;
          }
        
          acc[category] += 1;
          return acc
      },{})
      setNumberOfCategories(countCategory)
    }
}, [listShoes])

useEffect(() => {
    if(filterValue === ''){
    setFilteredListShoes(listShoes)
    return
    }
    
    const filteredList = listShoes.filter(item => 
        {
        if(filterValue === 'null'){
        return item.category === null
        }

        return item.category?.includes(filterValue)
    }
        )
    setFilteredListShoes(filteredList)
}, [filterValue, listShoes])
const SIZE = ["35","36","37","38","39","40","41","42","43","44","45","46"]

    return <div className={style.container}>
        <div className={style.table}>
            <div className={style.sticky}>
            <Filter numberOfCategories={numberOfCategories} changeFilter={setFilterValue}/>
            <div className={style.tableHead}>
                <div className={sn('titleTable', 'searchCode')}>Введите код</div>
                <div className={sn('titleTable', 'cellDescription')}>Описание товара</div>
                <div className={sn('titleTable', 'cellSizes')}>Размерность</div>
                <div className={sn('titleTable', 'cellPrice')}>Опт цена</div>
                <div className={sn('titleTable', 'cellArrivdesc')}>Описание по поступлению</div>
                {SIZE.map(item=><div key={item} className={sn('titleTable', 'cellSize')} style={{fontSize: "16px"}}>{item}</div>)}
            </div>
            <div>
{/* //! Здесь ЧТО за данные? */}
                <div className={sn('titleTable', 'cellDateRefresh')} >{`Дата обновления товаров 29-10-21`}</div> 
            </div>
            </div>

        
{filteredListShoes.length > 0 && filteredListShoes.map(item =>{
    return <div key={item.name} id={item.name} className={style.rowTable}>
        <div className={sn('cellCode')}>{item.name}</div>
        <div className={sn('cellImg')}><img src={item.img} loading="lazy" alt="shoes" className={style.image}/></div>
        <div className={sn('cellDescription')}>{item.description}</div>
        <div className={sn('cellSizes')}>{item.sizedesc}</div>
        <div className={sn('cellPrice')}>{item.price}</div>
        <div className={sn('cellArrivdesc')}>{item.arrivdesc}</div>
        {SIZE.map(itemSize=>
        {
        const findSize = item.sizestock.find(item => item.size === itemSize)

        return <div key={itemSize} className={sn('cellSize')}>{findSize && `${findSize?.size}-${findSize?.stock}`}</div>
        })}
        
    </div>
}
    )}
          
        </div>
    </div>
}
