import React from 'react';
import { Helmet } from "react-helmet";
const AboutPage = () => {
  return (
    <>
    <Helmet>
  <title>About Us | Shani Memorial English High School</title>
  <meta name="description" content="Learn about the mission, values, and journey of Shani Memorial English High School." />
  <meta property="og:title" content="About Us | Shani Memorial English High School" />
  <meta property="og:description" content="Founded with a vision to nurture minds and build strong character through education." />
  <meta property="og:image" content="https://yourdomain.com/images/about.jpg" />
  <meta property="og:url" content="https://yourdomain.com/about" />
</Helmet>

    
    <div className="bg-gray-800 text-white min-h-screen py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-10 underline decoration-yellow-400">
          About Our School
        </h1>

        <section className="mb-16 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-4">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-gray-200">
              At our school, we strive to provide a nurturing environment that fosters
              academic excellence, character building, and creative exploration. Our
              mission is to empower students with knowledge and skills to succeed in
              a dynamic world.
            </p>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAOa2bd8n1HPltSEAcIvsMv9jlsrKlG741PQ&s"
            alt="Mission"
            className="rounded-2xl shadow-lg"
          />
        </section>

        <section className="mb-16 grid md:grid-cols-2 gap-6 items-center">
          <img
            src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80"
            alt="Vision"
            className="rounded-2xl shadow-lg order-last md:order-first"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-4">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed text-gray-200">
              We envision a future where every student becomes a responsible citizen,
              a critical thinker, and a lifelong learner. We aim to inspire minds and
              shape futures through innovative and inclusive education.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-4">
            Principal's Message
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            Dear students and parents, welcome to our school community. We are
            committed to cultivating a culture of excellence and respect. With the
            support of our dedicated staff and parents, we aim to provide a
            well-rounded education that prepares our students for the challenges of
            tomorrow.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-4">
            Core Values
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-200 space-y-2">
            <li>Integrity and Honesty</li>
            <li>Respect and Discipline</li>
            <li>Innovation and Curiosity</li>
            <li>Collaboration and Teamwork</li>
            <li>Commitment to Excellence</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            Our school offers a safe and inclusive learning environment, qualified and
            passionate teachers, state-of-the-art facilities, extracurricular
            activities, and a strong focus on moral values. We believe in the holistic
            development of every child.
          </p>
        </section>
      </div>
    </div>
    </>
  );
};

export default AboutPage;