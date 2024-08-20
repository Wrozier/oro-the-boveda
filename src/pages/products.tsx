import { NextPage } from 'next';
import Head from 'next/head';
import { Menu, MenuItem, ProductItem, HoveredLink } from '@/components/ui/navbar-menu'; // Correct import statement
import { FocusCards } from '../components/ui/focus-cards'; // Import Focus Cards from aceternity-ui
import { useState, FC } from 'react';

// Sample products data
const products = [
  {
    title: 'Product 1',
    description: 'Description of Product 1.',
    src: '/images/product1.jpg', // Changed from 'image' to 'src'
    link: '/product/1',
  },
  {
    title: 'Product 2',
    description: 'Description of Product 2.',
    src: '/images/product2.jpg', // Changed from 'image' to 'src'
    link: '/product/2',
  },
  // Add more products as needed
];

const Products: NextPage = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <>
      <Head>
        <title>Products - Oro Boveda</title>
        <meta name="description" content="Explore our collection of luxury jewelry products." />
      </Head>
      <NavbarMenu setActive={setActiveMenu} />
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Products</h1>
        <FocusCards cards={products} />
        <div className="my-8">
          <h2 className="text-3xl font-semibold mb-4 text-center">Product Listings</h2>
          <ul className="space-y-4">
            {products.map((product) => (
              <ProductItem
                key={product.title}
                title={product.title}
                description={product.description}
                href={product.link}
                src={product.src} // Changed from 'image' to 'src'
              />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

// NavbarMenu implementation
const NavbarMenu: FC<{ setActive: (item: string | null) => void }> = ({ setActive }) => (
  <nav className="bg-white p-4 shadow-md">
    <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={null} item={'Home'}>
        <HoveredLink href="/">Home</HoveredLink>
      </MenuItem>
      <MenuItem setActive={setActive} active={null} item={'Products'}>
        <HoveredLink href="/products">Products</HoveredLink>
      </MenuItem>
      <MenuItem setActive={setActive} active={null} item={'Contact'}>
        <HoveredLink href="/contact">Contact</HoveredLink>
      </MenuItem>
    </Menu>
  </nav>
);

export default Products;
