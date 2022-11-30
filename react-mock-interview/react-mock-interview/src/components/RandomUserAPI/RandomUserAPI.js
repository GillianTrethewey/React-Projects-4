import React from "react";

const RandomUserAPI = (props) => {
  return (
    <div>
      {console.log("person: ", props.person)}
      {props.isLoading || !props.person ? (
        <div>loading...</div>
      ) : (
        <div>
          <br />
          <div>
            {props.person.name.title} {props.person.name.first}{" "}
            {props.person.name.last}
          </div>
          <img
            style={{ borderRadius: "50%" }}
            src={props.person.picture.large}
            alt={""}
          />
        </div>
      )}
    </div>
  );
};

export default RandomUserAPI;
