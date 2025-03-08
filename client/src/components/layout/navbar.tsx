import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Tractor } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="font-bold text-2xl text-primary flex items-center gap-2">
            <Tractor className="h-8 w-8" />
            Shri Ram Thresher
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/">
            <a className="text-gray-600 hover:text-primary">Home</a>
          </Link>
          <Link href="/services">
            <a className="text-gray-600 hover:text-primary">Services</a>
          </Link>
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}