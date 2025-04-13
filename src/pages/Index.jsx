
import React from 'react';
import { Database, ShieldAlert, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AttackCard from '../components/AttackCard';

const Index = () => {
  const attacks = [
    {
      title: 'SQL Injection',
      description: 'Learn how attackers can manipulate SQL queries to access unauthorized data and how to prevent these attacks.',
      icon: Database,
      color: 'blue',
      path: '/sql-injection'
    },
    {
      title: 'XSS Attack',
      description: 'Explore cross-site scripting vulnerabilities where malicious scripts are injected into trusted websites.',
      icon: ShieldAlert,
      color: 'purple',
      path: '/xss'
    },
    {
      title: 'DDoS Attack',
      description: 'Understand how distributed denial-of-service attacks work by overwhelming servers with traffic.',
      icon: Zap,
      color: 'green',
      path: '/ddos'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Cyber</span>
              <span className="text-cyber-blue">Defense</span>
              <span className="text-white"> Playground</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Learn about common cyber attacks through interactive demonstrations in a safe environment.
            </p>
            <div className="inline-block animate-pulse-glow">
              <button className="cyber-button text-lg px-6 py-3">
                Start Learning
              </button>
            </div>
          </div>
        </section>

        {/* Attack Vectors Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="text-white">Choose an </span>
            <span className="text-cyber-blue">Attack Vector</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attacks.map((attack, index) => (
              <AttackCard key={index} {...attack} />
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="text-white">How It </span>
            <span className="text-cyber-blue">Works</span>
          </h2>
          <div className="cyber-card">
            <ol className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyber-blue font-bold mr-2">1.</span>
                <span>Choose an attack vector you want to learn about.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue font-bold mr-2">2.</span>
                <span>Explore the interactive demonstration to understand how the attack works.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue font-bold mr-2">3.</span>
                <span>Learn about prevention techniques and best practices to protect against these attacks.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue font-bold mr-2">4.</span>
                <span>Test your knowledge with practical exercises in our safe environment.</span>
              </li>
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
