import React from "react";

export default function Form({ handleSubmit, value, setValue }) {
  console.log("Form Component");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <form className="flex pt-2" onSubmit={handleSubmit}>
        <input
          className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow outline-none"
          onChange={handleChange}
          type="text"
          name="value"
          placeholder="해야 할 일을 입력하세요."
          autoComplete="off"
          value={value}
        />
        <input
          className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200 cursor-pointer"
          type="submit"
          value="입력"
          style={{ flex: 1 }}
        />
      </form>
    </div>
  );
}
// className={FormStyle.inputForm}
