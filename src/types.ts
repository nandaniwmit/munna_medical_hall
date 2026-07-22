export interface Medicine {
  id: string;
  name: string;
  genericName: string;
  category: string;
  price: number;
  available: boolean;
  packaging: string;
  description: string;
  manufacturer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  role: string;
  location: string;
  date: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  longDescription: string;
  features: string[];
}

export interface CategoryItem {
  name: string;
  slug: string;
  iconName: string;
  count: number;
  description: string;
  bgColor: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'medicines' | 'equipment' | 'customer';
  imageUrl: string;
  description: string;
}

export interface WorkingProcessStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormInput {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface WhatsAppOrderInput {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  hasPrescription: boolean;
  prescriptionFile?: File | null;
  message: string;
  preferredDeliveryTime: string;
}
