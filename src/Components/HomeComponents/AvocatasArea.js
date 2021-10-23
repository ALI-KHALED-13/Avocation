import React from "react";
import {useEffect } from "react";
import Avocata from './Avocata';
import mavatar from '../../media/avatar-m.png';
import favatar from '../../media/avatar-f.png';

const AvocatasArea =({user})=>{
    useEffect(()=> console.log('posts area mounted'), []); // I think getting the posts should be one level up, to share categories with categ component

    const posts = [];

    return (
        <section id="feed">
            {
                user &&
                <form>
                    <div className="header">
                        <img alt="avatar" src={user.gender === 'male'? mavatar: favatar}/>
                        <p>{user.name}</p>
                    </div>

                    <label>caption: <input placeholder="" /></label>
                </form>
            }
            {posts.map(console.log)}
            <Avocata />
            <Avocata />
        </section>
    );
}

export default React.memo(AvocatasArea);
