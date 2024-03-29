"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const FloatingNavbar = () => {
    return (
      <motion.div
        className="hidden sm:flex fixed inset-x-0 bottom-0 w-full p-7 z-100 justify-center items-center rounded-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center items-center border  border-white/50 bg-black backdrop-blur-md rounded-full p-1.5">
            <div className="flex boder items-stretch p-2">
                <Link
                    href="#hero"
                    style={{
                      backgroundImage: 'url(https://assets-global.website-files.com/5837424ae11409586f837994/624322b0c806026f5689d841_Group%2012569.svg)',
                      backgroundPosition: '50%',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'auto 22px',
                      paddingLeft: '38px',
                      paddingRight: '38px'
                    }}
                    className="text-white p-4 font-bold rounded-full bg-zinc-800 hover:bg-white hover:text-black transition-colors cursor-pointer pb-4 duration-200"
                >
                </Link>
                <Link href="#hero" className="text-white p-4 font-bold rounded-full hover:bg-white hover:text-black transition-colors">
                    About
                </Link>
                <Link href="/auth/" className="text-white p-4 font-bold rounded-full hover:bg-white hover:text-black transition-colors">
                    Add Your School
                </Link>
                <Link href="/auth/login" className="text-white p-4 font-bold rounded-full bg-zinc-800 hover:bg-white hover:text-black transition-colors">
                    Login
                </Link>

            </div>

        </div>
      </motion.div>
    );
  };

export default FloatingNavbar
