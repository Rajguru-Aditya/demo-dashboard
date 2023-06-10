import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import loginbg from "../assets/login.png";

const defaultTheme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    // Redirect to home page
    navigate("/home1");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box
            sx={{
              mx: 4,
              ml: [0, 16],
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              bgcolor: "rgba(255, 255, 255, 0.7)",
              px: 2,
              py: 4,
              backdropFilter: "blur(4px)",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{ textAlign: "left", fontSize: "40px" }}
            >
              Login to{" "}
              <span style={{ fontWeight: "bold", color: "black" }}>My CRM</span>
            </Typography>
            <Typography sx={{ textAlign: "left", color: "#808080" }}>
              Step towards success
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{ width: "80%" }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{ width: "80%" }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  width: "30%",
                  height: "40px",
                  fontSize: "14px",
                  background:
                    "linear-gradient(45deg, #2196F3 30%, #0D47A1 90%)",
                  boxShadow: "0 3px 5px 2px rgba(33, 150, 243, .3)",
                  color: "white",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #0D47A1 30%, #2196F3 90%)",
                  },
                }}
              >
                Log In
              </Button>

              <Grid container alignItems="center" spacing={0}>
                <Grid item xs={7}>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={loginbg}
            alt="Login Background"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
