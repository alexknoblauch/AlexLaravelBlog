export default function Header({ setSignIn, setPostModal }) {
  async function handleLogout() {
    const res = await fetch(`http://localhost/alex_blogging/logout.php`, {
      method: "GET", // Use GET or POST depending on how you want to handle it
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setSignIn(false);
  }

  return (
    <header class="header">
      <div>
        <p>LOGO</p>
      </div>
      <div>
        <button onClick={() => setPostModal(true)}>+ new Post</button>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
}
