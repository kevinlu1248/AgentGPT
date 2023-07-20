import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const AgentTaskExecutionPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [agentState, setAgentState] = React.useState('stopped');

  const handleContinueClick = async () => {
    try {
      await axios.post(`/api/agent/${id}/resume`);
      setAgentState('running');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {agentState === 'stopped' && (
        <button onClick={handleContinueClick}>Continue</button>
      )}
      {/* Rest of the page */}
    </div>
  );
};

export default AgentTaskExecutionPage;