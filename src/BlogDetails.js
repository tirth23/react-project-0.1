import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        })
        .then(() => {
            history.push('/'); 
        })
    }

    const del = () => {
        setTimeout(() => {fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        })}, 1000);   
    }

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>delete</button><br/><br/>
                    <Link to={"/Create/"+id}><button onClick={del} >update</button></Link>
                </article>
                
            )}
        </div> 
    );
}

export default BlogDetails; 