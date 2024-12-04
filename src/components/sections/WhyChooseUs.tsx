import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhyChooseUs = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Digital Marketing Team"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose SureSites?</h2>
            <div className="space-y-4">
              {[
                "Tailored strategies for small businesses",
                "Comprehensive digital marketing solutions",
                "Dedicated support team",
                "Proven track record of success",
                "Affordable monthly plans",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{point}</span>
                </div>
              ))}
            </div>
            <Link to="/contact">
              <Button className="mt-8" size="lg">
                Schedule a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;