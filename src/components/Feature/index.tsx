import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Typography,
  Toolbar,
  Box,
  Stack,
  Button,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { zoomIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import VisibilitySensor from "react-visibility-sensor";
import { ZoomIn } from "@mui/icons-material";

interface IFeature {
  src?: any;
  text: string;
  alt: string;
  textOnly?: boolean;
  l?: boolean;
  r?: boolean;
}

const DropInAnimation = keyframes`${zoomIn}`;

const DropInDiv = styled.div`
  animation: 2s ${DropInAnimation};
`;

const Feature = ({ src, text, alt, l, r }: IFeature) => {
  return (
    <Paper
      data-aos={r ? "fade-left" : "fade-right"}
      data-aos-offset="500"
      sx={{
        flex: 1,
        height: "100%",
        width: "100%",
        background: grey[800],
        mt: { xs: 2, sm: 2 },
        ml: { xs: 0, sm: 2 },
        mr: { xs: 0, sm: 2 },
        padding: { xs: 0, sm: 2 },
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          flex: 1,
          justifyContent: "center",
          display: src ? "flex" : "none",
        }}
      >
        <img src={src} width={"50%"} height="*" alt={alt} />
      </Box>

      <Box
        sx={{
          background: grey[700],
          position: "absolute",

          width: "100%",
          left: 0,
          bottom: 0,

          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
      >
        <Typography sx={{ padding: 5, textAlign: "center" }}>{text}</Typography>
      </Box>
    </Paper>
  );
};

export default Feature;
