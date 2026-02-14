import React from 'react';
import {
  Check,
  Rocket,
  ShieldCheck,
  Clock,
  TrendingUp,
  Users
} from 'lucide-react';

const WhyHireMe = () => {
  const reasons = [
    "Clear communication in simple language. No confusing tech talk.",
    "Strict timelines with fast, predictable delivery.",
    "Modern tech stack built to scale as your business grows.",
    "Business-first thinking. Every design has a conversion goal.",
    "Post-launch support so you’re never left stuck.",
    "Startup-friendly pricing without cutting corners."
  ];

  return (
    <section className="py-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block mb-4 px-5 py-1.5 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
            Why Todwal Infotech
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            More Than Developers. <br />
            Your Digital Growth Partner.
          </h2>

          <p className="text-lg text-gray-600">
            We don’t just deliver websites.  
            We build digital systems that help businesses attract, convert, and grow.
          </p>
        </div>

        {/* Trust Stats */}
        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          <div className="bg-gray-50 rounded-3xl p-8 text-center hover:shadow-xl transition">
            <Rocket className="mx-auto text-blue-600 mb-4" size={34} />
            <h4 className="text-2xl font-bold text-gray-900 mb-1">
              Fast Execution
            </h4>
            <p className="text-gray-600 text-sm">
              Clear milestones. Zero delays.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 text-center hover:shadow-xl transition">
            <ShieldCheck className="mx-auto text-blue-600 mb-4" size={34} />
            <h4 className="text-2xl font-bold text-gray-900 mb-1">
              Reliable Systems
            </h4>
            <p className="text-gray-600 text-sm">
              Clean code & long-term stability.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 text-center hover:shadow-xl transition">
            <Clock className="mx-auto text-blue-600 mb-4" size={34} />
            <h4 className="text-2xl font-bold text-gray-900 mb-1">
              Time Saving
            </h4>
            <p className="text-gray-600 text-sm">
              You run business. We handle tech.
            </p>
          </div>
        </div>

        {/* Reasons */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-7 border rounded-3xl hover:shadow-xl transition"
            >
              <div className="bg-blue-50 p-2 rounded-xl">
                <Check className="text-blue-600" size={24} />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {reason}
              </p>
            </div>
          ))}
        </div>

        {/* Extra Proof */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto mt-20">
          <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-3xl">
            <Users className="text-blue-600" size={32} />
            <div>
              <h4 className="font-bold text-gray-900">
                Built for Startups & SMBs
              </h4>
              <p className="text-gray-600 text-sm">
                We understand limited budgets and fast execution.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-3xl">
            <TrendingUp className="text-blue-600" size={32} />
            <div>
              <h4 className="font-bold text-gray-900">
                Growth-Oriented Approach
              </h4>
              <p className="text-gray-600 text-sm">
                Every project is built to scale and convert.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <a
            href="contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-blue-700 transition"
          >
            Get a Free Consultation →
          </a>

          <p className="text-sm text-gray-500 mt-4">
            No spam. No pressure. Just honest advice.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyHireMe;
