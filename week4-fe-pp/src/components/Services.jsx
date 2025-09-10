import { useState } from "react";
import { services } from "../data";
import Title from "./Title";
import Service from "./Service";

const Services = () => {
  const [servicesData, setServicesData] = useState(services);

  const handleDelete = (id) => {
    setServicesData((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {servicesData.map((service) => (
          <Service key={service.id} {...service} onDelete={handleDelete} />
        ))}
      </div>
    </section>
  );
};

export default Services;