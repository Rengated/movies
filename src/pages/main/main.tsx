import React, { useEffect, useMemo, useState } from "react";
import { Layout } from "../../layouts/layout";
import { Card } from "./components/Card/Card";
import { getMovies } from "./http";
import { formatResponse } from "./utils/formatResponse";
import { CardProps } from "./components/Card/Card";
import { Search } from "./components/Search/Search";
import { SelectCustom } from "./components/Select/Select";
import Pagination from "@mui/material/Pagination";
import "../../assets/styles/main.scss";

interface PageInformation {
  total: number;
  totalPages: number;
}

export const Main: React.FC = () => {
  const [movies, setMovies] = useState<CardProps[]>([]);
  const [pageInformation, setPageInformation] = useState<PageInformation>();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("Year");
  const [query, setQuery] = useState("");

  const filteredMovies = useMemo(
    () =>
      movies
        .filter((x) => x.title?.toLowerCase().includes(query.toLowerCase()))
        .sort((x, y) => {
          if (filter === "Year") {
            return y.year - x.year;
          } else {
            return y.rating - x.rating;
          }
        }),
    [query, movies, filter]
  );

  useEffect(() => {
    const fetch = async () => {
      const response = await getMovies(page);
      const formatedResponse = formatResponse(response.items);
      setPageInformation({
        total: response.total,
        totalPages: response.totalPages,
      });
      setMovies(formatedResponse);
    };
    fetch();
  }, [page]);

  return (
    <Layout>
      <div className="container main">
        <h1 className="main__title">Movies</h1>
        <div className="main-header">
          <Search setQuery={setQuery} />
          <SelectCustom
            value={filter}
            setValue={setFilter}
          />
        </div>
        <p className="main__total">{pageInformation?.total} items</p>
        <div className="movies">
          {filteredMovies?.map((movie, index) => (
            <Card
              key={index}
              {...movie}
            />
          ))}
        </div>
        <div className="main__pagination">
          <Pagination
            onChange={(event) =>
              setPage(Number((event.target as HTMLButtonElement).innerText))
            }
            count={pageInformation?.totalPages}
            shape="rounded"
            size="large"
            color="primary"
          />
        </div>
      </div>
    </Layout>
  );
};
