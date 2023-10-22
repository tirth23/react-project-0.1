import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blg={blogs} title="All Blogs!" /> }
            {/* <BlogList blg={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!" /> */}
        </div>
    );
};
 
export default Home;