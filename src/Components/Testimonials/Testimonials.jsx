import React from "react";
import styled from "styled-components";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Pet Parent",
    message:
      "Adopting my dog through this platform was one of the best decisions of my life. The process was smooth, transparent, and full of care. My dog settled in quickly, and the accessories I purchased were excellent quality.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Rahim Hossain",
    role: "Cat Owner",
    message:
      "I found everything I needed in one place—from adoption guidance to premium pet supplies. The team truly understands pets and their needs. Highly recommended for anyone looking to adopt or care for a pet.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Rescue Volunteer",
    message:
      "This platform plays a vital role in connecting rescued animals with loving families. Their commitment to animal welfare and responsible adoption is truly inspiring.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Testimonials = () => {
  return (
    <Section>
      <Header>
        <h2 className="text-center font-bold  text-4xl">What Our Happy Clients Say</h2>
        <p>Real stories from pet lovers who trusted us</p>
      </Header>

      <TestimonialGrid>
        {testimonials.map((item) => (
          <Card className="bg-amber-100 dark:bg-gray-700" key={item.id}>
            <p className="message">“{item.message}”</p>

            <User>
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </User>
          </Card>
        ))}
      </TestimonialGrid>
    </Section>
  );
};
const Section = styled.section`
  padding: 20px 20px;

`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 2.3rem;

  }

  p {
    margin-top: 10px;

    max-width: 520px;
    margin-inline: auto;
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 28px;
  max-width: 1100px;
  margin: 0 auto;
`;

const Card = styled.div`

  padding: 30px 26px;
  border-radius: 24px;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }

  .message {
    font-size: 0.95rem;

    line-height: 1.7;
    margin-bottom: 22px;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  img {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    object-fit: cover;
  }

  h4 {
    font-size: 1rem;

  }

  span {
    font-size: 0.85rem;

  }
`;

export default Testimonials;
