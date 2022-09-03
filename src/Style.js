import { motion } from "framer-motion";
import styled from "styled-components";
import { renderGradient } from "./utils/gradient";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    cursor: pointer;
    perspective: 2000;
`;

export const CardWrapper = styled(motion.div)`
    width: 50rem;
    height: 70rem;
    display: grid;
    place-items: center;
    overflow: hidden;
`;

export const Card = styled.div`
    width: 30rem;
    height: 55rem;
    background: #eee;
    border-radius: 2.5rem;
    box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.7);
    position: relative;
`;

export const CTop = styled.div`
    width: 80%;
    height: 50%;
    padding: 3rem;
    border-radius: 2.5rem 2.5rem 0 0;
    transition: background 0.5s;
    background-image: linear-gradient(
        ${({ currentColor }) => renderGradient(
            currentColor
        )}
    );
`;

export const Logo = styled.img`
    width: 5rem;
    border-radius: 25px;
    margin-bottom: 2rem;
`

export const CTopText = styled.div`
    color: #fff;
`

export const CTopTitle = styled.div`
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .1rem;
    margin-bottom: 1rem;
`

export const Description = styled.div`
    font-weight: 400;
    letter-spacing: .1rem;
`

export const DisplayImage = styled(motion.div)`
    height: 10%;
    user-select: none;

    img {
        user-select: none;
    }
`

export const DisplayImageOne = styled(motion.img)`
    width: 30rem;
    position: absolute;
    top: -13.3rem;
    right: -14.5rem;
    transition: transform 1s;
`

export const CBottom = styled.div`
    width: 100%;
    height: 50%;
    padding: 2rem 3rem;
`

export const CBottomTitle = styled.h1`
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: .1rem;
    color: #333;
    margin-bottom: 0.6rem;
`

export const Badge = styled.div`
    position: absolute;
    top: 30rem;
    right: 5rem;
    width: 3.5rem;
    height: 1.6rem;
    background: #25d390;
    color: #fff;
    display: grid;
    place-items: center;
    border-radius: 0.3rem;
    font-size: 0%.9rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
`