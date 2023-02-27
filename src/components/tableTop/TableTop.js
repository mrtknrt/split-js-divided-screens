import React, { useState, useEffect } from "react";

function PostsTable() {
  const [posts, setPosts] = useState([]);
  const [selectedYear, setSelectedYear] = useState("all");
  const [showColumns, setShowColumns] = useState({
    id: true,
    title: true,
    body: true,
  });

  useEffect(() => {
    let apiUrl = "https://jsonplaceholder.typicode.com/posts?_limit=5";

    if (selectedYear !== "all") {
      apiUrl += `?title=${selectedYear}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, [selectedYear, showColumns]);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleColumnToggle = (col) => {
    setShowColumns((prevColumns) => ({
      ...prevColumns,
      [col]: !prevColumns[col],
    }));
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
          <label htmlFor="year-filter">Filter by year:</label>
          <select
            id="year-filter"
            value={selectedYear}
            onChange={handleYearChange}
          >
            <option value="all">All</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
          </select>
        </div>
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
      <table>
        <thead>
          <tr>{tableHeaders}</tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default PostsTable;
