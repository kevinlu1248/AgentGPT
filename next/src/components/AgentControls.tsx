import React from 'react';

function AgentControls() {
  const [agentStopped, setAgentStopped] = React.useState(false);

  function handleContinue() {
    // code to resume the agent's operation
  }

  return (
    <div>
      {agentStopped && <button onClick={handleContinue}>Continue</button>}
    </div>
  );
}

export default AgentControls;