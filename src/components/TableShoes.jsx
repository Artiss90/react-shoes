import { useEffect, useState } from 'react';
import style from './TableShoes.module.scss'

const example = {"items":[{
    "found": true,
    "sku": "6693",
    "name": "6693",
    "img": "http://91.90.14.5/img/6693.jpg",
    "sizedesc": "35 23.5см \n36 23.5см \n37 25.5см \n38 27.5см",
    "description": "Ботики \nнереально крутые Они станут твоими любимыми \nМатериал: НАТУР КОЖА \nСезон: Зима \nПодошва: 5см \nВысота: 15см \nЦвет: черный",
    "arrivdesc": "",
    "price": "810",
    "sale": false,
    "sizestock": [
        {
        "size": "35",
        "stock": "1",
        "reserv": "0",
        "reservs": []
    },
        {
        "size": "36",
        "stock": "1",
        "reserv": "0",
        "reservs": []
    },
        {
        "size": "38",
        "stock": "1",
        "reserv": "0",
        "reservs": []
    },
        {
        "size": "40",
        "stock": "1",
        "reserv": "0",
        "reservs": []
    },
        {
        "size": "42",
        "stock": "1",
        "reserv": "0",
        "reservs": []
    },
]
},
{
    "found": true,
    "sku": "6692",
    "name": "6692",
    "img": "http://91.90.14.5/img/6692.jpg",
    "sizedesc": "35 23.5см \n36 23.5см \n37 25.5см \n38 27.5см",
    "description": "Ботики \nнереально крутые Они станут твоими любимыми \nМатериал: НАТУР КОЖА \nСезон: Зима \nПодошва: 5см \nВысота: 15см \nЦвет: черный",
    "arrivdesc": "",
    "price": "810",
    "sale": false,
    "sizestock": [
        {
        "size": "35",
        "stock": "1",
        "reserv": "0",
        "reservs": []
    },
        {
        "size": "36",
        "stock": "1",
        "reserv": "0",
        "reservs": []
    },
        {
        "size": "38",
        "stock": "1",
        "reserv": "0",
        "reservs": []
    },
        {
        "size": "40",
        "stock": "1",
        "reserv": "0",
        "reservs": []
    },
        {
        "size": "42",
        "stock": "1",
        "reserv": "0",
        "reservs": []
    },
]
},
{
    "found": true,
    "sku": "6694",
    "name": "6694",
    "img": "http://91.90.14.5/img/6694.jpg",
    "sizedesc": "35 23.5см \n36 23.5см \n37 25.5см \n38 27.5см",
    "description": "Ботики \nнереально крутые Они станут твоими любимыми \nМатериал: НАТУР КОЖА \nСезон: Зима \nПодошва: 5см \nВысота: 15см \nЦвет: черный",
    "arrivdesc": "",
    "price": "810",
    "sale": false,
    "sizestock": [
        {
        "size": "35",
        "stock": "1",
        "reserv": "0",
        "reservs": []
    },
        {
        "size": "36",
        "stock": "1",
        "reserv": "0",
        "reservs": []
    },
        {
        "size": "38",
        "stock": "1",
        "reserv": "0",
        "reservs": []
    },
        {
        "size": "40",
        "stock": "1",
        "reserv": "0",
        "reservs": []
    },
        {
        "size": "42",
        "stock": "1",
        "reserv": "0",
        "reservs": []
    },
]
}]};

export default function TableShoes  ()  {
    const [listShoes, setListShoes] = useState([])
useEffect(() => {
    setListShoes(example.items)
}, [])
const SIZE = ["35","36","37","38","39","40","41","42","43","44","45","46"]

    return <div>
        <table className={style.table}>
            <thead>
            <tr>
                <th className={style.titleTable}>Код</th>
                <th className={style.titleTable}>ФОТО</th>
                <th className={style.titleTable} style={{fontSize: "6px"}}>Размерность</th>
                <th className={style.titleTable}>Описание товара</th>
                <th className={style.titleTable}>Опт цена</th>
                <th className={style.titleTable}>Описание по поступлению</th>
                {SIZE.map(item=><th className={style.titleTable} style={{fontSize: "16px"}}>{item}</th>)}
            </tr>
            <tr>
                <th className={style.titleTable} colSpan='18'>{`Дата обновления товаров 29-10-21`}</th>
            </tr>
            </thead>
            <tbody>
{listShoes.length > 0 && listShoes.map(item =>{
    return <tr key={item.name}>
        <th className={style.titleTable}>{item.name}</th>
        <td className={style.tdImg}><img src={item.img} alt="shoes" /></td>
        <td className={style.textLeft}>{item.sizedesc}</td>
        <td>{item.description}</td>
        <td>{item.price}</td>
        <td>{item.arrivdesc}</td>
        {SIZE.map(itemSize=>
        {
        const findSize = item.sizestock.find(item => item.size === itemSize)

        return <td>{findSize && `${findSize?.size}-${findSize?.stock}`}</td>
        })}
        
    </tr>
}
    )}
            </tbody>
        </table>
    </div>
}
