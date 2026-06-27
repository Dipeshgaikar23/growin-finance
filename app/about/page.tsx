import { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About Us | Growin Finserv',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="py-20 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #1B3F8B 0%, #2a5cbf 100%)' }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Growin Finserv</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Your trusted loan partner since 2016 — helping Mumbai families and businesses achieve their financial goals with transparency and care.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#1B3F8B' }}>Our Story</h2>
              <p className="text-gray-600 mb-4">
                Growin Finserv was founded with a single mission: to make home loans and financial products accessible to every Mumbai family. We understand that buying a home is one of the most significant decisions in a person's life, and we are here to guide you every step of the way.
              </p>
              <p className="text-gray-600 mb-4">
                Founded by Gopal Pandey and Shivdhar Tiwari, two finance professionals with 15+ years of combined experience, Growin Finserv has grown into a trusted name in Mumbai's mortgage and loan landscape. Our founders saw a gap — borrowers were confused, underserved, and often paying more than they needed to. They built Growin Finserv to change that.
              </p>
              <p className="text-gray-600">
                Since 2016, we have helped over 1,000 families and businesses secure financing — from first-time homebuyers to seasoned investors. Our team works with 15+ leading banks and NBFCs to find you the best rates, fastest approvals, and smoothest experience possible.
              </p>
            </div>
            {/* Right: Stats Card */}
            <div
              className="rounded-2xl p-8 text-white shadow-xl"
              style={{ backgroundColor: '#1B3F8B' }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">Our Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-orange-400 mb-2">1000+</div>
                  <div className="text-blue-100 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-orange-400 mb-2">₹50Cr+</div>
                  <div className="text-blue-100 text-sm">Loan Disbursed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-orange-400 mb-2">8+</div>
                  <div className="text-blue-100 text-sm">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-orange-400 mb-2">15+</div>
                  <div className="text-blue-100 text-sm">Bank Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founders */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1B3F8B' }}>
            Meet Our Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Gopal Pandey */}
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4"
                style={{ backgroundColor: '#1B3F8B' }}
              >
                G
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Gopal Pandey</h3>
              <p className="text-orange-500 font-semibold mb-3">Co-Founder &amp; CEO</p>
              <p className="text-gray-600 text-sm mb-4">
                10+ years of expertise in mortgage advisory and home loans. Gopal has helped hundreds of families navigate the complexities of property financing with personalised guidance and deep lender relationships.
              </p>
              <a
                href="tel:9769603074"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                📞 9769603074
              </a>
            </div>
            {/* Shivdhar Tiwari */}
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4"
                style={{ backgroundColor: '#1B3F8B' }}
              >
                S
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Shivdhar Tiwari</h3>
              <p className="text-orange-500 font-semibold mb-3">Co-Founder &amp; Director</p>
              <p className="text-gray-600 text-sm mb-4">
                8+ years of experience in business and personal loan solutions. Shivdhar specialises in structuring loan products for entrepreneurs and self-employed professionals, ensuring fast approvals and competitive rates.
              </p>
              <a
                href="tel:8766507422"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                📞 8766507422
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1B3F8B' }}>
            Why Choose Growin Finserv?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1B3F8B' }}>Quick Approvals</h3>
              <p className="text-gray-600 text-sm">
                Get your loan approved in as little as 48 hours. We streamline paperwork and liaise directly with lenders to speed up the process.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1B3F8B' }}>15+ Bank Partners</h3>
              <p className="text-gray-600 text-sm">
                We work with 15+ leading banks and NBFCs so you always get the most competitive interest rates and terms available in the market.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1B3F8B' }}>Expert Guidance</h3>
              <p className="text-gray-600 text-sm">
                Free consultation from certified loan advisors. We explain every option clearly and help you choose the product that fits your needs and budget.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1B3F8B' }}>Doorstep Service</h3>
              <p className="text-gray-600 text-sm">
                We come to you. Our team handles all paperwork at your home or office so you never have to visit a bank or wait in long queues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="py-16 text-white"
        style={{ backgroundColor: '#1B3F8B' }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission &amp; Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-blue-100">
                To empower every Indian family and business with transparent, accessible, and affordable financial solutions — delivered with honesty, speed, and genuine care for our clients' futures.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-3xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-blue-100">
                To become Mumbai's most trusted financial services partner — a company that homebuyers, entrepreneurs, and families turn to first when they need financial guidance and loan solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#1B3F8B' }}>Ready to Apply?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Take the first step toward your financial goals. Get a free consultation from our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
            <Button href="/emi-calculator" variant="outline" size="lg">
              EMI Calculator
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
