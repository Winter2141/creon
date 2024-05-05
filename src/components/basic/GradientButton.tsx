import React from 'react';
import { CustomButtonProps } from "@/types/componentTypes";

const GradientButton: React.FC<CustomButtonProps> = ({ label, className, onClick }) => {
    return (
        <button
            className={`group relative overflow-hidden text-white rounded cursor-pointer focus:outline-none ${className}`}
            style={{
                transition: 'color 0.3s ease',
            }}
        >
            <span className="block relative z-10 invisible">{label}</span>
            <div className="bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] absolute flex items-center justify-center inset-0 bg-transparent transform translate-y-0 group-hover:-translate-y-full transition-transform duration-300 ease-in-out">
                <span className="block relative z-10">{label}</span>
            </div>
            <div className="absolute flex items-center justify-center inset-0 bg-blue-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <span className="block relative z-10">{label}</span>
            </div>
        </button>
    );
};

export default GradientButton;