import React from 'react'
import { Plane } from 'lucide-react';

const FloatingButton = () => {
    return (
        <div className="w-full flex justify-center absolute bottom-8">
            <div className="flex items-center gap-2 bg-white/20 text-white px-2 py-1 rounded-full cursor-pointer">
                <button className="text-[10px] bg-white text-black px-4 py-2.5 rounded-full cursor-pointer">Book the Flight</button>
                <Plane size={20} className='w-9 h-9 bg-white rounded-full text-black p-2 cursor-pointer' />
            </div>
        </div>
    );
};

export default FloatingButton