import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="mt-20 py-8 bg-white border-t">
      <div className="max-w-4xl mx-auto px-4 text-center text-gray-500">
        © {new Date().getFullYear()} Untukmu —
        <Link to="/admin">Happy 3rd Anniversary</Link> ❤️
      </div>
    </footer>
  );
};
export default Footer;
