export interface Leader {
  name: string;
  title: string;
  bio: string;
  image?: string;
}

export interface Strength {
  title: string;
  description: string;
  icon: string;
}

export interface TherapeuticSegment {
  id: string;
  name: string;
  indications: string[];
}

export interface Product {
  brandName: string;
  composition: string;
}

export interface ProductCatalog {
  injectables: Product[];
  tablets: Product[];
  suspensions: Product[];
}
