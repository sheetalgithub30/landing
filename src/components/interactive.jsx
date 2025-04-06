import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  IconButton,
  Avatar,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { icon1, icon2, icon3,icon4 ,I1,I2,I3,I4 } from "../assets/export";

const Interactive = () => {
  const card_data = [
    {
      id: 1,
      icon:icon1,
      heading:"Seamless 1.1 Consultations",
      desc:"Set your schedule, accept payments, and host sessions hassle-free",
      src:I1
    },
    {
        id: 2,
        icon:icon2,
        heading:"Sell Your Own Video Programs",
        desc:"Offer pre-recorded courses & passive income products",
        src:I2
      }, {
        id: 3,
        icon:icon3,
        heading:"Effortless Bookings & Payments",
        desc:"No more back-and-forth DMs—clients can book & pay instantly",
        src:I3
      }, {
        id: 4,
        icon:icon4,
        heading:"Tech-Free Setup",
        desc:"We handle everything so you can focus on transforming lives",
        src:I4
      },
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < card_data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Check if the screen size is greater than 600px
  const [isGreaterThan600] = useMediaQuery("(min-width: 600px)");

  // Determine the number of visible testimonials based on screen size
  const designedFor = card_data.slice(currentIndex, currentIndex + 1); // Show 1 testimonials if screen size < 600px

  return (
    <Box
      width="100%"
      fontFamily="Hanken Grotesk"
      position="relative"
      mt="40px"
    >
      <Flex justify="center" align="center"  mb="20px">
      

        {/* Cards */}
        <Flex >
          {designedFor.map((data, index) => {
            return (
             <Box>
                <Flex justifyContent="flex-start" alignItems="start">
                   <Image src={data.icon} w="26px" h="26px" mt={1} />
                   <Box ml={2}>
                    <Text fontSize="20px" fontWeight="500">{data.heading}</Text>
                    <Text color="#000000B2" fontSize="14px" fontWeight="400">{data.desc}</Text>
                   </Box>

                </Flex>

                <Image src={data.src}/>
             </Box>
            );
          })}
        </Flex>

     
      </Flex>

<Flex justifyContent="center">

      <Box>
          {/* Previous Button */}
          <IconButton
          aria-label="Previous testimonial"
          icon={<FaArrowLeft />}
          onClick={handlePrev}
          isDisabled={currentIndex === 0}
          borderRadius="5px"
          bgColor="white"
          border="1px solid #00000014"
          mx={2}
            />


           {/* Next Button */}
           <IconButton
          aria-label="Next testimonial"
          icon={<FaArrowRight />}
          onClick={handleNext}
          isDisabled={
            currentIndex === card_data.length - (isGreaterThan600 ? 2 : 1)
          }
          borderRadius="5px"
          bgColor="white"
          border="1px solid #00000014"
          mx={2}
        />
      </Box>

</Flex>
    </Box>
  );
};

export default Interactive;
