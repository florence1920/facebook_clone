import React from 'react';

export default function Nav() {
    return (
        <div className='fixed w-full flex justify-between py-2 h-14 drop-shadow bg-white'>
            <div className='flex'>
                <img className='mx-4 w-10' src="/images/facebook.png" alt="logo" />
                <div className="w-[280px] relative">
                    <img className='w-[15px] absolute top-[12.5px] left-[10px]' src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"/>
                    <input className='py-[8px] pl-9 w-full bg-[#f0f2f5] placeholder:text-[#050505]  border-0 rounded-3xl focus:outline-none' type="text" placeholder="Facebook 검색"/>
                </div>
            </div>
            <ul className='flex gap-x-1 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] '>
                <li className='w-[80px] h-[40px] rounded-md hover:bg-[#e4e6ea] cursor-pointer'>
                    <img className='my-[6px] mx-auto w-[28px]' src="/images/home.png" alt="" />
                </li>
                <li className='w-[80px] h-[40px] rounded-md hover:bg-[#e4e6ea] cursor-pointer'>
                    <img className='my-[6px] mx-auto w-[28px]' src="/images/group.png" alt="" />
                </li>
                <li className='w-[80px] h-[40px] rounded-md hover:bg-[#e4e6ea] cursor-pointer'>
                    <img className='my-[6px] mx-auto w-[28px]' src="/images/subscriptions.png" alt="" />
                </li>
                <li className='w-[80px] h-[40px] rounded-md hover:bg-[#e4e6ea] cursor-pointer'>
                    <img className='my-[6px] mx-auto w-[28px]' src="/images/group.png" alt="" />
                </li>
                <li className='w-[80px] h-[40px] rounded-md hover:bg-[#e4e6ea] cursor-pointer'>
                    <img className='my-[6px] mx-auto w-[28px]' src="/images/sports.png" alt="" />
                </li>
            </ul>
            <ul className='flex gap-x-2 mr-4'>
                <li className='w-[40px] h-[40px] bg-[#e4e6eb] rounded-full cursor-pointer'>
                    <img className='my-[10px] mx-auto w-[20px]' src="/images/menu.png" alt="" />
                </li>
                <li className='w-[40px] h-[40px] bg-[#e4e6eb] rounded-full cursor-pointer'>
                    <img className='my-[10px] mx-auto w-[20px]' src="/images/chat.png" alt="" />
                </li>
                <li className='w-[40px] h-[40px] bg-[#e4e6eb] rounded-full cursor-pointer'>
                    <img className='my-[10px] mx-auto w-[20px]' src="/images/notifications.png" alt="" />
                </li>
                <li className='w-[40px] h-[40px] bg-[#e4e6eb] rounded-full cursor-pointer'>
                    <img className='my-[10px] mx-auto w-[20px]' src="/images/group.png" alt="" />
                </li>
            </ul>
        </div>
    );
}

