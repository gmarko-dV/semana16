import CardList from "../components/CardList"
import { useStore } from "../store/store"
import { useEffect } from "react"

export default function Home() {
  const { entities, fetchEntities } = useStore();

  useEffect(() => {
    fetchEntities();
  }, []);

  return (
    <>
      <h1 className="text-center mb-4">Bienvenido a Dummy Json</h1>
      <CardList items={entities} />
    </>
  );
}