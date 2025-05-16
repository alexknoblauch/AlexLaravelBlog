import { useState } from "react";

export default function NewPostModal({ setPostModal }) {
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

  async function handleNewPost(e) {
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
      <div className="modal-overlay"></div>
      <div className="modal-content-newpost">
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
            className="new-post-textarea"
            value={text}
            type="text"
            id="text"
            placeholder="your Text"
            onChange={(e) => setText(e.target.value)}
          />
          <br></br>
          <button onClick={handleNewPost} className="sign-in-button-modal">
            Post
          </button>
        </div>
      </div>
    </>
  );
}
