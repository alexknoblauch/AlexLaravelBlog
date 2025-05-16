import { useState } from "react";
import BlogContent from "./BlogContent";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import NewPostModal from "./NewPostModal";

export default function MainMenu({ postModal, setPostModal }) {
  const [curBlog, setCurBlog] = useState(1);
  const [blogs, setBlogs] = useState([]);

  return (
    <div className="mainmenu">
      {postModal && <NewPostModal setPostModal={setPostModal} />}
      <SidebarLeft
        setCurBlog={setCurBlog}
        blogs={blogs}
        setBlogs={setBlogs}
        postModal={postModal}
      />
      <BlogContent curBlog={curBlog} blogs={blogs} setBlogs={setBlogs} />
      <SidebarRight />
    </div>
  );
}
