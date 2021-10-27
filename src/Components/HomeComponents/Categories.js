import { useEffect, useState } from "react";

const Categories =({setChosenCategs})=>{
    const [categories, setCategrories] = useState([]);

    useEffect(()=>{
        fetch('/tags')
        .then(resp=> resp.json())
        .then(tagsArr=>{
            const availCateg = tagsArr.filter(tagOb=> tagOb.count > 0).sort((ob1, ob2)=> ob2.count - ob1.count );
            setCategrories(availCateg.slice(0, 5));
        })
        .catch(console.log);
    }, [])

    const markSelected =(ev)=> {
        if (ev.target.nodeName !== "BUTTON") return;
        ev.target.classList.toggle('selected-categ');

        const chosen = Array.from(ev.target.parentElement.getElementsByClassName('selected-categ')).map(button=>{
            return button.textContent;
        })
        setChosenCategs(chosen.length? chosen: ['']); // to avoid storing empty array, review catcha point in avocata area component
    }
    return (
        <aside onClick={markSelected}>
            {
            categories.map(categ=> <button key={categ.tag}>{categ.tag}</button>)
            }
        </aside>
    );
}

export default Categories;