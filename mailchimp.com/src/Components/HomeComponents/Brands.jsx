import React from "react";
import { Text, Image, Box, SimpleGrid } from "@chakra-ui/react";

function Brands() {
  return (
    <div>
      <Text
        textAlign="left"
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        margin="50px auto 60px 60px"
        w={{ base: "65%", md: "55%", lg: "45%" }}
        lineHeight="1"
      >
        Bring in more data, drive more growth with our integrations
      </Text>
      <SimpleGrid columns={[2, 2, 3]} gap={6} w="90%" margin="auto">
        <Box display="flex" justifyContent="space-between">
          <Box w="30%">
            <Image
              w="100%"
              src="https://eep.io/images/yzco4xsimv0y/egMxvwdsj41K5eESLhWBO/cf823adbd311e33919f97ffc5bf3181d/Canva.jpg?w=196&fm=webp&q=80"
            />
          </Box>
          <Box marginTop="50px">
            <Text fontSize="md">Canva</Text>
            <Text fontSize="sm" fontWeight="light">
              Create compelling visuals for your marketing.
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box w="50%">
            <Image
              w="100%"
              src="https://eep.io/images/yzco4xsimv0y/51oq4AakIqo8fATlHgqHK0/02a750b1c1a16745296dca6fa7cb830c/Salesforce__1_.jpg?w=196&fm=webp&q=80"
            />
          </Box>
          <Box paddingLeft="8px" marginTop="20px">
            <Text fontSize="md">Mailchimp for Salesforce</Text>
            <Text fontSize="sm" fontWeight="light">
              Sync your Mailchimp subscribers and Salesforce® leads across
              platforms.
            </Text>
          </Box>
        </Box>
        <Box display="flex">
          <Box>
            <Image
              w="80%"
              src="https://eep.io/images/yzco4xsimv0y/67trWJLKtKcvrqlKYSlskE/696ad499e0cc60aa7392521a6a7cfd90/Instagram__1_.jpg?w=196&fm=webp&q=80"
            />
          </Box>
          <Box>
            <Text fontSize="md">Instagram</Text>
            <Text fontSize="sm" fontweight="light">
              Promote and share your Instagram posts in email campaigns.
            </Text>
          </Box>
        </Box>
        <Box display="flex">
          <Box>
            <Image
              w="80%"
              src="https://eep.io/images/yzco4xsimv0y/44dW9Z4hibyDYi0qggfets/b01884985e996ffb5dc133556b92bb7a/Shopify__1_.jpg?w=196&fm=webp&q=80"
            />
          </Box>
          <Box>
            <Text fontSize="md">Shopify</Text>
            <Text fontSize="sm" fontweight="light">
              Sync Shopify customers, products, and purchase data to Mailchimp.
            </Text>
          </Box>
        </Box>
        <Box display="flex">
          <Box>
            <Image
              w="80%"
              src="https://eep.io/images/yzco4xsimv0y/7mpZ7UZrdzk2BmWX1OnRvb/5e610ecd21eeb25d0b82b098ce424e34/Google_Analytics2.jpg?w=196&fm=webp&q=80"
            />
          </Box>
          <Box>
            <Text fontSize="md">Google Analytics</Text>
            <Text fontSize="sm" fontweight="light">
              Unlock powerful insights with campaign, website, or landing page
              data.
            </Text>
          </Box>
        </Box>
        <Box display="flex">
          <Box>
            <Image
              w="80%"
              src="https://eep.io/images/yzco4xsimv0y/2uruOq31Y1FKdghFWn5zMg/8a35f3f9e463ba34038f3c3f16ccb635/WooCommerce.jpg?w=196&fm=webp&q=80"
            />
          </Box>
          <Box>
            <Text fontSize="md">WooCommerce </Text>
            <Text fontSize="sm" fontweight="light">
              Power your ecommerce store with smart marketing features.
            </Text>
          </Box>
        </Box>
        <Box display="flex">
          <Box>
            <Image
              w="80%"
              src="https://eep.io/images/yzco4xsimv0y/uZVnrVt3DO1G4Ec5G4pvs/e6c9d3c2613827f7dd238f1c5e0b02d9/Quickbooks.jpg?w=196&fm=webp&q=80"
            />
          </Box>
          <Box>
            <Text fontSize="md">QuickBooks Online</Text>
            <Text fontSize="sm" fontweight="light">
              Bring together your marketing tools and invoice data.
            </Text>
          </Box>
        </Box>
        <Box display="flex">
          <Box>
            <Image
              w="80%"
              src="https://eep.io/images/yzco4xsimv0y/2klSrOoLZKmLuGKZjKT9o3/ca400f60c2f3673f3ab9b52f4d03360d/Squarespace.jpg?w=196&fm=webp&q=80"
            />
          </Box>
          <Box>
            <Text fontSize="md">Squarespace Commerce</Text>
            <Text fontSize="sm" fontweight="light">
              Market your ecommerce business and drive sales.
            </Text>
          </Box>
        </Box>
        <Box display="flex">
          <Box>
            <Image
              w="80%"
              src="https://eep.io/images/yzco4xsimv0y/26deBkGp3A5Pj7suZ9oV7V/858e8a4603707166988a3282bca7e29b/Zapier.jpg?w=196&fm=webp&q=80"
            />
          </Box>
          <Box>
            <Text fontSize="md">Zapier</Text>
            <Text fontSize="sm" fontweight="light">
              Automatically pass data between web services without a single line
              of code.
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default Brands;
