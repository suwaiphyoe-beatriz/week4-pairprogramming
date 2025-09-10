import { useState } from "react";
import { services } from "../data";
import Title from "./Title";
import Service from "./Service";

const Services = () => {
  const [servicesData, setServicesData] = useState(services);

  const handleDelete = (id) => {
    setServicesData((prev) => prev.filter((s) => s.id !== id));
  };
  // addded this extra corfirm deletion step before removing :)
  const handleRemoveClick =(id) => {
    const confirmRemoval = window.confirm(" Are you sure you want to remove this service?");
    if (confirmRemoval){
      handleDelete(id)
    }
  }

  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {servicesData.map((service) => (
          <Service key={service.id} {...service} onDelete={handleRemoveClick} />
        ))}
      </div>
    </section>
  );
};

export default Services;