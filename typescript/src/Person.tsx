import { useState } from "react";

interface Props {
  Name: string;
  Age: number;
  Married: boolean;
}

const Person = (props: Props) => {
  const [isShowInfo, setShowInfo] = useState<boolean | null>(false);
  const [personBio, setPersonBio] = useState<string | null>(null);

  const toggleInfo = () => {
    setShowInfo((prev) => !prev);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonBio(event.target.value)
  }

  //on submit the event name will be React.FormEvent<HTMLFormElement>

  return (
    <div>
      {isShowInfo ? (
        <div>
          <p>Name: {props.Name}</p>
          <p>Age: {props.Age}</p>
          <p>This person is {props.Married ? "is married" : "not married"}</p>
          <p>Bio: {personBio === null ? "No bio" : personBio}</p>
          <input onChange={handleChange} />
        </div>
      ) : (
        ""
      )}
      <button onClick={toggleInfo}>Toggle Info</button>
    </div>
  );
};

export default Person;
