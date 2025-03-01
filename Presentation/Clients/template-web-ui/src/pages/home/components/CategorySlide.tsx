import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const categories = [
  { name: "Technology", image: "https://picsum.photos/400/300?random=1" },
  { name: "Health", image: "https://picsum.photos/400/300?random=2" },
  { name: "Finance", image: "https://picsum.photos/400/300?random=3" },
  { name: "Sports", image: "https://picsum.photos/400/300?random=4" },
  { name: "Travel", image: "https://picsum.photos/400/300?random=5" },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  cssEase: "ease-in-out",
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

const CategorySlide: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div style={{ width: "100%", margin: "auto", padding: "40px 0" }}>
      <Box textAlign={"center"} mb={3} mt={3}>
        <Typography variant="h4" fontWeight="bold" color="#4C585B">
          {t("categories")}
        </Typography>
      </Box>
      <Slider {...sliderSettings}>
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01, cursor: "pointer" }}
            transition={{ duration: 0.3 }}
            style={{ padding: "10px" }}
          >
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                transition: "all 0.3s ease",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={category.image}
                alt={category.name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold">
                  {category.name}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlide;
