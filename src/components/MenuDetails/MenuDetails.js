import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const MenuDetails = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState({});
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.meals[0])
                setMeal(data.meals[0])
            })
    }, [id]);
    return (
        <div className=' max-w-7xl'>
            {/* {idMeal: '53065', strMeal: 'Sushi', strDrinkAlternate: null, strCategory: 'Seafood', strArea: 'Japanese', …} */}
            <h1 className='font-bold text-gray-600 text-3xl text-center p-4'>M<span className='text-sky-600'>ea</span>l Db</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 content-center p-8'>
                <div>
                    <img className='h-[350px] md:h-[500px] rounded-full align-center justify-center' src={meal.strMealThumb} alt='' />
                </div>
                <div className='text-center p-8 text-gray-600'>
                    <h1 className='text-3xl font-bold'>F<span className='text-sky-600'>oo</span>d Infu: </h1>
                    <br />
                    <h1><span className='font-bold text-xl'>Name: </span>{meal.strMeal}</h1>
                    <p><span className='font-bold text-xl'>Food Area: </span>{meal.strArea}</p>
                    <p><span className='font-bold text-xl'>Food Type: </span>{meal.strCategory}</p>
                    {/* <p><span className='font-bold text-xl'>Food Intruction: </span>{meal.strInstructions.slice(0, 100)}</p> */}
                </div>
            </div>
        </div>
    );
};

export default MenuDetails;