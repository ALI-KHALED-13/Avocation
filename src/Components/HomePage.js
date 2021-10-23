import Categories from './HomeComponents/Categories';
import AvocatasArea from './HomeComponents/AvocatasArea';
import ContactFooter from './HomeComponents/ContactFooter';

const HomePage =({user})=>{
    return (
        <main id='home'>
            <Categories /> {/*posts db section*/}
            <AvocatasArea user={user} />
            <ContactFooter />
        </main>
    );
}

export default HomePage;