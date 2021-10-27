import Categories from './HomeComponents/Categories';
import AvocatasArea from './HomeComponents/AvocatasArea';
import ContactFooter from './HomeComponents/ContactFooter';
import './HomeComponents/home.css';

const HomePage =({user, users})=>{

    return (
        <main id='home'>
            <Categories /> {/*posts db section*/}
            <AvocatasArea user={user} users={users}/>
            <ContactFooter />
        </main>
    );
}

export default HomePage;