import React, { Component } from "react";
import { Grid, List, ListItem } from "react-mdl";
import { MdContactMail, MdPhoneAndroid, MdAddLocation } from "react-icons/all";

import "../Contact/Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <h2>Contact me!</h2>
          <List>
            <ListItem>
              <div className="contact-box">
                <div className="contact-icons">
                  <MdPhoneAndroid />
                </div>
                <div className="contact-text">(+45) 91601459</div>
              </div>
            </ListItem>

            <ListItem>
              <div className="contact-box">
                <div className="contact-icons">
                  <MdContactMail />
                </div>
                <div className="contact-text">venkatsetty.neha@gmail.com</div>
              </div>
            </ListItem>
            <ListItem>
              <div className="contact-box">
                <div className="contact-icons">
                  <MdAddLocation />
                </div>
                <div className="contact-text">Copenhagen, Denmark</div>
              </div>
            </ListItem>
          </List>
        </Grid>
      </div>
    );
  }
}

export default Contact;
