import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { educations } from '@/data';

const Education = () => {
    return (
        <div className='py-10' id='education'>
            <h1 className='heading'>
                My Educational {' '}
                <span className='text-purple'>Background</span>
            </h1>
            <div className='flex flex-col items-center justify-center p-4 gap-x-24 gap-y-2 mt-10'>
                <InfiniteMovingCards
                    items={educations}
                    direction='right'
                    speed='normal'
                />
            </div>
        </div>
    )
};

export default Education;