import React from 'react';
import CenterCard from "../elements/CenterCard";
import CardHeader from "../elements/CardHeader";
import {Spinner} from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <CenterCard>
        <CardHeader headingText="Uploading..." />
        <Spinner size="lg" />
    </CenterCard>
  );
};

export default LoadingSpinner;