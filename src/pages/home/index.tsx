import type { PageComponent } from "@nxweb/react";

import { Box } from "@components/material.js";
import CarouselBanner from "../../components/home/CarouselBanner";
import RecommendedProducts from "../../components/home/RecommendedProducts";
import { useCommand, useStore } from "@models/store";
import { useEffect, useMemo } from "react";
import CategoryCard from "../../components/home/CategoryCard";
import toTitleCase from "@lib/toTitleCase";

const Home: PageComponent = () => {
  const [productsState, dispatch] = useStore((store) => store.products);
  const command = useCommand((cmd) => cmd.products);

  const recommended = useMemo(() => {
    if (!productsState || !productsState.products) {
      return [];
    }

    return [...productsState.products]
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

    return categories.map((category) => category);
  }, [productsState]);

  useEffect(() => {
    dispatch(command.getAllProducts());
  }, []);

  return (
    <Box>
      <CarouselBanner />
      <CategoryCard categories={categories} />
      <RecommendedProducts products={recommended} />
    </Box>
  );
};

Home.displayName = "Home";

export default Home;
