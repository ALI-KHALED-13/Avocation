import Categories from './HomeComponents/Categories';
import PostsArea from './HomeComponents/PostsArea';
import ContactFooter from './HomeComponents/ContactFooter';

const HomePage =({logged})=>{
    return (
        <main id='home'>
            <Categories /> {/*posts db section*/}
            <PostsArea logged={logged} />
            <ContactFooter />
        </main>
    );
}

export default HomePage;