import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://media.licdn.com/dms/image/D5603AQFJes55l4s22w/profile-displayphoto-shrink_400_400/0/1693980822217?e=1718841600&v=beta&t=kATR5WARyPclSYmqFxYb8dX6RC9YV9MDjAx43hvNsiY";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Welcome to CoinDigest, where every trade is an opportunity to unlock new possibilities in the world of cryptocurrency. Founded with a passion for innovation and a commitment to empowering traders of all levels, our platform is designed to provide seamless access to the dynamic crypto markets. Join us as we explore the endless potential of blockchain technology and embark on a journey towards financial freedom. Start trading with confidence on CoinDigest today."
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
