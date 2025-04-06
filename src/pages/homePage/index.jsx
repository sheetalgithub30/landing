import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  VStack,
  HStack,
  Divider,
  Image,
  Flex,
  useMediaQuery,
  List,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  CheckboxGroup,
  Checkbox,
  useToast,
  Center,
  IconButton,
  background,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/index.jsx";
import Footer from "../../components/footer/index.jsx";
import { ThreeDots } from "react-loader-spinner";
import {
  hero,
  ready1,
  ready2,
  work,
  quotes,
  icon1,
  icon2,
  icon3,
  icon4,
  I1,
  I2,
  I3,
  I4,
} from "../../assets/export.js";
import { FaArrowRight } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import "../../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Interactive from "../../components/interactive.jsx";

function Index() {
  const navigate = useNavigate();
  const toast = useToast();
  const [isGreaterThan1400] = useMediaQuery("(max-width: 1500px)");
  const [isGreaterThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isGreaterThan600] = useMediaQuery("(min-width: 600px)");
  const [isGreaterThan500] = useMediaQuery("(min-width: 500px)");
  const [icon, setIcon] = useState("i1");
  const [image, setImage] = useState("i1");

  return (
    <Flex flexDir="column" fontFamily="Hanken Grotesk">
      <Navbar backgroundColor="white" />
      {/* Hero Section */}
      <Flex
        bgColor="#FFFAF2"
        h="100%"
        my={isGreaterThan600 ? "auto" : "63px"}
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          h="100%"
          w={isGreaterThan600 ? "85%" : "99%"}
          my={isGreaterThan600 ? "140px" : ""}
          mx="auto"
          justifyContent="space-between"
          alignItems="center"
          direction={isGreaterThan600 ? "row" : "column"}
        >
          <Box
            width={isGreaterThan600 ? "57%" : "100%"}
            h="100%"
          >
            <Box marginTop={isGreaterThan600 ? "20px" : "2px"}>
              <Text fontSize="24px" fontWeight="500">
                Turn Your Coaching & Healing Practice into a Scalable Business
              </Text>

              <Text
                fontSize={isGreaterThan600?"61px":"44px"}
                lineHeight={isGreaterThan600?"72px":"50px"}
                fontWeight="700"
                mt="10px"
                
              >
                Your Powers Change Lives
              </Text>
              <Text  fontWeight="300"  fontSize={isGreaterThan600?"61px":"44px"}
                lineHeight={isGreaterThan600?"72px":"50px"}>
                Let’s Help You Reach More People!
              </Text>

              <Text
                color="#00000099"
                fontSize={isGreaterThan600?"18px":"16px"}
                fontWeight="400px"
                mt="10px"
              >
                Whether you offer 1:1 coaching sessions or a self-paced video
                program, Influcent helps you set up a professional, automated
                platform to grow your practice.
              </Text>

              <Flex
                justifyContent="space-between"
                mt="30px"
                w={isGreaterThan600 ? "47%" : "90%"}
                mb={isGreaterThan600 ? "" : "10px"}
              >
                <Button
                  px="0"
                  w="160px"
                  flexShrink={1}
                  bgColor="#171716"
                  color="white"
                  fontWeight="600"
                  fontSize="16px"
                  h="44px"
                  borderRadius="6px"
                  fontFamily="Hanken Grotesk"
                  _hover="none"
                >
                  Book a Demo
                </Button>

                <Button
                  px="0"
                  w="160px"
                  flexShrink={1}
                  bgColor="white"
                  color="#171716"
                  fontWeight="600"
                  fontSize="16px"
                  h="44px"
                  borderRadius="6px"
                  fontFamily="Hanken Grotesk"
                  border="1px solid black"
                  _hover="none"
                >
                  Contact Us
                </Button>
              </Flex>
            </Box>
          </Box>

          <Box>
            <Image src={hero} />
          </Box>
        </Flex>
      </Flex>

      {/* Designed */}
      <Box bgColor="#F8FFED" h="100%">
        <Box my={20} w="90%" ml={isGreaterThan600?"auto":""}
         mx={isGreaterThan600?"":"auto"}
        >
          <Box>
            <Text
              fontSize={isGreaterThan600?"46px":"36px"}
              fontWeight="300"
              lineHeight={isGreaterThan600 ? "" : "60px"}
            >
              Designed for{" "}
              <Text as="span" fontWeight="400">
                Coaches & Healers Like You
              </Text>
            </Text>

            <Text
              fontSize={isGreaterThan600?"18px":"16px"}
              fontWeight="400"
              color="#00000099"
              w={isGreaterThan600 ? "70%" : ""}
            >
              Empowering you to share your wisdom and grow your income through
              1:1 consultations, course sales, and digital offerings - all in
              one place.
            </Text>
          </Box>

          {isGreaterThan600 && (
            <Flex justifyContent="">
              <Box w="50%" mt={10}>
                <Box w="449px">
                  <Flex
                    justifyContent="flex-start"
                    alignItems="start"
                    _hover={{ cursor: "pointer" }} // Add pointer cursor on hover
                    onMouseEnter={() => setIcon("i1")} // Set icon to 'i1' on hover
                    // onMouseLeave={() => setIcon(null)} // Reset the icon when mouse leaves
                    // Reset the icon when mouse leaves
                    py={4}
                    onClick={() => {
                      setIcon("i1");
                      setImage("i1");
                    }}
                  >
                    {icon === "i1" && (
                      <Image
                        src={icon1}
                        mt={3}
                        transition="left 0.5s ease, opacity 0.5s ease 5s" // Transition the icon's position and opacity
                      />
                    )}
                    <Box ml={2}>
                      <Text fontSize="22px" fontWeight="400">
                        Seamless 1.1 Consultations
                      </Text>

                      {icon === "i1" && (
                        <Text
                          fontSize="16px"
                          fontWeight="400"
                          color="#000000B2"
                          w="85%"
                        >
                          Set your schedule, accept payments, and host sessions
                          hassle-free
                        </Text>
                      )}
                    </Box>
                  </Flex>

                  <Divider border="1px solid #000000DE" width="449px" />

                  <Flex
                    _hover={{ cursor: "pointer" }} // Add pointer cursor on hover
                    onMouseEnter={() => setIcon("i2")} // Set icon to 'i1' on hover
                    onMouseLeave={() => setIcon(image)} // Reset the icon when mouse leaves
                    // Reset the icon when mouse leaves
                    justifyContent="flex-start"
                    alignItems="start"
                    py={4}
                    onClick={() => {
                      setIcon("i2");
                      setImage("i2");
                    }}
                  >
                    {icon === "i2" && (
                      <Image
                        src={icon2}
                        mt={1}
                        transition="left 0.5s ease, opacity 0.5s ease 5s" // Transition the icon's position and opacity
                      />
                    )}
                    <Box ml={2}>
                      <Text fontSize="22px" fontWeight="400">
                        Sell Your Own Video Programs
                      </Text>
                      {icon === "i2" && (
                        <Text
                          fontSize="16px"
                          fontWeight="400"
                          color="#000000B2"
                        >
                          Offer pre-recorded courses & passive income products
                        </Text>
                      )}
                    </Box>
                  </Flex>

                  <Divider border="1px solid #000000DE" width="449px" />

                  <Flex
                    _hover={{ cursor: "pointer" }} // Add pointer cursor on hover
                    onMouseEnter={() => setIcon("i3")} // Set icon to 'i1' on hover
                    onMouseLeave={() => setIcon(image)} // Reset the icon when mouse leaves
                    // Reset the icon when mouse leaves
                    justifyContent="flex-start"
                    alignItems="start"
                    py={4}
                    onClick={() => {
                      setIcon("i3");
                      setImage("i3");
                    }}
                  >
                    {icon === "i3" && (
                      <Image
                        src={icon3}
                        mt={2}
                        transition="left 0.5s ease, opacity 0.5s ease 5s" // Transition the icon's position and opacity
                      />
                    )}
                    <Box ml={2}>
                      <Text fontSize="22px" fontWeight="400">
                        Effortless Bookings & Payments
                      </Text>

                      {icon === "i3" && (
                        <Text
                          fontSize="16px"
                          fontWeight="400"
                          color="#000000B2"
                          w="87%"
                        >
                          No more back-and-forth DMs—clients can book & pay
                          instantly
                        </Text>
                      )}
                    </Box>
                  </Flex>
                  <Divider border="1px solid #000000DE" width="449px" />

                  <Flex
                    _hover={{ cursor: "pointer" }} // Add pointer cursor on hover
                    onMouseEnter={() => setIcon("i4")} // Set icon to 'i1' on hover
                    onMouseLeave={() => setIcon(image)} // Reset the icon when mouse leaves
                    // Reset the icon when mouse leaves
                    justifyContent="flex-start"
                    alignItems="start"
                    py={4}
                    onClick={() => {
                      setIcon("i4");
                      setImage("i4");
                    }}
                  >
                    {icon === "i4" && (
                      <Image
                        src={icon4}
                        mt={1}
                        transition="left 0.5s ease, opacity 0.5s ease 5s" // Transition the icon's position and opacity
                      />
                    )}
                    <Box ml={2}>
                      <Text fontSize="22px" fontWeight="400">
                        Tech-Free Setup
                      </Text>
                      {icon === "i4" && (
                        <Text
                          fontSize="16px"
                          fontWeight="400"
                          color="#000000B2"
                          w="95%"
                        >
                          We handle everything so you can focus on transforming
                          lives
                        </Text>
                      )}
                    </Box>
                  </Flex>

                  <Divider border="1px solid #000000DE" width="449px" />
                </Box>
              </Box>

              <Box>
                <Image
                  src={
                    image == "i1"
                      ? I1
                      : image == "i2"
                        ? I2
                        : image == "i3"
                          ? I3
                          : I4
                  }
                />
              </Box>
            </Flex>
          )}

          {!isGreaterThan600 && (
            <Box>
              <Interactive />
            </Box>
          )}

          <Flex mt={isGreaterThan600 ? -16 : 16}
           justifyContent={isGreaterThan600?"":"center"}
          >
            <Button
              px="0"
              w="160px"
              flexShrink={1}
              bgColor="#171716"
              color="white"
              fontWeight="600"
              fontSize="16px"
              h="44px"
              borderRadius="6px"
              fontFamily="Hanken Grotesk"
              _hover="none"
            >
              Book a Demo
            </Button>
          </Flex>
        </Box>
      </Box>

      {/* Testimonial */}
      <Box w={isGreaterThan600 ? "80%" : "90%"} mx="auto" my={20} h="100%">
        <Flex w={isGreaterThan600 ? "99%" : "99%"} justifyContent="center">
          <Swiper
            modules={[Autoplay, Pagination]}
            style={{ height: isGreaterThan600?"500px":"700px" }}
            // spaceBetween={isGreaterThan600 ? 20 : 60} // Adjust the spacing between slides if needed
            slidesPerView={1}
            loop={true} // Enable looping
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000, // 5 seconds delay
              disableOnInteraction: true,
            }}
          >
            <SwiperSlide>
              <Box
                // h="375px"
                h={isGreaterThan600 ? "" : "100%"}
                w="100%"
                alignItems="center"
                overflow="hidden"
                borderRadius="20px"
                padding="12px"
              >
                <Flex alignItems="center">
                  <Image
                    src={quotes}
                    w={isGreaterThan600 ? "" : "80px"}
                    h={isGreaterThan600 ? "" : "80px"}
                  />
                  <Divider
                    border={isGreaterThan600 ? "4px" : "2px"}
                    color="#F9A60233"
                    width="200px"
                  />
                </Flex>

                <Flex
                  alignItems={isGreaterThan600 ? "center" : "flex-start"}
                  ml={isGreaterThan600 ? 14 : 1}
                >
                  <Box
                    height="200px"
                    width="200px"
                    borderLeft={
                      isGreaterThan600
                        ? "8px solid #F9A60233"
                        : "2px solid #F9A60233"
                    }
                    mt={isGreaterThan600 ? -5 : ""}
                  />

                  <Box>
                    <Text fontSize="24px" fontWeight="400">
                      Working with Influcent was a game changer for our
                      business! They helped us design a stunning landing page
                      that perfectly captures our brand's essence. Not only
                      that, but their lead management system streamlined our
                      process, making it easier than ever to connect with
                      potential clients. Highly recommend their services!
                    </Text>

                    <Text
                      textColor="#00000099"
                      fontSize="24px"
                      fontWeight="500"
                      mt="40px"
                    >
                      - Amit Sharma
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <Box
                // h="375px"
                h={isGreaterThan600 ? "" : "100%"}
                w="100%"
                alignItems="center"
                overflow="hidden"
                borderRadius="20px"
                padding="12px"
              >
                <Flex alignItems="center">
                  <Image
                    src={quotes}
                    w={isGreaterThan600 ? "" : "80px"}
                    h={isGreaterThan600 ? "" : "80px"}
                  />

                  <Divider
                    border={isGreaterThan600 ? "4px" : "2px"}
                    color="#F9A60233"
                    width="200px"
                  />
                </Flex>

                <Flex
                  alignItems={isGreaterThan600 ? "center" : "flex-start"}
                  ml={isGreaterThan600 ? 14 : 1}
                >
                  <Box
                    height="200px"
                    width="200px"
                    borderLeft={
                      isGreaterThan600
                        ? "8px solid #F9A60233"
                        : "2px solid #F9A60233"
                    }
                    mt={isGreaterThan600 ? -5 : ""}
                  />

                  <Box>
                    <Text fontSize="24px" fontWeight="400">
                      Before Influcent, managing my services felt
                      chaotic—juggling bookings, payments, and keeping my online
                      presence updated. But they took care of everything, and
                      now I can just focus on helping my clients. I wish I had
                      found them sooner!
                    </Text>

                    <Text
                      textColor="#00000099"
                      fontSize="24px"
                      fontWeight="500"
                      mt="40px"
                    >
                      - Priya Verma
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <Box
                // h="375px"
                h={isGreaterThan600 ? "" : "100%"}
                w="100%"
                alignItems="center"
                overflow="hidden"
                borderRadius="20px"
                padding="12px"
              >
                <Flex alignItems="center">
                  <Image
                    src={quotes}
                    w={isGreaterThan600 ? "" : "80px"}
                    h={isGreaterThan600 ? "" : "80px"}
                  />
                  <Divider
                    border={isGreaterThan600 ? "4px" : "2px"}
                    color="#F9A60233"
                    width="200px"
                  />
                </Flex>

                <Flex
                  alignItems={isGreaterThan600 ? "center" : "flex-start"}
                  ml={isGreaterThan600 ? 14 : 1}
                >
                  <Box
                    height="200px"
                    width="200px"
                    borderLeft={
                      isGreaterThan600
                        ? "8px solid #F9A60233"
                        : "2px solid #F9A60233"
                    }
                    mt={isGreaterThan600 ? -5 : ""}
                  />

                  <Box>
                    <Text fontSize="24px" fontWeight="400">
                      I had no idea where to start when it came to setting up my
                      website and monetizing my services. The team at Influcent
                      guided me through everything, and now I have a solid
                      online presence. The best part? I don’t have to stress
                      about tech anymore!
                    </Text>

                    <Text
                      textColor="#00000099"
                      fontSize="24px"
                      fontWeight="500"
                      mt="40px"
                    >
                      - Rahul Mehta
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Flex>

        <Flex my={isGreaterThan600?-14:-12} justifyContent="flex-end" mb={isGreaterThan600?5:""}>
          <Text
            fontSize={isGreaterThan600 ? "46px" : "36px"}
            fontWeight="300"
            textAlign= "right"
            w={isGreaterThan600?"100%":"70%"}
          >
            What Our{" "}
            <Text as="span" fontWeight="700">
              Clients Says
            </Text>
          </Text>
        </Flex>
      </Box>

      {/* How it works  */}
      <Box bgColor="#FAF5FF">
        <Flex
          w={isGreaterThan600 ? "83%" : "90%"}
          mx="auto"
          justifyContent="space-around"
          alignItems="center"
          h="100%"
          direction={isGreaterThan600 ? "row" : "column"}
          my="80px"
        >
          <Box>
            <Text
              fontSize={isGreaterThan600?"46px":"36px"}
              fontWeight="300"
              textAlign={isGreaterThan600 ? "" : "center"}
            >
              How It{" "}
              <Text as="span" fontWeight="700">
                Works?
              </Text>
            </Text>

            <Box w="100%" mt={12}>
              <Flex justifyContent="flex-start" alignItems="center">
                <Center>
                  <Box
                    width="80px"
                    height="80px"
                    borderRadius="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="24px"
                    fontWeight="600"
                    border="0.8px solid #0000001A"
                    bgColor="#FFFFFF"
                  >
                    01
                  </Box>
                </Center>

                <Box ml={4}>
                  <Text fontSize="22px" fontWeight="400">
                    Book a Free Strategy Call
                  </Text>
                  <Text
                    fontSize="18px"
                    fontWeight="400"
                    color="#00000099"
                    mt={1}
                  >
                    Let’s map out your coaching business model
                  </Text>
                </Box>
              </Flex>

              <Box
                borderLeft="1px dotted #00000080" // Create the dotted line between steps
                marginLeft={isGreaterThan600 ? "65px" : "40px"}
                height={isGreaterThan600 ? "60px" : "90px"} // Adjust the height of the dotted line
                position="relative"
              />

              <Flex justifyContent="flex-start" alignItems="center">
                <Center>
                  <Box
                    width="80px"
                    height="80px"
                    borderRadius="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="24px"
                    fontWeight="600"
                    border="0.8px solid #0000001A"
                    bgColor="#FFFFFF"
                  >
                    02
                  </Box>
                </Center>

                <Box ml={4}>
                  <Text fontSize="22px" fontWeight="400">
                    Get Your Custom Platform
                  </Text>
                  <Text
                    fontSize="18px"
                    fontWeight="400"
                    color="#00000099"
                    mt={1}
                  >
                    A branded site to host consultations & video programs
                  </Text>
                </Box>
              </Flex>

              <Box
                borderLeft="1px dotted #00000080" // Create the dotted line between steps
                marginLeft={isGreaterThan600 ? "65px" : "40px"}
                height={isGreaterThan600 ? "60px" : "90px"}
                position="relative"
                top="-7px"
              />

              <Flex justifyContent="flex-start" alignItems="center">
                <Center>
                  <Box
                    width="80px"
                    height="80px"
                    borderRadius="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="24px"
                    fontWeight="600"
                    border="0.8px solid #0000001A"
                    bgColor="#FFFFFF"
                  >
                    03
                  </Box>
                </Center>

                <Box ml={4}>
                  <Text fontSize="22px" fontWeight="400">
                    Start Earning with Ease
                  </Text>
                  <Text
                    fontSize="18px"
                    fontWeight="400"
                    color="#00000099"
                    mt={1}
                  >
                    Automate bookings, payments & client management{" "}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>

          <Flex mt="80px" justifyContent="flex-end">
            <Image src={work} />
          </Flex>
        </Flex>
      </Box>

      {/* FAQ */}
      <Flex
        w="80%"
        m="auto"
        justifyContent="space-around"
        mt={20}
        mb={20}
        direction={isGreaterThan600 ? "row" : "column"}
      >
        <Box w={isGreaterThan600 ? "45%" : "100%"}>
          <Text
            fontWeight="700"
            fontSize={isGreaterThan600 ? "46px" : "36px"}
            lineHeight={isGreaterThan600 ? "54px" : "50px"}
          >
            Frequently Asked Questions
          </Text>
          <Text color="#00000099" fontSize={isGreaterThan600?"18px":"16px"} fontWeight="400" mt="10px">
            Got Questions? We’ve Got Answers!
          </Text>
          <Button
            bgColor="#171716"
            color="white"
            w="160px"
            fontWeight="600"
            fontSize="16px"
            h="44px"
            borderRadius="5px"
            mt={10}
            _hover="none"
          >
            Contact Us
          </Button>
        </Box>
        <Box
          w={isGreaterThan600 ? "50%" : "100%"}
          maxHeight="54vh"
          overflowY="auto"
          sx={{
            scrollbarWidth: "thin",
            scrollbarColor: "#AFAFAF #E8E8E8",
          }}
          mt={isGreaterThan600 ? "" : "30px"}
        >
          <Accordion allowToggle>
            <AccordionItem
              border="1px solid #00000014"
              borderRadius="5px"
              my={2}
            >
              <AccordionButton>
                <Flex flex="1" textAlign="left" alignItems="center" h="50px">
                  <Text fontSize="18px" fontWeight="500">
                    How long does it take to set up my page?
                  </Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel>
                <Text color="#00000099" fontSize="16px" fontWeight="500">
                  Usually within 2-3 business days.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              border="1px solid #00000014"
              borderRadius="5px"
              my={2}
            >
              <AccordionButton>
                <Flex flex="1" textAlign="left" alignItems="center" h="50px">
                  <Text fontSize="18px" fontWeight="500">
                    Can I sell multiple products?
                  </Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel>
                <Text color="#00000099" fontSize="16px" fontWeight="500">
                  Yes! Offer consultations, digital products, and more from a
                  single platform.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              border="1px solid #00000014"
              borderRadius="5px"
              my={2}
            >
              <AccordionButton>
                <Flex flex="1" textAlign="left" alignItems="center" h="50px">
                  <Text fontSize="18px" fontWeight="500">
                    What payment methods are supported?
                  </Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel>
                <Text color="#00000099" fontSize="16px" fontWeight="500">
                  We support credit/debit cards, UPI, net banking, and wallets.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              border="1px solid #00000014"
              borderRadius="5px"
              my={2}
            >
              <AccordionButton>
                <Flex flex="1" textAlign="left" alignItems="center" h="50px">
                  <Text fontSize="18px" fontWeight="500">
                    What if I need help?
                  </Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel>
                <Text color="#00000099" fontSize="16px" fontWeight="500">
                  Our support team is just a click away—reach out anytime!
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              border="1px solid #00000014"
              borderRadius="5px"
              my={2}
            >
              <AccordionButton>
                <Flex flex="1" textAlign="left" alignItems="center" h="50px">
                  <Text fontSize="18px" fontWeight="500">
                    Do I need technical knowledge to use the platform?
                  </Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel>
                <Text color="#00000099" fontSize="16px" fontWeight="500">
                  Not at all! Our platform is beginner-friendly, and we’re here
                  to guide you if needed.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              border="1px solid #00000014"
              borderRadius="5px"
              my={2}
            >
              <AccordionButton>
                <Flex flex="1" textAlign="left" alignItems="center" h="50px">
                  <Text fontSize="18px" fontWeight="500">
                    How does the commission-based model work?
                  </Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel>
                <Text color="#00000099" fontSize="16px" fontWeight="500">
                  We charge a small percentage commission on each sale made
                  through your platform. This allows us to maintain and improve
                  the services offered to you.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              border="1px solid #00000014"
              borderRadius="5px"
              my={2}
            >
              <AccordionButton>
                <Flex flex="1" textAlign="left" alignItems="center" h="50px">
                  <Text fontSize="18px" fontWeight="500">
                    Can I customize my landing page?
                  </Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel>
                <Text color="#00000099" fontSize="16px" fontWeight="500">
                  Absolutely! We’ll design a personalized page that reflects
                  your brand and style.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              border="1px solid #00000014"
              borderRadius="5px"
              my={2}
            >
              <AccordionButton>
                <Flex flex="1" textAlign="left" alignItems="center" h="50px">
                  <Text fontSize="18px" fontWeight="500">
                    Are there any hidden fees?
                  </Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel>
                <Text color="#00000099" fontSize="16px" fontWeight="500">
                  No hidden fees! All costs are clearly outlined in your chosen
                  pricing plan.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              border="1px solid #00000014"
              borderRadius="5px"
              my={2}
            >
              <AccordionButton>
                <Flex flex="1" textAlign="left" alignItems="center" h="50px">
                  <Text fontSize="18px" fontWeight="500">
                    How can I track my sales and performance?
                  </Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel>
                <Text color="#00000099" fontSize="16px" fontWeight="500">
                  You’ll have access to a comprehensive analytics dashboard with
                  detailed insights on your sales, traffic, and audience
                  behavior.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              border="1px solid #00000014"
              borderRadius="5px"
              my={2}
            >
              <AccordionButton>
                <Flex flex="1" textAlign="left" alignItems="center" h="50px">
                  <Text fontSize="18px" fontWeight="500">
                    Can I manage customer data securely?
                  </Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel>
                <Text color="#00000099" fontSize="16px" fontWeight="500">
                  Yes, our platform ensures that all customer data is managed
                  and stored securely in compliance with data protection laws.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              border="1px solid #00000014"
              borderRadius="5px"
              my={2}
            >
              <AccordionButton>
                <Flex flex="1" textAlign="left" alignItems="center" h="50px">
                  <Text fontSize="18px" fontWeight="500">
                    What happens if I want to stop using the service?
                  </Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel>
                <Text color="#00000099" fontSize="16px" fontWeight="500">
                  You can cancel your subscription anytime. However, we
                  recommend notifying us in advance for a smooth transition.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              border="1px solid #00000014"
              borderRadius="5px"
              my={2}
            >
              <AccordionButton>
                <Flex flex="1" textAlign="left" alignItems="center" h="50px">
                  <Text fontSize="18px" fontWeight="500">
                    Can I set up my refund policy?
                  </Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel>
                <Text color="#00000099" fontSize="16px" fontWeight="500">
                  Yes, you can define your refund and cancellation policies,
                  which will be clearly stated on your landing page.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>

      {/* Ready to Scale Your Coaching Business? */}
      <Flex
        bgColor="#F4FAFF"
        justifyContent="space-between"
        alignItems="center"
        direction={isGreaterThan600 ? "row" : "column"}
        p={isGreaterThan600 ? "" : "24px"}
      >
        {isGreaterThan600 && <Image src={ready1} m={6} />}
        <Flex
          justifyContent="space-between"
          alignItems="center"
          direction="column"
          w={isGreaterThan600 ? "" : "85%"}
          textAlign={isGreaterThan600 ? "" : "center"}
        >
          <Text fontSize={isGreaterThan600?"42px":"36px"} fontWeight="600">
            Ready to Scale Your Coaching Business?
          </Text>
          <Button
            bgColor="#171716"
            color="white"
            w="278px"
            fontWeight="600"
            fontSize="17px"
            h="51px"
            borderRadius="5px"
            mt={10}
            _hover="none"
          >
            Book a Free Strategy Call Now
          </Button>
        </Flex>

        {isGreaterThan600 && <Image src={ready2} mr={6} />}
      </Flex>

      <Footer />
    </Flex>
  );
}

export default Index;
