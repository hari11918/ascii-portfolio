"use client"
import { AsciiPortraitCanvas } from "./ascii-portrait-canvas"
import { AsciiPortraitGrid } from "./ascii-portrait-grid"
import { AsciiPortraitStatic } from "./ascii-portrait-static"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AsciiPortraitComparison() {
  // Set fixed values for contrast and brightness
  const contrast = 1.4
  const brightness = 0.7

  return (
    <div className="space-y-4">
      <Tabs defaultValue="canvas" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="canvas">Canvas</TabsTrigger>
          <TabsTrigger value="grid">Grid</TabsTrigger>
          <TabsTrigger value="static">Static</TabsTrigger>
        </TabsList>
        <TabsContent value="canvas" className="mt-4">
          <AsciiPortraitCanvas width={100} height={120} contrast={contrast} brightness={brightness} />
          <div className="text-center text-xs text-muted-foreground mt-2">Canvas-based ASCII Art (High Resolution)</div>
        </TabsContent>
        <TabsContent value="grid" className="mt-4">
          <AsciiPortraitGrid width={80} height={100} contrast={contrast} brightness={brightness} />
          <div className="text-center text-xs text-muted-foreground mt-2">Grid-based ASCII Art (Medium Resolution)</div>
        </TabsContent>
        <TabsContent value="static" className="mt-4">
          <AsciiPortraitStatic />
          <div className="text-center text-xs text-muted-foreground mt-2">Static ASCII Art (Interactive)</div>
        </TabsContent>
      </Tabs>

      {/* Remove the sliders since we're using fixed values now */}
    </div>
  )
}

