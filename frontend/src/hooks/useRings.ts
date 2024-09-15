import { useEffect, useState } from "react";
import { Ring } from "../@types/ring";
import { api } from "../services/api";

export const useRings = () => {
  const [rings, setRings] = useState<Ring[]>([]);

  useEffect(() => {
    loadRings();
  }, []);

  const loadRings = async () => {
    const { data } = await api.get("/rings");
    setRings(data);
  };

  const addRing = async (ring: Omit<Ring, "id">) => {
    const { data } = await api.post("/rings", ring);
    setRings((prevState) => [...prevState, data]);
  };

  const updateRing = async (id: number, updateRing: Omit<Ring, "id">) => {
    await api.put(`/rings/${id}`, updateRing);
    const ringsUpdated = rings.map((ring) =>
      ring.id === id ? { ...ring, updateRing } : ring
    );
    setRings(ringsUpdated);
  };

  const deleteRing = async (id: number) => {
    await api.delete(`/rings/${id}`);
    const newRings = rings.filter((ring) => ring.id !== id);
    setRings(newRings);
  };

  return { rings, addRing, updateRing, deleteRing };
};
