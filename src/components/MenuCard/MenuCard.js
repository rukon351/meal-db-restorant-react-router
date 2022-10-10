import React from 'react';
import { Link } from 'react-router-dom';

const MenuCard = (props) => {
    const { idMeal, strMeal, strInstructions, strArea, strMealThumb } = props.meal;
    return (
        <div className='shadow-lg rounded-2xl w-[250px] bg-white p-4'>
            <img className='mx-auto object-cover rounded-full' src={strMealThumb} alt="" />
            <h4 className='text-xl font-bold text-center text-sky-600'>{strMeal}</h4>
            <p className='text-center'>Food Type: {strArea}</p>
            {/* <p>{strInstructions.slice(0, 100)}</p> */}
            <Link to={`/food-details/${idMeal}`}>
                <p className='text-center'>
                    <button className='py-2 px-2 text-white mt-3 rounded-full bg-cyan-600 tracking-wide'>Food Details</button>
                </p>
            </Link>
        </div>
    );
};

export default MenuCard;