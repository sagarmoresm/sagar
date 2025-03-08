import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Tractor, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-primary/10 to-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <Tractor className="h-16 w-16 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Shri Ram Thresher
            </h1>
          </div>

          <div className="text-lg mb-8 space-y-4">
            <p className="text-gray-600 leading-relaxed">
              🌾 आमच्याकडे सर्व प्रकारचे धान्य मळणी यंत्राद्वारे काढून मिळेल <br/>
              🌽 मका, गहू, हरभरा, कांदा बियाणे यांची मळणी उपलब्ध <br/>
              🚜 रोटा, नागर, मोगडा, ट्रॉली वाहतूक मिळेल <br/>
              🌿 कुट्टी मशीन द्वारे कडबाकुट्टी करून मिळेल
            </p>

            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-semibold mb-2">📞 सेवासाठी कॉल करा:</p>
              <div className="space-y-2">
                <a 
                  href="tel:+917620136575" 
                  className="flex items-center gap-2 text-primary hover:text-primary/80"
                >
                  <Button variant="outline" size="sm" className="gap-2">
                    <PhoneCall className="h-4 w-4" />
                    👨‍🌾 यादव मोरे: +91 7620136575
                  </Button>
                </a>
                <a 
                  href="tel:+917030985718"
                  className="flex items-center gap-2 text-primary hover:text-primary/80"
                >
                  <Button variant="outline" size="sm" className="gap-2">
                    <PhoneCall className="h-4 w-4" />
                    👨‍🌾 सचिन मोरे: +91 7030985718
                  </Button>
                </a>
              </div>
              <p className="mt-2">📍 पत्ता: वडोद (विठ्ठलाचे) ता. कन्नड जिल्हा. औरंगाबाद</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href="/services">
              <Button size="lg">आमच्या सेवा</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">संपर्क करा</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}