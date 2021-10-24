import mavatar from '../../media/avatar-m.png';
import favatar from '../../media/avatar-f.png';
import React, { useEffect, useRef, useState } from 'react';
const TagInput = React.lazy(()=> import('../SubComponents/TagInput'));

const AvocataForm =({user})=>{
    const [savedTags, setSavedTags] = useState(["DRWAING", "SINGING", "POETRY"]);
    const [addedTags, setAddedTags] = useState([]);
    const [uploaded, setUploaded] = useState(false);
    const fileInput = useRef(null);
    const [fileName, setFileName] = useState('');


    const saveTag =(tagTxt)=>{
        if (savedTags.indexOf(tagTxt) === -1) setSavedTags([...savedTags, tagTxt]);
    }

    useEffect(()=>{
        
        fileInput.current.addEventListener('change', (ev)=>{
            let file = ev.target.files[0];
            if (!file) return setUploaded(false);;
            if (!file.type.startsWith('image/') && file.type !== "audio/mpeg"){
                alert('please upload an image or mp3 file only')
                ev.target.value = null;
                setUploaded(false);

            } else if (file.size/1048576 > 8) {
                alert('file size it too big, files below 8MB only');
                ev.target.value = null;
                setUploaded(false);
            } else {
                setUploaded(true);
                setFileName(file.name)
            }   
        });
        
    }, [])

    const submitAvocata =(ev)=>{
        ev.preventDefault();
        const form = new FormData(ev.target);
        form.append('creator', user.userName);
        form.append('tags', addedTags.join(' '));
        form.append('fileName', fileName);
        form.append('contentType', fileInput.current.files[0].type);

        fetch('/avocata', {
            method: "POST",
            body: form,
        })
        .then(resp=> resp.json())
        .then(message=>  console.log(message.successful?'oh yeah':'oh no') );
    }

    return (
        <form onSubmit={submitAvocata}>
            <div className="header">
                <img alt="avatar" src={user.gender === 'male'? mavatar: favatar}/>
                <p>{user.name}</p>
            </div>

            <textarea placeholder="content/caption" required name="text"/>

            <React.Suspense fallback={<div>loading...</div>}>
                <TagInput 
                    savedTags={savedTags} 
                    saveTag={saveTag} 
                    addedTags={addedTags} 
                    setAddedTags={setAddedTags}
                />
            </React.Suspense>

            {uploaded && 
                <span className="fileData">{fileName}</span>
            }
            <label id="upload"> Upload image/mp3
                <input type="file" accept="image/*,audio/mpeg" ref={fileInput} name="media"/>
            </label>
            <button>Publish</button>
        </form>
    );
}

export default AvocataForm;