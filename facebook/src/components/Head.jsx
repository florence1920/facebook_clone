import React from 'react';
import Cover from './Cover'
import HeadCont from './HeadCont'
import Category from './Category'

export default function Head() {
    return (
        <div className='pt-[56px] bg-[#fff] drop-shadow-md'>
            <Cover/>
            <HeadCont/>
            <Category/>
        </div>
    );
}

