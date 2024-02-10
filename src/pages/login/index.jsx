import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    localStorage.setItem("userEmail", username);
    window.location.href = "/";
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh", backgroundColor: "#f5f5f5" }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={10} sx={{ p: 4 }}>
          <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
              <Avatar sx={{ backgroundColor: "#1bbd7e" }}>
                <LockOutlinedIcon />
              </Avatar>
            </Grid>
            <Grid item>
              <Typography variant="h5">Sign In</Typography>
            </Grid>
          </Grid>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              placeholder="Enter Email"
              variant="outlined"
              fullWidth
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              sx={{ my: 2 }}
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              sx={{ my: 2 }}
            />
            <FormControlLabel
              control={<Checkbox name="remember" color="primary" />}
              label="Remember me"
              sx={{ mb: 2 }}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              sx={{ mb: 2 }}
            >
              Sign in
            </Button>
          </form>
          <Typography variant="body2">
            <Link href="#" color="textSecondary">
              Forgot password?
            </Link>
          </Typography>
          <Typography variant="body2">
            Don't have an account?{" "}
            <Link href="#" color="textSecondary">
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
