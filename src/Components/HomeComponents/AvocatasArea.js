import React from "react";
import {useEffect } from "react";
import Avocata from './Avocata';

const AvocatasArea =({user})=>{
    useEffect(()=> console.log('posts area mounted'), []);

    const posts = [];

    return (
        <section id="feed">
            {
                user &&
                <form>
                    <input placeholder="title?" />
                </form>
            }
            {posts.map(console.log)}
            <Avocata />
            <Avocata />
        </section>
    );
}

export default React.memo(AvocatasArea);
