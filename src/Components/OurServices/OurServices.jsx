import React from "react";
import styled from "styled-components";

const services = [
  {
    id: 1,
    title: "Pet Adoption",
    description:
      "Find your perfect companion through our trusted adoption process. We help connect loving homes with pets in need of care and affection.",
    icon: "🐶",
  },
  {
    id: 2,
    title: "Pet Supplies & Accessories",
    description:
      "Shop high-quality pet accessories including food, toys, beds, collars, and grooming essentials designed for comfort and safety.",
    icon: "🛍️",
  },
  {
    id: 3,
    title: "Health & Care Guidance",
    description:
      "Get expert tips on nutrition, vaccinations, grooming, and daily care to keep your pet healthy and happy.",
    icon: "❤️",
  },

];

const OurServices = () => {
  return (
    <Section>
      <Header>
        <h2 className="text-center font-bold  text-4xl">Our Services</h2>
        <p>Everything you need for a happy and healthy pet</p>
      </Header>

      <ServiceGrid>
        {services.map((service) => (
          <ServiceCard className="bg-amber-100 dark:bg-gray-700" key={service.id}>
            <span className="icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </Section>
  );
};
const Section = styled.section`
  padding: 80px 0px;

`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;



  p {
    margin-top: 10px;

    max-width: 520px;
    margin-inline: auto;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 28px;
  
  margin: 0 auto;
`;

const ServiceCard = styled.div`

  padding: 32px 26px;
  border-radius: 22px;
  text-align: center;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  .icon {
    font-size: 2.8rem;
    display: inline-block;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 12px;

  }

  p {
    font-size: 0.95rem;

    line-height: 1.6;
  }
`;

export default OurServices;
