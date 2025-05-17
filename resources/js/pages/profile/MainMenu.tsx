import { useState } from "react";
import BlogContent from "./BlogContent";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import NewPostModal from "./NewPostModal";
import { Blogs } from '../../types/Blogs';

interface PostmodalTypes {
  postModal: boolean,
  setPostModal: (value: boolean) => void
}


export default function MainMenu({ postModal, setPostModal }: PostmodalTypes) {
  const [curBlog, setCurBlog] = useState<number>(1);
  const [blogs, setBlogs] = useState<Blogs[]>([]); 

  return (
    <div className="grid grid-cols-[2.5fr_5fr_2.5fr] h-[90vh]">
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
