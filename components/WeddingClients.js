import React from "react";
import { Container, Row } from "react-bootstrap";
import BlockTitle from "./BlockTitle";
import BlogPost from "./BlogPost";

import BlogImage1 from "../assets/images/SAImages/SAImg.jpg";
import BlogImage2 from "../assets/images/SAImages/PD1.jpeg";
import BlogImage3 from "../assets/images/SAImages/NV.jpeg";

const BlogHome = () => {
  return (
    <section className="blog-one" id="blog">
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Latest Templates"
          titleText={`Checkout Our \n Wedding websites`}
        />
        <Row>
          <BlogPost
            postImage={BlogImage1}
            postTitle="Shubham & Akshata"
            postDate="03 Jan"
            postCommentCount="2 comments"
            postLink="/blog-post"
          />
          <BlogPost
            postImage={BlogImage2}
            postTitle="Pratik & Dipti"
            postDate="28 Jan"
            postCommentCount="2 comments"
            postLink="/blog-post"
          />
          <BlogPost
            postImage={BlogImage3}
            postTitle="Nikita & Vaibhav"
            postDate="12 July"
            postCommentCount="2 comments"
            postLink="/blog-post"
          />
        </Row>
      </Container>
    </section>
  );
};

export default BlogHome;
