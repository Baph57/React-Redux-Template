import React from "react";
import { MDBFooter, MDBBtn, MDBIcon, MDBNavItem } from "mdbreact";

const Footer = () => {
return (
    <MDBFooter color="blue" className="text-center font-small darken-2">
    {/* <div className="pt-4">
        <MDBBtn
        outline
        color="white"
        tag="a"
        href="https://github.com/Baph57"
        target="_blank"
        >
        Lorem Ipsum
        <MDBIcon icon="download" className="ml-2" />
        </MDBBtn>
        <MDBBtn
        outline
        color="white"
        tag="a"
        href="https://github.com/Baph57"
        target="_blank"
        >
        Lorem Ipsum
        <MDBIcon icon="graduation-cap" className="ml-2" />
        </MDBBtn>
        <hr className="my4" /> */}
    {/* </div> */}
    <div className="pb-4">
        <MDBNavItem>
        <a
            className="nav-link navbar-link"
            href="https://www.twitch.tv/bapphire"
        >
            <MDBIcon fab icon="twitch" />
        </a>
        </MDBNavItem>
        <MDBNavItem>
        <a
            className="nav-link navbar-link"
            href="https://twitter.com/bapphire"
        >
            <MDBIcon fab icon="twitter" />
        </a>
        </MDBNavItem>
        <MDBIcon fab icon="youtube" className="mr-3" />
        <MDBIcon fab icon="google-plus" className="mr-3" />
        <MDBIcon fab icon="dribbble" className="mr-3" />
        <MDBIcon fab icon="pinterest" className="mr-3" />
        <MDBIcon fab icon="github" className="mr-3" />
        <MDBIcon fab icon="codepen" className="mr-3" />
      </div>
      <p className="footer-copyright mb-0 py-3 text-center">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href="https://github.com/Baph57"> Baph57 </a>
      </p>
    </MDBFooter>
  );
};

export default Footer;
