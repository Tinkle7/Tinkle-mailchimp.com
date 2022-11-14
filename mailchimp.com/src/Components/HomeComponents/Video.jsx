import React from "react";
import "./Video.css";
import { Text, Image, Box } from "@chakra-ui/react";

function Video() {
  return (
    <div>
      <Box
        bg="#241c15"
        padding={{ base: "12% 7%", md: "12% 7%", lg: "6% 13%" }}
      >
        <Image
          margin="auto"
          w="100%"
          src="https://embed-ssl.wistia.com/deliveries/f9d4f61a1c1af30c55441ddd498bceec.webp?image_crop_resized=640x360"
        />
        <Box
          color="white"
          w={{ base: "95%", md: "95%", lg: "80%" }}
          margin="5% auto 0 auto"
        >
          <Text fontSize={{ base: "lg", md: "2xl", lg: "2x1" }}>
            Most email marketing platforms tell you how your campaigns perform.
            We analyze the data from the billions of emails we send to give you
            personalized recommendations for improving your content, targeting,
            and automations.
          </Text>
        </Box>
      </Box>
    </div>
  );
}

export default Video;
