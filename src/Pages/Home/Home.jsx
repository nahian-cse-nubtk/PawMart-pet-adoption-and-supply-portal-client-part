import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Catagories from '../../Components/Catagories/Catagories';
import Catagory from '../../Components/Catagory/Catagory';
import RecentProducts from '../../Components/RecentProducts/RecentProducts';
import WhyAdopt from '../../Components/WhyAdopt/WhyAdopt';
import PetHeroes from '../../Components/PetHeros/PetHeros';
import RecentBlogs from '../../Components/RecentBlogs/RecentBlogs';
import OurServices from '../../Components/OurServices/OurServices';
import Testimonials from '../../Components/Testimonials/Testimonials';
import FAQ from '../../Components/FAQ/FAQ';
import ContactUs from '../../Components/ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <div className='py-5'>
                <Banner></Banner>
            </div>
            <div className='mt-5'>
                <Catagories></Catagories>
            </div>
            <div className='mt-5'>
                <RecentProducts></RecentProducts>
            </div>
            <div>
                <OurServices></OurServices>
            </div>
            <div>
                <WhyAdopt></WhyAdopt>
            </div>
            <div>
                <PetHeroes></PetHeroes>
            </div>
            <div>
                <RecentBlogs></RecentBlogs>
            </div>
            <div>
                <Testimonials></Testimonials>
            </div>
            <div>
                <FAQ></FAQ>
            </div>
            <div>
                <ContactUs></ContactUs>
            </div>



        </div>
    );
};

export default Home;