import ProgressBar from "./ProgressBar";

function OptionCard({ option, poll, setSelectedOption }) {
  const totalEnergy = poll.options.reduce(
    (sum, item) => sum + item.overallTotalEnergySpent,
    0,
  );

  const percentage =
    totalEnergy === 0
      ? 0
      : Math.round((option.overallTotalEnergySpent / totalEnergy) * 100);

  return (
    <div className="option-card" onClick={() => setSelectedOption(option)}>
      <div className="option-top">
        <img src={option.imageUrl} alt={option.name} />

        <div>
          <h3>{option.name}</h3>

          <p>⚡ {option.overallTotalEnergySpent}</p>
        </div>
      </div>

      <ProgressBar percentage={percentage} />

      <div className="percentage">{percentage}%</div>
    </div>
  );
}

export default OptionCard;
