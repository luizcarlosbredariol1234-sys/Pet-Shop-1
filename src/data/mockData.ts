import { Product, CategoryItem, Testimonial } from '../types';

// Direct Vite asset imports - guaranteed to resolve in dev, prod, and preview builds
import realHeroDog from '../assets/images/dupet_real_hero_dog_1790943537133.jpg';
import serviceVet from '../assets/images/dupet_service_vet_1790943189048.jpg';
import realTaxiDog from '../assets/images/dupet_real_taxi_dog_1790943589484.jpg';
import prodBed from '../assets/images/dupet_prod_bed_1790954064241.jpg';
import prodBowls from '../assets/images/dupet_prod_bowls_1790954094590.jpg';
import prodHarness from '../assets/images/dupet_prod_harness_1790954080246.jpg';
import realBathGrooming from '../assets/images/dupet_real_bath_grooming_1790943549692.jpg';
import prodCarrier from '../assets/images/dupet_prod_carrier_1790954107721.jpg';
import prodTreats from '../assets/images/dupet_product_treats_1790943198374.jpg';

export const BUSINESS_INFO = {
  name: 'Boutique Pet',
  fullName: 'Boutique Pet - O Cuidado que seu Pet Merece',
  tagline: 'Onde o luxo e o amor convivem com seu melhor amigo',
  phone: '(18) 99665-0787',
  whatsappRaw: '5518996650787',
  address: 'R. Joaquim Galvão de França, 04 - Centro',
  city: 'Cândido Mota - SP',
  cep: '19800-053',
  googleMapsUrl: 'https://maps.google.com/?q=R.+Joaquim+Galv%C3%A3o+de+Fran%C3%A7a,+04+-+Centro,+C%C3%A2ndido+Mota+-+SP,+19800-053',
  openingHours: 'Segunda a Sexta: 08h às 18h | Sábado: 08h às 13h',
};

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: 'caes',
    name: 'Cães Essenciais',
    image: realHeroDog,
  },
  {
    id: 'gatos',
    name: 'Mimos para Gatos',
    image: serviceVet,
  },
  {
    id: 'pequenos',
    name: 'Pequenos Pets',
    image: realTaxiDog,
  },
  {
    id: 'camas',
    name: 'Camas & Móveis',
    image: prodBed,
  },
  {
    id: 'comedouros',
    name: 'Comedouros & Tigelas',
    image: prodBowls,
  },
  {
    id: 'moda',
    name: 'Moda & Coleiras',
    image: prodHarness,
  },
  {
    id: 'banho',
    name: 'Banho & Cuidados',
    image: realBathGrooming,
  },
  {
    id: 'viagem',
    name: 'Passeio & Viagem',
    image: prodCarrier,
  },
  {
    id: 'kits',
    name: 'Kits & Presentes',
    image: prodTreats,
  },
];

export const NEW_ARRIVALS: Product[] = [
  {
    id: 'new-1',
    name: 'Cama Ortopédica Nuvem Luxo',
    category: 'camas',
    categoryLabel: 'Camas & Móveis',
    price: 189.00,
    originalPrice: 220.00,
    rating: 5.0,
    reviewsCount: 24,
    image: prodBed,
    isNew: true,
    description: 'Pelúcia hipoalergênica soft ultra macia, base antiderrapante e enchimento viscoelástico que acolhe as articulações.',
  },
  {
    id: 'new-2',
    name: 'Peitoral Confort Voyager Ergonômico',
    category: 'moda',
    categoryLabel: 'Moda & Coleiras',
    price: 98.00,
    rating: 4.9,
    reviewsCount: 18,
    image: prodHarness,
    isNew: true,
    description: 'Tecido respirável acolchoado com fivelas de alta precisão em latão dourado e ajuste anatômico sem puxar o pescoço.',
  },
  {
    id: 'new-3',
    name: 'Conjunto Duplo Tigelas Cerâmica Luxo',
    category: 'comedouros',
    categoryLabel: 'Comedouros & Tigelas',
    price: 79.00,
    rating: 4.8,
    reviewsCount: 32,
    image: prodBowls,
    description: 'Cerâmica esmaltada de alta densidade com base em madeira nobre. Altura recomendada por veterinários para evitar refluxo.',
  },
  {
    id: 'new-4',
    name: 'Brinquedo Mastigável Pelúcia Soft Artisan',
    category: 'brinquedos',
    categoryLabel: 'Pequenos Pets',
    price: 38.00,
    rating: 4.7,
    reviewsCount: 27,
    image: prodTreats,
    description: 'Costura reforçada dupla em algodão ecológico macio. Estimula a cognição e alivia o tédio com textura agradável.',
  },
  {
    id: 'new-5',
    name: 'Bolsa de Transporte Climatizada Signature',
    category: 'viagem',
    categoryLabel: 'Passeio & Viagem',
    price: 259.00,
    originalPrice: 299.00,
    rating: 5.0,
    reviewsCount: 19,
    image: prodCarrier,
    description: 'Couro nobre ecológico com zíperes dourados, janelas em malha respirável e almofada interna removível lavável.',
  },
];

