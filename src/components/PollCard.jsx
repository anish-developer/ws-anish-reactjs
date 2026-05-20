import { useState } from "react";

import OptionCard from "./OptionCard";

import VoteSection from "./VoteSection";

function PollCard({ poll, refreshPolls }) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="poll-card">
      <h1 className="title">{poll.title}</h1>

      <p className="description">{poll.description}</p>

      <div className="options">
        {poll.options.map((option) => (
          <OptionCard
            key={option.id}
            option={option}
            poll={poll}
            setSelectedOption={setSelectedOption}
          />
        ))}
      </div>

      {selectedOption && (
        <VoteSection
          pollId={poll.id}
          option={selectedOption}
          refreshPolls={refreshPolls}
        />
      )}
    </div>
  );
}

export default PollCard;
