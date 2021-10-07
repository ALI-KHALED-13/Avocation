import React from "react";
import {useEffect } from "react";

const PostsArea =({logged})=>{
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
        </section>
    );
}

export default React.memo(PostsArea);
