const GoogleAd = () => {
  return (
    <div
      className="google-ad"
      style={{
        width: "300px",
        padding: "10px",
        border: "1px solid #e0e0e0",
        fontFamily: "Arial",
      }}
    >
      <div style={{ color: "#666", fontSize: "12px" }}>Anzeige</div>
      <h4 style={{ margin: "5px 0" }}>Produkt XYZ</h4>
      <p style={{ margin: 0, fontSize: "14px" }}>
        Jetzt kaufen und 20% sparen!
      </p>
      <a
        href="www.google.ch"
        style={{ color: "#1a73e8", textDecoration: "none" }}
      >
        www.example.com
      </a>
    </div>
  );
};

export default GoogleAd;
