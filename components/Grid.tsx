import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';

const Grid = () => {
    return (
        <section id='about'>
            <BentoGrid>
            {
                    [{ tittle: 'Tittle1', description: 'Desc1', id: 1 }]
                    .map((item) => (
                        <BentoGridItem
                            id={item.id}
                            key={item.id}
                            title={item.tittle}
                            description={item.description}
                        />
                    )
            }
            </BentoGrid>
        </section>
    )
};

export default Grid;