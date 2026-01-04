import React from "react";
import { Link } from "react-router";
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

];

const RecentBlogs = () => {
  return (
    <Wrapper>
      <Header>
        <h2 className="text-center font-bold  text-4xl">Recent Blog</h2>
        <p>Guides, tips, and stories to help you care for your furry friends</p>
      </Header>

      <BlogGrid >
        {blogs.map((blog) => (
          <BlogCard className="bg-amber-100 dark:bg-gray-700" key={blog.id}>
            <img src={blog.image} alt={blog.title} />

            <div className="content">
              <span className="category">{blog.category}</span>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <button className="btn text-black bg-amber-50 dark:bg-gray-400 hover:bg-amber-200 dark:hover:bg-gray-300">Read More</button>
            </div>
          </BlogCard>
        ))}
      </BlogGrid>
      <div className="flex justify-center py-5">
        <Link to="/blogs" className="btn bg-amber-50 dark:bg-gray-400 hover:bg-amber-200 dark:hover:bg-gray-300">All Blog</Link>
      </div>

    </Wrapper>
  );
};
const Wrapper = styled.section`
  ;

`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;



  p {
    margin-top: 10px;

  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
`;

const BlogCard = styled.div`

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


    font-size: 0.75rem;
    
    border-radius: 20px;
    margin-bottom: 12px;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 12px;

  }

  p {
    font-size: 0.95rem;

    line-height: 1.6;
  }

  button {
    margin-top: 16px;


    border: none;
    padding: 10px 18px;
    border-radius: 30px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background 0.3s ease;


  }
`;

export default RecentBlogs;
