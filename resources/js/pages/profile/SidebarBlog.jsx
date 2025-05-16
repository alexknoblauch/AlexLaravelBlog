export default function SidebarBlog({ blog, setCurBlog }) {
  function handleID() {
    setCurBlog(blog.id);
  }

  return (
    <div onClick={handleID} className="SidebarBlog">
      <div>
        <p>
          {blog.title.length > 30
            ? blog.title.slice(0, blog.title.lastIndexOf(" ", 30)) + " ..."
            : blog.title}
        </p>

        <p>{blog.date.split(" ")[0]}</p>
      </div>
      <p>
        {blog.text.length > 80
          ? blog.text.slice(0, blog.text.lastIndexOf(" ", 80)) + " ..."
          : blog.text}
      </p>
      <p>{blog.author_name}</p>
    </div>
  );
}
