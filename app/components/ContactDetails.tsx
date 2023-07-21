import { useState } from "react";
import { Grid, TextField } from "@mui/material";

interface ContactDetails {
  name: string;
  objective: string;
  email: string;
  website: string;
  phone: string;
  location: string;
}

interface ContactDetailsProps {
  onChange: (contact: ContactDetails) => void;
  contactDetails: ContactDetails;
}

const ContactDetails = ({ onChange, contactDetails }: ContactDetailsProps) => {
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({
      ...contactDetails,
      [name]: value,     
    });
  };

  return (
    <Grid container spacing={2} className="border-solid border-2 border-gray-200 pb-4 pr-4 bg-slate-100 rounded-md mb-10">
      <Grid item xs={12}>
        <TextField
          name="name"
          label="Name"
          value={contactDetails.name}
          onChange={handleContactChange}
          fullWidth
          className="bg-white"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="objective"
          label="Objective"
          value={contactDetails.objective}
          onChange={handleContactChange}
          fullWidth
          className="bg-white"
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          name="email"
          label="Email"
          value={contactDetails.email}
          onChange={handleContactChange}
          fullWidth
          className="bg-white"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          name="phone"
          label="Phone"
          value={contactDetails.phone}
          onChange={handleContactChange}
          fullWidth
          className="bg-white"
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          name="website"
          label="Website"
          value={contactDetails.website}
          onChange={handleContactChange}
          fullWidth
          className="bg-white"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          name="location"
          label="Location"
          value={contactDetails.location}
          onChange={handleContactChange}
          fullWidth
          className="bg-white"
        />
      </Grid>
    </Grid>
  );
};

export default ContactDetails;