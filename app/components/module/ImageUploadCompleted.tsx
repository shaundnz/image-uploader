import React, {FC} from 'react';
import CenterCard from "../elements/CenterCard";
import CardHeader from "../elements/CardHeader";
import {Button, HStack, Image, Input} from "@chakra-ui/react";


interface Props {
  imageURL: string
  uploadNewImage: () => void
}

const ImageUploadCompleted: FC<Props> = ({imageURL, uploadNewImage}) => {

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(imageURL)
  }

  return (
    <CenterCard>
      <CardHeader headingText="Uploaded Successfully!" />
      <Image maxW="xs" maxH="xs" src={imageURL} borderRadius="xl"/>
      <HStack>
        <Input size="sm" value={imageURL} readOnly />
        <Button size="sm" colorScheme="blue" onClick={copyToClipboard}>Copy</Button>
      </HStack>
      <Button size="sm" colorScheme="blue" onClick={uploadNewImage}>Upload new image</Button>
    </CenterCard>
  );
};

export default ImageUploadCompleted;