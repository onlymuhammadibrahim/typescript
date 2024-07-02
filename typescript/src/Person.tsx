// import { useContext } from "react";
// import { UserContext } from "./UserContextProvider";

import { Countries } from "./enums";

interface Props {
  Name: string;
  Age: number;
  Married: boolean;
  country: Countries;
}


const User = (props: Props) => {
  // const { users, updateUser, deleteUser, addUser } = useContext(UserContext);

  return (
    <div>
      <p>Name: {props.Name}</p>
      <p>Age: {props.Age}</p>
      <p>This person is {props.Married ? "is married" : "not married"}</p>
      <p>Country of origin: {props.country}</p>
    </div>
  );
};

export default User;
