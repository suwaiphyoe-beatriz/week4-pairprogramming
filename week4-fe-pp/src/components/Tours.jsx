import { tours } from "../data";
import { useState } from "react";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  const [toursData, setTourData] = useState(tours);

  const handleDelete = (id) => {
    setTourData((prev) => prev.filter((t) => t.id !== id));
  };
  const handleRemoveClick =(id) => {
    const confirmRemoval = window.confirm(" Are you sure you want to remove this tour?");
    if (confirmRemoval){
      handleDelete(id)
    }
  }

  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => (
          <Tour
            key={tour.id}
            {...tour}
            onDelete={handleRemoveClick}
          />
        ))}
      </div>
    </section>
  );
};

export default Tours;