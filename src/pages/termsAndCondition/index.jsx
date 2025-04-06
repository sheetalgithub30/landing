import React from "react";
import {Flex, Text, UnorderedList, ListItem, Box, Heading } from "@chakra-ui/react"
import Navbar from './../../components/navbar/index.jsx';
import Footer from './../../components/footer/index.jsx';


const Index = () => {


    return (
      <Flex fontFamily="Hanken Grotesk" style={{ fontSize: 'clamp(13px, 2vw, 18px)' }} flexDir='column' w='100%' h='100%'>
        <Navbar backgroundColor="white"/>
        <Box p={6} mt="100px" mb="100px" maxW="800px" mx="auto">
      <Heading as="h2" size="lg" mb={4}>Terms & Conditions</Heading>
      <Text fontSize="sm" mb={4}>
        Last updated on 27-10-2024 14:09:49
      </Text>

      <Text mb={4}>
  These <b>Terms and Conditions</b>, along with our <b>Privacy Policy</b> or other terms (<b>“Terms”</b>), constitute a binding agreement between <b>INFLUCENT TECHNOLOGIES PRIVATE LIMITED</b>, (<b>“Website Owner”</b> or <b>“we”</b> or <b>“us”</b> or <b>“our”</b>) and <b>you</b> (<b>“you”</b> or <b>“your”</b>) and relate to your use of our website, goods (as applicable), or services (as applicable) (collectively, <b>“Services”</b>).
</Text>


      <Text mb={4}>
        By using our website and availing the Services, you agree that you have read and
        accepted these Terms (including the Privacy Policy). We reserve the right to modify
        these Terms at any time and without assigning any reason. It is your responsibility
        to periodically review these Terms to stay informed of updates.
      </Text>

      <Text mt="30px" mb="10px">The use of this website or availing of our Services is subject to the following terms of use: 
      </Text>

      <Heading as="h3" size="md" mb={2}>
        Terms of Use
      </Heading>
      <UnorderedList spacing={3} pl={5}>
        <ListItem>
          To access and use the Services, you agree to provide true, accurate, and complete
          information to us during and after registration and shall be responsible for all
          acts done through your registered account.
        </ListItem>

        <ListItem>
          Neither we nor any third parties provide any warranty or guarantee as to the accuracy,
          timeliness, performance, completeness, or suitability of the information and materials
          offered on this website or through the Services, for any specific purpose. You
          acknowledge that such information and materials may contain inaccuracies or errors, and
          we expressly exclude liability for such inaccuracies or errors to the fullest extent
          permitted by law.
        </ListItem>

        <ListItem>
          Your use of our Services and the website is solely at your own risk and discretion.
          You are required to independently assess and ensure that the Services meet your
          requirements.
        </ListItem>

        <ListItem>
          The contents of the Website and the Services are proprietary to Us, and you will not
          have any authority to claim any intellectual property rights, title, or interest in its contents.
        </ListItem>

        <ListItem>
          You acknowledge that unauthorized use of the Website or the Services may lead to
          action against you as per these Terms or applicable laws.
        </ListItem>

        <ListItem>
          You agree to pay us the charges associated with availing the Services.
        </ListItem>

        <ListItem>
          You agree not to use the website and/or Services for any purpose that is unlawful,
          illegal, or forbidden by these Terms or Indian or local laws that might apply to you.
        </ListItem>

        <ListItem>
          You agree and acknowledge that the website and Services may contain links to other
          third-party websites. On accessing these links, you will be governed by the terms of
          use, privacy policy, and other policies of those third-party websites.
        </ListItem>

        <ListItem>
          You understand that upon initiating a transaction for availing the Services, you are
          entering into a legally binding and enforceable contract with us for the Services.
        </ListItem>

        <ListItem>
            Please note that all purchases made on our website are final and non-refundable. By completing your purchase, you agree that refunds will not be provided. We recommend reviewing the details carefully before purchasing to ensure it aligns with your needs and expectations.
        </ListItem>

        <ListItem>
          Notwithstanding anything in these Terms, the parties shall not be liable for any
          failure to perform an obligation under these Terms if performance is prevented or
          delayed by a force majeure event.
        </ListItem>

        <ListItem>
          These Terms and any dispute or claim relating to it, or its enforceability, shall be
          governed by and construed in accordance with the laws of India.
        </ListItem>

        <ListItem>
          All disputes arising out of or in connection with these Terms shall be subject to the
          exclusive jurisdiction of the courts in New Delhi, Delhi.
        </ListItem>

        <ListItem>
          All concerns or communications relating to these Terms must be communicated to us
          using the contact information provided on this website.
        </ListItem>
      </UnorderedList>
    </Box>
           
        <Footer />
      </Flex>
    )
}

export default Index;