import React from 'react';

export default function HeadCont() {
    return (
        <div className='mx-auto pb-[16px] w-[62%] h-[100px] border-b-[1px] relative'>
            <div className='absolute top-[-80px] left-2'>
                <div className='w-[150px] h-[150px] bg-[#d7d7e2] border-4 border-white rounded-[100%]'></div>
                <div className=''>
                    <img className='absolute bottom-4 right-2 w-[28px]' src="/images/camera.png" alt="" />
                </div>
            </div>
            <div className='flex justify-between items-center pl-[200px] h-full'>
                <p className='text-[32px] font-bold'>이승헌</p>
                <ul className='flex'>
                    <li className='mr-[10px] px-[10px] w-[140px] h-[36px] leading-[36px] bg-[#1B74E4] text-white text-center rounded-l'>+ 스토리에 추가</li>
                    <li className='mr-[10px] px-[10px] w-[140px] h-[36px] leading-[36px] bg-[#E4E6EB] text-center rounded-l'>프로필 편집</li>
                    <li className='px-[10px] w-[48px] h-[36px] leading-[36px] bg-[#E4E6EB] text-center rounded-l cursor-pointer'>
                        <img className='mt-[6px] mx-auto w-[24px]' src="/images/arrow_down.png" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

