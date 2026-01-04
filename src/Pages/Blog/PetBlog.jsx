import React from "react";
import styled from "styled-components";

const blogs = [
  {
    id: 1,
    title: "Preparing Your Home for a Newly Adopted Pet",
    category: "Pet Adoption",
    description:
      "Adopting a pet is a life-changing experience, both for you and for the animal you welcome into your home. Before bringing your new companion home, it’s important to prepare a safe, calm, and loving environment. Start by setting up a quiet resting area where your pet can feel secure. Remove hazardous items, keep electrical wires out of reach, and store food safely. Gradually introduce family members and allow your pet time to adjust. With patience, love, and the right accessories, your new pet will quickly feel like part of the family.",
    image:
      "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8",
  },
  {
    id: 2,
    title: "Essential Pet Accessories Every Pet Parent Should Own",
    category: "Pet Supplies",
    description:
      "Providing your pet with the right accessories is essential for their comfort, safety, and happiness. From soft bedding and food bowls to durable leashes and interactive toys, each item plays an important role in your pet’s daily life. Quality accessories not only make your pet feel comfortable but also help with training, mental stimulation, and physical health. Investing in well-designed, pet-safe products ensures your furry friend stays healthy, active, and stress-free.",
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
  },
  {
    id: 3,
    title: "Why Adopting a Pet Is Better Than Buying One",
    category: "Adoption Awareness",
    description:
      "Pet adoption gives animals a second chance at life. Millions of loving pets are waiting in shelters for a home, and adopting one directly saves a life. Adopted pets are often vaccinated, health-checked, and socialized. Beyond saving money, adoption helps reduce overpopulation and supports animal welfare organizations. When you adopt, you’re not just getting a pet—you’re gaining a loyal companion who will love you unconditionally.",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
  },
  {
    id: 4,
    title: "How Proper Nutrition Impacts Your Pet’s Health",
    category: "Pet Care",
    description:
      "A balanced and nutritious diet is the foundation of a healthy pet. Feeding your pet high-quality food tailored to their age, size, and breed helps maintain strong bones, a shiny coat, and a healthy immune system. Poor nutrition can lead to obesity, allergies, and long-term health issues. Along with nutritious food, using proper feeding accessories like slow-feed bowls and clean water dispensers can significantly improve digestion and overall wellbeing.",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6",
  },
  {
    id: 5,
    title: "Keeping Your Pet Active with the Right Toys",
    category: "Pet Accessories",
    description:
      "Physical activity and mental stimulation are essential for a pet’s happiness. Toys help prevent boredom, reduce anxiety, and encourage healthy exercise. Interactive toys, chew toys, and puzzle feeders keep pets engaged and mentally sharp. Regular playtime strengthens the bond between you and your pet while also preventing destructive behavior. Choosing safe, durable toys suited to your pet’s size ensures long-lasting fun and wellbeing.",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
  },
  {
    id: 6,
    title: "Creating a Long-Lasting Bond with Your Adopted Pet",
    category: "Pet Lifestyle",
    description:
      "Building a strong bond with your adopted pet takes time, patience, and understanding. Spend quality time together through play, training, and daily routines. Positive reinforcement, gentle communication, and consistency help build trust. Using comfort-focused accessories like cozy beds, calming toys, and grooming tools enhances your pet’s emotional wellbeing. Over time, this bond grows into a deep, lifelong companionship filled with love and joy.",
    image:
      "https://longwoodvetcenter.com/wp-content/uploads/2023/01/Naturally-Healthy-Pet.jpg",
  },
];

const PetBlog = () => {
  return (
    <Wrapper>
      <Header>
        <h2>🐾 Pet Care & Adoption Blog</h2>
        <p>Guides, tips, and stories to help you care for your furry friends</p>
      </Header>

      <BlogGrid>
        {blogs.map((blog) => (
          <BlogCard key={blog.id}>
            <img src={blog.image} alt={blog.title} />

            <div className="content">
              <span className="category">{blog.category}</span>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <button>Read More</button>
            </div>
          </BlogCard>
        ))}
      </BlogGrid>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 60px 20px;
  background: #f9fffd;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 2.3rem;
    color: #2c7a7b;
  }

  p {
    margin-top: 10px;
    color: #555;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
`;

const BlogCard = styled.div`
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .content {
    padding: 22px;
  }

  .category {
    display: inline-block;
    background: #e6fffa;
    color: #2c7a7b;
    font-size: 0.75rem;
    padding: 5px 12px;
    border-radius: 20px;
    margin-bottom: 12px;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 12px;
    color: #333;
  }

  p {
    font-size: 0.95rem;
    color: #666;
    line-height: 1.6;
  }

  button {
    margin-top: 16px;
    background: #6ecdc3;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 30px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background 0.3s ease;

    &:hover {
      background: #57b6ad;
    }
  }
`;

export default PetBlog;
