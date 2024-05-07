import React from 'react';

const ModelSettings: React.FC = () => {
  return (
    <div className="my-4">
      <label className="block text-sm font-medium text-gray-700">Model</label>
      <select className="form-select block w-full mt-1 rounded-md border-gray-300 shadow-sm">
        <option>GPT 3.5 turbo</option>
        <option>GPT 4</option>
      </select>
    </div>
  );
};

export default ModelSettings;
