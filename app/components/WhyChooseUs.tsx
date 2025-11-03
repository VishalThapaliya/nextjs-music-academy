import React from 'react';
import { StickyScroll } from './ui/sticky-scroll-reveal';

const content = [
    {
        title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius fugiat alias perspiciatis voluptatem, nihil explicabo harum aspernatur iusto praesentium illum eos assumenda numquam neque facilis modi dolores esse facere molestiae debitis, obcaecati dignissimos. Magnam eaque autem non, nam provident unde officia, deleniti nulla recusandae delectus ipsa maxime est saepe!",
        content: (
            <div className='px-4 text-center font-bold flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right, var(--cyan-500), var(--emerald-500))] text-white'>
                Discover Your Sound with Us: A Personal Journey in Music Mastery
            </div>
        )
    },
    {
        title: "Live Feedback & Engagement",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius fugiat alias perspiciatis voluptatem, nihil explicabo harum aspernatur iusto praesentium illum eos assumenda numquam neque facilis modi dolores esse facere molestiae debitis, obcaecati dignissimos. Magnam eaque autem non, nam provident unde officia, deleniti nulla recusandae delectus ipsa maxime est saepe!",
        content: (
            <div className='px-4 text-center font-bold flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right, var(--cyan-500), var(--emerald-500))] text-white'>
                Live Feedback & Engagement
            </div>
        )
    },
    {
        title: "Limitless Learning Opportunities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius fugiat alias perspiciatis voluptatem, nihil explicabo harum aspernatur iusto praesentium illum eos assumenda numquam neque facilis modi dolores esse facere molestiae debitis, obcaecati dignissimos. Magnam eaque autem non, nam provident unde officia, deleniti nulla recusandae delectus ipsa maxime est saepe!",
        content: (
            <div className='px-4 text-center font-bold flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right, var(--orange-500), var(--yellow-500))] text-white'>
                Limitless Learning Opportunities
            </div>
        )
    },
    {
        title: "Running Out of Content",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius fugiat alias perspiciatis voluptatem, nihil explicabo harum aspernatur iusto praesentium illum eos assumenda numquam neque facilis modi dolores esse facere molestiae debitis, obcaecati dignissimos. Magnam eaque autem non, nam provident unde officia, deleniti nulla recusandae delectus ipsa maxime est saepe!",
        content: (
            <div className='px-4 text-center font-bold flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right, var(--cyan-500), var(--emerald-500))] text-white'>
                Running Out Of Content
            </div>
        )
    },
]

const WhyChooseUs = () => {
  return (
    <div className='w-full'>
        <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs