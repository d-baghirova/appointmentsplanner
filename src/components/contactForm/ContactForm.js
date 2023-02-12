import React from "react";
import ContactPicker from '../contactPicker/ContactPicker'

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone, 
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    //ContactForm
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type='tel' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type='submit' value='Add Contact' />
    </form>
  );
};
