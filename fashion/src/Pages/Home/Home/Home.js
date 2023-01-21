import React from 'react';
import Products from '../Products/Products';
import Slider from '../Slider/Slider';



const Home = () => {
    return (
        <div className='bg-base-200'>
            <Slider></Slider>
            <Products></Products>
        </div>
    );
};

export default Home;