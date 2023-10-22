import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortCont = new AbortController();

		fetch(url, { signal: AbortController.signal })
			.then((res) => {
				// console.log(res);
				if (!res.ok) {
					throw Error("could not fetch the data for that resource");
				}
				return res.json();
			})
			.then((localdata) => {
				// console.log(data);
				setData(localdata);
				setIsPending(false);
				setError(null);
			})
			.catch((err) => {
				if (err.name === "AbortError") {
					console.log("fetch aborted");
				} else {
					setError(err.message);
					setIsPending(false);
				}
			});

		return () => abortCont.abort();
	}, [url]);

	return { data, isPending, error };
};

export default useFetch;
