import { useState } from "react";

import API from "../api/axios";

import { energyOptions } from "../data";

function VoteSection({ pollId, option, refreshPolls }) {
  const [energyIndex, setEnergyIndex] = useState(0);

  const energy = energyOptions[energyIndex];

  const increaseEnergy = () => {
    if (energyIndex < energyOptions.length - 1) {
      setEnergyIndex(energyIndex + 1);
    }
  };

  const decreaseEnergy = () => {
    if (energyIndex > 0) {
      setEnergyIndex(energyIndex - 1);
    }
  };

  const voteHandler = async () => {
    try {
      await API.post(`/polls/${pollId}/vote`, {
        optionId: option.id,
        energy,
      });

      refreshPolls();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="vote-section">
      <h2>{option.name}</h2>

      <div className="energy-box">
        <button onClick={decreaseEnergy}>-</button>

        <div>⚡ {energy}</div>

        <button onClick={increaseEnergy}>+</button>
      </div>

      <button className="vote-btn" onClick={voteHandler}>
        Vote
      </button>
    </div>
  );
}

export default VoteSection;
