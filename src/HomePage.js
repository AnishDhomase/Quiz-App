export function HomePage({ children }) {
  return (
    <div className="home">
      <div className="content">
        <img src="answer (1).png" alt="logo"></img>
        {children}
      </div>
    </div>
  );
}
