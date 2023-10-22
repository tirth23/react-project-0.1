import { useState } from "react";
import useFetch from "./useFetch";
import { useNavigate, useParams } from "react-router-dom";

const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("mario");
	const [isPending, setIsPending] = useState(false);
	const navigate = useNavigate();

	const { id } = useParams();
	const { data: blog, isPending1, error } = useFetch("http://localhost:8000/blogs/" + id);

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author, id: parseInt(id) };                                                     

		fetch("http://localhost:8000/blogs", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			console.log("New blog added");
			setIsPending(false);
			navigate.push("/"); 
		});
    }

    if(blog) {
	return (
		<div className="create">
			<h2>Add a New Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog title:</label>
				<input
					type="text"
					required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
				/>
                {title === ""? setTitle(blog.title):  console.log("Title Changed")}
				<label>Blog body:</label>
				<textarea
					required
                    value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
                {body === ""? setBody(blog.body):  console.log("Body Changed")}
				<label>Blog author:</label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value="mario">mario</option>
					<option value="yoshi">yoshi</option>
				</select>
				{!isPending && <button>Add Blog</button>}
				{isPending && <button disabled>Adding Blog...</button>}
			</form>
            
		</div>
	);
    } else {
        return (
            <div className="create">
              <h2>Add a New Blog</h2>
              <form  onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                  type="text" 
                  required 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                  required
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                >
                  <option value="mario">mario</option>
                  <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog...</button> }
              </form>
            </div>
          );
    }
};

export default Create;
