import React from "react";
import { Container } from "react-bootstrap";
import BlockTitle from "./BlockTitle";
import AccordianItemNew from "./AccordianItemNew";
import faqBG from "../assets/images/shapes/faq-bg-1-1.png";

const PythonSyllabus = (props) => {
  return (
    <section className="faq-one" id="internshipsyllabus">
      <img src={faqBG} className="faq-one__bg-shape-1" alt="" />
      <Container>
        <BlockTitle
          textAlign="center"
          // paraText="Frequently Asked Questions"
          titleText={`Our Syllabus For \n Python Powerhouse`}
        />
        <div className="accrodion-grp faq-accrodion">
          <AccordianItemNew
            title="Python Fundamentals"
            content="Foundational programming elements like variables, comments, types, operators, conversions, strings, control flow (conditionals, loops), applied through a BMI calculator, password generator project, and coding challenges for practical learning. "
            bulletPoints={[
              "Basics : Variables, comments, constants, Built-in Types, Operators, Conversions Coding Challenge on Basics.",
              "Strings : Basics, User Input, Conversions, Converting Types, Concatenation, Slicing, Formats, String Methods. Project: BMI Calculator. Coding Challenge on Strings.",
              "Flow Control : Conditional Statements, Indentation, if/elseif/else, Logical Operators.",
              "Loops : For Loop, Ranges, Continue-pass-break, While Loop, Walrus Operator Project: Password Generator Coding Challenge on Flow Control and Loops",
            ]}
            status={false}
          />
          <AccordianItemNew
            title="Python Lists"
            content="Fundamental data structures like Lists, projects on IP addresses and country names. Also, delve into Tuples, Sets, Dictionaries, with a project on the Phonetic Alphabet and a coding challenge."
            bulletPoints={[
              "Lists : Why Lists, Concatenation, Append, Extend, Slicing, Iteration, Methods, Comprehension, Coding Challenge on Lists.",
              "Project: Extract IPv4,IPv6 Addresses.",
              "Project: Countries with longest and shortest names.",
              "Tuples, Sets and Dictionaries Tuples operations, methods, Tuples Vs Lists, Sets and Frozen Sets, Time Complexity and Big-O Notation, Creation and Working with Dictionaries, Dictionaries and Set Comprehensions.",
              "Project: Phonetic Alphabe.",
              "Coding Challenge on Tuple, Set and Dictionaries",
            ]}
            status={false}
          />
          <AccordianItemNew
            title="Functions in Python"
            content="Essential Python topics like Functions, Text file handling, Modules, and Error handling, featuring projects like File Processing and Test Network Connection, with coding challenges for boosting."
            bulletPoints={[
              "Functions in Python : Docstring, Positional and Keyword Arguments, Return, Scopes and Namespaces, Lambda Expression Coding Challenge on Functions.",
              "Working with Text Files : Opening and Reading files, Absolute and Relative paths, Reading files into a list.",
              "Project: File Processing Coding Challenge on Text Files.",
              "Python Modules, Error and Exception Handling Importing modules and Custom modules, Try Except Else Finally , Best Practices.",
              "Project: Test Network Connection.",
              "Coding Challenge on Modules, Error and Exception Handling.",
            ]}
            status={false}
          />
          <AccordianItemNew
            title="Object Oriented Programming"
            content="Explore Python OOP concepts with coding challenge, followed by a set of 30 coding challenges for enhanced coding proficiency."
            bulletPoints={[
              "Classes and Objects : OOPS Concepts, __init__ and __del__ method, Attributes, Magic Methods Coding Challenge on OOPs.",
              "Coding Powerhouse Challenges 30 coding challenges.",
            ]}
            status={false}
          />
          <AccordianItemNew
            title="Project"
            content="Learn Python data handling with projects on OS manipulation, Excel operations, and Pandas functionality using built-in modules and libraries."
            bulletPoints={[
              "Built in Modules -  Project: The OS.",
              "Working with CSV, Excel Files - Project: Excel Operations.",
              "Working with Pandas - Project: Pandas Operation.",
            ]}
            status={false}
          />
        </div>
      </Container>
    </section>
  );
};

export default PythonSyllabus;
