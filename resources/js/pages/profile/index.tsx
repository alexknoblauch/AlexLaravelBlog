import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import { useState } from "react";
import BlogContent from "./BlogContent";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import NewPostModal from "./NewPostModal";

interface ProfileProps {
  postModal: boolean; 
  setPostModal: (value: boolean) => void; 
}

export default function Profile({postModal, setPostModal}: ProfileProps) {
  const [curBlog, setCurBlog] = useState<number>(1);
  const [blogs, setBlogs] = useState<any[]>([]);

  return (
    <div className="grid grid-cols[2.5fr_5fr_2-5fr] h-[90vh]">
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
  )
}