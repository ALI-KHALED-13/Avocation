import mavatar from '../media/avatar-m.png';
import favatar from '../media/avatar-f.png';
import loading from '../media/loading.gif';

import imageCompression from 'browser-image-compression';
import React, { useEffect, useRef, useState } from 'react';

const TagInput = React.lazy(()=> import('../SubComponents/TagInput'));


const AvocataForm =({user, avocatas, updataAvocatas})=>{
    const [savedTags, setSavedTags] = useState([]);
    const [addedTags, setAddedTags] = useState([]);
    const fileInput = useRef(null);
    const [fileName, setFileName] = useState('');
    const [isPosting, setIsPosting] = useState(false);
    const [uploaded, setUploaded] = useState(false);


    const saveTag =(tagTxt)=>{
        if (savedTags.indexOf(tagTxt) === -1) setSavedTags([...savedTags, tagTxt]);
    }
    
    useEffect(()=>{
        const controller = new AbortController();
        fetch('https://avocation.herokuapp.com/tags', {signal: controller.signal})
        .then(resp=> resp.json())
        .then(tagsArr=>{
            setSavedTags(tagsArr.map(tagDoc=> tagDoc.tag));
        })
        .catch(console.log);
        return ()=> controller.abort()
    }, [])

    useEffect(()=>{
        
        fileInput.current.addEventListener('change', (ev)=>{
            let file = ev.target.files[0];
            if (!file) return setUploaded(false);
            if (!file.type.startsWith('image/') && file.type !== "audio/mpeg"){

                alert('please upload an image or mp3 file only')
                ev.target.value = null;
                setUploaded(false);
                setFileName('');

            } else if (file.size/1048576 > 8) {

                alert('file size it too big, files below 8MB only');
                ev.target.value = null;
                setUploaded(false);
                setFileName('');
            } else {
                setUploaded(true);
                setFileName(file.name)
            }   
        });
        
    }, [])

    const submitAvocata = async (ev)=>{
        ev.preventDefault();
        if (ev.key === 'Enter') return; //prevent submitting on enter
        
        setIsPosting(true);
        const form = new FormData(ev.target);

        const uploadedFile = form.get('media');

        if (uploadedFile && uploadedFile.type.includes('image')){ //compress images
            const options = {maxSizeMB: 1,   maxWidthOrHeight: 620};
            const compressedFile = await imageCompression(uploadedFile, options);
            form.set('media', compressedFile)
        }

        form.append('creator', user.userName);
        form.append('tags', addedTags.join(' '));
        form.append('fileName', fileName);
        form.append('contentType', fileInput.current.files[0]?.type); //note optional chaining

        fetch('https://avocation.herokuapp.com/avocata', {
            method: "POST",
            body: form,
        })
        .then(resp=> resp.json())
        .then(message=>  {
            setIsPosting(false);
            if (message.successful){
                updataAvocatas([message.avocata, ...avocatas]);
                ev.target.reset();
                setAddedTags([]);
                setUploaded(false);
            }else {
                alert("couldn't post the avocata "+ message.error);
                console.log(message.error);
            }
            
        })
        .catch(console.log)
    }

    return (
        <form onSubmit={submitAvocata}>

            <div className="header">
                <img alt="avatar" src={user.gender === 'male'? mavatar: favatar}/>
                <p>{user.name}</p>
                { isPosting && <img alt="loading.." src={loading} />}
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

            { uploaded && <span className="fileData">{fileName}</span> }

            <label id="upload"> Upload image/mp3
                <input type="file" accept="image/*,audio/mpeg" ref={fileInput} name="media"/>
            </label>
            <button>Publish</button>

        </form>
    );
}

export default AvocataForm;