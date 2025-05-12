export default function About() {
  return (
    <main>
      <p className="title">About this App</p>
      <p className="about-subtitle">
        Welcome! This app was created by <strong>Madalena Andrade</strong> as a
        way to apply and expand my frontend development skills using modern
        tools like <strong>React</strong> {"("}a <strong>JavaScript</strong>{" "}
        library for building user interfaces{")"} and styled with{" "}
        <strong>CSS</strong> for clean, responsive design.
      </p>
      <section className="about-content">
        <p>
          The goal of this application is to provide a clean, interactive
          interface for managing a library system. It connects to a custom-built{" "}
          <strong>REST API</strong> — which I also developed — to handle
          essential operations such as:
        </p>
        <ul>
          <li>
            🔍 Viewing all available resources (e.g., books, authors, clients,
            book rents,...)
          </li>
          <li>➕ Adding new entries to the system</li>
          <li>✏️ Updating existing information</li>
          <li>🗑️ Deleting entries when no longer needed</li>
        </ul>

        <p>
          All displayed data is dynamically fetched from the backend API and
          updated in real time. The API interacts with a database to store and
          retrieve the information.
        </p>
        <p>
          Besides developing the interface, I also designed all icons and visual
          elements to create a unique and consistent look.
        </p>

        <p>
          This is an ongoing project where I continuously apply and test new
          frontend concepts as I learn and improve.
        </p>
      </section>
    </main>
  );
}
