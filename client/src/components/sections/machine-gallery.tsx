import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  {
    src: "/images/IMG20201026111844.jpg",
    alt: "Agricultural machinery front view",
    title: "पारंपारिक थ्रेशर यंत्र | धान्य मळणी",
    description: "Traditional threshing machine for grain processing"
  },
  {
    src: "/images/IMG-20250307-WA0003.jpg",
    alt: "Various agricultural machines lined up in a field under blue sky",
    title: "आधुनिक कृषी यंत्रे | शेती साधने",
    description: "Modern agricultural machinery collection"
  },
  {
    src: "/images/IMG-20250307-WA0002.jpg",
    alt: "Green Jangeer threshing machine with red top",
    title: "जंगीर थ्रेशर | धान्य प्रक्रिया",
    description: "Jangeer thresher for grain processing"
  },
  {
    src: "/images/IMG-20250307-WA0001.jpg",
    alt: "Modern agricultural threshing machinery",
    title: "स्वयंचलित थ्रेशर | आधुनिक मळणी",
    description: "Automated threshing system"
  },
  {
    src: "/images/IMG20201206172446.jpg",
    alt: "Classic CM thresher with yellow accents",
    title: "सी-एम थ्रेशर | विशेष मळणी",
    description: "CM thresher for specialized processing"
  },
  {
    src: "/images/IMG20201206172515.jpg",
    alt: "CM thresher side view",
    title: "उच्च क्षमता थ्रेशर | मोठ्या प्रमाणात मळणी",
    description: "High-capacity threshing machine"
  },
  {
    src: "/images/IMG_20230109_214413.jpg",
    alt: "Agricultural machinery at work",
    title: "कार्यरत यंत्र | क्षेत्रीय काम",
    description: "Machinery in field operation"
  },
  {
    src: "/images/IMG_२०२२०९११_१४२९११.jpg",
    alt: "Agricultural processing equipment",
    title: "कडबा कटर | चारा तयारी",
    description: "Fodder cutting machine"
  },
  {
    src: "/images/IMG_२०२२०९११_१४२९४१.jpg",
    alt: "Field machinery setup",
    title: "रोटावेटर | जमीन मशागत",
    description: "Rotavator for soil preparation"
  },
  {
    src: "/images/IMG-20250307-WA0004.jpg",
    alt: "Jangeer branded agricultural machine",
    title: "जंगीर मळणी यंत्र | धान्य प्रक्रिया",
    description: "Jangeer processing equipment"
  },
  {
    src: "/images/IMG-20250307-WA0005.jpg",
    alt: "Tractor with attached machinery",
    title: "ट्रॅक्टर आणि उपकरणे | शेती कामे",
    description: "Tractor with implements"
  },
  {
    src: "/images/IMG-20250307-WA0006.jpg",
    alt: "Transport trailer for agricultural use",
    title: "कृषी ट्रेलर | वाहतूक",
    description: "Agricultural transport trailer"
  }
];

export default function MachineGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl">
      <div className="aspect-video relative">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Title Overlay */}
        <div className="absolute inset-x-0 top-0 bg-black/50 p-4 text-white">
          <h3 className="text-xl font-bold text-center">{images[currentIndex].title}</h3>
          <p className="text-sm text-center text-gray-200">{images[currentIndex].description}</p>
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}