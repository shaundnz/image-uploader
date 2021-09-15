import React, {ChangeEvent, FC, useCallback, useRef} from 'react';
import CenterCard from "../elements/CenterCard";
import {Box, Button, Heading, Image, Stack, useToast} from "@chakra-ui/react";
import CardHeader from '../elements/CardHeader';
import {useDropzone} from "react-dropzone";

interface Props {
  onImageUpload: (file: File) => void
}

const SelectImageToUpload: FC<Props> = ({onImageUpload}) => {

  const inputRef = useRef<HTMLInputElement>(null);

  const toast = useToast()

  const onDropRejected = useCallback((rejectedFiles) => {
    if (rejectedFiles.length > 1) {
      toast({
        title: "Please only upload one file at a time",
        status: "error",
        isClosable: true
      })
    }
    else if (!["jpeg", "png", "gif"].includes(rejectedFiles[0].type)){
      toast({
        title: "File type must be JPEG, PNG or GIF",
        status: "error",
        isClosable: true
      })
    }
    else {
      toast({
        title: "An error occurred",
        status: "error",
        isClosable: true
      })
    }
  }, [])

  const onDropAccepted = useCallback(acceptedFiles => {
    onImageUpload(acceptedFiles[0])
  }, [])

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      onImageUpload(event.target.files[0])
    }
  }

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDropRejected,
    onDropAccepted,
    accept: 'image/jpeg, image/png, image/gif',
    maxFiles: 1
  })


  return (
    <CenterCard>

      <CardHeader headingText="Upload your image"/>
      <Heading as="h6" size="xs" color="#828282">File should be JPEG, PNG...</Heading>

      <Box w="xs" h="2xs" bg="#F6F8FB" border="1px" borderRadius="xl" borderStyle="dashed"
           borderColor="#97BEF4" {...getRootProps()}>
        <input {...getInputProps()} />
        <Stack height="100%" align="center" justify="space-evenly">
          <Image src="/image.svg" w="3xs"/>
          <Heading as="h5" size="sm" color="#BDBDBD">Drag & Drop your image here</Heading>
        </Stack>
      </Box>

      <input
        ref={inputRef}
        onChange={handleFileUpload}
        type="file"
        style={{display: "none"}}
        accept="image/png, image/gif, image/jpeg"
      />

      <Heading as="h5" size="sm" color="#BDBDBD">Or</Heading>
      <Button colorScheme="blue" onClick={() => inputRef.current && inputRef.current.click()}>Choose a file</Button>

    </CenterCard>
  );
};

export default SelectImageToUpload;