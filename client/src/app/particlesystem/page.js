'use client'
import React from 'react';
import {motion} from 'framer-motion';
import {ParticleSystem as PS} from 'react-particle-system';
const Div = motion('div');

export default function ParticleSystem(props) {

    return(
        <Div>
            <PS ease={0.02} friction={0.097} gap={2} imageUrl={'/next.svg'} radius={120} height={150} width={150} minHeight={200} minWidth={200}/>
        </Div>
    )
}