import React from "react";
import "./App.css";
import { AxiosResponse } from "axios";
import { PetApi, Pet } from "./lib/apis/.";

function App() {
  const petApi = new PetApi();

  const handleButtonClick = async () => {
    const response: AxiosResponse<Pet> = await petApi.getPetById(1);
    console.log(response.data);
  };

  return (
    <div className="App">
      <button onClick={handleButtonClick}>Pet!</button>
    </div>
  );
}

export default App;
