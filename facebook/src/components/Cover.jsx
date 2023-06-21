import React from 'react';

export default function Cover() {
    return (
        <div className='relative mx-auto w-[65%] h-[460px] rounded-b-xl'>
            <div className='absolute w-full h-full bg-[#f2f2f2] rounded-b-xl'></div>
            <div className='relative h-[80%] cursor-pointer'></div>
            <div className='relative h-[20%] rounded-b-xl'>
                <ul className='absolute top-0 right-[20px]'>
                    <li className='mb-[5px] w-[155px] h-[36px] leading-[36px] bg-[#00000066] text-white text-center font-bold rounded-md'>
                        아바타로 만들기
                    </li>
                    <li className='w-[155px] h-[36px] leading-[36px] bg-[#00000066] text-white text-center font-bold rounded-md'>
                        커버 사진 추가
                    </li>
                </ul>
            </div>
        </div>
    );
}

