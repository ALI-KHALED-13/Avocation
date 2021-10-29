import React, {useEffect, useState} from 'react';
import mavatar from '../../media/avatar-m.png';
import favatar from '../../media/avatar-f.png';
import loading from '../../media/loading.gif';

const Avocata =({data, users, user, avocatas, updataAvocatas})=>{

    const author = users.find(user=> user.userName === data.creator);
    const mediaType = data.contentType;
    const [deleting, setDeleting] = useState(false);
    let fileURL;

    // delete the media url when the component unmounts (performance thing)
    useEffect(()=> ()=> URL.revokeObjectURL(fileURL), [fileURL])

    const insertMedia =()=>{
        const arrayBuffer = toArrayBuffer(data.fileBuffer.data)
        const file = new File([arrayBuffer], data.fileName, {type: mediaType});
        fileURL = URL.createObjectURL(file);

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
    
    
    const deleteAvoca =(ev)=>{
        setDeleting(true);

        fetch('avocata', {
            method:"delete",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id: data._id}),
        })
        .then(resp=> resp.json())
        .then(message=> {
            setDeleting(false);
            if (message.deleted){
                updataAvocatas(avocatas.filter(avoca=> avoca !== data));

                URL.revokeObjectURL(fileURL); // (performance again)
            }else{
                alert("couldn't be deleted")
                console.log(message.error);
            }
        }).catch(console.log)
    }

    return (
        <article className="avocata">
            <div className="header">
                
                <img src={author.gender === 'male'? mavatar: favatar} alt="avatar"/>
                {author.logged && <svg width="18" height="18" > <circle cx="10" cy="10" r="35%" fill="#19d154"/> </svg>}
                

                <p>{author.name}<br/>
                <span className="date-created">{data.createdAt.slice(0,10)}</span>
                </p>
                {deleting && <img alt="loading.." src={loading} />}
                {user.userName === author.userName &&<button onClick={deleteAvoca}>Delete</button>}
            </div>
            <div className="content">
                {
                    data.tags.indexOf('POE') >= 0 || data.tags.indexOf('شعر') >= 0?
                        <pre style={{textAlign: data.text.match(/\w/)? 'left':'center'}}>{data.text}</pre>
                        :<p style={{textAlign: data.text.match(/\w/)? 'left':'center'}}>{data.text}</p>
                }
                {
                  mediaType !== 'undefined' &&  insertMedia()
                }
            </div>
        </article>
    );
}
export default React.memo(Avocata);

function toArrayBuffer(buffer) { //useMemo IT ???
    var ab = new ArrayBuffer(buffer.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) view[i] = buffer[i];
    return ab;
}