import useFetch from "react-fetch-hook";
import ContactCards from "./ContactCards";
import { useEffect, useState } from "react";
import loading from  "./assets/loading.gif"


const App = () => {

  const url = "https://randomuser.me/api"
  const {data, isLoading } = useFetch(url + '?results=1200')
  // console.log(isLoading);
  // data && console.log(data);
  const [contactList, setContactList] = useState()
  const [filterQuery, setFilterQuery] = useState()

  useEffect(() => {
    if (filterQuery) {
      const queryString = filterQuery.toLowerCase()
      const filteredData = data?.results.filter(contact => {
        const fullName = `${contact.name.first} ${contact.name.last}`
        if (queryString.length === 1) {
          const firstLetter = fullName.charAt(0).toLowerCase()
          return firstLetter === queryString;
        }
        else {
          return fullName.toLowerCase().includes(queryString)
        }
      })
      setContactList(filteredData)
    }
    else {
      setContactList(data?.results)
    }
  }, [data, filterQuery])

  return (
    <>
    <div className="bg-gray-100 pb-10">
      <section className="ml-20">
        <form>
          <input type="text" className=" mt-6 rounded-md p-3 mb-6 w-96" placeholder="Type here to search contact" onChange={event => setFilterQuery(event.target.value)} />
        </form>
      </section>
      <section className="ml-20 mr-20 mt-10 grid  md:grid-cols-4  sm:grid-cols-2 gap-6">
      {isLoading ? ( <img src={loading} alt="loading"/> ): ( <ContactCards contactList={contactList} />)}
      </section>
      <section className="ml-20 mr-20">
        {contactList?.length < 1 && <h1 className=" bg-white shadow-md p-7 rounded-md  text-red-600 font-semibold ">No Data Mathes for your Search</h1>}
      </section>
    </div>
    </>
  )
}

export default App;
