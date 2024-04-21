import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Header = () => {
  
  return (<>
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} display="flex"  justifyContent="center" gap={5}>
    <Button colorScheme='whiteAlpha' ml={0}>

        <Link to="/">Home</Link>
      </Button>
      <Button colorScheme='whiteAlpha' >

        <Link to="/exchanges">Exchanges</Link>
      </Button>
      {/* <Button variant={"unstyled"} color={"white"}> */}
      <Button colorScheme='whiteAlpha' >

        <Link to="/coins">Coins</Link>
      </Button>
     
    </HStack>
     <Box bg="white" h="1px" mt={0.5}  />
    
      
     </>
  );
};

export default Header;
