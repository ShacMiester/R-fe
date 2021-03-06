export class CategoryOption{
  id: number;
  name: string;
  min: number;
  max: number;
  itemId: number;
  itemOptions: ItemOption[];
  length: number = 0; // for design
}

export class ItemOption{
  name: string;
  description: string;
  imageURL: string;
  addtionalPrice: number;
  itemOptionCategroyId: number;
  id: number;
  isSelected: boolean = false; // for UI
}
