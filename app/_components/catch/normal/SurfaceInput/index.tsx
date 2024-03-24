import React from "react";

import { PatternKeyOrUnset } from "@/lib/domain/birth/pattern";
import { Surface } from "@/lib/domain/birth/surface";
import { ColorKeyOrUnset } from "@/lib/domain/birth/color";

import { PatternKeyInput } from "../PatternKeyInput";
import { ColorKeyInput } from "../ColorKeyInput";

export interface SurfaceInputProps {
  surface: Surface;
  onChange: (surface: Surface) => any;
}

export function SurfaceInput({ surface, onChange }: SurfaceInputProps) {
  const handlePatternChange = (patternKey: PatternKeyOrUnset) => {
    onChange(surface.changePattern(patternKey));
  };

  const handleColorChange = (index: number, colorKey: ColorKeyOrUnset) => {
    onChange(surface.changeColor(index, colorKey));
  };

  return (
    <div>
      <PatternKeyInput
        onChange={handlePatternChange}
        selectedPatternKey={surface.patternKey}
      />
      {surface.colorKeys.map((colorKey, i) => (
        <ColorKeyInput
          selectedColorKey={colorKey}
          key={i}
          onChange={(selectedColorKey) =>
            handleColorChange(i, selectedColorKey)
          }
        />
      ))}
    </div>
  );
}
