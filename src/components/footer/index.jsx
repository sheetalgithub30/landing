import React from "react";
import {Flex, Box, Text, Image, Link, useMediaQuery} from "@chakra-ui/react"
import { influcent, instagram, linkedin, influcentWhite} from "./../../assets/icons/export.js";


const Index = () => {
  const [isGreaterThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isGreaterThan600] = useMediaQuery('(min-width: 600px)')

    return (
      <Flex bg='black' w='100%' h='fit-content'>
        <Flex w={isGreaterThan1000 ? '80%' : "95%"} mx='auto' flexDir='column' gap='40px' py='50px' px={isGreaterThan600 ? '50px' : "10px"}>
        <Image src={influcentWhite} width='70%' mx='auto' />
        <Flex fontWeight={isGreaterThan600 ? 600 : 400} gap='5px' color='white' justify={isGreaterThan600 ? 'space-around' : "space-between"}>
          {/* <Link>Privacy Policy</Link> */}
          <Flex flexDir="column" gap="5px">
            <Link href={"terms-and-conditions"}>Terms and Conditions</Link>
            <Link href={"privacy-policy"}>Privacy policy</Link>
          </Flex>
          <Flex flexDir='column' gap='10px' alignItems='start'>
            <Link>Influcent Technologies Pvt. Ltd.</Link>
            <Flex gap='10px' justify='flex-end'>
              <Link href="https://www.instagram.com/influcent/" h='35px' w='35px' display='flex' justifyContent='center' alignItems='center' borderRadius='50%' bg='white' boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;" isExternal>
                <Image src={instagram} h='18px' w='18px' />
              </Link>
              <Link href="https://www.linkedin.com/company/influcent/" h='35px' w='35px' borderRadius="50%" bg='white' display='flex' justifyContent='center' alignItems='center' boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;" isExternal>
                <Image src={linkedin} h='18px' w='18px' />
              </Link>
            </Flex>
          </Flex>
        </Flex>
        </Flex>
      </Flex>
    )
}

export default Index;