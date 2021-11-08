import axios from 'axios';
import { useEffect, useState } from 'react';
import style from './TableShoes.module.scss'

const example =  {
    "items": [
        {
            "found": true,
            "sku": "6709",
            "name": "6709",
            "img": "http://91.90.14.5/img/6709.jpg",
            "sizedesc": "35-23 см\n36-23,5 см \n37-24 см \n38-24,5 см \n39-25 см \n40-25,5см\n\n",
            "description": "Натуральный валянок-угг\nСезон: Зима\nМатериал: натуральный войлок\nВнутри на стельке натур шерсь) нереально теплые и удобные\nМех бумбона натур песец\nВысота изделия: 14 см\nВысота подошвы: 2 см\nр-сть 35-40 ",
            "arrivdesc": "",
            "price": "670",
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
                    "size": "37",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "38",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "39",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "40",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6708",
            "name": "6708",
            "img": "http://91.90.14.5/img/6708.jpg",
            "sizedesc": "35-23 см\n36-23,5 см \n37-24 см \n38-24,5 см \n39-25 см \n40-25,5см\n",
            "description": "Натуральный валянок-угг\nСезон: Зима\nМатериал: натуральный войлок\nВнутри на стельке натур шерсь) нереально теплые и удобные\nМех бумбона натур песец\nВысота изделия: 14 см\nВысота подошвы: 2 см\nр-сть 35-40 ",
            "arrivdesc": "",
            "price": "670",
            "sale": false,
            "sizestock": [
                {
                    "size": "36",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "37",
                    "stock": "2",
                    "reserv": "1",
                    "reservs": [
                        {
                            "reservid": "1 726",
                            "reservdate": "01.11.2021 11:59:05",
                            "dropshipper": "",
                            "dropshipper_name": "Лариса Мунаева",
                            "pcs": "1",
                            "price": "0",
                            "to": "01.11.2021 15:00:00"
                        }
                    ]
                },
                {
                    "size": "38",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6707",
            "name": "6707",
            "img": "http://91.90.14.5/img/6707.jpg",
            "sizedesc": "35-23 см\n36-23,5 см \n37-24 см \n38-24,5 см \n39-25 см \n40-25,5см\n",
            "description": "Натуральный валянок-угг\nСезон: Зима\nМатериал: натуральный войлок\nВнутри на стельке натур шерсь) нереально теплые и удобные\nМех бумбона натур песец\nВысота изделия: 14 см\nВысота подошвы: 2 см\nр-сть 35-40 ",
            "arrivdesc": "",
            "price": "670",
            "sale": false,
            "sizestock": [
                {
                    "size": "36",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "37",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "39",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6706",
            "name": "6706",
            "img": "http://91.90.14.5/img/6706.jpg",
            "sizedesc": "35-23 см\n36-23,5 см \n37-24 см \n38-24,5 см \n39-25 см \n40-25,5см\n",
            "description": "Натуральный валянок-угг\nСезон: Зима\nМатериал: натуральный войлок\nВнутри на стельке натур шерсь) нереально теплые и удобные\nМех бумбона натур песец\nВысота изделия: 14 см\nВысота подошвы: 2 см\nр-сть 35-40 ",
            "arrivdesc": "",
            "price": "670",
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
                    "reserv": "1",
                    "reservs": [
                        {
                            "reservid": "1 716",
                            "reservdate": "01.11.2021 11:21:14",
                            "dropshipper": "",
                            "dropshipper_name": "Юля Горох",
                            "pcs": "1",
                            "price": "0",
                            "to": "01.11.2021 15:00:00"
                        }
                    ]
                },
                {
                    "size": "37",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "38",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "39",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6705",
            "name": "6705",
            "img": "http://91.90.14.5/img/6705.jpg",
            "sizedesc": "36 23.5см        \n37- 24 см   \n38-24.5см   \n39-25 см  \n40-25,5см  \n41-26 см",
            "description": "Топовые ботинки авто-леди\nМатериал: эко замш\nСезон: Зима\nНатуральная опушка кролика\nСможешь сочетать с любой одеждой◼️\nПодошва 2 см , высота 6,5 см\nР-сть 36-41\nЦвет: хаки",
            "arrivdesc": "",
            "price": "730",
            "sale": false,
            "sizestock": [
                {
                    "size": "36",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "37",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "38",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "39",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "40",
                    "stock": "1",
                    "reserv": "1",
                    "reservs": [
                        {
                            "reservid": "1 717",
                            "reservdate": "01.11.2021 11:24:54",
                            "dropshipper": "+380681508896",
                            "dropshipper_name": "Прямой Поставщик Обуви Анастасия",
                            "pcs": "1",
                            "price": "730",
                            "to": "01.11.2021 16:24:55"
                        }
                    ]
                }
            ]
        },
        {
            "found": true,
            "sku": "6704",
            "name": "6704",
            "img": "http://91.90.14.5/img/6704.jpg",
            "sizedesc": "36 23.5см        \n37- 24 см   \n38-24.5см   \n39-25 см  \n40-25,5см  \n41-26 см",
            "description": "Топовые ботинки авто-леди\nМатериал: эко замш\nСезон: Зима\nНатуральная опушка кролика\nСможешь сочетать с любой одеждой◼️\nПодошва 2 см , высота 6,5 см\nР-сть 36-41\nЦвет: черный ",
            "arrivdesc": "",
            "price": "730",
            "sale": false,
            "sizestock": [
                {
                    "size": "39",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6703",
            "name": "6703",
            "img": "http://91.90.14.5/img/6703.jpg",
            "sizedesc": "36 23.5см        \n37- 24 см   \n38-24.5см   \n39-25 см  \n40-25,5см  \n41-26 см",
            "description": "Топовые ботинки авто-леди\nМатериал: эко замш\nСезон: Зима\nНатуральная опушка кролика\nСможешь сочетать с любой одеждой◼️\nПодошва 2 см , высота 6,5 см\nР-сть 36-41\nЦвет: беж",
            "arrivdesc": "",
            "price": "730",
            "sale": false,
            "sizestock": [
                {
                    "size": "37",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "38",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "39",
                    "stock": "2",
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
                    "size": "41",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6702",
            "name": "6702",
            "img": "http://91.90.14.5/img/6702.jpg",
            "sizedesc": "36 23.5см        \n37- 24 см   \n38-24.5см   \n39-25 см  \n40-25,5см  \n41-26 см",
            "description": "Топовые ботинки авто-леди\nМатериал: эко замш\nСезон: Зима\nНатуральная опушка кролика\nСможешь сочетать с любой одеждой◼️\nПодошва 2 см , высота 6,5 см\nР-сть 36-41\nЦвет: серый",
            "arrivdesc": "",
            "price": "730",
            "sale": false,
            "sizestock": [
                {
                    "size": "36",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "37",
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
                    "size": "39",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "40",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6701",
            "name": "6701",
            "img": "http://91.90.14.5/img/6701.jpg",
            "sizedesc": "36 23.5см        \n37- 24 см   \n38-24.5см   \n39-25,5 см  \n40-26 см  \n",
            "description": "Топовые ботинки \nМатериал: НАТУР КОЖА\nСезон: Зима\nСможешь сочетать с любой одеждой◼️\nПодошва 5 см , высота 13 см\nР-сть 36-40\nЦвет: черный",
            "arrivdesc": "",
            "price": "940",
            "sale": false,
            "sizestock": [
                {
                    "size": "38",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "39",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "40",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6700",
            "name": "6700",
            "img": "http://91.90.14.5/img/6700.jpg",
            "sizedesc": "36-23  см \n37-23,5 см \n38-24 см \n39-24,5  см \n40-25 см\n41-25,5 см",
            "description": "Нереально крутые ЗИМНИЕ кроссовки которые станут одновременно базой и изюминкой в твоём образе\nМатериал :  эко кожа\nСезон : ЗИМА \nПодошва 4 см\nВыстота 8 см\nр-сть 36-40 ",
            "arrivdesc": "",
            "price": "690",
            "sale": false,
            "sizestock": [
                {
                    "size": "36",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "38",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "39",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "40",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6699",
            "name": "6699",
            "img": "http://91.90.14.5/img/6699.jpg",
            "sizedesc": "36 23см        \n37- 23,5  см   \n38-24 см   \n39-24,5 см  \n40-25 см  \n41-25,5 см ",
            "description": "Дутики зимние\nМатериа: эко кожа + водонепроницаемая ткань , сбоку на молнии\nВнутри иск густой мех\nВысота изделия: 13,5 см\nПодошва :4,5 см\nр-сть 36-41 ",
            "arrivdesc": "",
            "price": "699",
            "sale": false,
            "sizestock": [
                {
                    "size": "36",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "37",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "38",
                    "stock": "2",
                    "reserv": "2",
                    "reservs": [
                        {
                            "reservid": "1 721",
                            "reservdate": "01.11.2021 11:46:58",
                            "dropshipper": "",
                            "dropshipper_name": "Екатерина Сокол",
                            "pcs": "1",
                            "price": "0",
                            "to": "01.11.2021 15:00:00"
                        },
                        {
                            "reservid": "1 722",
                            "reservdate": "01.11.2021 11:47:19",
                            "dropshipper": "",
                            "dropshipper_name": "Екатерина Сокол",
                            "pcs": "1",
                            "price": "0",
                            "to": "01.11.2021 15:00:00"
                        }
                    ]
                },
                {
                    "size": "39",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6698",
            "name": "6698",
            "img": "http://91.90.14.5/img/6698.jpg",
            "sizedesc": "36 23см        \n37- 23,5  см   \n38-24 см   \n39-24,5 см  \n40-25 см  \n41-25,5 см ",
            "description": "Дутики зимние\nМатериа: эко кожа + водонепроницаемая ткань , сбоку на молнии\nВнутри иск густой мех\nВысота изделия: 13,5 см\nПодошва :4,5 см\nр-сть 36-41 ",
            "arrivdesc": "",
            "price": "699",
            "sale": false,
            "sizestock": [
                {
                    "size": "36",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "37",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "38",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "39",
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
                    "size": "41",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6697",
            "name": "6697",
            "img": "http://91.90.14.5/img/6697.jpg",
            "sizedesc": "36 23см        \n37- 23,5  см   \n38-24 см   \n39-24,5 см  \n40-25 см  \n41-25,5 см ",
            "description": "Угг сбоку на молнии\nМатериа: эко кожа + эко замш\nВнутри иск густой мех\nВысота изделия: 12,5 см\nПодошва : 2,5 см\nр-сть 36-41 ",
            "arrivdesc": "",
            "price": "690",
            "sale": false,
            "sizestock": [
                {
                    "size": "36",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "37",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "38",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "39",
                    "stock": "2",
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
                    "size": "41",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6696",
            "name": "6696",
            "img": "http://91.90.14.5/img/6696.jpg",
            "sizedesc": "36 23см        \n37- 23,5  см   \n38-24 см   \n39-24,5 см  \n40-25 см  \n41-25,5 см ",
            "description": "Угг сбоку на молнии\nМатериа: эко кожа + эко замш\nВнутри иск густой мех\nВысота изделия: 12,5 см\nПодошва : 2,5 см\nр-сть 36-41 ",
            "arrivdesc": "",
            "price": "690",
            "sale": false,
            "sizestock": [
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
                    "size": "39",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "40",
                    "stock": "1",
                    "reserv": "1",
                    "reservs": [
                        {
                            "reservid": "1 723",
                            "reservdate": "01.11.2021 11:48:56",
                            "dropshipper": "",
                            "dropshipper_name": "Алина Павлова",
                            "pcs": "1",
                            "price": "0",
                            "to": "01.11.2021 15:00:00"
                        }
                    ]
                }
            ]
        },
        {
            "found": true,
            "sku": "6695",
            "name": "6695",
            "img": "http://91.90.14.5/img/6695.jpg",
            "sizedesc": "36 23,5см        \n37- 24 см   \n38-24,5см   \n39-25 см  \n40-25,5 см  \n41-26 см ",
            "description": "Угг сбоку на молнии\nМатериа: эко кожа + эко замш\nВнутри иск густой мех\nВысота изделия: 12,5 см\nПодошва : 2,5 см\nр-сть 36-41 ",
            "arrivdesc": "",
            "price": "730",
            "sale": false,
            "sizestock": [
                {
                    "size": "36",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "37",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "38",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "39",
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
                    "size": "41",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6694",
            "name": "6694",
            "img": "http://91.90.14.5/img/6694.jpg",
            "sizedesc": "36 23.5см        \n37- 24 см   \n38-24.5см   \n39-25 см  \n40-25.5 см \n41-26 см",
            "description": "Угги такие необычные и нежные\nСамый модной цвет в этом году\nМатериал: НАТУР ЗАМШ\nВнутри мягкий густой иск мех\nвысота 12 см, подошва 3 см\nр-сть 36-41\nЦвет: кофе с молоком",
            "arrivdesc": "",
            "price": "550",
            "sale": false,
            "sizestock": [
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
                    "size": "39",
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
                    "size": "41",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6693",
            "name": "6693",
            "img": "http://91.90.14.5/img/6693.jpg",
            "sizedesc": "36 23.5см        \n37- 24 см   \n38-24.5см   \n39-25 см  \n40-25,5см  \n41-26 см",
            "description": "Ботинки \nНереально крутые . Они станут твоими любимыми\nМатериал : НАТУР КОЖА\nСезон: Зима\nПодошва 5 см Высота 15 см\nЦвет: черный\n\n",
            "arrivdesc": "",
            "price": "810",
            "sale": false,
            "sizestock": [
                {
                    "size": "41",
                    "stock": "1",
                    "reserv": "1",
                    "reservs": [
                        {
                            "reservid": "1 730",
                            "reservdate": "01.11.2021 12:53:45",
                            "dropshipper": "",
                            "dropshipper_name": "Ирина Набока",
                            "pcs": "1",
                            "price": "0",
                            "to": "01.11.2021 16:00:00"
                        }
                    ]
                }
            ]
        },
        {
            "found": true,
            "sku": "6692",
            "name": "6692",
            "img": "http://91.90.14.5/img/6692.jpg",
            "sizedesc": "36-23  см \n37-23,5 см \n38-24 см \n39-24,5 см \n40-25 см\n",
            "description": "Топовые ботинки \nМатериал: НАТУР КОЖА\nСезон: Зима\nСможешь сочетать с любой одеждой◼️\nВысота подошвы: 7 см \nвысота изделия: 12,5 см\nР-сть 36-40\nЦвет: светлый беж",
            "arrivdesc": "",
            "price": "870",
            "sale": false,
            "sizestock": []
        },
        {
            "found": true,
            "sku": "6691",
            "name": "6691",
            "img": "http://91.90.14.5/img/6691.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25,5 см \n40-26 см\n41-26,5 см",
            "description": "Ботинки \nНереально крутые . Они станут твоими любимыми\nМатериал : НАТУР КОЖА\nСезон : Зима( Внутри цигейка)\nВысота подошвы : 5,5 см\nВысота изделия: 15,5 см\nЦвет: Черный\nР-сть 36-41",
            "arrivdesc": "",
            "price": "1050",
            "sale": false,
            "sizestock": [
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
                }
            ]
        },
        {
            "found": true,
            "sku": "6690",
            "name": "6690",
            "img": "http://91.90.14.5/img/6690.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25,5 см \n40-26 см\n",
            "description": "Ботинки \nНереально крутые . Они станут твоими любимыми\nМатериал : НАТУР КОЖА\nСезон : Зима( мех до щиколодки)\nВысота подошвы : 6 см\nВысота изделия: 21  см\nЦвет: Черный\nР-сть 36-40",
            "arrivdesc": "",
            "price": "830",
            "sale": false,
            "sizestock": [
                {
                    "size": "36",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "37",
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
                    "size": "39",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "40",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6689",
            "name": "6689",
            "img": "http://91.90.14.5/img/6689.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25,5 см \n40-26 см\n",
            "description": "Ботинки \nНереально крутые . Они станут твоими любимыми\nМатериал : НАТУР ЗАМШ\nСезон : Зима( мех до щиколодки)\nВысота подошвы : 6 см\nВысота изделия: 21  см\nЦвет: Черный\nР-сть 36-40",
            "arrivdesc": "",
            "price": "810",
            "sale": false,
            "sizestock": [
                {
                    "size": "36",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "37",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "38",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "39",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "40",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6688",
            "name": "6688",
            "img": "http://91.90.14.5/img/6688.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25,5 см \n40-26 см\n",
            "description": "Ботинки \nНереально крутые . Они станут твоими любимыми\nМатериал : НАТУР КОЖА\nСезон : Зима\nВысота подошвы : 3 см\nВысота изделия: 20,5  см\nЦвет: Черный\nР-сть 36-40",
            "arrivdesc": "",
            "price": "940",
            "sale": false,
            "sizestock": [
                {
                    "size": "36",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "38",
                    "stock": "1",
                    "reserv": "1",
                    "reservs": [
                        {
                            "reservid": "1 708",
                            "reservdate": "01.11.2021 10:17:18",
                            "dropshipper": "",
                            "dropshipper_name": "Мария Капитонова",
                            "pcs": "1",
                            "price": "0",
                            "to": "01.11.2021 14:00:00"
                        }
                    ]
                }
            ]
        },
        {
            "found": true,
            "sku": "6687",
            "name": "6687",
            "img": "http://91.90.14.5/img/6687.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25,5 см \n40-26 см\n",
            "description": "Ботинки \nНереально крутые . Они станут твоими любимыми\nМатериал : НАТУР КОЖА\nСезон :Зима( мех по всей длине)\nВысота подошвы : 5,5 см\nВысота изделия: 29 см\nЦвет: Черный\nР-сть 36-40",
            "arrivdesc": "",
            "price": "1050",
            "sale": false,
            "sizestock": [
                {
                    "size": "38",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6686",
            "name": "6686",
            "img": "http://91.90.14.5/img/6686.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25,5 см \n40-26 см\n",
            "description": "Ботинки \nНереально крутые . Они станут твоими любимыми\nМатериал : НАТУР КОЖА\nСезон : Деми ( подклад паралон с теплым ворсистым флисом) можно и на Зиму\nВысота подошвы 6,5 см\nВысота изделия: 20  см\nЦвет: Черный\nР-сть 36-40",
            "arrivdesc": "",
            "price": "950",
            "sale": false,
            "sizestock": [
                {
                    "size": "36",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "39",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6685",
            "name": "6685",
            "img": "http://91.90.14.5/img/6685.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25 см \n40-25,5см\n41-26 см",
            "description": "Сникерсы\nНереально крутые . Они станут твоими любимыми\nМатериал : НАТУР КОЖА( ЗАМШ)\nСезон : Деми( плюш)\nподошва 4 см, высота 10,5 см\nЦвет: черный\nР-сть 36-41\n",
            "arrivdesc": "",
            "price": "750",
            "sale": false,
            "sizestock": [
                {
                    "size": "36",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "37",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "38",
                    "stock": "1",
                    "reserv": "1",
                    "reservs": [
                        {
                            "reservid": "1 728",
                            "reservdate": "01.11.2021 12:50:57",
                            "dropshipper": "+380981158005",
                            "dropshipper_name": "Алина Стащенко",
                            "pcs": "1",
                            "price": "750",
                            "to": "01.11.2021 17:50:58"
                        }
                    ]
                },
                {
                    "size": "40",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "41",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6684",
            "name": "6684",
            "img": "http://91.90.14.5/img/6684.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25 см \n40-25,5см\n41-26 см",
            "description": "Сникерсы\nНереально крутые . Они станут твоими любимыми\nМатериал : эко нубук\nСезон : Зима( густой иск мех)\nподошва 5 см, высота 11 см\nЦвет: беж\nР-сть 36-41\n",
            "arrivdesc": "получение 30.10",
            "price": "580",
            "sale": false,
            "sizestock": []
        },
        {
            "found": true,
            "sku": "6683",
            "name": "6683",
            "img": "http://91.90.14.5/img/6683.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25,5 см \n40-26 см\n41-26,5 см",
            "description": "Нереально крутые ЗИМНИЕ слипоны которые станут одновременно базой и изюминкой в твоём образе\nМатериал :  НАТУР ЗАМШ\nСезон : ЗИМА \nПодошва 4,5 см",
            "arrivdesc": "",
            "price": "990",
            "sale": false,
            "sizestock": [
                {
                    "size": "36",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "39",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "41",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6682",
            "name": "6682",
            "img": "http://91.90.14.5/img/6682.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25,5 см \n40-26 см\n41-26,5 см",
            "description": "Нереально крутые ЗИМНИЕ слипоны которые станут одновременно базой и изюминкой в твоём образе\nМатериал :  НАТУР КОЖА\nСезон : ЗИМА \nПодошва 4,5 см",
            "arrivdesc": "",
            "price": "990",
            "sale": false,
            "sizestock": [
                {
                    "size": "36",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "37",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "39",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "40",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "41",
                    "stock": "2",
                    "reserv": "1",
                    "reservs": [
                        {
                            "reservid": "1 714",
                            "reservdate": "01.11.2021 11:07:10",
                            "dropshipper": "+380501935315",
                            "dropshipper_name": "Рурак Юлія",
                            "pcs": "1",
                            "price": "990",
                            "to": "01.11.2021 16:07:11"
                        }
                    ]
                }
            ]
        },
        {
            "found": true,
            "sku": "6681",
            "name": "6681",
            "img": "http://91.90.14.5/img/6681.jpg",
            "sizedesc": "36-23  см \n37-23,5 см \n38-24 см \n39-24,5 см \n40-25 см\n",
            "description": "Топовые ботинки авто-леди\nМатериал: эко замш\nСезон: Зима\nСможешь сочетать с любой одеждой◼️\nПодошва 2 см , высота 9 см\nР-сть 36-40\nЦвет: черный",
            "arrivdesc": "",
            "price": "570",
            "sale": false,
            "sizestock": [
                {
                    "size": "36",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "37",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "38",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "40",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6680",
            "name": "6680",
            "img": "http://91.90.14.5/img/6680.jpg",
            "sizedesc": "36 23.5см        \n37- 24 см   \n38-24.5см   \n39-25 см  \n40-25.5 см \n41-26 см",
            "description": "Угги такие необычные и нежные\nСамый модной цвет в этом году\nМатериал: НАТУР ЗАМШ\nВнутри мягкий густой иск мех\nвысота 8 см, подошва 3 см\nр-сть 36-41\nЦвет: черный ",
            "arrivdesc": "",
            "price": "570",
            "sale": false,
            "sizestock": [
                {
                    "size": "36",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "37",
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
                    "size": "39",
                    "stock": "2",
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
                    "size": "41",
                    "stock": "2",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6679",
            "name": "6679",
            "img": "http://91.90.14.5/img/6679.jpg",
            "sizedesc": "36 23.5см        \n37- 24 см   \n38-24.5см   \n39-25 см  \n40-25.5 см \n41-26 см",
            "description": "Угги такие необычные и нежные\nСамый модной цвет в этом году\nМатериал: НАТУР ЗАМШ\nВнутри мягкий густой иск мех\nвысота 12 см, подошва 3 см\nр-сть 36-41\nЦвет: серый",
            "arrivdesc": "",
            "price": "570",
            "sale": false,
            "sizestock": [
                {
                    "size": "36",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "37",
                    "stock": "1",
                    "reserv": "1",
                    "reservs": [
                        {
                            "reservid": "1 711",
                            "reservdate": "01.11.2021 10:48:29",
                            "dropshipper": "+380678776155",
                            "dropshipper_name": "Fcl",
                            "pcs": "1",
                            "price": "570",
                            "to": "01.11.2021 15:48:30"
                        }
                    ]
                },
                {
                    "size": "40",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6678",
            "name": "6678",
            "img": "http://91.90.14.5/img/6678.jpg",
            "sizedesc": "36 23.5см        \n37- 24 см   \n38-24.5см   \n39-25 см  \n40-25.5 см \n41-26 см",
            "description": "Угги такие необычные и нежные\nСамый модной цвет в этом году\nМатериал: НАТУР ЗАМШ\nВнутри мягкий густой иск мех\nвысота 12 см, подошва 3 см\nр-сть 36-41\nЦвет: небесный ",
            "arrivdesc": "получение 30.10",
            "price": "570",
            "sale": false,
            "sizestock": [
                {
                    "size": "39",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6677",
            "name": "6677",
            "img": "http://91.90.14.5/img/6677.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25,5 см \n40-26 см\n41-26,5 см",
            "description": "Ботинки в стиле брендов\nНереально крутые . Они станут твоими любимыми\nМатериал : НАТУР КОЖА\nСезон : Деми ( байка) Зима( шерсть)\nВысота подошвы 6 см\nВысота изделия: 14 см\nЦвет: Черный\nР-сть 36-41",
            "arrivdesc": "Отшив 10 -15 рабочих дней ( зима + 50 грн)",
            "price": "1350",
            "sale": false,
            "sizestock": []
        },
        {
            "found": true,
            "sku": "6676",
            "name": "6676",
            "img": "http://91.90.14.5/img/6676.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25см \n40-25,5  см\n41-26 см\n",
            "description": "Ботинки Derdy\nМатериал: НАТУР ЗАМШ\nСезон: Деми( байка) Зима (шерсть)\nОчень стильные и удобные,\nподошва не позволит ножкам мерзнуть\nВысота изделия: 13 см\nВысота подошвы: 5 см\nр-сть 36-41 \n",
            "arrivdesc": "Отшив 10 -15 рабочих дней ( зима + 50 грн)133",
            "price": "1330",
            "sale": false,
            "sizestock": []
        },
        {
            "found": true,
            "sku": "6675",
            "name": "6675",
            "img": "http://91.90.14.5/img/6675.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25,5 см \n40-26  см\n41-26,5 см\n",
            "description": "Ботфорты\nМатериал: НАТУР ЗАМШ\nСезон : Деми( байка) Зима (шерсть)\nМягкая и очень приятная итальянская кожа\nВысота изделия: 53см \nВысота каблука: 3 см\nЦвет: черный\nр-сть 36-40",
            "arrivdesc": "Отшив 10 -15 рабочих дней ( зима + 100 грн)",
            "price": "2100",
            "sale": false,
            "sizestock": []
        },
        {
            "found": true,
            "sku": "6674",
            "name": "6674",
            "img": "http://91.90.14.5/img/6674.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25,5 см \n40-26 см\n",
            "description": "Сапоги \nМатериал: НАТУР КОЖА\nСезон : Деми( байка) Зима (шерсть)\nМягкая и очень приятная итальянская кожа\nВысота изделия: 47 см \nВысота каблука: 9 см\nЦвет: черный\nр-сть 36-40",
            "arrivdesc": "Отшив 10 -15 рабочих дней ( зима + 100 грн)",
            "price": "2100",
            "sale": false,
            "sizestock": []
        },
        {
            "found": true,
            "sku": "6673",
            "name": "6673",
            "img": "http://91.90.14.5/img/6673.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25,5 см \n40-26 см\n",
            "description": "Сапоги \nМатериал: НАТУР КОЖА\nСезон : Деми( байка) Зима (шерсть)\nМягкая и очень приятная итальянская кожа\nВысота изделия: 45 см \nВысота каблука: 9  см\nЦвет: черный\nр-сть 36-40",
            "arrivdesc": "Отшив 10 -15 рабочих дней ( зима + 100  грн)",
            "price": "1990",
            "sale": false,
            "sizestock": []
        },
        {
            "found": true,
            "sku": "6672",
            "name": "6672",
            "img": "http://91.90.14.5/img/6672.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25,5 см \n40-26 см\n",
            "description": "Сапоги \nМатериал: НАТУР КОЖА\nСезон : Деми( байка) Зима (шерсть)\nМягкая и очень приятная итальянская кожа\nВысота изделия: 44 см \nВысота каблука: 9  см\nЦвет: беж\nр-сть 36-40",
            "arrivdesc": "Отшив 10 -15 рабочих дней ( зима + 50 грн)",
            "price": "1990",
            "sale": false,
            "sizestock": []
        },
        {
            "found": true,
            "sku": "6671",
            "name": "6671",
            "img": "http://91.90.14.5/img/6671.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25,5 см \n40-26 см\n",
            "description": "Сапоги \nМатериал: НАТУР КОЖА\nСезон : Деми( байка) Зима (шерсть)\nМягкая и очень приятная итальянская кожа флотар\nВысота изделия: 45 см \nВысота каблука: 10 см\nЦвет: черный\nр-сть 36-40",
            "arrivdesc": "Отшив 10 -15 рабочих дней ( зима + 100 грн)",
            "price": "1990",
            "sale": false,
            "sizestock": []
        },
        {
            "found": true,
            "sku": "6670",
            "name": "6670",
            "img": "http://91.90.14.5/img/6670.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25,5 см \n40-26 см\n",
            "description": "Сапоги на шнуровку\nМатериал: НАТУР КОЖА\nСезон : Деми( байка) Зима (шерсть)\nМягкая и очень приятная итальянская кожа\nВысота изделия: 43 см \nВысота подошвы: 2-3,5 см\nОбьем голени можно регулировать шнуровкой\nр-сть 36-40 ",
            "arrivdesc": "Отшив 10 -15 рабочих дней ( зима + 50 грн)",
            "price": "1850",
            "sale": false,
            "sizestock": []
        },
        {
            "found": true,
            "sku": "6669",
            "name": "6669",
            "img": "http://91.90.14.5/img/6669.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25,5 см \n40-26  см\n41-26,5 см\n",
            "description": "Сапоги на шнуровку\nМатериал: НАТУР КОЖА\nСезон : Деми( байка) Зима (шерсть)\nМягкая и очень приятная итальянская кожа\nВысота изделия: 43 см \nВысота подошвы: 4-6 см\nОбьем голени можно регулировать шнуровкой\nр-сть 36-41",
            "arrivdesc": "Отшив 10 -15 рабочих дней ( зима + 50 грн)",
            "price": "1850",
            "sale": false,
            "sizestock": []
        },
        {
            "found": true,
            "sku": "6668",
            "name": "6668",
            "img": "http://91.90.14.5/img/6668.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25,5 см \n40-26  см\n41-26,5 см\n",
            "description": "Сапоги на шнуровку\nМатериал: НАТУР ЗАМША\nСезон : Деми( байка) Зима (шерсть)\nВысота изделия: 43 см \nВысота подошвы: 4-6 см\nОбьем голени можно регулировать шнуровкой\nЦвет: серый \nр-сть 36-41",
            "arrivdesc": "Отшив 10 -15 рабочих дней ( зима + 50 грн)",
            "price": "1850",
            "sale": false,
            "sizestock": []
        },
        {
            "found": true,
            "sku": "6667",
            "name": "6667",
            "img": "http://91.90.14.5/img/6667.jpg",
            "sizedesc": "35-22,5 см\n36-23,5 см \n37-24 см \n38-24,5 см \n39-25см \n40-25,5  см\n41-26 см\n",
            "description": "Ботинки NEMMI\nМатериал: НАТУР КОЖА\nСезон: Деми( байка) Зима (шерсть)\nОчень стильные и удобные,мягкая кожа\nподошва не позволит ножкам мерзнуть\nВысота изделия: 14 см\nВысота подошвы: 4,5 см\nр-сть 35-41 \n",
            "arrivdesc": "Отшив 10 -15 рабочих дней ( зима + 50 грн)",
            "price": "1330",
            "sale": false,
            "sizestock": []
        },
        {
            "found": true,
            "sku": "6666",
            "name": "6666",
            "img": "http://91.90.14.5/img/6666.jpg",
            "sizedesc": "35-22,5 см\n36-23,5 см \n37-24 см \n38-24,5 см \n39-25см \n40-25,5  см\n41-26 см\n",
            "description": "Ботинки NEMMI\nМатериал: НАТУР КОЖА\nСезон: Деми( байка) Зима (шерсть)\nОчень стильные и удобные,мягкая кожа\nподошва не позволит ножкам мерзнуть\nВысота изделия: 14 см\nВысота подошвы: 4,5 см\nр-сть 35-41 \n",
            "arrivdesc": "Отшив 10 -15 рабочих дней ( зима + 50грн)",
            "price": "1330",
            "sale": false,
            "sizestock": []
        },
        {
            "found": true,
            "sku": "6665",
            "name": "6665",
            "img": "http://91.90.14.5/img/6665.jpg",
            "sizedesc": "35-22,5 см\n36-23,5 см \n37-24 см \n38-24,5 см \n39-25см \n40-25,5  см\n41-26 см\n",
            "description": "Ботинки NEMMI\nМатериал: НАТУР КОЖА\nСезон: Деми( байка) Зима (шерсть)\nОчень стильные и удобные,мягкая кожа\nподошва не позволит ножкам мерзнуть\nВысота изделия: 14 см\nВысота подошвы: 4,5 см\nр-сть 35-41 \n",
            "arrivdesc": "Отшив 10 -15 рабочих дней ( зима + 50 грн)",
            "price": "1330",
            "sale": false,
            "sizestock": []
        },
        {
            "found": true,
            "sku": "6664",
            "name": "6664",
            "img": "http://91.90.14.5/img/6664.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25,5 см \n40-26 см\n",
            "description": "Ботфорты\nСезон : Зима\nМатериал : эко кожа\nПодошва 6 см, высота 55 см\nЦвет : черный\nр-сть 36-40",
            "arrivdesc": "",
            "price": "810",
            "sale": false,
            "sizestock": [
                {
                    "size": "38",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "39",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "40",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6663",
            "name": "6663",
            "img": "http://91.90.14.5/img/6663.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25 см \n40-25,5см\n41-26 см",
            "description": "Сникерсы\nНереально крутые . Они станут твоими любимыми\nМатериал : НАТУР КОЖА\nСезон : Деми( плюш)\nподошва 4 см, высота 10,5 см\nЦвет: черный\nР-сть 36-41\n",
            "arrivdesc": "",
            "price": "750",
            "sale": false,
            "sizestock": [
                {
                    "size": "38",
                    "stock": "1",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "40",
                    "stock": "3",
                    "reserv": "0",
                    "reservs": []
                },
                {
                    "size": "41",
                    "stock": "3",
                    "reserv": "0",
                    "reservs": []
                }
            ]
        },
        {
            "found": true,
            "sku": "6662",
            "name": "6662",
            "img": "http://91.90.14.5/img/6662.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25см \n40-25,5  см\n41-26 см",
            "description": "Натуральные слипоны с мехом Норки\nМатериал: Натур замш\nподошва 6 см\nудобные и легкие на ножке\nСезон : Деми на байке",
            "arrivdesc": "Отшив 10 -15 рабочих дней ",
            "price": "1350",
            "sale": false,
            "sizestock": []
        },
        {
            "found": true,
            "sku": "6661",
            "name": "6661",
            "img": "http://91.90.14.5/img/6661.jpg",
            "sizedesc": "36-23,5 см \n37-24 см \n38-24,5 см \n39-25,5 см \n40-26 см\n41-26,6  см",
            "description": "Ботинки \nНереально крутые . Они станут твоими любимыми\nМатериал : НАТУР КОЖА\nСезон : Деми (байка) Зима шерсть\nПодошва 5,5 см,высота 14,5 см\nЦвет: красный\nР-сть 36-41",
            "arrivdesc": "Отшив 10 -15 рабочих дней ( зима + 100 грн)",
            "price": "1320",
            "sale": false,
            "sizestock": []
        }]}

export default function TableShoes  ()  {
    const [listShoes, setListShoes] = useState([])
    console.log("🚀 ~ file: TableShoes.jsx ~ line 16226 ~ TableShoes ~ listShoes-length", listShoes.length)
useEffect(() => {
    axios({method: 'get', url: 'http://91.90.14.5/viagloria/hs/dropship/items',
    headers: {'Authorization': 'Basic QWRtaW5pc3RyYXRvcjp3d3cxMjM='}
}).then(console.log)
    setListShoes(example?.items)
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
                {SIZE.map(item=><th key={item} className={style.titleTable} style={{fontSize: "16px"}}>{item}</th>)}
            </tr>
            <tr>
{/* //! Здесь ЧТО за данные? */}
                <th className={style.titleTable} colSpan='18'>{`Дата обновления товаров 29-10-21`}</th> 
            </tr>
            </thead>

            <tbody>
{listShoes.length > 0 && listShoes.map(item =>{
    return <tr key={item.name} id={item.name}>
        <th className={style.titleTable}>{item.name}</th>
{/* //!заглушка для фото (item.img) */}
        <td className={style.tdImg}><img src={item.img} loading="lazy" alt="shoes" /></td>
        <td className={style.textLeft}>{item.sizedesc}</td>
        <td>{item.description}</td>
        <td>{item.price}</td>
        <td>{item.arrivdesc}</td>
        {SIZE.map(itemSize=>
        {
        const findSize = item.sizestock.find(item => item.size === itemSize)

        return <td key={itemSize}>{findSize && `${findSize?.size}-${findSize?.stock}`}</td>
        })}
        
    </tr>
}
    )}
            </tbody>
        </table>
    </div>
}
