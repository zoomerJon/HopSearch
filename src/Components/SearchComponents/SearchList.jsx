import { useTransition } from "react";
import { useContext, useState } from "react";
import ActiveTagContext from "../../Context/ActiveTagContext";
import SearchItem from "./SearchItem";

function SearchList() {
  const [day, setDay] = useState("");
  const [childcare, setChildcare] = useState("");
  const [inPerson, setInPerson] = useState("");
  const [demographic, setDemographic] = useState("");
  const [gender, setGender] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState([]);
  const [language, setLanguage] = useState("");
  const [leader, setLeader] = useState("");
  const { foundGroups } = useContext(ActiveTagContext);

  const toggleModal = (group) => {
    console.log(group);
    if (group["Group"]) {
      setPhone(group["Phone"]);
      setLeader(group["Leader"]);
      setLanguage(group["Language"]);
      setDay(group["Days"]);
      setTime(group["Time"]);
      setGender(group["Gender"]);
      setDemographic(group["Demographic"]);
      setInPerson(group["InPerson"]);
      setChildcare(group["Childcare"]);
    }
    document.getElementsByClassName("modal")[0].classList.toggle("hide");
    document.getElementsByClassName("overlay")[0].classList.toggle("hide");
  };

  return (
    <div className="searchlist-container">
      <div className="overlay hide" onClick={toggleModal}></div>
      <div className="modal hide">
        <div className="flex">
          <h2 className="modal-heading">Águilas CFC</h2>
          <img
            src="http://www.randoco.com/wp-content/uploads/2013/07/5355-Madre-Mesa_Aug_15_12_5951web.jpg"
            // height="310px"
            alt="user"
          />
          <button className="btn-close" onClick={toggleModal}>
            ⨉
          </button>
        </div>
        <div className="modal-text">
          <h2>About This Group</h2>
          <div className="modal-info">
            <h4>Group Leader(s):</h4>
            <p>{leader}</p>
            <h4>Meets on:</h4>
            <p>
              {day}s {time}
            </p>
            <h4>Language(s):</h4>
            <p>{language}</p>
            <h4>Gender:</h4>
            <p>{gender}</p>
            <h4>Tags:</h4>
            <p>{demographic}</p>
            <h4>Location:</h4>
            <p>{inPerson}</p>
            <h4>Childcare:</h4>
            <p>{childcare === "Childcare" ? "Yes" : childcare}</p>
          </div>
          <h2>Contact Information</h2>
          <h4 className="modal-info">Phone(s):</h4>
          {phone.map((phone, i) => (
            <p key={i} className="modal-info">
              {phone}{" "}
            </p>
          ))}
        </div>

        {/* <input type="email" id="email" placeholder="brendaneich@js.com" />
        <button className="btn">Do Something</button> */}
      </div>
      <h3>{foundGroups.length} Groups Found</h3>
      {foundGroups.map((group, i) => {
        return (
          <div key={i} onClick={() => toggleModal(group)}>
            <SearchItem group={group} />
          </div>
        );
        // console.log(leaderArr);
      })}
      {/* {foundGroups.map((group, i) => {
        const leaderArr = group.map((group) => `${group.Leader}`);
        console.log(leaderArr);
        return (
          <div key={i}>
            <SearchItem group={group[0]} />
          </div>
        );
      })} */}
    </div>
  );
}

export default SearchList;
