import { useContext } from "react";
import ActiveTagContext from "../Context/ActiveTagContext";
import ActiveTags from "./SearchComponents/ActiveTags";
import NewGroups from "./SearchComponents/NewGroups";
import SearchList from "./SearchComponents/SearchList";

function SearchContent() {
  const { setTag, tagsActive } = useContext(ActiveTagContext);

  const searchTag = (filter, tag) => {
    setTag(filter, tag);
    document
      .getElementsByClassName(`${tag.replace(/\s+/g, "")}`)[0]
      .classList.add("active");
    document
      .getElementsByClassName(`${filter}-clear`)[0]
      .classList.remove("hide");
  };

  const setYouthTags = () => {
    document
      .getElementsByClassName(`Demográfico-clear`)[0]
      .classList.remove("hide");
    setTag("Demográfico", "Mixtas (Jovenes)");
    setTag("Demográfico", "Adolecentes 9-13 Años");
    setTag("Demográfico", "Jovenes 14-21 Años");
    document
      .getElementsByClassName(`Mixtas(Jovenes)`)[0]
      .classList.add("active");
    document
      .getElementsByClassName(`Adolecentes9-13Años`)[0]
      .classList.add("active");
    document
      .getElementsByClassName(`Jovenes14-21Años`)[0]
      .classList.add("active");
  };

  const setMarriedTags = () => {
    document
      .getElementsByClassName(`Demográfico-clear`)[0]
      .classList.remove("hide");
    setTag("Demográfico", "Matrimonios Mixtas");
    setTag("Demográfico", "Matrimonios (Jovene)");
    setTag("Demográfico", "Matrimonios Sin Hijos");
    setTag("Demográfico", "Matrimonios Con Hijos (Todos Años)");
    setTag("Demográfico", "Matrimonios Con Hijos (0-8 Años)");
    setTag("Demográfico", "Matrimonios Con Hijos (14-21 Años)");
    document
      .getElementsByClassName(`MatrimoniosMixtas`)[0]
      .classList.add("active");
    document
      .getElementsByClassName(`Matrimonios(Jovene)`)[0]
      .classList.add("active");
    document
      .getElementsByClassName(`MatrimoniosSinHijos`)[0]
      .classList.add("active");
    document
      .getElementsByClassName(`MatrimoniosConHijos(TodosAños)`)[0]
      .classList.add("active");
    document
      .getElementsByClassName(`MatrimoniosConHijos(0-8Años)`)[0]
      .classList.add("active");
    document
      .getElementsByClassName(`MatrimoniosConHijos(14-21Años)`)[0]
      .classList.add("active");
  };
  return (
    <div className="search-content">
      <div className="search-header">
        <h1>Encuentra Un Grupo Aquí!</h1>
        <p>Hay Un Grupo Para Ti</p>
      </div>
      {!tagsActive && (
        <>
          <br />
          <h3>Temas Populares</h3>
          <br />
          <div className="image-container">
            <img
              src={require("../Images/Group-Images/everyone.jpg")}
              alt=""
              height="150px"
              onClick={() => searchTag("Demográfico", "Todos Bienvenidos")}
            />
            <img
              src={require("../Images/Group-Images/married.jpg")}
              alt=""
              height="150px"
              onClick={() => setMarriedTags()}
            />
            <img
              src={require("../Images/Group-Images/youth.jpg")}
              alt=""
              height="150px"
              onClick={() => setYouthTags()}
            />
            <img
              src={require("../Images/Group-Images/men.jpg")}
              alt=""
              height="150px"
              onClick={() => searchTag("Género", "Hombres")}
            />
            <img
              src={require("../Images/Group-Images/zoom.jpg")}
              alt=""
              height="150px"
              onClick={() => searchTag("EnPersona", "Virtual")}
            />
            <img
              src={require("../Images/Group-Images/women.jpg")}
              alt=""
              height="150px"
              onClick={() => searchTag("Género", "Mujeres")}
            />
          </div>

          <div className="image-container">
            {/* <img
              src={require("../Images/Group-Images/men.jpg")}
              alt=""
              height="150px"
            />
            <img
              src={require("../Images/Group-Images/everyone.jpg")}
              alt=""
              height="150px"
            /> */}
          </div>
          <br />
        </>
      )}
      {tagsActive && <ActiveTags />}
      {tagsActive && <SearchList />}
    </div>
  );
}

export default SearchContent;
