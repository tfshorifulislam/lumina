import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Login = () => {
    return (
        <div className="flex min-h-screen bg-[#0d0d0d] text-white">
            {/* Left Side: Branding / Visual Panel */}
            <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-gradient-to-br from-purple-950/20 via-zinc-900/40 to-[#0d0d0d] border-r border-zinc-800/60 relative overflow-hidden">
                <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none -top-20 -left-20" />
                
                <div className="flex items-center space-x-3 z-10">
                    <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
                        <Sparkles className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="text-xl font-bold tracking-wide">Lumina</span>
                </div>

                <div className="z-10 max-w-md">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">
                        Connect, share, and scale with creators.
                    </h2>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Join Lumina today to explore cutting-edge digital ecosystems, follow trending feeds, and collaborate with top-tier communities.
                    </p>
                </div>

                <div className="text-xs text-zinc-500 z-10">
                    © {new Date().getFullYear()} Lumina Inc. All rights reserved.
                </div>
            </div>

            {/* Right Side: Login Form Panel */}
            <div className="flex-1 flex items-center justify-center px-6 py-12 lg:px-16">
                <div className="w-full max-w-md space-y-8">
                    {/* Mobile Logo */}
                    <div className="flex lg:hidden items-center space-x-2 mb-8">
                        <Sparkles className="w-5 h-5 text-purple-400" />
                        <span className="text-xl font-bold tracking-wide">Lumina</span>
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Welcome back</h1>
                        <p className="text-sm text-zinc-400">Enter your details to access your account</p>
                    </div>

                    <form className="space-y-5" >
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Email</label>
                            <Input 
                                type="email" 
                                placeholder="name@example.com" 
                                className="bg-zinc-900/80 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-purple-500 h-11 rounded-xl"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Password</label>
                                <a href="#forgot" className="text-xs text-purple-400 hover:text-purple-300 transition-colors">
                                    Forgot password?
                                </a>
                            </div>
                            <Input 
                                type="password" 
                                placeholder="••••••••" 
                                className="bg-zinc-900/80 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-purple-500 h-11 rounded-xl"
                            />
                        </div>

                        <Button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium h-11 rounded-xl transition-all shadow-lg shadow-purple-600/20 flex items-center justify-center space-x-2">
                            <span>Sign In</span>
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </form>

                    <div className="relative flex py-2 items-center">
                        <div className="flex-grow border-t border-zinc-800"></div>
                        <span className="flex-shrink mx-4 text-xs text-zinc-500 uppercase tracking-widest">Or continue with</span>
                        <div className="flex-grow border-t border-zinc-800"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center py-2.5 px-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-xs font-medium text-zinc-300 transition-all">
                            Google
                        </button>
                        <button className="flex items-center justify-center py-2.5 px-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-xs font-medium text-zinc-300 transition-all">
                            GitHub
                        </button>
                    </div>

                    <p className="text-center text-sm text-zinc-500 pt-4">
                        Don't have an account?{' '}
                        <Link href="/signup" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;