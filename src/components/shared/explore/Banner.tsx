import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ExploreBanner = () => {
    return (
        <section className="relative flex flex-col items-center justify-center px-4 py-24 text-center bg-[#0d0d0d] text-white overflow-hidden">

            {/* Main Heading */}
            <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Discover the Frontier of <span className="text-sky-400">Digital Culture</span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-sm sm:text-base text-zinc-400 mb-10 leading-relaxed">
                Explore trending collections, connect with visionary creators, and immerse yourself in active communities defining Web3.
            </p>

            {/* Search Input Box Container */}
            <div className="relative w-full max-w-xl flex items-center bg-zinc-900/80 border border-zinc-800 rounded-full p-2 shadow-2xl backdrop-blur-md mb-8">
                <Search className="absolute left-6 w-5 h-5 text-zinc-400 pointer-events-none" />
                <Input 
                    type="text" 
                    placeholder="Search the ecosystem..." 
                    className="w-full bg-transparent border-none pl-12 pr-28 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button 
                    className="absolute right-2 bg-white text-zinc-950 hover:bg-zinc-200 font-medium px-6 py-2 rounded-full text-sm transition-all"
                >
                    Explore
                </Button>
            </div>

            {/* Filter Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
                <button className="px-5 py-2 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-700 text-white shadow-sm transition-all">
                    Trending
                </button>
                <button className="px-5 py-2 rounded-full text-xs font-medium bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                    Art
                </button>
                <button className="px-5 py-2 rounded-full text-xs font-medium bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                    DeFi
                </button>
                <button className="px-5 py-2 rounded-full text-xs font-medium bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                    Gaming
                </button>
            </div>
        </section>
    );
};

export default ExploreBanner;