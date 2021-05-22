import { v4 as uuid } from "uuid";

class Car {
  id: string;

  name: string;

  description: string;

  available: boolean;

  dailyRate: number;

  licencePlate: string;

  fineAamount: number;

  brand: string;

  categoryId: string;

  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
      this.available = true;
      this.createdAt = new Date();
    }
  }
}

export { Car };
