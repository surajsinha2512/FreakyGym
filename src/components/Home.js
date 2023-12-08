import React from "react";
import userInfoImage from "./../assets/userInfoImage.png";
import googleMap from './../assets/googleMap.png'
import FormDialog from "./DilaogBox";
import { Button } from "@mui/material";
import Select from 'react-select';

const Home = () => {
  const [showDialogBox, setShowDialogbox] = React.useState(false);

  const childrenStyle = {
    // marginLeft: "10%",
    marginRight: "5%",
  };

  const parentStyle = {
    position: "absolute",
    top: "0px",
    width: "98%",
    display: "flex",
    flexDirection: "row",
    padding: "15px",
    background: "#808080",
    color: "white",
    fontSize: "20px",
    fontWeight: "700",
  };

  const handleSignInDialogBox = () => {
    setShowDialogbox(true);
  };

  return (
    <>
      <div>
        <div style={parentStyle}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "25%",
              alignItems: "center",
            }}
          >
            <div style={childrenStyle}>Gym Freaks logo</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "55%",
              alignItems: "center",
            }}
          >
            <div style={childrenStyle}>Home</div>
            <div style={childrenStyle}>Contact Us</div>
            <div style={childrenStyle}> About</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "20%",
              alignItems: "center",
            }}
          >
            <Button
              style={{
                marginRight: "10px",
                padding: "8px",
                background: "transparent",
                alignItems: "center",
                minWidth: "fix-content",
                display: "flex",
                flexDirection: "row",
                color: "white",
                fontWeight: "500",
              }}
            >
              {" "}
              <div>Delhi NCR</div>
              <img
                src={googleMap}
                style={{
                  height: "25px",
                  width: "25px",
                  //borderRadius: "50%",
                  marginLeft: "10px",
                  border: "none",
                  minWidth: "fix-content",
                  alignItems: "center",
                  background: "transparent"
                }}
              ></img>
            </Button>
            {/* <div style={childrenStyle} onClick={handleSignInDialogBox}>Sign In</div> */}
            <FormDialog />
            <img
              src={userInfoImage}
              style={{
                height: "25px",
                width: "25px",
                borderRadius: "50%",
                marginLeft: "10px",
              }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
