import React, { useRef } from "react";

const App = () => {
  const typingTimeout = useRef(null);
  const clickCount = useRef(0);

  const nameRef = useRef();
  const messageRef = useRef();

  const searchRef = useRef();

  const handleTyping = () => {
    clearTimeout(typingTimeout.current);
    typingTimeout.current = setTimeout(() => {
      console.log("User stopped typing...");
    }, 2000);
  };

  const handleClick = () => {
    clickCount.current += 1;
    console.log("Count:", clickCount.current);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(messageRef.current.value);
    nameRef.current.value = "";
    messageRef.current.value = "";
  };

  const handleSearch = () => {
    alert(searchRef.current.value);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <input
          type="text"
          onChange={handleTyping}
          placeholder="Type here..."
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Click Counter
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          ref={nameRef}
          placeholder="Name"
          className="border p-2 rounded w-full"
        />
        <textarea
          ref={messageRef}
          placeholder="Message"
          className="border p-2 rounded w-full"
        ></textarea>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      <div className="flex gap-2">
        <input
          type="text"
          ref={searchRef}
          placeholder="Search..."
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default App;