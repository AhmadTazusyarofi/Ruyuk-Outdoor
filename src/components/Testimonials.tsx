import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
            Testimoni
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white">
            Kepuasan pelanggan adalah prioritas kami
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonialsData.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 h-full shadow-card hover:shadow-card-hover transition-smooth bg-card border-none">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-sm sm:text-base text-foreground mb-6 leading-relaxed line-clamp-4">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="mt-auto">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.date}</div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
