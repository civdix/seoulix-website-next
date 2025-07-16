"use client"

import { Card, CardContent } from "@/components/ui/card"

export function MapSection() {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground mb-2">Interactive Map</p>
            <p className="text-sm text-muted-foreground">
              H.No.: 944, BLOCK C, SUSHANT LOK 1<br />
              Sadar Bazar, Gurgaon, Haryana - 122001
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
