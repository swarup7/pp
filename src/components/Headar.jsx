import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function Headar() {
  return (
    <header className='bg-slate-200 shadow-md' >
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <samp className='text-slate-500'>Property</samp>
            <samp className='text-slate-700'>Buddy</samp>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type="text" 
            placeholder='search...' 
            className='bg-transparent focus:outline-none w-24 sm:w-64' 
            />
            <FaSearch className='text-slate-600' />
        </form>
        <ur className='flex gap-4'>
            <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
                Home
                </li>
                </Link>
                <Link to='/About'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
                About
                </li>
                </Link>
                <Link to='/signin'>
            <li className=' text-slate-700 hover:underline'>
                Sing in
                </li>
                </Link>
        </ur>
        
        
        </div>
    </header>
  );
}
