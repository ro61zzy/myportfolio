"use client"

import React from 'react'
import Slider from "react-slick";
import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Certificates = () => {
    const settings = {
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        afterChange: (index: any) => console.log(`Current slide index: ${index}`),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              centerPadding: '40px',
            },
          },
        ],
      };

      const certificates = [
        {
          id: 1,
          title: 'Certificate 1',
          description: 'Description for Certificate 1',
          imageUrl: 'path_to_certificate_image_1.jpg',
        },
        {
          id: 2,
          title: 'Certificate 2',
          description: 'Description for Certificate 2',
          imageUrl: 'path_to_certificate_image_2.jpg',
        },
        {
          id: 3,
          title: 'Certificate 3',
          description: 'Description for Certificate 3',
          imageUrl: 'path_to_certificate_image_3.jpg',
        },
        {
          id: 4,
          title: 'Certificate 4',
          description: 'Description for Certificate 4',
          imageUrl: 'path_to_certificate_image_4.jpg',
        },
        // Add more certificates as needed
      ];
    

  return (
       <Box sx={{ width: '80%', margin: '0 auto', mt: 4 }}>
      <Slider {...settings}>
        {certificates.map((certificate) => (
          <Box key={certificate.id} sx={{ px: 2, textAlign: 'center' }}>
            <Box
              component="img"
              src={certificate.imageUrl}
              alt={certificate.title}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.5s',
              }}
            />
            <Typography variant="h6" sx={{ mt: 2 }}>
              {certificate.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {certificate.description}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default Certificates