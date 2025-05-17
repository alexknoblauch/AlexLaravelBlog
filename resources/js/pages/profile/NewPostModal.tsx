import { useState } from "react";

export interface interfacePostModal {
 setPostModal : (value: boolean) => void
}

export default function NewPostModal({ setPostModal }: interfacePostModal) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const now = new Date();

  const apiUrl = process.env.APP_API;

  const formattedDate =
    [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, "0"), // Months are 0-indexed
      String(now.getDate()).padStart(2, "0"),
    ].join("-") +
    " " +
    [
      String(now.getHours()).padStart(2, "0"),
      String(now.getMinutes()).padStart(2, "0"),
      String(now.getSeconds()).padStart(2, "0"),
    ].join(":");

  async function handleNewPost() {
    if (!title.trim() || !text.trim()) {
      return;
    }

    fetch(`${apiUrl}/createBlogs.php`, {
      method: "POST",
      credentials: "include", // Ensure the session cookie is sent
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        text: text,
      }),
    })
      .then((response) => {
        // Check if the response is ok (status 2xx)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Try to parse JSON if it's valid
        return response.text(); // Read the response as text
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Post creation error:", error);
      });

    setPostModal(false);
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-999"></div>
      <div className="fixed top-1/2 left-1/2 w-[25rm] transform -translate-x-1/2 -translate-y-1/2 bg-white p-[30px] rounded-lg z-[1000]">
        <div>
          <h1>+ New Post +</h1>
          <label htmlFor="title"></label>
          <input
            value={title}
            id="title"
            type="title"
            placeholder="Titel"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label htmlFor="text"></label>
          <textarea
            className="self-center h-24"
            value={text}
            id="text"
            placeholder="your Text"
            onChange={(e) => setText(e.target.value)}
          />
          <br></br>
          <button onClick={handleNewPost} className="bg-[#444] outline-none border-[#444] border-2 rounded-full px-12 py-[0.2rem]">
            Post
          </button>
        </div>
      </div>
    </>
  );
}
