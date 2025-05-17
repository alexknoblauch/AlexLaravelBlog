import { useEffect } from "react";
import { Blogs } from '../../types/Blogs';

interface interfaceBlogContent {
  blogs: Blogs[];
  curBlog: number;
  setBlogs: (value: Blogs[]) => void
}

export default function BlogContent({ blogs, curBlog, setBlogs }: interfaceBlogContent) {
  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch(
          `http://localhost:3000/alex_blogging/createBlogs.php`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json", // This tells the server to return JSON data
            },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch blogs, status: " + res.status);
        }

        // Get the raw text response to inspect it
        const rawText = await res.text();
        console.log("Raw response:", rawText); // Log the raw response

        // Try to parse the raw response as JSON
        try {
          let data = JSON.parse(rawText);
          if (Array.isArray(data.data)) {
            if (setBlogs) setBlogs(data.data);
          } else {
            console.error("Fetched data is not an array:", data.data);
          }
        } catch (err) {
          console.error("Failed to parse JSON:", err);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    getBlogs();
  }, []);

  const blog = blogs.find((blog) => blog.id === curBlog);

  return (
    <div className="blog-content">
      {blog ? (
        <>
          <div>
            <h3 className="blog-content-title">{blog.title}</h3>
          </div>
          <div className="blog-content-text">{blog.text}</div>{" "}
        </>
      ) : null}
    </div>
  );
}
