import React from 'react';
import { Route, Link } from 'react-router-dom';

export default function Category() {
    return (
        <div className='flex justify-between items-center mx-auto w-[62%] h-[60px]'>
            <ul className='flex'>
            <Link to="/"><li className='px-[16px] font-bold leading-[60px] text-[#65676B] border-b-2 border-black'>게시물</li></Link>
            <Link to="/about"><li className='px-[16px] font-bold leading-[60px]'>정보</li></Link>
                <li className='px-[16px] font-bold leading-[60px]'>친구</li>
                <li className='px-[16px] font-bold leading-[60px]'>사진</li>
                <li className='px-[16px] font-bold leading-[60px]'>동영상</li>
                <li className='px-[16px] font-bold leading-[60px]'>체크인</li>
                <li className='px-[16px] font-bold leading-[60px]'>더보기</li>
                
            </ul>
            <div className='px-[10px] w-[48px] h-[36px] leading-[36px] bg-[#E4E6EB] text-center rounded-l cursor-pointer'>
                <img className='mt-[6px] mx-auto w-[24px]' src="/images/more.png" alt="" />
            </div>
        </div>
    );
}

