"use client"

import logoImage from '@/assets/images/Logo.png';
import Link from '@/components/basic/Link';
import CustomButton from '@/components/basic/CustomButton';
import FooterSection from '@/components/FooterSection';
import { useState } from 'react';

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const links = [
        { href: '#', text: 'Creon Pass' },
        { href: '#', text: 'Token', badge: 'SOON' },
        { href: '#', text: 'AI Revenue', badge: 'SOON' },
        { href: '#', text: 'AI Launchpad', badge: 'SOON' },
    ]

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <div className="h-full w-full relative">
            <header className="absolute top-0 w-full z-50">
                <div className="justify-between xl:py-7 xl:px-12 flex py-3 px-6 items-center">
                    <img src={logoImage.src} alt="Logo" />
                    <nav className="tablet:flex hidden gap-x-4 xl:gap-x-10 items-center">
                        {
                            links.map((link, index) => (
                                <Link key={index} href={link.href} text={link.text} badge={link.badge}></Link>
                            ))
                        }
                        <CustomButton label="Connect Wallet" onClick={() => console.log("Button clicked!")} ></CustomButton>
                    </nav>

                    <div className="tablet:hidden block">
                        <button onClick={() => setIsOpenMenu(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
                {
                    isOpenMenu && (
                        <div className="tablet:hidden fixed w-full right-0 top-0 h-screen flex justify-end bg-gray-900/50">
                            <div className='w-full max-w-80 bg-black'>
                                <div className="flex justify-center items-center gap-4 pt-6">
                                    <CustomButton label="Connect" onClick={() => console.log("Button clicked!")} ></CustomButton>
                                    <button onClick={() => setIsOpenMenu(false)} className="rounded bg-sky-500 border border-sky-500 px-2 py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="flex gap-2 flex-col justify-end ml-12 mt-12">
                                    {
                                        links.map((link, index) => (
                                            <div key={index} className={`${index === 0 ? 'border-t' : ''} border-b border-gray-900 py-3`}>
                                                <Link key={index} href={link.href} text={link.text} badge={link.badge}></Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </header>
            <main className="h-full min-h-screen">
                {children}
            </main>

            <FooterSection />
        </div>
    );
}
