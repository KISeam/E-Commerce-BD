import React from "react";
import HeadDetails from "../../Components/HeadDetails";
import ContactInfo from "./Contact Components/ContactInfo";
import ContactForm from "./Contact Components/ContactForm";
import PageHeader from "../../Components/PageHeader";

const Contact = () => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-6 md:gap-10 lg:gap-12">
          <PageHeader page={"Contact"} />
          <div className="flex flex-col gap-10">
            <HeadDetails
              title={"Get in"}
              colortitle={"Touch"}
              subtitle={
                "Please select a topic below related to you inquiry. If you don t fint what you need, fill out our contact form."
              }
            />
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
