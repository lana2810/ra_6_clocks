import "./App.css";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./Components/Form";
import Clock from "./Components/Clock";

function App() {
  const initialStateForm = {
    label: "",
    offset: "",
  };
  const [form, setForm] = useState(initialStateForm);
  const [clocks, setClocks] = useState([]);
  const [errors, setErrors] = useState(false);

  const handleChange = ({ target }) => {
    setErrors(false);
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNaN(form.offset)) {
      setErrors(true);
      return;
    }
    const newClock = {
      id: nanoid(),
      name: form.label,
      offset: form.offset,
    };
    setClocks((prevClocks) => [...prevClocks, newClock]);
    setForm(initialStateForm);
  };

  const handleDelete = (id) => {
    setClocks((prevClocks) => prevClocks.filter((it) => it.id !== id));
  };

  return (
    <div className="container">
      <Form
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        err={errors}
      />
      <div className="clock-list">
        {clocks.map((it) => (
          <Clock key={it.id} {...it} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
