import React, { useState } from 'react';

interface ServerAIModel {
  id: string;
  name: string;
  prompt: string;
  knowledge: string;
  comments: string;
}

interface PromptModel {
  id: string;
  name: string;
}

const initialServerAIs: ServerAIModel[] = [
  {
    id: '1',
    name: 'ServerAIModel01',
    prompt: 'this is test prompt 1',
    knowledge: 'Base Knowledge',
    comments: 'Initial comments'
  },
  {
    id: '2',
    name: 'ServerAIModel02',
    prompt: 'this is test prompt 2',
    knowledge: 'Extended Knowledge',
    comments: 'Secondary comments'
  },
];

const initialPrompts: PromptModel[] = [
  { id: '1', name: 'Sample Prompt 1' },
  { id: '2', name: 'Sample Prompt 2' },
];

const models = ["GPT 3.5 Turbo", "GPT 4.0"];

const Home: React.FC = () => {
  const [serverAIs, setServerAIs] = useState<ServerAIModel[]>(initialServerAIs);
  const [promptModels, setPromptModels] = useState<PromptModel[]>(initialPrompts);
  const [selectedServerAIId, setSelectedServerAIId] = useState<string>(serverAIs[0].id);
  const [selectedModel, setSelectedModel] = useState<string>(models[0]);
  const [memoryEnabled, setMemoryEnabled] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [knowledge, setKnowledge] = useState<string>('');
  const [comments, setComments] = useState<string>('');
  const [newPrompt, setNewPrompt] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setFile(file);
    // Optionally read the file or process it here if required
  };
  
  const uploadFile = async () => {
    if (file) {
      setUploadStatus('Uploading...');
      try {
        // Simulate a file upload delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        // Implement actual upload logic here
        setUploadStatus('File uploaded successfully.');
      } catch (error) {
        setUploadStatus('Failed to upload file.');
      }
    }
  };

  const handleServerAIChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAI = serverAIs.find(ai => ai.id === event.target.value);
    setSelectedServerAIId(event.target.value);
    if (selectedAI) {
      setName(selectedAI.name);
      setPrompt(selectedAI.prompt);
      setKnowledge(selectedAI.knowledge);
      setComments(selectedAI.comments);
    }
  };

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(event.target.value);
  };

  const handleMemoryToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMemoryEnabled(event.target.checked);
  };

  const createServerAI = () => {
    const newAI = {
        id: Date.now().toString(),
        name,
        prompt,
        knowledge,
        comments
    };

    setServerAIs([...serverAIs, newAI]);
    setName('');
    setPrompt('');
    setKnowledge('');
    setComments('');
    // Reset file after creating the server AI entry if required
    setFile(null);
  };

  const deleteServerAI = () => {
    setServerAIs(serverAIs.filter(ai => ai.id !== selectedServerAIId));
  };

  const createPromptModel = () => {
    const newId = `prompt-${Date.now()}`;
    const newPromptEntry = { id: newId, name: newPrompt };
    setPromptModels([...promptModels, newPromptEntry]);
    setNewPrompt('');
  };

  const deletePrompt = (id: string) => {
    setPromptModels(promptModels.filter(model => model.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <header className="py-4 shadow bg-gray-800 text-white text-center text-lg">
        TopDown AI - Server AI Settings
      </header>
      <div className="bg-white shadow-md rounded-lg p-4 mt-6">
        <div className="flex flex-row items-center justify-between">
          <div className="w-full mx-3 my-2 px-3 py-2 border rounded-md">
            <label className="block text-gray-700 text-sm font-bold mb-2">Prompt Model List</label>
            {promptModels.map(prompt => (
              <div key={prompt.id} className="flex justify-between items-center px-2 py-1 bg-gray-100 mt-1 rounded">
                <span>{prompt.name}</span>
                <button
                  onClick={() => deletePrompt(prompt.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                >
                  Delete
                </button>
              </div>
            ))}
            <div className='flex flex-col items-start justify-between px-2 py-3'>
              <label className="block text-gray-700 text-sm font-bold mb-2">New Prompt</label>
              <input
                type="text"
                className="form-input block w-full rounded-md border-gray-300 shadow-sm px-3 py-2"
                placeholder="Enter new prompt..."
                value={newPrompt}
                onChange={e => setNewPrompt(e.target.value)}
              />
              <button
                onClick={createPromptModel}
                className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Create Prompt
              </button>
            </div>
          </div>
          <div className="w-full mx-3 my-2 px-3 py-2 border rounded-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Model</label>
              <select
                className="form-select block w-full rounded-md border-gray-300 shadow-sm px-2 py-1"
                value={selectedModel}
                onChange={handleModelChange}
              >
                {models.map(model => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  checked={memoryEnabled}
                  onChange={handleMemoryToggle}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700 text-sm font-bold">Memory</span>
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">ServerAI</label>
              <select
                className="form-select block w-full rounded-md border-gray-300 shadow-sm px-2 py-1"
                value={selectedServerAIId}
                onChange={handleServerAIChange}
              >
                {promptModels.map(ai => (
                  <option
                    key={ai.id}
                    value={ai.id}>
                      {ai.name}
                    </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="mx-2 my-3 px-3 py-2 border rounded-md">
          <label className="block text-gray-700 text-lg font-bold mb-2">Prompt<span className='text-red-600 mx-1'>*</span></label>
          <span className='text-sm text-gray-400 px-2'>Tell your bot how to behave and how to respond to user messages. Try to be as specific as possible.</span>
          <textarea
            className="form-textarea my-2 block w-full rounded-md border shadow-sm px-3 py-2"
            rows={3}
            placeholder="e.g. You are the CatBot. You will try to respond to the user's questions, but you get easily distracted."
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
          />
        </div>
        <div className="mx-2 my-3 px-3 py-2 border rounded-md">
          <label className="block text-gray-700 text-lg font-bold mb-2">Knowledge base</label>
          <span className='text-sm text-gray-400 px-2'>Provide custom knowledge that your bot will access to inform its responses. Your bot will retrieve relevant sections from the knowledge base based on the user message. The data in the knowledge base may be made viewable by other users through bot responses or citations.</span>
          <textarea
            className="form-textarea mt-1 block w-full rounded-md border shadow-sm px-3 py-2"
            rows={3}
            placeholder="Knowledge..."
            value={knowledge}
            onChange={e => setKnowledge(e.target.value)}
          />
          <div className="mx-2 my-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              + Add Knowledge source
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="file"
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
                onChange={handleFileChange}
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={uploadFile}
                disabled={!file}
              >
                Upload
              </button>
            </div>
            {uploadStatus && <p className="text-sm mt-2 text-gray-600">{uploadStatus}</p>}
          </div>
        </div>
        <div className="mx-2 my-3 px-3 py-2 border rounded-md">
          <label className="block text-gray-700 text-lg font-bold mb-2">Comments</label>
          <textarea
            className="form-textarea mt-1 block w-full rounded-md border shadow-sm px-3 py-2"
            rows={2}
            placeholder="Comments..."
            value={comments}
            onChange={e => setComments(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-end gap-4">
          <button
            onClick={createServerAI}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create
          </button>
          <button
            onClick={deleteServerAI}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
