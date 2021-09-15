import CenteredPage from "../app/components/layout/CenteredPage";
import {useState} from "react";
import SelectImageToUpload from "../app/components/module/SelectImageToUpload";
import LoadingSpinner from "../app/components/module/LoadingSpinner";
import ImageUploadCompleted from "../app/components/module/ImageUploadCompleted";
import PageState from "../app/types/PageState";
import axios from 'axios'
import {useToast} from "@chakra-ui/react";

export default function Home() {

  const [pageState, setPageState] = useState<PageState>(PageState.CHOOSE_IMAGE_TO_UPLOAD)
  const [imageURL, setImageURL] = useState<string|null>(null)
  const toast = useToast()


  const uploadImageToServer = async (file: File) => {
    setPageState(PageState.UPLOADING_IMAGE)
    try {
      const signedURL = await axios.get("/api/s3url")
      await axios.put(signedURL.data, file, {
        headers: {
          'Content-Type': file.type
        }
      })

      setImageURL(signedURL.data.split("?")[0])
      setPageState(PageState.COMPLETED_UPLOAD)
    } catch (err) {
      setPageState(PageState.CHOOSE_IMAGE_TO_UPLOAD)
      toast({
        title: "Something went wrong uploading image",
        status: "error",
        isClosable: true
      })
    }
  }

  const uploadNewImage = () => {
    setPageState(PageState.CHOOSE_IMAGE_TO_UPLOAD)
    setImageURL(null)
  }

  return (
    <CenteredPage>
      {pageState === PageState.CHOOSE_IMAGE_TO_UPLOAD && <SelectImageToUpload onImageUpload={uploadImageToServer}/>}
      {pageState === PageState.UPLOADING_IMAGE && <LoadingSpinner />}
      {(pageState === PageState.COMPLETED_UPLOAD && imageURL) && <ImageUploadCompleted imageURL={imageURL} uploadNewImage={uploadNewImage}/>}
    </CenteredPage>
  )
}
