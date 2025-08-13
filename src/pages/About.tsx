import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Award, Clock, Shield, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Quicknest
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a home services platform that brings together skilled professionals and homeowners 
              who need reliable help around the house. Think of us as your neighborhood handyman, 
              cleaner, and repair expert - all in one convenient app.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We want to make finding home services as easy as ordering takeout. No more 
                endless phone calls or wondering if someone will actually show up. We connect 
                you with vetted professionals who care about doing the job right, every time.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Picture a world where getting your house cleaned, your leaky faucet fixed, 
                or your garden maintained doesn't require a week of planning. We're building 
                that reality - where quality home care is just a few taps away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              It all started when our founder was stuck at home with a broken dishwasher and 
              couldn't find anyone reliable to fix it. That frustrating experience sparked an idea.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2019</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">The Beginning</h3>
              <p className="text-gray-600">
                Started in a small apartment with a laptop and a dream to fix the broken 
                home services industry
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2022</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growing Up</h3>
              <p className="text-gray-600">
                Word spread, more cities joined, and we realized we were onto something special
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2024</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Making Waves</h3>
              <p className="text-gray-600">
                Now we're helping thousands of families every day, and we're just getting started
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Stand For</h2>
            <p className="text-gray-600">
              These aren't just words on a wall - they're how we actually work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust & Reliability</h3>
              <p className="text-gray-600">
                We only work with professionals who've proven they can be counted on. 
                No more no-shows or shoddy work.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality That Lasts</h3>
              <p className="text-gray-600">
                We believe in doing things right the first time. It saves you money 
                and saves us headaches.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">You Come First</h3>
              <p className="text-gray-600">
                Every decision we make starts with one question: "What's best for our customers?"
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Time Matters</h3>
              <p className="text-gray-600">
                We know your time is valuable. That's why we show up when we say we will 
                and get the job done efficiently.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Roots</h3>
              <p className="text-gray-600">
                We're not some faceless corporation. We work with people from your community 
                who understand your neighborhood.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Always Improving</h3>
              <p className="text-gray-600">
                We're constantly looking for ways to make our service better. 
                Your feedback drives our improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <p className="text-blue-100">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <p className="text-blue-100">Service Providers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <p className="text-blue-100">Cities Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">4.8</div>
              <p className="text-blue-100">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600">
              The people who make Quicknest work day in and day out
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Leadership</h3>
              <p className="text-gray-600">
                Our experienced team guides the company's direction and keeps us 
                focused on what matters most
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Control</h3>
              <p className="text-gray-600">
                These folks make sure every service meets our high standards. 
                They're the reason you can trust us.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Support</h3>
              <p className="text-gray-600">
                Available around the clock to help with questions, concerns, 
                or just to chat about your latest home project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Give Us a Try?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of happy customers who've discovered how easy home services can be
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Services
            </Link>
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 