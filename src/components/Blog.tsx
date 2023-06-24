import Link from "next/link";

export default function Blog() {
  return (
    <div className="p-5 md:p-20">
      <div>
        <h1 className="text-center text-4xl font-bold">Welcome to Blog</h1>
        <div className="my-5 grid grid-cols-2 gap-4">
          <div className="shad rounded-lg p-5">
            <p>
              React is a popular JavaScript library for building user
              interfaces. It uses a component-based architecture, allowing
              developers to create reusable UI elements. React virtual DOM
              efficiently updates only the necessary parts of the user
              interface, resulting in fast and responsive applications. Its
              ecosystem offers a wide range of libraries and tools for state
              management, routing, and testing, making it versatile for building
              complex web applications.
            </p>
          </div>
          <div className="shad rounded-lg p-5">
            <p>
              Node.js is a server-side JavaScript runtime that enables
              developers to build scalable and high-performance applications.
              Its non-blocking, event-driven architecture makes it ideal for
              real-time applications and handling concurrent requests. With a
              vast collection of modules available through npm, Node.js
              simplifies the development process by providing reusable
              components and libraries.
            </p>
          </div>
          <div className="shad rounded-lg p-5">
            <p>
              Next.js is a framework built on top of React that enhances React
              capabilities. It offers server-side rendering, automatic code
              splitting, and simplified routing, allowing for improved
              performance and SEO. Next.js provides an excellent developer
              experience, with features like hot module replacement and easy
              deployment, making it a popular choice for building
              production-ready React applications.
            </p>
          </div>
          <div className="shad rounded-lg p-5">
            <p>
              Fullstack development involves working on both the front-end and
              back-end of a web application. It requires knowledge of various
              technologies, such as React or Angular for the front-end, and
              Node.js or Django for the back-end. Fullstack developers are
              responsible for designing the user interface, implementing
              business logic, managing databases, and handling server-side
              operations. This comprehensive approach allows them to create
              end-to-end solutions and deliver seamless user experiences.
              Fullstack development is in high demand as it offers the
              flexibility to work on various aspects of application development.
            </p>
          </div>
        </div>
      </div>
      <div className="my-10 text-center font-bold text-green-500">
        <Link href={"/"}>Go To HomePage</Link>
      </div>
    </div>
  );
}
