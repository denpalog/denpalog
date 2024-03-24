import {
  isColorKey,
  colorKeys,
  ColorKeyOrUnset,
} from "@/lib/domain/birth/color";
import { Select } from "@chakra-ui/react";
import React, { useCallback } from "react";

export interface ColorKeyInputProps {
  selectedColorKey: ColorKeyOrUnset;
  onChange: (colorKey: ColorKeyOrUnset) => any;
}

export function ColorKeyInput({
  selectedColorKey,
  onChange,
}: ColorKeyInputProps) {
  const handleChange: React.FormEventHandler<HTMLSelectElement> = useCallback(
    (e) => {
      const selectedValue = e.currentTarget.value;
      if (!isColorKey(selectedValue)) {
        // 不正な操作によってColorKey以外の値が入力された
        onChange(null);
        return;
      }

      onChange(selectedValue);
    },
    [onChange]
  );

  return (
    <Select value={selectedColorKey ?? ""} onChange={handleChange}>
      <option value="" disabled>
        選択されていません
      </option>
      {colorKeys.map((colorKey) => (
        <option key={colorKey}>{colorKey}</option>
      ))}
    </Select>
  );
}
