
import { BarChart, Cpu, Lightbulb } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Strategic Insights",
      description: "We help you identify the most impactful AI opportunities for your business, turning complex data into actionable strategies.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "Custom AI Blueprints",
      description: "Receive a tailored AI integration roadmap, complete with recommended tools, technologies, and implementation timelines.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Team Empowerment",
      description: "Our process is designed to educate and align your teams, ensuring a smooth and successful adoption of AI technologies.",
    },
  ];

  return (
    <section id="about-us" className="py-24 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
          What We Do
        </h2>
        <p className="text-xl text-center text-cyan-200 mb-16 max-w-3xl mx-auto">
          We bridge the gap between your business goals and the power of artificial intelligence.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 border border-border rounded-2xl bg-slate-900/50 hover:border-primary/50 hover:bg-slate-900 transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6 p-4 bg-primary/10 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
