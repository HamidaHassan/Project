/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom"
function Dashboard () {
    return (
    <div className="min-h-full">
    <nav className="bg-teal-300">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
    <div className="flex items-center">
    <div className="flex-shrink-0">
    </div>
    <div className="hidden md:block">
    <div className="ml-10 flex items-baseline space-x-4">
    <Link to="/Dashboard" className="bg-grey-900 text-blue-500 rounded-md px-3 py-2 text-sm font-medium" aria-current="page"></Link>
    <Link to="/famersinformation" className="text-blue-500 hover:bg-grey-50 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Famersinformation</Link>
    <Link to="Add famer" className="text-blue-500 hover:bg-grey-50 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Add famer</Link>
    <Link to="contacts" className="text-blue-500 hover:bg-grey-50 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</Link>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    </nav>
    </div>
    
    
    )
    }
    
    export default Dashboard
    