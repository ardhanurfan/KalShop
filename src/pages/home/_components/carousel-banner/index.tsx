import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { BulbFilled, ChevronLeft, ChevronRight } from "@nxweb/icons/tabler";

const images: string[] = [
  "https://plus.unsplash.com/premium_photo-1664201889896-6a42c19e953a?q=80&w=2136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1531303435785-3853ba035cda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const CarouselBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [autoSlideInterval, setAutoSlideInterval] =
    useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Ganti gambar setiap 5 detik

    setAutoSlideInterval(interval);

    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    handlePauseSlide();
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    handleResumeSlide();
  };

  const handlePrevSlide = () => {
    handlePauseSlide();
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
    handleResumeSlide();
  };

  const handlePauseSlide = () => {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      setAutoSlideInterval(null);
    }
  };

  const handleResumeSlide = () => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Ganti gambar setiap 5 detik

    setAutoSlideInterval(interval);
  };

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: { xs: "200px", sm: "300px", md: "400px" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              backgroundColor: "rgba(255,255,255,0.2)",
              color: (theme) => theme.palette.primary.contrastText,
              "&:active": {
                transform: "translateY(-50%)",
              },
            }}
            onClick={handlePrevSlide}
          >
            <ChevronLeft />
          </Button>
          <Button
            sx={{
              backgroundColor: "rgba(255,255,255,0.2)",
              color: (theme) => theme.palette.primary.contrastText,
            }}
            onClick={handleNextSlide}
          >
            <ChevronRight />
          </Button>
        </Box>
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
        {images.map((_, index) => (
          <Box
            key={index}
            width={16}
            height={16}
            sx={{ borderRadius: "50%" }}
            bgcolor={
              index === currentSlide
                ? (theme) => theme.palette.primary.main
                : (theme) => theme.palette.grey[300]
            }
          ></Box>
        ))}
      </Box>
    </Box>
  );
};

export default CarouselBanner;
