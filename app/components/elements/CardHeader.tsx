import React from 'react';
import {Heading} from "@chakra-ui/react";

interface Props {
  headingText: string
}

const CardHeader = ({headingText}: Props) => {
  return (
    <>
      <Heading as="h4" size="md" color="#4F4F4F">
        {headingText}
      </Heading>
    </>
  )
    ;
};

export default CardHeader;