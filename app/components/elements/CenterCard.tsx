import React from 'react';
import {Center, Stack} from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const CenterCard = ({children}: Props) => {

  return (
    <Center bg="white" borderRadius="xl" boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1);" px="8" py="6">
      <Stack align="center" spacing="4" py="2">
        {children}
      </Stack>
    </Center>
  );
};

export default CenterCard;