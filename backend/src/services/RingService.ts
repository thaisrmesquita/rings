import { RingAttributes } from "../@types/ring";
import RingRepository from "../repositories/RingRepository";

interface MaxRings {
  Elves: number;
  Dwarves: number;
  Men: number;
  Sauron: number;
}

class RingService {
  async create(data: RingAttributes) {
    const maxRings: MaxRings = {
      Elves: 3,
      Dwarves: 7,
      Men: 9,
      Sauron: 1,
    };

    const count = await RingRepository.countRingsByForjadoPor(data.forgedBy);

    if (count >= maxRings[data.forgedBy]) {
      throw new Error(`Não é possível criar mais anéis para ${data.forgedBy}.`);
    }

    return await RingRepository.create(data);
  }

  async getAll() {
    return await RingRepository.findAll();
  }

  async update(id: number, data: any) {
    return await RingRepository.update(id, data);
  }

  async delete(id: number) {
    return await RingRepository.delete(id);
  }
}

export default new RingService();
