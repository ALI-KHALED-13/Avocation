import avatar from '../../media/avatar-m.png';
import media from '../../media/mostaffa.jpg';
const Avocata =()=>{
const mediaType = 'img';
const ph = media;
    return (
        <article className="avocata">
            <div className="header">
                <img src={avatar} alt="avatar"/> 
                <p>  Ali Khaled <br/>
                    <span className="date-created">2021-05-25</span>
                </p>
            </div>
            <div className="content">
                <p>a long caption here</p>
                {
                  mediaType &&  mediaType === 'audio'? 
                                <audio> </audio>:<img src={ph} alt="avoca"/> 
                }
            </div>
        </article>
    );
}
export default Avocata;