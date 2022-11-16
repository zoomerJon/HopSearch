import { useEffect } from "react";
import { useContext } from "react";
import ActiveTagContext from "../../Context/ActiveTagContext";

function NewGroups() {
  const { groupList } = useContext(ActiveTagContext);
  let newGroupList;
  useEffect(() => {
    newGroupList = groupList.slice(-3);
    console.log(newGroupList);
  }, [groupList]);
  return (
    <div>
      <h3>New Groups</h3>
    </div>
  );
}

export default NewGroups;
