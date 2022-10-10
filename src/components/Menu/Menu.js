import React, { useState } from 'react';
import { useEffect } from 'react';
import MenuCard from '../MenuCard/MenuCard';

const Menu = () => {
    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data.meals);
                setMeals(data.meals);
            })
    }, [searchText]);

    const searchFood = e => {
        setSearchText(e.target.value);
    }

    return (
        <div className='mt-20 px-4 pb-24 mx-auto mx-w-7xl md:px-2'>
            <h1 className='text-3xl text-center font-bold text-gray-800'>Find the <span className='text-sky-600'>food</span> you want!</h1>
            <p className='text-center'><input onChange={searchFood} className='mt-5 p-2 rounded-full bg-sky-300 text-center' type="text" placeholder='search the food name' name='' id='' /></p>
            <h1 className='text-xl my-5 text-center font-bold text-gray-800'>Total Result: <span className='text-sky-600'>{meals.length}</span></h1>

            {/* <div className='pt-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center'> */}

            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-12 justify-items-center'>
                {
                    meals.map(meal => <MenuCard id={meal.idMeal} meal={meal}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default Menu;