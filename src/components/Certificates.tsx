// components/Carousel.tsx
import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image'; // Import Image component from Next.js

// Replace these with your actual image paths
const carouselImages = [
  '/certs/cert_one.png',
  '/certs/cert_two.png',
//   '/certs/cert_three.png',
];

const Carousel: React.FC = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '10px', // Adjust center padding as needed
    speed: 500,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For tablets
        settings: {
          centerPadding: '1px', // Adjust padding for tablets
        },
      },
      {
        breakpoint: 480, // For mobile devices
        settings: {
          centerPadding: '10px', // Adjust padding for mobile devices
        },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
      <Box
        sx={{
          position: 'absolute',
          bottom: '10px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {dots}
      </Box>
    ),
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%', // Full width
        maxWidth: '80%', // Max width of the container
        margin: '40px auto',
        mb:{xs:"0px", sm:"8rem", md:"2rem", lg:"6.5rem"},
        height: '280px', // Set a fixed height for the carousel
        '@media (max-width: 768px)': {
          maxWidth: '90%', // Adjust max width for tablets
        },
        '@media (max-width: 480px)': {
          maxWidth: '100%', // Adjust max width for mobile devices
        },
        '& .slick-slide': {
          padding: '0 10px',
        },
        '& .slick-slide img': {
          borderRadius: '8px',
          background: '#fff',
          width: '100%',
          height: {xs:"18vh", sm:'20vh', md:"45vh"},
          transition: 'all 300ms ease',
          opacity: 0.8,
          transform: 'scale(0.9)',
          objectFit: 'fit', // Ensure the image covers the container while maintaining its aspect ratio
        },
        '& .slick-center img': {
          transform: 'scale(1.0)',
          opacity: 1,
        },
        '& .slick-dots': {
          bottom: '10px',
        },
      }}
    >
      <Slider {...settings}>
        {carouselImages.map((src, index) => (
          <Box key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={400}
              height={300}
              layout="fit" 
              objectFit="fit" 
              priority // Optionally add priority for performance
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
