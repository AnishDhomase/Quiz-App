export function HomePage({ children }) {
  return (
    <div className="home">
      <div className="content">
        <img src="person.png" alt="logo"></img>
        {children}
      </div>
    </div>
  );
}
