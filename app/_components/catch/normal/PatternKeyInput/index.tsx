import {
  PatternKeyOrUnset,
  isPatternKey,
  patternKeys,
} from "@/lib/domain/birth/pattern";
import { Select } from "@chakra-ui/react";
import React, { useCallback } from "react";

export interface PatternKeyInputProps {
  selectedPatternKey: PatternKeyOrUnset;
  onChange: (patternKey: PatternKeyOrUnset) => any;
}

export function PatternKeyInput({
  selectedPatternKey,
  onChange,
}: PatternKeyInputProps) {
  const handleChange: React.FormEventHandler<HTMLSelectElement> = useCallback(
    (e) => {
      const selectedValue = e.currentTarget.value;
      if (!isPatternKey(selectedValue)) {
        // 不正な操作によってPatternKey以外の値が入力された
        onChange(null);
        return;
      }

      onChange(selectedValue);
    },
    [onChange]
  );

  return (
    <Select value={selectedPatternKey ?? ""} onChange={handleChange}>
      <option value="" disabled>
        選択されていません
      </option>
      {patternKeys.map((patternKey) => (
        <option key={patternKey}>{patternKey}</option>
      ))}
    </Select>
  );
}
