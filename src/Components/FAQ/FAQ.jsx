import React, { useState } from "react";
import styled from "styled-components";

const faqs = [
  {
    id: 1,
    question: "How does the pet adoption process work?",
    answer:
      "Our pet adoption process is simple and transparent. You can browse available pets, submit an adoption request, and our team will guide you through verification, home suitability checks, and final adoption. We ensure both pets and families are a perfect match.",
  },
  {
    id: 2,
    question: "Are the pets vaccinated and health-checked?",
    answer:
      "Yes, all pets listed for adoption go through basic health checks and vaccinations before being rehomed. Medical records and care instructions are provided to ensure your pet’s continued health and wellbeing.",
  },
  {
    id: 3,
    question: "Do you sell pet food and accessories?",
    answer:
      "Absolutely! We offer a wide range of pet supplies including nutritious food, toys, grooming tools, collars, beds, and other essential accessories designed for comfort and safety.",
  },
  {
    id: 4,
    question: "Can I return or exchange pet accessories?",
    answer:
      "Yes, unused and undamaged pet accessories can be returned or exchanged within our return policy period. Please check our return guidelines for detailed information on eligibility and timelines.",
  },
  {
    id: 5,
    question: "Do you provide guidance after adoption?",
    answer:
      "Yes, our support continues even after adoption. We offer care tips, nutrition guidance, training resources, and ongoing support to help your pet settle comfortably into their new home.",
  },
  {
    id: 6,
    question: "How can I support animal rescue efforts?",
    answer:
      "You can support animal rescue by adopting pets, volunteering, donating, or spreading awareness. Our platform connects you with rescue organizations and opportunities to make a positive impact.",
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <Section>
      <Header>
        <h2 className="text-center font-bold  text-4xl">Frequently Asked Questions</h2>
        <p>Find quick answers to common questions about adoption and pet care</p>
      </Header>

      <FAQContainer>
        {faqs.map((faq) => (
          <FAQItem className="dark:bg-gray-700" key={faq.id}>
            <Question onClick={() => toggleFAQ(faq.id)}>
              <h4>{faq.question}</h4>
              <span>{activeId === faq.id ? "−" : "+"}</span>
            </Question>

            {activeId === faq.id && <Answer>{faq.answer}</Answer>}
          </FAQItem>
        ))}
      </FAQContainer>
    </Section>
  );
};
const Section = styled.section`
  padding: 30px 20px;

`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;



  p {
    margin-top: 10px;

    max-width: 620px;
    margin-inline: auto;
  }
`;

const FAQContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const FAQItem = styled.div`

  border-radius: 18px;
  margin-bottom: 16px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const Question = styled.div`
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h4 {
    font-size: 1.05rem;

  }

  span {
    font-size: 1.5rem;

    font-weight: bold;
  }
`;

const Answer = styled.div`
  padding: 0 24px 20px;
  font-size: 0.95rem;

  line-height: 1.7;
`;

export default FAQ;
