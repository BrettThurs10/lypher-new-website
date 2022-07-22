import { Box } from "@mui/material";
import screen from "../../img/screenshots/main.png";
import space from "../../img/space.jpeg";
import menu from "../../img/screenshots/menu.png";
import resources from "../../img/screenshots/resources.png";
import { useWindowSize } from "../../hooks/useWindowSize";
// import { slideInUp } from "react-animations";
// import styled, { keyframes } from "styled-components";

// const SlideInUpAnimation = keyframes`${slideInUp}`;

// const SlideInUpDiv = styled.div`
//   animation: 2s ${SlideInUpAnimation};
// `;
type Props = {};

const Screenies = (props: Props) => {
  const size = useWindowSize();
  const wrapperHeight = {
    lg: size.width / 3,
    md: size.width / 2.2,
    sm: size.width / 2.2,
    xs: size.width - 50,
  };
  const wrapperWidth = {
    lg: size.width / 3,
    md: size.width / 2.2,
    sm: size.width / 2.2,
    xs: size.width - 50,
  };
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        // marginTop: { xs: 0, sm: -10 },
        padding: 5,
      }}
    >
      {/* <SlideInUpDiv> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Box sx={{ position: "absolute" }}>
          <Box
            sx={{
              backgroundImage: `url(${screen})`,
              backgroundSize: "cover",
              height: "100%",
              width: "100%",
              borderRadius: 2,
              position: "absolute",
              zIndex: 10,
            }}
          />
          <Box
            sx={{
              height: {
                lg: size.width / 3,
                md: size.width / 2.2,
                sm: size.width / 2,
                xs: size.width / 1.06,
              },
              width: {
                lg: size.width / 6.5,
                md: size.width / 4.7,
                sm: size.width / 4.2,
                xs: size.width / 2.2,
              },
              borderRadius: "100%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${menu})`,
                backgroundSize: "cover",
                height: {
                  lg: size.width / 4,
                  md: size.width / 2.8,
                  sm: size.width / 3,
                  xs: size.width / 1.2,
                },
                width: {
                  lg: size.width / 8.3,
                  md: size.width / 6,
                  sm: size.width / 6.5,
                  xs: size.width / 2.7,
                },
                borderRadius: 2,
                position: "absolute",
                zIndex: 9,
                right: { xl: 200, lg: 160, md: 120, sm: 100, xs: 120 },
                top: { xl: 80, lg: 70, md: 60, sm: 35, xs: 20 },
              }}
            />
            <Box
              sx={{
                backgroundImage: `url(${resources})`,
                backgroundSize: "cover",
                height: {
                  lg: size.width / 4,
                  md: size.width / 2.8,
                  sm: size.width / 3,
                  xs: size.width / 1.2,
                },
                width: {
                  lg: size.width / 8.3,
                  md: size.width / 6,
                  sm: size.width / 6.5,
                  xs: size.width / 2.8,
                },
                borderRadius: 2,
                position: "absolute",
                zIndex: 9,
                left: { xl: 200, lg: 160, md: 120, sm: 100, xs: 120 },
                top: { xl: 80, lg: 70, md: 60, sm: 35, xs: 20 },
              }}
            />
          </Box>
        </Box>

        <Box
          className="rotate"
          sx={{
            backgroundImage: `url(${space})`,
            backgroundSize: "cover",
            height: wrapperHeight,
            width: wrapperWidth,
            borderRadius: "100%",
          }}
        />
      </Box>
      {/* </SlideInUpDiv> */}
    </Box>
  );
};

export default Screenies;
