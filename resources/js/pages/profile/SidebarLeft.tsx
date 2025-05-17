import { useEffect } from "react";
import SidebarBlog from "./SidebarBlog";

interface interfaceSidebarLeft {
  setCurBlog : (value: number) => void;
  blogs: any[];
  setBlogs: (value: any[]) => void;
  postModal: boolean
}

export default function SidebarLeft({
  setCurBlog,
  blogs,
  setBlogs,
  postModal,
}: interfaceSidebarLeft) {
  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch(
          "http://localhost/alex_blogging/createBlogs.php",
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
            const sortedData = data.data.sort(
              (a:{ date: string }, b:{ date: string }) => new Date(b.date).getTime() - new Date(a.date).getTime()
            );
            setBlogs(sortedData);
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
  }, [postModal, setBlogs]);

  return (
    <div className="sidebar-left">
      {blogs.map((blog) => {
        return <SidebarBlog blog={blog} setCurBlog={setCurBlog} />;
      })}
    </div>
  );
}
