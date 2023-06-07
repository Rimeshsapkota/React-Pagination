import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Apidata() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios(
          "https://jsonplaceholder.typicode.com/albums"
        );
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = (currentPage - 1) * itemsPerPage;
  const items = data.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="container my-3">
        <div className="row">
          {items.map((value, i) => {
            return (
              <div className="col-md-4" key={i}>
                <Card title={value.title} />
              </div>
            );
          })}
        </div>

        <nav aria-label="Page navigation example">
          <ul className="pagination d-flex justify-content-around">
            <li className="page-item">
              <button
                type="button"
                className="btn btn-primary btn-sm "
                hidden={currentPage === 1}
                onClick={prevPage}
                href="/"
              >
                Previous
              </button>
            </li>
            {items.map((item, i) => (
              <div className="page-item" key={i}>
                <li className="page-item">
                  <button
                    type="button"
                    className={`btn btn-primary btn-sm mr-1 ${
                      currentPage === i + 1 ? "disabled" : ""
                    }`}
                    onClick={() => changeCPage(i + 1)}
                    href="/"
                  >
                    {i + 1}
                  </button>
                </li>
              </div>
            ))}
            <li className="page-item">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                hidden={currentPage === totalPages}
                onClick={nextPage}
                href="/"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
