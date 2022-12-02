import React from "react";
import FormStyle from "./Form.module.css";

export default function Form({ handleSubmit, value, setValue }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <form className={FormStyle.inputForm} onSubmit={handleSubmit}>
        <input
          className={FormStyle.inputArea}
          onChange={handleChange}
          type="text"
          name="value"
          placeholder="해야 할 일을 입력하세요."
          autoComplete="off"
          value={value}
        />
        <input
          className={FormStyle.inputBtn}
          type="submit"
          value="입력"
          style={{ flex: 1 }}
        />
      </form>
    </div>
  );
}
