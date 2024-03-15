import type { PageComponent } from "@nxweb/react";

import { Box, Typography } from "@components/material.js";
import CarouselBanner from "./_components/carousel-banner";
import RecommendedProducts from "./_components/recommended-products";
import { getProducts } from "@api/clients/products";
import { productsCommand } from "@models/products/commands";
import { useCommand, useStore } from "@models/store";
import { useEffect, useMemo } from "react";
import Categories from "./_components/categories";

const Home: PageComponent = () => {
  const [productsState, dispatch] = useStore((store) => store.products);
  const command = useCommand((cmd) => cmd);

  const recommended = useMemo(() => {
    if (!productsState || !productsState.products) {
      return [];
    }

    return productsState.products
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 12);
  }, [productsState]);

  const categories = useMemo(() => {
    if (!productsState || !productsState.products) {
      return [];
    }

    let categories: string[] = [];
    productsState.products.forEach((product) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    });

    return categories;
  }, [productsState]);

  useEffect(() => {
    dispatch(command.products.load(""));

    return () => {
      dispatch(command.products.clear());
    };
  }, []);

  return (
    <Box>
      <CarouselBanner />
      <Categories categories={categories} />
      <RecommendedProducts products={recommended} />
    </Box>
  );
};

Home.displayName = "Home";

export default Home;
