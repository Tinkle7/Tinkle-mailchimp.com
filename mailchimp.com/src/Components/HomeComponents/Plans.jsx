import React from "react";
import { Link } from "react-router-dom";
import { Text, Box, SimpleGrid } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import Button from "../Button";

function Plans() {
  return (
    <div>
      <Text textAlign="center" fontSize="4xl" margin="40px auto 50px auto">
        Find the right plan
      </Text>
      <SimpleGrid columns={[1, 2, 4]} w="90%" margin="auto">
        <Box
          padding="5%"
          cursor="pointer"
          border="1px solid lightgrey"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
        >
          <Text fontWeight="400">Premium</Text>
          <Text
            marginTop="5px"
            marginBottom="7px"
            fontSize="sm"
            fontWeight="400"
            w="85%"
          >
            Our most advanced tools, unlimited contacts, and priority support;
            built for teams.
          </Text>
          <Text marginTop="5px" fontSize="sm" fontWeight="400" w="85%">
            Starts at
          </Text>
          <Box display="flex">
            <Text fontSize="16px" paddingTop="10px">
              ₹
            </Text>
            <Text fontSize="4xl">23,000</Text>
          </Box>
          <Text fontSize="sm" fontWeight="200" w="85%" marginBottom="20px">
            /month based on 10,000 contacts*
          </Text>
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="10px 0"
          >
            <Box>
              <CheckIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Max Contacts: Unlimited
            </Text>
          </Box>
          <hr />
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="10px 0"
          >
            <Box>
              <CheckIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Custom-Coded and Pre-built Email Templates
            </Text>
          </Box>
          <hr />
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="10px 0"
          >
            <Box>
              <CheckIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Multivariate and A/B Testing
            </Text>
          </Box>
          <hr />
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="10px 0"
          >
            <Box>
              <CheckIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Enhanced Automated Customer Journeys
            </Text>
          </Box>
          <hr />
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="10px 0"
          >
            <Box>
              <CheckIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Predictive Segmentation
            </Text>
          </Box>
          <hr />
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="10px 0"
          >
            <Box>
              <CheckIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Dedicated Onboarding Specialist
            </Text>
          </Box>
        </Box>
        <Box
          padding="5%"
          cursor="pointer"
          border="1px solid lightgrey"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
        >
          <Text fontWeight="400">Standard</Text>
          <Text
            marginTop="5px"
            marginBottom="7px"
            fontSize="sm"
            fontWeight="400"
            w="85%"
          >
            Sell even more with personalization, optimization tools, and
            enhanced automations.
          </Text>
          <Text marginTop="5px" fontSize="sm" fontWeight="400" w="85%">
            Starts at
          </Text>
          <Box display="flex">
            <Text fontSize="16px" paddingTop="10px">
              ₹
            </Text>
            <Text fontSize="4xl">1,150</Text>
          </Box>
          <Text fontSize="sm" fontWeight="200" w="85%" marginBottom="20px">
            /month based on 500 contacts*
          </Text>
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="10px 0"
          >
            <Box>
              <CheckIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Max Contacts: 100,000
            </Text>
          </Box>
          <hr />
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="10px 0"
          >
            <Box>
              <CheckIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Custom-Coded and Pre-built Email Templates
            </Text>
          </Box>
          <hr />
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="10px 0"
          >
            <Box>
              <CheckIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              A/B Testing
            </Text>
          </Box>
          <hr />
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="10px 0"
          >
            <Box>
              <CheckIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Enhanced Automated Customer Journeys
            </Text>
          </Box>
          <hr />
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="10px 0"
          >
            <Box>
              <CheckIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Predictive Segmentation
            </Text>
          </Box>
          <hr />
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="10px 0"
            opacity="0.5"
          >
            <Box>
              <CloseIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Dedicated Onboarding Specialist
            </Text>
          </Box>
        </Box>
        <Box
          padding="5%"
          cursor="pointer"
          border="1px solid lightgrey"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
        >
          <Text fontWeight="400">Essentials</Text>
          <Text
            marginTop="5px"
            marginBottom="7px"
            fontSize="sm"
            fontWeight="400"
            w="85%"
          >
            Send the right content at the right time with testing and scheduling
            features.
          </Text>
          <Text marginTop="5px" fontSize="sm" fontWeight="400" w="85%">
            Starts at
          </Text>
          <Box display="flex">
            <Text fontSize="16px" paddingTop="10px">
              ₹
            </Text>
            <Text fontSize="4xl">770</Text>
          </Box>
          <Text fontSize="sm" fontWeight="200" w="85%" marginBottom="20px">
            /month based on 500 contacts*
          </Text>
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="10px 0"
          >
            <Box>
              <CheckIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Max Contacts: 50,000
            </Text>
          </Box>
          <hr />
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="20px 0"
          >
            <Box>
              <CheckIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Pre-built Email Templates
            </Text>
          </Box>
          <hr />
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="10px 0"
          >
            <Box>
              <CheckIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              A/B Testing
            </Text>
          </Box>
          <hr />
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="20px 0"
          >
            <Box>
              <CheckIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Basic Automated Customer Journeys
            </Text>
          </Box>
          <hr />
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="10px 0"
            opacity="0.5"
          >
            <Box>
              <CloseIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Predictive Segmentation
            </Text>
          </Box>
          <hr />
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="10px 0"
            opacity="0.5"
          >
            <Box>
              <CloseIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Dedicated Onboarding Specialist
            </Text>
          </Box>
        </Box>
        <Box
          padding="5%"
          cursor="pointer"
          border="1px solid lightgrey"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
        >
          <Text fontWeight="400">Free</Text>
          <Text
            marginTop="5px"
            marginBottom="26px"
            fontSize="sm"
            fontWeight="400"
            w="85%"
          >
            Easily create email campaigns and learn more about your customers.
          </Text>
          <Text marginTop="5px" fontSize="sm" fontWeight="400" w="85%">
            Starts at
          </Text>
          <Box display="flex">
            <Text fontSize="16px" paddingTop="10px">
              ₹
            </Text>
            <Text fontSize="4xl">0</Text>
          </Box>
          <Text fontSize="sm" fontWeight="200" w="85%" marginBottom="20px">
            /month based on 500 contacts*
          </Text>
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="10px 0"
          >
            <Box>
              <CheckIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Max Contacts: 50,000
            </Text>
          </Box>
          <hr />
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="20px 0"
          >
            <Box>
              <CheckIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Pre-built Email Templates
            </Text>
          </Box>
          <hr />
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="10px 0"
            opacity="0.5"
          >
            <Box>
              <CloseIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              A/B Testing
            </Text>
          </Box>
          <hr />
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="20px 0"
            opacity="0.5"
          >
            <Box>
              <CloseIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Basic Automated Customer Journeys
            </Text>
          </Box>
          <hr />
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="10px 0"
            opacity="0.5"
          >
            <Box>
              <CloseIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Predictive Segmentation
            </Text>
          </Box>
          <hr />
          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="sm"
            fontWeight="400"
            margin="10px 0"
            opacity="0.5"
          >
            <Box>
              <CloseIcon />
            </Box>
            <Text
              w="90%"
              fontSize="sm"
              fontWeight="400"
              textDecoration="underline dashed 1px"
              textUnderlineOffset="3px"
              _hover={{ textDecoration: "underline dashed grey" }}
            >
              Dedicated Onboarding Specialist
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
      <Text fontSize="sm" textAlign="center" margin="20px 0">
        *<Link style={{ textDecoration: "underline " }}>Overages</Link> apply if
        contact or email send limit is exceeded. Free plan sending will be
        paused if contact or email send limit is exceeded.
        <Link style={{ textDecoration: "underline dashed " }}>Learn more</Link>
      </Text>

      <Button type="See all plan details" />
    </div>
  );
}

export default Plans;
