import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white">
      <header className="container mx-auto py-16 px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our App</h1>
        <p className="text-xl mb-8">The best solution for your needs</p>
        <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full hover:bg-blue-100 transition duration-300">
          Get Started
        </button>
      </header>
      
      <main className="container mx-auto py-16 px-4">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
              <p>Description of feature 1</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
              <p>Description of feature 2</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
              <p>Description of feature 3</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="max-w-2xl">
            We are a team of passionate developers creating innovative solutions
            to make your life easier. Our app is designed with you in mind,
            focusing on usability and performance.
          </p>
        </section>
      </main>
      
      <footer className="bg-black bg-opacity-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;