export const BEST_SELLERS: Product[] = [
  {
    id: 'best-1',
    name: 'Caminha Calming Anti-Estresse Aveludada',
    category: 'camas',
    categoryLabel: 'Camas & Móveis',
    price: 159.00,
    originalPrice: 189.00,
    rating: 5.0,
    reviewsCount: 412,
    image: prodBed,
    isBestSeller: true,
    description: 'A caminha mais amada do Brasil! Borda circular que cria uma sensação imediata de segurança e tranquilidade para cães e gatos.',
  },
  {
    id: 'best-2',
    name: 'Caixa Gourmet Petiscos 100% Naturais',
    category: 'kits',
    categoryLabel: 'Kits & Presentes',
    price: 68.00,
    rating: 4.9,
    reviewsCount: 298,
    image: prodTreats,
    isBestSeller: true,
    description: 'Seleção artesanal com petiscos desidratados lentamente: fígado bovino, peito de frango e biscoitos funcionais sem conservantes.',
  },
  {
    id: 'best-3',
    name: 'Coleira Couro Legítimo com Pingente Gravado',
    category: 'moda',
    categoryLabel: 'Moda & Coleiras',
    price: 55.00,
    rating: 4.9,
    reviewsCount: 356,
    image: prodHarness,
    isBestSeller: true,
    description: 'Couro macio premium com costuras artesanais. Inclui gravação a laser personalizada do nome do pet e telefone do tutor.',
  },
  {
    id: 'best-4',
    name: 'Kit Banho & Spa Hipoalergênico Completo',
    category: 'banho',
    categoryLabel: 'Banho & Cuidados',
    price: 89.00,
    originalPrice: 110.00,
    rating: 5.0,
    reviewsCount: 221,
    image: realBathGrooming,
    isBestSeller: true,
    description: 'Shampoo de aveia e camomila 500ml, máscara de hidratação intensa de argan e escova desembaraçadora ergonômica.',
  },
  {
    id: 'best-5',
    name: 'Combo Pelúcias Sonoras Interativas com Apito',
    category: 'brinquedos',
    categoryLabel: 'Pequenos Pets',
    price: 49.00,
    rating: 4.8,
    reviewsCount: 310,
    image: realTaxiDog,
    isBestSeller: true,
    description: 'Trio de pelúcias super macias com apitos internos suaves que mantêm o pet entretido sem fazer barulhos estridentes.',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'A qualidade dos produtos e do banho é inigualável! O Barthô nunca teve uma pelagem tão sedosa e cheirosa.',
    author: 'Mariana V.',
    role: 'Tutora do Barthô',
    avatar: realHeroDog,
    rating: 5,
  },
  {
    id: 'test-2',
    quote: 'Designs elegantes e um atendimento acolhedor de primeira. A caminha e a bolsa de viagem da PawFusion são impecáveis!',
    author: 'Carlos E.',
    role: 'Tutor da Pipoca & Mel',
    avatar: realTaxiDog,
    rating: 5,
  },
  {
    id: 'test-3',
    quote: 'Mais que um pet shop: uma verdadeira comunidade que ama animais de coração. Recomendo de olhos fechados em Cândido Mota!',
    author: 'Beatriz A.',
    role: 'Tutora da Luna',
    avatar: serviceVet,
    rating: 5,
  },
];
