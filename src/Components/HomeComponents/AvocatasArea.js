import React from "react";
import {useEffect } from "react";
import Avocata from './Avocata';

const AvocatasArea =({logged})=>{
    useEffect(()=> console.log('posts area mounted'), []);

    const posts = [];

    return (
        <section id="feed">
            {
                logged &&
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
