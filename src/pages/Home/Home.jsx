import { styled } from "@mui/material/styles";
// components
import { Paper, Box, CardMedia } from "@mui/material";
import { Title } from "../../components/Title/Title";
// static
import AUTH from "../../assets/img/auth.jpg";
import "./Home.sass";

const MyCardMedia = styled(CardMedia)(() => ({
  width: "50%",
  height: "70%",
  objectFit: "contain",
  margin: "0 auto",
}));

export const Home = () => {
  return (
    <>
      <Title title={"Мое тестовое задание..."} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Paper
          component="section"
          elevation={2}          
          className="home__paper"
        >
          <MyCardMedia
            component="img"
            src={AUTH}
            alt="auth.jpg"
            loading="lazy"
          ></MyCardMedia>
        </Paper>
      </Box>
    </>
  );
};
