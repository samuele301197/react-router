import { useEffect, useState } from 'react';
import axios from "axios";
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const OurPost = () => {
const [blog, setBlog] = useState([]);
useEffect(() => {
    axios.get("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts?limit=20&page=1").then((resp) => {
        setBlog(resp.data);
        
    });
}, []);
return(
    <>
        <Link className="btn btn-primary m-2" to={"/home"}>Home</Link>
        <Link className="btn btn-warning m-2" to={"/contatti"}>Contatti</Link>
        <Link className="btn btn-secondary m-2" to={"/create-post"}>Create Post</Link>
    <h1 className='text-center'><strong>Lista Post</strong></h1>
    <div className="row row-cols-3 g-3 my-3">
    {blog.map((curBlog, index) => (
    <div key={`${curBlog.id}-${index}`} className="col">
    <Card character={curBlog}/>
    </div>
    ))}                
    </div>         
    </>
)

}

export default OurPost