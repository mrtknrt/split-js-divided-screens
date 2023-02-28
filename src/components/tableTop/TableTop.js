import React, { useState, useEffect } from "react";
import "./TableTop.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

function TableTop() {
  const [posts, setPosts] = useState([]);
  const [selectedId, setSelectedId] = useState("all");
  const [showColumns, setShowColumns] = useState({
    id: true,
    title: true,
    body: true,
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let apiUrl = `https://jsonplaceholder.typicode.com/posts?_limit=5`;

    if (selectedId !== "all") {
      apiUrl += `&id=${selectedId}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, [selectedId, showColumns]);

  const handleIdChange = (e) => {
    setSelectedId(e.target.value);
  };

  const handleColumnToggle = (col) => {
    setShowColumns((prevColumns) => ({
      ...prevColumns,
      [col]: !prevColumns[col],
    }));
  };

  const handleSettingsClick = () => {
    setShowFilters(!showFilters);
  };

  const tableHeaders = Object.keys(showColumns)
    .filter((col) => showColumns[col])
    .map((col) => <th key={col}>{col}</th>);

  const tableRows = posts.map((post) => {
    const rowData = Object.keys(showColumns)
      .filter((col) => showColumns[col])
      .map((col) => <td key={col}>{post[col]}</td>);

    return <tr key={post.id}>{rowData}</tr>;
  });

  return (
    <div>
      <div className="filters">
        <div className="dropdown">
          <select id="id-filter" value={selectedId} onChange={handleIdChange}>
            <option value="all">Hepsi</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="settings-icon" onClick={handleSettingsClick}>
          <FontAwesomeIcon icon={faCog} />
          {showFilters && (
            <div className="checkboxes-wrapper">
              <div className="checkboxes">
                {Object.keys(showColumns).map((col) => (
                  <label key={col}>
                    <input
                      type="checkbox"
                      checked={showColumns[col]}
                      onChange={() => handleColumnToggle(col)}
                    />
                    {col}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <table>
        <thead>
          <tr>{tableHeaders}</tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default TableTop;
