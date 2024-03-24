import {
  AntennaKeyOrUnset,
  antennaKeys,
  isAntennaKey,
} from "@/lib/domain/birth/antenna";
import { Select } from "@chakra-ui/react";

export interface AntennaKeyInputProps {
  selectedAntennaKey: AntennaKeyOrUnset;
  onChange: (antennaKey: AntennaKeyOrUnset) => any;
}

export function AntennaKeyInput({
  selectedAntennaKey,
  onChange,
}: AntennaKeyInputProps) {
  const handleChangeAntenna: React.FormEventHandler<HTMLSelectElement> = (
    e
  ) => {
    const selectEventAntennaKey = e.currentTarget.value;
    if (!isAntennaKey(selectEventAntennaKey)) return;
    onChange(selectEventAntennaKey);
  };
  return (
    <Select onChange={handleChangeAntenna} value={selectedAntennaKey ?? ""}>
      {antennaKeys.map((antennaKey) => (
        <option key={antennaKey} value={antennaKey}>
          {antennaKey}
        </option>
      ))}
    </Select>
  );
}
