import React from "react";

function Form({ form, onChange, onSubmit, err }) {
  return (
    <form className="form-block" onSubmit={onSubmit}>
      <div className="input-block">
        <label htmlFor="label">Название</label>
        <input
          id="label"
          name="label"
          value={form.label}
          onChange={onChange}
          required
        />
      </div>
      <div className="input-block">
        <label htmlFor="offset">Временная зона</label>
        <input
          className={err && "error-border"}
          id="offset"
          name="offset"
          value={form.offset}
          onChange={onChange}
          required
        />
        {err && <span className="error">Некорректное значение</span>}
      </div>
      <button type="submit">Добавить</button>
    </form>
  );
}

export default Form;
