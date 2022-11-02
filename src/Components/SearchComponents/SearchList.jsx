import { useContext } from "react";
import ActiveTagContext from "../../Context/ActiveTagContext";
import SearchItem from "./SearchItem";

function SearchList() {
  const { foundGroups } = useContext(ActiveTagContext);

  const toggleModal = () => {
    document.getElementsByClassName("modal")[0].classList.toggle("hide");
    document.getElementsByClassName("overlay")[0].classList.toggle("hide");
  };
  return (
    <div className="searchlist-container">
      <div class="overlay hide"></div>
      <div className="modal hide">
        <div className="flex">
          <img
            src="http://www.randoco.com/wp-content/uploads/2013/07/5355-Madre-Mesa_Aug_15_12_5951web.jpg"
            width="90%"
            // height="310px"
            alt="user"
          />
          <button className="btn-close" onClick={toggleModal}>
            ⨉
          </button>
        </div>
        <div>
          <h3>About This Group</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            laboriosam ea similique reprehenderit tenetur sit repudiandae vitae
            expedita assumenda sunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            laboriosam ea similique reprehenderit tenetur sit repudiandae vitae
            expedita assumenda sunt.
          </p>
        </div>

        {/* <input type="email" id="email" placeholder="brendaneich@js.com" />
        <button className="btn">Do Something</button> */}
      </div>
      <h3>Found Groups:</h3>
      {foundGroups.map((group, i) => {
        return (
          <div key={group.Leader} onClick={toggleModal}>
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
