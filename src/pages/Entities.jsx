import { useEffect } from "react"
import { useStore } from "../store/store"
import CardList from "../components/CardList"

export default function Entities() {
  const { entities, page, fetchEntities } = useStore();

  useEffect(() => {
    fetchEntities(page);
  }, [page]);

  return (
    <>
      <h2 className="mb-3">Productos</h2>
      <CardList items={entities} />

      <div className="d-flex justify-content-between mt-3">
        <button
          className="btn btn-primary"
          onClick={() => fetchEntities(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        <button
          className="btn btn-primary"
          onClick={() => fetchEntities(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  )
}