import React from "react";

export const ContactPicker = ({name, contacts, onChange}) => {
  return (
   <select name={name} onChange={onChange}>
      <option selected='selected' key={-1} value={''}>
        No contacts selected
      </option>
      {contacts.map((contact) => {
          return (
            <option key={contact} value={contact}>
              {contact}
              </option>
          )
        })}
    </select>
  );
};
