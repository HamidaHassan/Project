import { Link } from "react-router-dom";

const Footer = () => {
return (
<footer className="bg-teal-300 text-white py-2 mt-20">
<div className="container mx-auto px-1">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="ml-10 flex items-baseline space-x-4">
<Link to={'/Farmersinformation'} className="hover:underline text-blue-500">Farmersinformation</Link>
<Link to={'/About'} className="hover:underline text-blue-500">About</Link>
<Link to={'/Contact'} className="hover:underline text-blue-500">Contact</Link>
</div>

<div className="text-center mt-4 text-blue-500">
<p>&copy; 2024 idah Company Limited. All rights reserved.</p>
</div>
</div>
</div>
</footer>
);
};

export default Footer;
