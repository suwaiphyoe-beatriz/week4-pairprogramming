import { tours } from "../data";
import {useState} from 'react'
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  const [toursData, setTourData] = useState(tours);
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
