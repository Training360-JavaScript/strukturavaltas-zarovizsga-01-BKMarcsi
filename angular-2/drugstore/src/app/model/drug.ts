export class Drug {
  [key: string]: any;
  id: number = 1;
  name: string = 'Escitalopram Oxalate';
  brand: string = 'Escitalopram';
  company?: string = 'Major Pharmaceuticals';
  barcode: string = '23-537-0123';
  stock: number = 26;

  constructor(properties?: Drug) {
    if (properties) {
      this.id = properties.id || 1;
      this.name = properties.name || 'Escitalopram Oxalate';
      this.brand = properties.brand || 'Escitalopram';
      this.company = properties.company || 'Major Pharmaceuticals';
      this.barcode = properties.barcode || '23-537-0123';
      this.stock = properties.stock || 26;
    }
  }
}
