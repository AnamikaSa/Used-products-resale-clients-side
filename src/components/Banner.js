import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import styled from 'styled-components';
// import { Container } from 'postcss';
import React, { useState } from 'react';

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #d9bbe5;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 50px;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;

const ForBanner = styled.div`
  height: 50%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const Banner = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
    return (
        <div className='flex invisible lg:visible' style={{ width: '100%', overflow: 'hidden', height: '60vh', position: 'relative' }}>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <ForBanner slideIndex={slideIndex}>
                <Slide>
                    <div style={{ height: '80%', flex: '1' }}>
                        <img className='ml-20' style={{ height: '50%' }} src="https://i.ibb.co/18KD4NJ/painting-woman-floral-summer-dress-isolated-transparent-background-176765-27-removebg-preview.jpg" alt='' />
                    </div>
                    <div className='pr-36 pb-72' style={{ flex: '1' }}>
                        <h1 className="text-6xl font-bold">Summer Sale</h1>
                        <p className='m-10 text-xl font-semibold'>Let's buy accouding to your choice.</p>
                        <button className='btn btn-active btn-secondary'>Shop Now</button>
                    </div>
                </Slide>

                <Slide>
                    <div style={{ height: '80%', flex: '1' }}>
                        <img className='ml-20' style={{ height: '50%' }} src='https://i.ibb.co/TY4Z80B/15-3.png' alt='' />
                    </div>
                    <div className='pr-36 pb-72' style={{ flex: '1' }}>
                        <h1 className="text-6xl font-bold">Spring Sale</h1>
                        <p className='m-10 text-xl font-semibold'>Let's buy accouding to your choice.</p>
                        <button className='btn btn-active btn-secondary'>Shop Now</button>
                    </div>
                </Slide>

                <Slide>
                    <div style={{ height: '80%', flex: '1' }}>
                        <img className='ml-20' style={{ height: '50%' }} src="https://i.ibb.co/c8ghyVT/winter.jpg" alt='' />
                    </div>
                    <div className='pr-36 pb-72' style={{ flex: '1' }}>
                        <h1 className="text-6xl font-bold">Winter Sale</h1>
                        <p className='m-10 text-xl font-semibold'>Let's buy accouding to your choice.</p>
                        <button className='btn btn-active btn-secondary'>Shop Now</button>
                    </div>
                </Slide>
            </ForBanner>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlinedIcon />
            </Arrow>
        </div>

    );
};

export default Banner;