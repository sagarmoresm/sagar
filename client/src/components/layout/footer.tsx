import { PhoneCall, Mail, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Shri Ram Thresher</h3>
            <p className="text-sm">Professional agricultural machinery services for modern farming needs.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="space-y-2">
                <a href="tel:+917620136575" className="block">
                  <Button variant="outline" size="sm" className="w-full justify-start gap-2 text-gray-300 hover:text-white">
                    <PhoneCall className="h-4 w-4" />
                    Yadav More: +91 7620136575
                  </Button>
                </a>
                <a href="tel:+917030985718" className="block">
                  <Button variant="outline" size="sm" className="w-full justify-start gap-2 text-gray-300 hover:text-white">
                    <PhoneCall className="h-4 w-4" />
                    Sachin More: +91 7030985718
                  </Button>
                </a>
              </div>
              <a href="mailto:mrsagarmore5@gmail.com" className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4" />
                mrsagarmore5@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Wadod Tq Kannad Dist Chhatrapati Sambhajinagar
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Business Hours</h4>
            <div className="space-y-1 text-sm">
              <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
              <p>Sunday: By Appointment</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center text-sm space-y-2">
            <p className="flex items-center justify-center gap-2">
              <Globe className="h-4 w-4" />
              For website development inquiries: <a href="mailto:mrsagarmore5@gmail.com" className="text-primary hover:underline">mrsagarmore5@gmail.com</a>
            </p>
            <p>&copy; {new Date().getFullYear()} Shri Ram Thresher. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}