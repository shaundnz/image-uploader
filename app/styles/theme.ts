import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#FAFAFB"
      }
    }
  },
  fonts: {
    heading: "Poppins",
    body: "Montserrat"
  },
})

export default theme