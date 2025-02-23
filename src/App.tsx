import React from 'react';
import { 
  Palette, 
  Layers, 
  Monitor, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Clock,
  Zap,
  MessageSquare
} from 'lucide-react';

function App() {
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&q=80&w=800",
      category: "Branding",
      title: "Modern Brand Identity"
    },
    {
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=800",
      category: "UI Design",
      title: "Mobile App Interface"
    },
    {
      image: "https://images.unsplash.com/photo-1600697394936-59934aa5951f?auto=format&fit=crop&q=80&w=800",
      category: "Marketing",
      title: "Campaign Materials"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">Creatiwise</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-indigo-600">Services</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600">How It Works</a>
              <a href="#portfolio" className="text-gray-600 hover:text-indigo-600">Portfolio</a>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Vision, Our Design Expertise
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Get unlimited design requests for a flat monthly fee. From branding to UI/UX, 
              we've got all your creative needs covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-50 transition-colors flex items-center gap-2 justify-center">
                View Our Work <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors">
                See Pricing
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* How It Works */}
      <div id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">How Creatiwise Works</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">1. Submit Request</h3>
            <p className="text-gray-600">Tell us about your design needs through our simple project brief form.</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">2. Get Matched</h3>
            <p className="text-gray-600">We'll assign the perfect designer for your project within 24 hours.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">3. Receive Designs</h3>
            <p className="text-gray-600">Get your first design concepts within 2-3 business days.</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Design Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-lg w-fit mb-6">
                <Palette className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Branding</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Logo Design</li>
                <li>• Brand Guidelines</li>
                <li>• Visual Identity</li>
                <li>• Brand Strategy</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-6">
                <Layers className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Marketing Design</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Social Media Graphics</li>
                <li>• Marketing Materials</li>
                <li>• Digital Ads</li>
                <li>• Print Design</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6">
                <Monitor className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">UI Design</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Website Design</li>
                <li>• Mobile App UI</li>
                <li>• Web Applications</li>
                <li>• Prototypes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">Recent Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <span className="text-indigo-300 text-sm font-medium">{item.category}</span>
                <h3 className="text-white text-xl font-semibold mt-2">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust Creatiwise for their design needs.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-50 transition-colors">
            Start Your Design Journey
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold">Creatiwise</h3>
              <p className="text-gray-400 mt-2">Professional Design Solutions</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Branding</a></li>
                <li><a href="#" className="hover:text-white">Marketing Design</a></li>
                <li><a href="#" className="hover:text-white">UI Design</a></li>
                <li><a href="#" className="hover:text-white">Custom Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">How It Works</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © {new Date().getFullYear()} Creatiwise. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;