import React from "react";
import { Text, Image, GridItem, Box, SimpleGrid } from "@chakra-ui/react";
import Button from "../Button";
import "./FirstGrid.css";

export default function FirstGrid() {
  return (
    <div style={{ marginTop: "7%" }}>
      <SimpleGrid columns={[1, 2, 4]}>
        <GridItem bg="#d99536">
          <Box _hover={{ padding: "2px" }} cursor="pointer">
            <Box position="absolute" marginTop="2%">
              <Text
                w="60%"
                fontSize="2xl"
                textAlign="left"
                margin="auto"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
              >
                Convert with Automations
              </Text>
            </Box>
            <Image src="https://eep.io/images/yzco4xsimv0y/33f3mgIWbzKjIpIRJi2f5v/6bd36bba38b7f6a94d587605ab9a7d75/Desktop_Feature_Cards_1_Automations.jpeg?w=630&fm=webp&q=80" />
          </Box>
          <Box className="First_grid_items" w="100%">
            <Text
              style={{ lineHeight: "1.5", marginBottom: "8%" }}
              fontSize="lg"
            >
              Send the right message at the right time to convert more
              customers.
            </Text>
            <Button type="Learn More" />
          </Box>
        </GridItem>
        <GridItem bg="#e7b75f">
          <Box _hover={{ padding: "2px" }} cursor="pointer">
            <Box position="absolute" marginTop="2%">
              <Text
                w="60%"
                fontSize="2xl"
                textAlign="left"
                margin="auto"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
              >
                Optimize with AI & Analytics
              </Text>
            </Box>
            <Image src="https://eep.io/images/yzco4xsimv0y/hBcOt3RZ5DOhMJD2Hi2Z2/96b28d17c45e9376731ad825b002b0ff/Desktop_Feature_Cards_2_Analytics.png?w=630&fm=webp&q=80" />
          </Box>
          <Box className="First_grid_items" w="100%">
            <Text
              style={{ lineHeight: "1.5", marginBottom: "8%" }}
              fontSize="lg"
            >
              Get AI-assisted suggestions to help make your content more
              engaging.
            </Text>
            <Button type="Learn More" />
          </Box>
        </GridItem>
        <GridItem bg="#fdf8ea">
          <Box _hover={{ padding: "2px" }} cursor="pointer">
            <Box position="absolute" marginTop="2%">
              <Text
                w="60%"
                fontSize="2xl"
                textAlign="left"
                margin="auto"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
              >
                Target with Segmentation
              </Text>
            </Box>
            <Image src="https://eep.io/images/yzco4xsimv0y/5xqzo6y8Z7anw9VQXJarpj/5f91182af7bf16ecc34b487a619d0a54/Desktop_Feature_Cards_3_Segmentation.jpeg?w=630&fm=webp&q=80" />
          </Box>
          <Box className="First_grid_items" w="100%">
            <Text
              style={{ lineHeight: "1.5", marginBottom: "8%" }}
              fontSize="lg"
            >
              Boost customer loyalty by predicting the right ones to target.
            </Text>
            <Button type="Learn More" />
          </Box>
        </GridItem>
        <GridItem>
          <Box _hover={{ padding: "2px" }} cursor="pointer">
            <Box position="absolute" marginTop="2%">
              <Text
                w="60%"
                fontSize="2xl"
                textAlign="left"
                margin="auto"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
              >
                Sync with Integrations
              </Text>
            </Box>
            <Image src="https://eep.io/images/yzco4xsimv0y/lsHRpmOI81ZcFS1Yld0Bs/1e2812587cd0f3089061bd4b513fd6d0/Desktop_Feature_Cards_4_Integrations.png?w=630&fm=webp&q=80" />
          </Box>
          <Box className="First_grid_items" w="100%">
            <Text
              style={{ lineHeight: "1.5", marginBottom: "8%" }}
              fontSize="lg"
            >
              Connect more tools, get more data, save time, and make better
              decisions.
            </Text>
            <Button type="Learn More" />
          </Box>
        </GridItem>
      </SimpleGrid>
    </div>
  );
}
