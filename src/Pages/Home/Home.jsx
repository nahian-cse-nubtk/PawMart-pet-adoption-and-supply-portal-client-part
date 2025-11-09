import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Catagories from '../../Components/Catagories/Catagories';
import Catagory from '../../Components/Catagory/Catagory';
import RecentProducts from '../../Components/RecentProducts/RecentProducts';
import WhyAdopt from '../../Components/WhyAdopt/WhyAdopt';
import PetHeroes from '../../Components/PetHeros/PetHeros';

const Home = () => {
    return (
        <div>
            <div className='p-5'>
                <Banner></Banner>
            </div>
            <div className='mt-5'>
                <Catagories></Catagories>
            </div>
            <div className='mt-5'>
                <RecentProducts></RecentProducts>
            </div>
            <div>
                <WhyAdopt></WhyAdopt>
            </div>
            <div>
                <PetHeroes></PetHeroes>
            </div>



        </div>
    );
};

export default Home;