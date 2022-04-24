import React, {useState} from 'react';

export type BookDescriptionType = {
    title: string
    description: string
    data: string
    id: number
    isDone: boolean
    image: string
}

export type BookImageType = {
    image: string;
}

const state: Array<BookDescriptionType> = [
    {
        title: "Javascript и Jquery",
        description: "Дэвид сойер Макфарланд",
        data: "2016",
        id: 1,
        isDone: false,
        image: "https://s1.livelib.ru/boocover/1000833086/o/c880/Devid_Sojer_Makfarland__JavaScript_i_jQuery._Ischerpyvayuschee_rukovodstvo__DVDR.jpeg"
    },
    {
        title: "Изучаем программирование на Javascript",
        description: "Эрик Фримен, Элизабет Робсон",
        data: "2017",
        id: 2,
        isDone: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZZR7iEnlGLWKT3aPnAhgyLNxqiFvQtHzEg&usqp=CAU"
    },
    {
        title: "Секреты Javascript ниндзя",
        description: "Джон Резинг, Беэр Бибо",
        data: "2017",
        id: 3,
        isDone: false,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4eivvBMqgTwksZx6PhDH9Wdi0j1j1KHZGw&usqp=CAU"
    },
    {
        title: "ES6 и не только",
        description: "Кайл Симпсон",
        data: "2017",
        id: 4,
        isDone: true,
        image: "https://static.insales-cdn.com/images/products/1/337/220995921/medium_44611255.jpg"
    }
]


export default state;