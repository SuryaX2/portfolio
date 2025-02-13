import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { educations } from '@/data';

const Education = () => {
    return (
        <div className='py-20' id='education'>
            <h1 className='heading mb-10'>
                My Educational {' '}
                <span className='text-purple'>Background</span>
            </h1>
            <div className='flex flex-col items-center justify-center p-4 gap-x-24 gap-y-2 max-lg:mt-10'>
                <InfiniteMovingCards
                    items={educations}
                    direction='right'
                    speed='fast'
                />
            </div>
        </div>
    )
};

export default Education;