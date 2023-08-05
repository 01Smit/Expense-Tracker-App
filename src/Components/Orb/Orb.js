import React from 'react'
import { keyframes, styled } from 'styled-components'
import { useWindowSize } from '../../Utils/useWindowSize'

const Orb = () => {

    const { width, height } = useWindowSize()

    const moveOrb = keyframes`
        0%{
            transform: translate(0,0);
        }
        50%{
            transform: translate(${width/1.2}px,${height/1.5}px);
        }
        100%{
            transform: translate(0,0);
        }
    `;

    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        // background: red;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 70%);
        filter: blur(400px);
        animation: ${moveOrb} 10s alternate linear infinite;
        `;

    return (
        <OrbStyled></OrbStyled>
    )
}

export default Orb