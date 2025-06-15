
const ContactUs = () => {
  return (
    <section id="contact-us" className="py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-green-400 to-purple-300 bg-clip-text text-transparent">
          Ready to Innovate?
        </h2>
        <p className="text-xl text-purple-300 mb-8 max-w-2xl mx-auto">
          Let's discuss how Aetherius Labs can accelerate your AI journey.
        </p>
        <button className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-500 hover:to-green-500 text-white rounded-full transition-all duration-300 hover:scale-105">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
