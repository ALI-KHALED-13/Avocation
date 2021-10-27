import { useEffect, useState } from "react";

const Categories =()=>{
    const [categories, setCategrories] = useState([]);

    useEffect(()=>{
        fetch('/tags')
        .then(resp=> resp.json())
        .then(tagsArr=>{
            tagsArr.sort((ob1, ob2)=> ob2.count - ob1.count );
            setCategrories(tagsArr.slice(0, 5));
        })
        .catch(console.log);
    }, [])

    const markSelected =(ev)=> {
        if (ev.target.nodeName !== "BUTTON") return;
        ev.target.classList.toggle('selected-categ');
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