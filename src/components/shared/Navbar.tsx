import { Search, Bell, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    
    return (
        <header className="flex items-center justify-between px-6 py-3 bg-[#0d0d0d] text-white border-b border-[#222]">

            <div className="flex items-center space-x-2">
                <span className="text-xl font-bold tracking-wide">Lumina</span>
            </div>


            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
                <Link href="/" className="text-purple-400 hover:text-purple-300 transition-colors">Feed</Link>
                <Link
                    href="/explore"
                    className="text-gray-400 hover:text-white transition-colors">
                        Explore
                </Link>
                <a href="#communities" className="text-gray-400 hover:text-white transition-colors">Communities</a>
            </nav>


            <div className="flex items-center space-x-4">

                <div className="relative hidden lg:flex items-center">
                    <Search className="absolute left-3 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search network..."
                        className="bg-[#1a1a1a] text-sm text-gray-200 placeholder-gray-50oggling pl-9 pr-12 py-1.5 rounded-full border border-transparent focus:border-purple-500 focus:outline-none w-64 transition-all"
                    />
                    <span className="absolute right-3 text-[10px] bg-[#2a2a2a] text-gray-400 px-1.5 py-0.5 rounded border border-[#333]">
                        ⌘K
                    </span>
                </div>


                <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-[#1a1a1a]">
                    <Bell className="w-5 h-5" />
                </button>


                <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-[#1a1a1a]">
                    <Mail className="w-5 h-5" />
                </button>


                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-purple-500/50 cursor-pointer">
                    <Image
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                        alt="User Avatar"
                        fill
                        sizes="32px"
                        className="object-cover"
                    />
                </div>
            </div>
        </header>
    );
};

export default Navbar;