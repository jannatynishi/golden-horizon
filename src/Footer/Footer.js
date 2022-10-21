import React from 'react';
import { AtSymbolIcon } from '@heroicons/react/24/solid'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <h1 className='text-center mt-4 justify-center flex'><AtSymbolIcon className="h-6 w-4 "></AtSymbolIcon>Copyright {year}</h1>
        </div>
    );
};

export default Footer;