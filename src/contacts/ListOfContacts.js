import React from "react";
import List from "./List";
const contacts = [
  {
    firstName: "Barney",
    lastName: "Stanitskyi",
    phone: +380956319521,
    gender: "male",
  },
  {
    firstName: "Robin",
    lastName: "Shcherpa",
    phone: +380931460123,
    gender: "female",
  },
  {
    firstName: "Anonim",
    lastName: "Anonimus",
    phone: +380666666666,
  },
  {
    firstName: "Lil",
    lastName: "Olderfan",
    phone: +380504691254,
    gender: "female",
  },
  {
    firstName: "Marshen",
    lastName: "Eriksoyan",
    phone: +380739432123,
    gender: "male",
  },
  {
    firstName: "Teo",
    lastName: "Motsons",
    phone: +380956319521,
    gender: "male",
  },
];

export default function ListOfContacts() {
  return (
    <ul>
      {contacts.map((contact) => (
        <List {...contact} />
      ))}
    </ul>
  );
}
