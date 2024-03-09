import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <Box
        height={{ xs: "auto", md: "80dvh" }}
        p={5}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Box>
          <Typography
            sx={{
              mb: 10,
              fontWeight: 700,
              fontSize:{ xs: 35, md: 50 },
              textAlign: "center",
              letterSpacing: ".2rem",
            }}
          >
            Welcome to QUIZIFY,
          </Typography>
          <Box
            p={{ xs: 0, md: 10 }}
            display={"flex"}
            gap={"20px"}
            flexDirection={"column"}
          >
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: 20,
                textAlign: { xs: "auto", md: "center" },
                letterSpacing: ".2rem",
              }}
            >
              You will be asked 10 questions one after another
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: 20,
                color: "green",
                textAlign: { xs: "auto", md: "center" },
                letterSpacing: ".2rem",
              }}
            >
              Each question has three options. You can choose only one options
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: 20,
                textAlign: { xs: "auto", md: "center" },
                letterSpacing: ".2rem",
              }}
            >
              The result will be declared at the end of the quiz
            </Typography>
          </Box>
          <Box
            display={"flex"}
            gap={{ xs: 1, md: 2 }}
            justifyContent={"center"}
            pt="5rem"
          >
            <Button variant="outlined" href="#takeQuiz">Create a Quiz</Button>
            <Button href="#createQuiz" variant="contained">
              Take a Quiz
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
