import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
//import { FaPhone, FaMailBulk } from "react-icons/fa";
import {
  MdContactMail,
  MdPhoneAndroid,
  FaTelegram,
  MdAddLocation,
} from "react-icons/all";

import "../Contact/Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Neha Setty</h2>
            <img
              className="contactimg"
              src="https://nofiredrills.com/wp-content/uploads/2016/10/myavatar.png"
              alt="contactimg"
              style={{ height: "250px" }}
            />
          </Cell>
          <Cell col={6}>
            {/* <div>Contact Me</div> */}

            <List>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <div className="contact-box">
                    <div className="contact-icons">
                      <MdPhoneAndroid />
                    </div>
                    <div className="contact-text">(+45) 91601459</div>
                  </div>
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <div className="contact-box">
                    <div className="contact-icons">
                      <MdContactMail />
                    </div>
                    <div className="contact-text">
                      venkatsetty.neha@gmail.com
                    </div>
                  </div>
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <div className="contact-box">
                    <div className="contact-icons">
                      <FaTelegram />
                    </div>
                    <div className="contact-text">@NehaSetty</div>
                  </div>
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <div className="contact-box">
                    <div className="contact-icons">
                      <MdAddLocation />
                    </div>
                    <div className="contact-text">Copenhagen, Denmark</div>
                  </div>
                </ListItemContent>
              </ListItem>
            </List>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
