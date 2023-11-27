import React from "react";
import { Container } from "react-bootstrap";
import BlockTitle from "./BlockTitle";
import AccordianItemNew from "./AccordianItemNew";
import faqBG from "../assets/images/shapes/faq-bg-1-1.png";

const FullStackSyllabus = (props) => {
  return (
    <section className="faq-one" id="syllabus">
      <img src={faqBG} className="faq-one__bg-shape-1" alt="" />
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Frequently Asked Questions"
          titleText={`Our Syllabus For \n Full Stack Developement`}
        />
        <div className="accrodion-grp faq-accrodion">
          <AccordianItemNew
            title="Data Structures & Alorithms"
            content="Gain knowledge of the foundational concepts in mathematics needed for programming. Write code that is effective and optimised. Learn about the concept of competitive programming and get ready to take part in competitions. "
            bulletPoints={[
              "Strong data structures and algorithms foundation.",
              "Coding skills with 100+ DSA questions.",
              "Competitive programming skills.",
            ]}
            status={false}
          />
          <AccordianItemNew
            title="Front-end Development"
            content="Understand user experience (UX) and user interface (UI). Create captivating application interfaces using JavaScript, HTML, CSS, and Bootstrap. Utilise the React framework to create UI features that are efficient and complicated. Create end-to-end applications by combining your front-end and back-end expertise. "
            bulletPoints={[
              "Learn HTML, CSS, JavaScript to build exciting UI",
              "Develop complex and efficient UIs with React.",
              "Integrate front-end and back-end skills to create a complete application",
            ]}
            status={false}
          />
          <AccordianItemNew
            title="Back-end Development"
            content="Understand SQL, ASP.NET core, FireBase, Node Module System, file systems, HTTP servers. Use Git for version control, handle repositories, branching, merging, workflows, and Git server administration. CRUD operations with data validation, modeling relationships, authentication, authorization, profanity filtering, caching and performance optimization."
            bulletPoints={[
              "Gain proficiency in SQL, GIT, ASP.NET core and Git for building robust web applications",
              "Understand how to create RESTful APIs, implement authentication and authorization, and optimize performance.",
              "Learn to use Git for version control, manage repositories, and handle branching and merging workflows.",
            ]}
            status={false}
          />
          <AccordianItemNew
            title="Agile Methodology & Version Controlling"
            content="Explore the agile methodology with a focus on Scrum, where each project is managed efficiently through daily stand-ups and Scrum sheets. Learn to send concise and informative daily status emails, reflecting project progress, challenges, and solutions. Embrace a disciplined approach to daily study updates, fostering a habit of continuous learning. Experience real-time problem-solving with instant solutions provided by industry experts, enhancing your ability to navigate challenges swiftly and maintain project momentum."
            status={false}
          />
          <AccordianItemNew
            title="Projects"
            content="Embark on an immersive journey at the intersection of front-end and back-end development, guided by industry experts. Engage in hands-on projects designed to integrate and apply your knowledge, fostering a comprehensive understanding of both ends of the development spectrum. Cultivate professionalism through real-world project scenarios, emphasizing collaborative problem-solving, code optimization, and project management. Elevate your skills as you work on exciting projects, gaining valuable experience that aligns with industry standards and best practices."
            bulletPoints={[
              "Ecommerce website",
              "Service Websites",
              "Portfolio Website",
            ]}
            status={false}
          />
        </div>
      </Container>
    </section>
  );
};

export default FullStackSyllabus;
