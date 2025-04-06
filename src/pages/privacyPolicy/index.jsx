import React from "react";
import { Flex, Text, UnorderedList, ListItem, Box, Heading } from "@chakra-ui/react";
import Navbar from "./../../components/navbar/index.jsx";
import Footer from "./../../components/footer/index.jsx";

const PrivacyPolicy = () => {
  return (
    <Flex fontFamily="Hanken Grotesk" style={{ fontSize: 'clamp(13px, 2vw, 18px)' }} flexDir='column' w='100%' h='100%'>
      <Navbar backgroundColor="white" />
      <Box p={6} mt="100px" mb="100px" maxW="800px" mx="auto">
  <Heading as="h2" size="lg" mb={4}>Privacy Policy</Heading>
  <Text fontSize="sm" ><b>Effective Date:</b> 22nd October 2024</Text>
  <Text fontSize="sm" mb={4}><b>Last Updated:</b> 3rd March 2025</Text>

  <Text mb={4}>
    Influcent Technology Private Limited (“Influcent”, “we”, “our”, or “us”) is committed to protecting the privacy of our users.
    This Privacy Policy outlines how we collect, use, store, and protect your personal information when you access our website, services, and platform.
    By using Influcent, you agree to the terms outlined in this policy.
  </Text>

  <Heading as="h3" size="md" mb={2}>1. Information We Collect</Heading>
  <Text mb={4}>We collect the following types of information to provide and improve our services:</Text>
  <Text mb={4}><b>a: Personal Information (Provided by Users)</b></Text>
  <UnorderedList spacing={2} pl={5}>
    <ListItem>Name, gender, email address, phone number, and mailing address</ListItem>
    <ListItem>Profile images, social media links, and other details users provide</ListItem>
    <ListItem>Payment details for processing transactions securely</ListItem>
    <ListItem>Any additional content voluntarily shared via our platform</ListItem>
  </UnorderedList>


  <Text mb={4} mt={6}><b>b: Automatically Collected Information</b></Text>
  <UnorderedList spacing={2} pl={5}>
    <ListItem>Device information (IP address, browser type, OS)</ListItem>
    <ListItem>Usage data (pages visited, session duration, interactions)</ListItem>
  </UnorderedList>

  <Text mb={4} mt={6}><b>c: Third-Party Information</b></Text>
  <Text>We collect data from third-party services (e.g., analytics tools, email marketing tools) to enhance user experience and ensure security.</Text>

  <Heading as="h3" size="md" mt={4} mb={2}>2. How We Use Your Information</Heading>
  
  <Text mb={4}>
    We use your data for the following purposes:
  </Text>
  <UnorderedList spacing={1} pl={5}>
    <ListItem><b>Service Delivery:</b> To create user accounts, process transactions, and provide customer support.</ListItem>
    <ListItem><b>Personalization:</b> To tailor recommendations and improve user experience.</ListItem>
    <ListItem><b>Security & Fraud Prevention:</b> To prevent unauthorized access and ensure compliance with security standards.</ListItem>
    <ListItem><b>Marketing & Communication:</b> To send updates, promotional materials, and service-related emails.</ListItem>
    <ListItem><b>Analytics & Performance Monitoring:</b> To track website performance and user engagement.</ListItem>
  </UnorderedList>

  <Heading as="h3" size="md" mt={4} mb={2}>3. Data Sharing & Third-Party Disclosures</Heading>
  <Text mb={4}>
    We do not sell, trade, or rent your personal data to third parties. However, we may share information with trusted partners for operational purposes:
  </Text>

  <Text><b>a. Essential Service Providers</b></Text>
  <UnorderedList mt={4} spacing={1} pl={5}>
    <ListItem><b>Payment Processors:</b> To facilitate transactions securely</ListItem>
    <ListItem><b>Email Service Providers:</b> For communication and marketing purposes</ListItem>
    <ListItem><b>Cloud Hosting & Security Services:</b> To ensure platform stability and security</ListItem>
  </UnorderedList>

  <Text mt={4}><b>b. Legal & Compliance Requirements</b></Text>
   <Text mt={2}>We may disclose user data when required by law, regulatory authorities, or to protect our rights and prevent fraudulent activity.</Text>

  <Text mt={4}><b>c. User Control Over Data Sharing</b></Text>
   <Text mt={2}>Users can opt out of certain data-sharing activities, though this may impact certain features (e.g., calendar booking, automated email services).</Text>

  <Heading as="h3" size="md" mt={6} mb={2}>4. Data Protection & Security Measures</Heading>
  <Text mb={4}>
    We implement strict security protocols to protect user data:
  </Text>

  <Text mt={4}><b>a. Encryption & Secure Storage</b></Text>
  <UnorderedList mt={2} spacing={2} pl={5}>
    <ListItem>Data is encrypted at rest using PostgreSQL’s built-in encryption</ListItem>
    <ListItem>TLS/SSL encryption secures all data transmissions</ListItem>
    <ListItem>Passwords are hashed using bcrypt for additional security</ListItem>
  </UnorderedList>

  <Text mt={4}><b>b. Access Control & Authentication</b></Text>
  <UnorderedList mt={2} spacing={2} pl={5}>
    <ListItem>Role-Based Access Control (RBAC) ensures restricted access to sensitive data</ListItem>
    <ListItem>Secure JWT authentication for session management</ListItem>
    <ListItem>Prisma’s row-level security (RLS) for database access control</ListItem>
  </UnorderedList>

  <Text mt={4}><b>c. Threat Prevention & Monitoring</b></Text>
  <UnorderedList mt={2} spacing={2} pl={5}>
    <ListItem>GraphQL query complexity analysis prevents system abuse</ListItem>
    <ListItem>Rate limiting and IP whitelisting reduce brute-force attempts</ListItem>
    <ListItem>Real-time logging and monitoring with Sentry and Winston</ListItem>
  </UnorderedList>

  <Text mt={4}><b>d. Data Breach Response</b></Text>
  <Text>In case of unauthorized access:</Text>
  <UnorderedList mt={2} spacing={2} pl={5}>
    <ListItem><b>Immediate Detection & Alerts:</b> Suspicious activities are flagged using automated tracking tools.</ListItem>
    <ListItem><b>Mitigation Actions:</b> Affected accounts are locked, and impacted data is isolated.</ListItem>
    <ListItem><b>Recovery & Prevention:</b> Regular security audits, penetration testing, and periodic token rotations help prevent future incidents.</ListItem>
  </UnorderedList>

  <Heading as="h3" size="md" mt={4} mb={2}>5. User Rights & Data Control</Heading>
  <Text mb={4}>
    We respect users' rights to control their data. Users can:
  </Text>
  <UnorderedList spacing={3} pl={5}>
    <ListItem><b>Access & Modify Data:</b> Edit their personal details through their account settings.</ListItem>
    <ListItem><b>Request Data Deletion:</b> Email shubhamg@influcent.com to permanently remove personal data.</ListItem>
    <ListItem><b>Opt-Out of Marketing Communications:</b> Unsubscribe from promotional emails via the provided link.</ListItem>
  </UnorderedList>

  <Heading as="h3" size="md" mt={4} mb={2}>6. Cookies & Tracking Technologies</Heading>
  <Text mb={4}>
    We use cookies and tracking pixels for:
  </Text>
  <UnorderedList spacing={3} pl={5}>
    <ListItem><b>Performance Analytics:</b> Google Analytics, Meta Pixel for tracking site engagement.</ListItem>
    <ListItem><b>User Experience Improvements:</b> Remembering preferences and login sessions.</ListItem>
    <ListItem><b>Security Enhancements:</b> Identifying fraudulent activities.</ListItem>
  </UnorderedList>
  <Text mb={4}>
    Users can manage cookie settings through their browser preferences.
  </Text>

  <Heading as="h3" size="md" mt={4} mb={2}>7. Third-Party Integrations</Heading>
  <Text mt={4}><b>a. External Services We Use:</b></Text>
  <Text mb={4}>We integrate third-party tools for better functionality:</Text>
  <UnorderedList spacing={1} pl={5}>
    <ListItem><b>Email Campaigns:</b> Sent via third-party email providers (e.g., NodeMailer).</ListItem>
    <ListItem><b>Analytics & Performance Tracking:</b> Google Analytics, Meta Pixel.</ListItem>
  </UnorderedList>

  <Text mt={4}><b>b. No Third-Party Logins or Ad Targeting:</b></Text>
  <Text mb={4}>We do not use third-party logins (e.g., Google, Facebook) or allow ad targeting through our platform.</Text>

  <Heading as="h3" size="md" mt={4} mb={2}>8. Data Retention Policy</Heading>
  <Text mb={4}>
    We retain data for as long as necessary to provide services and comply with legal obligations. Upon request, we delete user data permanently.
  </Text>

  <Heading as="h3" size="md" mt={4} mb={2}>9. Legal Compliance & Governing Law</Heading>
  <Text mb={4}>
    This Privacy Policy is governed by the <b>laws of India.</b> Any disputes must be filed within one <b>month of occurrence</b> and will be handled individually.
  </Text>

  <Heading as="h3" size="md" mt={4} mb={2}>10. Contact & Grievance Redressal</Heading>
  <Text mb={4}>
    For any concerns regarding privacy or data handling, please contact:
  </Text>
  <Text mb={4}>
    <b>Influcent Technology Private Limited</b><br />
    <b>Email:</b> shubhamg@influcent.com
  </Text>
</Box>

      <Footer />
    </Flex>
  );
};

export default PrivacyPolicy;
