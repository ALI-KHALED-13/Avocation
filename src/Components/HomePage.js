import Categories from './HomeComponents/Categories';
import AvocatasArea from './HomeComponents/AvocatasArea';
import ContactFooter from './HomeComponents/ContactFooter';
import './HomeComponents/home.css';
import { useState } from 'react';

const HomePage =({user})=>{
    const [chosenCategs, setChosenCategs] = useState(['']);
    return (
        <main id='home'>
            <Categories setChosenCategs={setChosenCategs} user={user}/>

            <AvocatasArea user={user} chosenCategs={chosenCategs}/>
            
            <ContactFooter />
        </main>
    );
}

export default HomePage;