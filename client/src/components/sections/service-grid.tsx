import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tractor, Wheat, Settings, Factory } from "lucide-react";

const services = [
  {
    title: "Equipment Rental",
    description: "Wide range of modern agricultural machinery available for rent",
    icon: Tractor,
  },
  {
    title: "Harvesting Services",
    description: "Professional harvesting services for all types of crops",
    icon: Wheat,
  },
  {
    title: "Maintenance",
    description: "Regular maintenance and repair services for agricultural equipment",
    icon: Settings,
  },
  {
    title: "Custom Operations",
    description: "Specialized agricultural operations tailored to your needs",
    icon: Factory,
  },
];

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service) => (
        <Card key={service.title}>
          <CardHeader>
            <div className="mb-4 text-primary">
              <service.icon className="h-10 w-10" />
            </div>
            <CardTitle>{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{service.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
