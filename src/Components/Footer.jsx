import React from "react";
import {
  MDBFooter,
  // MDBBtn,
  MDBIcon,
  // MDBNavItem,
  // MDBNavbar,
  MDBCol,
  MDBContainer,
  MDBRow
} from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              laboriosam consequatur odio ea illum expedita veritatis? Atque,
              beatae sapiente adipisci doloribus ut similique harum esse velit
              eos incidunt obcaecati consectetur?
            </p>
          </MDBCol>
          <MDBCol md="6">
            {/* <h5 className="title">Links</h5> */}
            <ul>
              <li className="list-unstyled">
                <a
                  className="nav-link navbar-link"
                  href="https://www.twitch.tv/bapphire"
                >
                  <MDBIcon fab icon="twitch" />
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  className="nav-link navbar-link"
                  href="https://twitter.com/bapphire"
                >
                  <MDBIcon fab icon="twitter" />
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  className="nav-link navbar-link"
                  href="https://github.com/Baph57"
                >
                  <MDBIcon fab icon="github" />
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  className="nav-link navbar-link"
                  href="https://www.twitch.tv/bapphire"
                >
                  <MDBIcon fab icon="patreon" />
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://github.com/Baph57"> Baph's GitHub </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};
// {
//   {
    /* <a className="nav-link navbar-link" href="https://www.twitch.tv/bapphire">
			<MDBIcon fab icon="twitch" />
			</a>
			<a
			className="nav-link navbar-link"
			href="https://twitter.com/bapphire"
			>
			<MDBIcon fab icon="twitter" />
			</a>  */
//   }
// }
export default Footer;
