import { NextPage } from 'next';
import Head from 'next/head';
import { Menu, MenuItem, ProductItem, HoveredLink } from '@/components/ui/navbar-menu';
import { FocusCards } from '../components/ui/focus-cards';
import { useState, FC } from 'react';
import Image from 'next/image';

const products = [
  {
    title: 'Product 1',
    description: 'Description of Product 1.',
    src: '/images/product_1.png',
    link: '/product/1',
  },
  {
    title: 'Product 2',
    description: 'Description of Product 2.',
    src: '/images/product_2.png',
    link: '/product/2',
  },
  {
    title: 'Product 3',
    description: 'Description of Product 3.',
    src: '/images/product_3.png',
    link: '/product/3',
  },
  {
    title: 'Product 4',
    description: 'Description of Product 4.',
    src: '/images/product_4.png',
    link: '/product/4',
  },
];

const Products: NextPage = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <>
      <Head>
        <title>Products - Oro Boveda</title>
        <meta name="description" content="Explore our collection of luxury jewelry products." />
      </Head>
      <NavbarMenu setActive={setActiveMenu} active={activeMenu} />
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">Our Products</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover our exquisite range of luxury jewelry designed to elevate your style.
          </p>
        </header>
        <section className="mb-12">
          <FocusCards cards={products} />
        </section>
        <section>
          <h2 className="text-4xl font-semibold mb-6 text-center text-gray-800 dark:text-white">Product Listings</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductItem
                key={product.title}
                title={product.title}
                description={product.description}
                href={product.link}
                src={product.src}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

const NavbarMenu: FC<{ setActive: (item: string | null) => void; active: string | null }> = ({ setActive, active }) => (
  <nav className="bg-white shadow-md dark:bg-black p-4 flex items-center">
    <div className="flex items-center flex-grow">
      {/* Logo linking to home */}
      <HoveredLink href="/">
        <Image
          src="/images/goldvault.png"
          alt="Oro Boveda Logo"
          width={150} // Adjust width as needed
          height={40} // Adjust height as needed
          className="object-contain"
        />
      </HoveredLink>
    </div>
    <div className="flex flex-grow justify-center space-x-4">
      <Menu setActive={setActive} active={active}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <HoveredLink href="/">Home</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Men">
          <HoveredLink href="/mens-jewelry">Men</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Women">
          <HoveredLink href="/women">Women</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <HoveredLink href="/products">Products</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <HoveredLink href="/contact">Contact</HoveredLink>
        </MenuItem>
      </Menu>
    </div>
  </nav>
);

export default Products;
