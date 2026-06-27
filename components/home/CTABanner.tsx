import Button from '@/components/ui/Button';

export default function CTABanner() {
  return (
    <section style={{ backgroundColor: '#1B3F8B' }} className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Get Your Loan?
        </h2>
        <p className="text-blue-200 text-lg mb-8">
          Join 1000+ satisfied customers. Apply now and get approval in 48 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Apply Now
          </Button>
          <a
            href="tel:9769603074"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
