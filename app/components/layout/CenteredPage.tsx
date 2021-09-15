import React from 'react';
import {Center} from "@chakra-ui/react";
import Footer from "../elements/Footer";

interface Props {
  children: React.ReactNode;
}

const CenteredPage = ({children}: Props) => {
  return (
    <>
      <Center height="100vh">
        {children}
      </Center>
      <Footer />
    </>
  );
};

export default CenteredPage;