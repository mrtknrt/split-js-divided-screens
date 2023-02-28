import React, { useState, useEffect } from "react";
import "./TableBottom.scss";

export default function TableBottom() {
  const [data, setData] = useState([]);
  const [newRow, setNewRow] = useState({ id: "", title: "", body: "" });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleNewRowChange = (event) => {
    setNewRow({ ...newRow, [event.target.name]: event.target.value });
  };

  const handleAddNewRow = () => {
    setData([...data, newRow]);
    setNewRow({ id: "", title: "", body: "" });
  };

  return (
    <div>
      <table>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.title}</td>
              <td>{row.body}</td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                name="id"
                value={newRow.id}
                onChange={handleNewRowChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="title"
                value={newRow.title}
                onChange={handleNewRowChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="body"
                value={newRow.body}
                onChange={handleNewRowChange}
              />
            </td>
            <td>
              <button onClick={handleAddNewRow}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
