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
    if (group["Grupo"]) {
      setPhone(group["Teléfono"]);
      setLeader(group["Líder"]);
      setLanguage(group["Idioma"]);
      setDay(group["Dias"]);
      setTime(group["Tiempo"]);
      setGender(group["Género"]);
      setDemographic(group["Demográfico"]);
      setInPerson(group["EnPersona"]);
      setChildcare(group["NiñosBienvenidos"]);
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
          <h2>Sobre Este Grupo</h2>
          <div className="modal-info">
            <h4>Lider(es) de Grupo:</h4>
            <p>{leader}</p>
            <h4>Se Encuentra En:</h4>
            <p>
              {day} {time}
            </p>
            <h4>Idioma(s):</h4>
            <p>{language}</p>
            <h4>Género:</h4>
            <p>{gender}</p>
            <h4>Temas:</h4>
            <p>{demographic}</p>
            <h4>Ubicación:</h4>
            <p>{inPerson}</p>
            <h4>Niños Bienvenidos:</h4>
            <p>{childcare === "Niños Bienvenidos" ? "Sí" : childcare}</p>
          </div>
          <h2>Información Del Contacto</h2>
          <h4 className="modal-info">Número De Teléfono(s):</h4>
          {phone.map((phone, i) => (
            <p key={i} className="modal-info">
              {phone}{" "}
            </p>
          ))}
        </div>

        {/* <input type="email" id="email" placeholder="brendaneich@js.com" />
        <button className="btn">Do Something</button> */}
      </div>
      <h3>{foundGroups.length} Grupos Encontrados</h3>
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
