import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Box, IconButton, Image, Text } from "@chakra-ui/react";
import { Search2Icon, HamburgerIcon } from "@chakra-ui/icons";
import Button from "./Button";

function Navbar() {
  const [color, SetColor] = useState("black");

  return (
    <div id="Navbar_container">
      <div id="Navbar">
        {/* <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      id="left_navs_links" */}

        <Box
          display={{ base: "none", md: "none", lg: "flex" }}
          justifyContent="space-evenly"
          alignItems="center"
          w="35%"
        >
          <Link to="/" className="left_link">
            Products
          </Link>
          <Link to="/" className="left_link">
            Resources
          </Link>
          <Link to="/" className="left_link">
            Inspiration
          </Link>
          <Link to="/" className="left_link">
            Pricing
          </Link>
        </Box>

        <Box display={{ base: "block", md: "block", lg: "none" }}>
          <div id="sidebar_icon">
            <HamburgerIcon
              w={8}
              h={8}
              size="md"
              aria-label="Search database"
              icon={<Search2Icon w={10} />}
              style={{ background: "none" }}
            />
          </div>
        </Box>

        <Link to="/" id="mid_logo">
          <div id="mid_logo_container">
            <Image
              w={140}
              src="https://www.edigitalagency.com.au/wp-content/uploads/mailchimp-logo-black-png-transparent-860x239.png"
              alt="Logo"
            />
          </div>
        </Link>

        <Box display={{ base: "none", md: "none", lg: "block" }} w="35%">
          <div id="right_navs_links">
            <Box>
              <Text textAlign="right" fontSize="md">
                Sales:
              </Text>
              <Text textAlign="right" fontSize="md">
                +1 (800) 315-5939
              </Text>
            </Box>
            <IconButton
              size="md"
              aria-label="Search database"
              icon={<Search2Icon w={10} />}
              style={{ background: "none" }}
              onMouseOver={() => {
                SetColor("#007c89");
              }}
              onMouseOut={() => {
                SetColor("black");
              }}
              color={color}
            />
            <Button type="Log in" />
            <Button id="sign_up_btn" type="Sign Up" />
          </div>
        </Box>

        <Box
          display={{ base: "flex", md: "flex", lg: "none" }}
          justifyContent="center"
          alignItems="center"
        >
          <Button type="Log in" />
        </Box>
      </div>
    </div>
  );
}

export default Navbar;
