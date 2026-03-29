// src/components/Navbar.jsx

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        background: "#111",
        color: "#fff",
      }}
    >
      <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Christian</span>
      <ul
        style={{
          display: "flex",
          gap: "1.5rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <a href="#sobre" style={{ color: "#fff", textDecoration: "none" }}>
            Sobre
          </a>
        </li>
        <li>
          <a href="#projetos" style={{ color: "#fff", textDecoration: "none" }}>
            Projetos
          </a>
        </li>
        <li>
          <a href="#contato" style={{ color: "#fff", textDecoration: "none" }}>
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
