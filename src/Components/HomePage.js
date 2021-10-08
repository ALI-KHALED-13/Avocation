import Categories from './HomeComponents/Categories';
import AvocatasArea from './HomeComponents/AvocatasArea';
import ContactFooter from './HomeComponents/ContactFooter';

const HomePage =({logged})=>{
    return (
        <main id='home'>
            <Categories /> {/*posts db section*/}
            <AvocatasArea logged={logged} />
            <ContactFooter />
        </main>
    );
}

export default HomePage;