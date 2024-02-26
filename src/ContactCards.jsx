const ContactCards = ({ contactList }) => {
//   contactList && console.log(contactList);
  return (
    <>
      {contactList?.map((contact, index) => (
        <figure
          key={index}
          className=" h-80 bg-white shadow-md pt-7 rounded-md"
        >
          <img
            alt="user"
            className="w-32 h-32 rounded-full mx-auto"
            src={contact.picture.large}
          />
          <figcaption className=" text-center mt-5">
            <p className=" text-xl text-gray-700 font-semibold mb-2">
              {contact.name.first} {contact.name.last}
            </p>
            <p className=" text-gray-500">
              <span className=" font-medium"> Email</span>:{contact.email}
            </p>
            <p className=" text-gray-500">
              <span className=" font-medium">Phone</span>: {contact.phone}
            </p>
            <p className=" text-gray-500">
              <span className=" font-medium">City</span>:{" "}
              {contact.location.city}
            </p>
          </figcaption>
        </figure>
      ))}
    </>
  );
};

export default ContactCards;
