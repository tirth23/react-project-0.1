import { Link } from "react-router-dom";

const BlogList = ({blg, title }) => {
    // const blogs = props.blg;
    // const title = props.title;
    // console.log(props, blogs);

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blg.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>      
            ))}
        </div>
    );
};

export default BlogList;



