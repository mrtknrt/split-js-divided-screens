import React, { useState, useEffect } from "react";
import "./TableBottom.scss";

export default function TableBottom() {
  const [data, setData] = useState([]);
  const [newRow, setNewRow] = useState({ id: "", title: "", body: "" });
  const [addingRow, setAddingRow] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleNewRowChange = (event) => {
    setNewRow({ ...newRow, [event.target.name]: event.target.value });
  };

  const handleAddNewRow = () => {
    setAddingRow(true);
  };

  const handleSaveNewRow = () => {
    setData([...data, newRow]);
    setNewRow({ id: "", title: "", body: "" });
    setAddingRow(false);
  };

  return (
    <div>
      {" "}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.title}</td>
              <td>{row.body}</td>
              <td></td>
            </tr>
          ))}
          <tr>
            <td colSpan="4">
              {addingRow && (
                <div className="input-container">
                  <input
                    type="text"
                    name="id"
                    value={newRow.id}
                    onChange={handleNewRowChange}
                    placeholder="ID"
                  />
                  <input
                    type="text"
                    name="title"
                    value={newRow.title}
                    onChange={handleNewRowChange}
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    name="body"
                    value={newRow.body}
                    onChange={handleNewRowChange}
                    placeholder="Body"
                  />
                  <button onClick={handleSaveNewRow}>Save</button>
                </div>
              )}
              {!addingRow && <button onClick={handleAddNewRow}>Add</button>}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
