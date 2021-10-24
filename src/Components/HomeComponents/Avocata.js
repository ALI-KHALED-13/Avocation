import mavatar from '../../media/avatar-m.png';
import favatar from '../../media/avatar-f.png';

const Avocata =({data})=>{
const mediaType = data.contentType;
const insertMedia =()=>{
    const arrayBuffer = toArrayBuffer(data.fileBuffer.data)
    const file = new File([arrayBuffer], data.fileName, {type: mediaType});
    const fileURL = URL.createObjectURL(file);
    
    if (mediaType.startsWith('image/')){
        return <img alt="data.fileName" src={fileURL} className="media"/>
    }else {
        return (
            <audio controls className="media">
                <source src={fileURL} type="audio/mpeg"></source>
            </audio>
            )
    }
}

function toArrayBuffer(buffer) {
    var ab = new ArrayBuffer(buffer.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) view[i] = buffer[i];
    return ab;
}
    return (
        <article className="avocata">
            <div className="header">
                <img src={mavatar} alt="avatar"/> 
                <p>  Ali Khaled <br/>
                    <span className="date-created">{data.createdAt.slice(0,10)}</span>
                </p>
            </div>
            <div className="content">
                <p>{data.text}</p>
                {
                  mediaType &&  insertMedia()
                }
            </div>
        </article>
    );
}
export default Avocata;