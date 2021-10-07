const Categories =()=>{
    
    const markSelected =(ev)=> {
        if (ev.target.nodeName !== "BUTTON") return;
        console.log('dfg')
        ev.target.classList.toggle('selected-categ');
    }
    return (
        <aside onClick={markSelected}>
            <button>singing</button>
            <button>literature</button>
            <button>Drawings</button>
        </aside>
    );
}

export default Categories;