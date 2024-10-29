"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

const locationGroups = [
  {
    title: "COMMUTE",
    items: [
      { name: "Holland Village MRT Station (CCL)", time: "3 mins walk" },
      { name: "Buona Vista MRT Station (CCL & EWL)", time: "2 mins drive" },
      { name: "Ayer Rajah Expressway (AYE)", time: "5 mins drive" },
    ],
  },
  {
    title: "DINE & SHOP",
    items: [
      { name: "Holland Road Shopping Centre", time: "4 mins walk" },
      { name: "Raffles Holland V Mall", time: "5 mins walk" },
      { name: "The Star Vista", time: "3 mins drive" },
    ],
  },
  {
    title: "EDUCATION",
    items: [
      { name: "Henry Park Primary School", time: "3 mins drive" },
      { name: "Anglo-Chinese School (International)", time: "5 mins drive" },
      { name: "National University of Singapore", time: "7 mins drive" },
    ],
  },
];

export function LocationPreview() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {locationGroups.map((group) => (
        <Card key={group.title}>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
            <ul className="space-y-3">
              {group.items.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}