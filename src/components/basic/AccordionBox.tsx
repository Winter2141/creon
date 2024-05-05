"use client";

import { AccordionBoxProps } from '@/types/componentTypes';
import React, { useState } from 'react';

const AccordionBox: React.FC<AccordionBoxProps> = ({ title, content, logoSrc, isOpenInitially = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenInitially);

  return (
    <div className="accordion-box bg-black text-white p-4 mb-4 rounded-lg">
      <div className="flex items-center justify-start cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <img src={logoSrc} alt="" className="w-24 mr-6"/>
        <div className="flex justify-between items-start w-full">
            <p className="font-bold text-[22px] max-w-[300px]">{title}</p>
            <div>{isOpen ? '▲' : '▼'}</div>
        </div>
      </div>
      {isOpen && (
        <div className="mt-2 pl-28">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionBox;
