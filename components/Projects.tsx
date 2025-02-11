import { projects } from '@/data';
import React from 'react'
import { PinContainer } from './ui/3d-pin';
import { div } from 'framer-motion/client';
import { FaLocationArrow } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className='py-20' id='projects'>
            <h1 className='heading'>
                A Small Section Of {' '}
                <span className='text-purple'>Recent Projects</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-2 mt-10'>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex flex-col items-center justify-center sm:w-[570px] w-[80vw]'
                    >
                        <PinContainer title={project.link} href='{project.href}'>
                            <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <img src="/bg.png" alt="bg-img" />
                                </div>
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className='z-10 absolute bottom-0'
                                />
                            </div>
                            <h1 className='text-base font-bold text-white lg:text-2xl md:text-xl line-clamp-1'>
                                {project.title}
                            </h1>
                            <p className='lg:text-l lg:font-normal font-light text-sm line-clamp-2'>{project.des}</p>
                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {project.iconLists.map((icon, index) => (
                                        <div
                                            key={icon}
                                            className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                                            style={{
                                                transform: `translateX(-${5 * index * 2}px)`
                                            }}
                                        >
                                            <img
                                                src={icon}
                                                alt={icon}
                                                className='p-2'
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className='flex items-center justify-center'>
                                    <p className='flex lg:text-xl md:text-xs text-sm text-purple font-bold'>
                                        Check Live Site
                                    </p>
                                    <FaLocationArrow
                                        className='ms-3'
                                        color='#CBACF9'
                                    />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))
                }
            </div >
        </div >
    )
};

export default Projects;