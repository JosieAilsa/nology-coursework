import { useState, useEffect } from "react"
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const  Home = () => {
const {data:blogs, isPending, isError} = useFetch("http://localhost:3004/blogs")

return (
    <div className="home">
        {isPending && <h3>Loading...</h3>}
        {isError && <h3>Sorry theres been an issue</h3>}
        {blogs && <BlogList blogs= {blogs} title = {"All Blogs"} useEffect={useEffect}/>}
    </div>
);
}

 
export default Home;
