import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Button, Image, useMediaQuery, Select } from "@chakra-ui/react";
import { influcent, instagram, linkedin } from "../../assets/export.js";

const Index = ({ backgroundColor }) => {
  const navigate = useNavigate();
  const [isGreaterThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isGreaterThan600] = useMediaQuery("(min-width: 600px)");

  return (
    <Flex
      bg={backgroundColor}
      w="100%"
      h="60px"
      justify="center"
      borderBottom="1px solid #00000014"
      position="fixed"
      zIndex={100}
    >
      <Flex
        w={isGreaterThan1000 ? "80%" : "95%"}
        justify="space-between"
        alignItems="center"
      >
        <Flex cursor="pointer">
          <Image src={influcent} w="145px" onClick={() => navigate("/")} />
        </Flex>

        <Flex alignItems="center" gap="10px" w="100%" justify="end">
          {/* <Select fontSize="14px" fontWeight="500" width="165px" height="40px" border="1px solid #00000033" fontFamily="Inter" 
           >
            <option>Explore Offerings</option>
           </Select> */}

          <a href="https://www.influcent.com/#offerings">
            <Button
              fontSize="14px"
              fontWeight="500"
              width="165px"
              height="40px"
              border="1px solid #00000033"
              fontFamily="Inter"
              borderRadius="5px"
              bgColor="white"
              _hover="none"
            >
              Explore Offerings
            </Button>
          </a>

          <a href="https://www.influcent.com/contact">
            <Button
              w="110px"
              flexShrink={1}
              bgColor="#171716"
              color="white"
              fontWeight="600"
              fontSize="14px"
              h="40px"
              borderRadius="5px"
              fontFamily="Hanken Grotesk"
              _hover="none"
            >
              Contact Us
            </Button>
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;
