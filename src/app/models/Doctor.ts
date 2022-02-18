export class Doctor {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  slug: string;
  description: string;
  specialization: string;
  ratingsAverage: number;
  ratingsQuantitiy: number;
  fees: number;
  image: string;
  available: boolean;
  constructor(
    _id: string,
    name: string,
    phone: string,
    address: string,
    slug: string,
    description: string,
    specialization: string,
    ratingsAverage: number,
    ratingsQuantitiy: number,
    fees: number,
    image: string,
    available: boolean,
    email: string
  ) {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.slug = slug;
    this.description = description;
    this.specialization = specialization;
    this.ratingsAverage = ratingsAverage;
    this.ratingsQuantitiy = ratingsQuantitiy;
    this.fees = fees;
    this.image = image;
    this.available = available;
  }
}
