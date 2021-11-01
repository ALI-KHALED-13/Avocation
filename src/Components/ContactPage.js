import ContactFooter from './HomeComponents/ContactFooter';

const ContactPage =()=>{
    return (
        <>
        <main className="ali">
            <h1>Contact Us</h1>
            <br />
            <p className='contacs'>
                You can contact me through
                <a 
                href='https://www.linkedin.com/in/ali-khaled-130013/' 
                target="_blank"
                rel="noreferrer"
                > LinkedIn </a>
                <br/>
                or by sending me 
                <a 
                href="mailto:aliknake@gmail.com"
                rel="noreferrer"
                >an email
                </a> 
                <br />
                or directly message me via telegram: user name --&gt; <b> @namedAli </b> 
            </p>
            
        </main>
        <ContactFooter />
        </>
    );
}
export default ContactPage;
