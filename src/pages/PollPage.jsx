import { useEffect, useState } from "react";

import API from "../api/axios";

import PollCard from "../components/PollCard";

function PollPage() {
  const [polls, setPolls] = useState([]);

  const fetchPolls = async () => {
    try {
      const res = await API.get("/polls");

      setPolls(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPolls();
  }, []);

  return (
    <div className="page">
      {polls.map((poll) => (
        <PollCard key={poll.id} poll={poll} refreshPolls={fetchPolls} />
      ))}
    </div>
  );
}

export default PollPage;
