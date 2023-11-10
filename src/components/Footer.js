import logo192 from "../logo192.png";
// Footer component for displaying footer content
export function Footer() {
  return (
    <>
      <div className="footer">
        🚀 Built with React
        <img
          src={logo192}
          className="footerImage"
          alt="footer logo"
          style={{ maxWidth: "15px", maxHeight: "15px" }}
        />
      </div>
    </>
  );
}
// Exporting the App component as the default export
