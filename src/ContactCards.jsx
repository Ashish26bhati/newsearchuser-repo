import FigureComponant from "./FigureComponant";


export default function ContactCards({ contactList }){
  return (
    <>
      {contactList?.map((contact, index) => (
        <FigureComponant mycantact={contact} key={index}/>
      ))}
    </>
  );
}

// const ContactCards = ({ contactList }) => {
// //   contactList && console.log(contactList);
//   return (
//     <>
//       {contactList?.map((contact, index) => (
//         <FigureComponant mycantact={contact} key={index}/>
//       ))}
//     </>
//   );
// };

// export default ContactCards;

