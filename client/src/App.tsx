function App() {
  return (
    <div className="">
      <h1 className="text-center bg-blue-600 font-bold text-3xl py-6 text-white">
        Todo app
      </h1>
      <div className="container mx-auto">
        <div className="flex gap-2 py-6 items-center">
          <div className="">
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Add todo"
            />
          </div>
          <div className="">
            <button className="bg-blue-600 text-white p-2 rounded w-full px-4 hover:bg-blue-700">
              Add
            </button>
          </div>
        </div>
        <div className="mt-6">
          <ul>
            <li className="flex justify-between items-center p-2 border-b border-gray-300">
              <span>Todo 1</span>
              <div className="flex gap-2">
                <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                  Edit
                </button>
                <button className="bg-red-600 text-white p-2 rounded hover:bg-red-700">
                  Delete
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
