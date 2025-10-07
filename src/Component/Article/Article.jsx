import React from "react";
import "./Article.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

import travelImg1 from "../../assets/Article1.png";
import travelImg2 from "../../assets/Article2.png";
import travelImg3 from "../../assets/Article2.png";

const Article = () => {
  const articles = [
    {
      img: travelImg1,
      author: "John Carter",
      date: "June 18, 2022",
      title: "Crypto Or Not Crypto That Is The Question That Leads To Happy",
      desc: "Organically Grow The Holistic World View Of Disruptive Innovation. Workplace Diversity Empowerment."
    },
    {
      img: travelImg2,
      author: "Emily Smith",
      date: "July 10, 2022",
      title: "How to trade crypto tokens from your phone in 2022",
      desc: "Understanding how blockchain is transforming industries globally with new opportunities."
    },
    {
      img: travelImg3,
      author: "Michael Lee",
      date: "August 2, 2022",
      title: "The Rise Of NFTs: Beyond Art And Collectibles",
      desc: "Discover how NFTs are changing ownership and value in the digital world."
    }
  ];

  return (
    <div className="articles-container">
      <h1>Browse Our Latest <span>Articles</span></h1>
      <Swiper
        slidesPerView={2}         
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: 1 },    
          768: { slidesPerView: 2 }   
        }}
      >
        {articles.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="card"
              initial={{ y: 50, opacity: 0 }}          // start below & invisible
              whileInView={{ y: 0, opacity: 1 }}       // slide up & visible
              viewport={{ once: false, amount: 0.3 }}  // animate on scroll
              transition={{ duration: 0.6, delay: index * 0.2 }} // stagger
            >
              <div className="card-img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="card-content">
                <p className="card-meta">
                  {item.author} <span>|</span> {item.date}
                </p>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Article;
