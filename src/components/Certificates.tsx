"use client"

import React from 'react';
import Slider from "react-slick";
import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import certOne from "../../public/certs/cert_one.png";
import certTwo from "../../public/certs/cert_two.png"; 
import certThree from "../../public/certs/cert_three.png";

const Certificates = () => {
    const settings = {
        className: "center",
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
          imageUrl: certOne,
        },
        {
          id: 2,
          title: 'Certificate 2',
          description: 'Description for Certificate 2',
          imageUrl: certTwo,
        },
        {
            id: 3,
            title: 'Certificate 2',
            description: 'Description for Certificate 2',
            imageUrl: certThree,
          },
        // Add more certificates as needed
    ];

    return (
        <Box sx={{ width: '100%', margin: '0 auto', mt: 4 }}>
            <Slider {...settings}>
                {certificates.map((certificate) => (
                    <Box key={certificate.id} sx={{ px: 2, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Image
                            src={certificate.imageUrl}
                            alt={certificate.title}
                            width={400}
                            height={300}
                            style={{
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

export default Certificates;
