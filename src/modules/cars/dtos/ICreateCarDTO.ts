interface ICreateCarDTO {
  name: string;
  description: string;
  dailyRate: number;
  licencePlate: string;
  fineAmount: number;
  brand: string;
  categoryId: string;
}

export { ICreateCarDTO };
