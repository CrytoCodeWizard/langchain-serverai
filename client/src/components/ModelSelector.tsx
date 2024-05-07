import React from 'react';

const ModelSelector: React.FC = () => {
  return (
    <div className="my-4">
      <select className="form-select block w-full mt-1 rounded-md border-gray-300 shadow-sm">
        <option>PromptModel01</option>
        <option>PromptModel02</option>
      </select>
    </div>
  );
};

export default ModelSelector;
