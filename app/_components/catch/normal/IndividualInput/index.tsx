"use client";

import React, { useCallback } from "react";
import { useImmer } from "use-immer";
import { Button, Input } from "@chakra-ui/react";

import { ColorKeyOrUnset } from "@/lib/domain/birth/color";
import { AntennaKeyOrUnset } from "@/lib/domain/birth/antenna";
import { DenpamenName, MAX_NAME_LENGTH } from "@/lib/domain/birth/name";
import { Generation } from "@/lib/domain/birth/generation";
import { Surface } from "@/lib/domain/birth/surface";
import { Individual } from "@/lib/domain/birth/individual";

import { ColorKeyInput } from "../ColorKeyInput";
import { AntennaKeyInput } from "../AntennaKeyInput";
import { FieldSet } from "../FieldSet";

import styles from "./index.module.css";

export interface FormProps {}

/**
 * Please provide select options for antenna, colors using props.
 */
export function IndividualInput({}: FormProps) {
  const [individual, setIndividual] = useImmer<Individual>({
    id: null,
    name: new DenpamenName(""),
    antennaKey: null,
    generation: Generation.fromNormalCatch(),
    surface: Surface.fromSingleColor(),
  });

  const handleChangeName: React.FormEventHandler<HTMLInputElement> =
    useCallback((e) => {
      const newName = new DenpamenName(e.currentTarget.value);
      setIndividual((draft) => {
        draft.name = newName;
      });
    }, []);

  const handleChangeAntenna = useCallback((antennaKey: AntennaKeyOrUnset) => {
    setIndividual((draft) => {
      draft.antennaKey = antennaKey;
    });
  }, []);

  const handleChangeColor = useCallback((colorKey: ColorKeyOrUnset) => {
    setIndividual((draft) => {
      // todo: Surfaceのcolorsのindexを指定したくない
      // 単色の場合、colorsが配列であることを意識したくない
      draft.surface = draft.surface.changeColor(0, colorKey);
    });
  }, []);

  return (
    <main className={styles.mainSpace}>
      <h1 className={styles.heading}>ノーマルキャッチを記録する</h1>
      <section className={styles.form}>
        <FieldSet title="名前">
          <Input
            variant="flushed"
            value={individual.name.nameString}
            maxLength={MAX_NAME_LENGTH}
            onInput={handleChangeName}
          />
        </FieldSet>
        <FieldSet title="つかまえた場所">
          <p className={styles.primary}>登録されていません</p>
          <p className={styles.primary}>
            <Button variant="link">現在地を登録</Button>
            <span>/</span>
            <Button variant="link">Googleマップから登録</Button>
          </p>
        </FieldSet>
        <FieldSet title="アンテナ">
          <AntennaKeyInput
            selectedAntennaKey={individual.antennaKey}
            onChange={handleChangeAntenna}
          />
        </FieldSet>
        <FieldSet title="色">
          <ColorKeyInput
            selectedColorKey={individual.surface.colorKeys[0]}
            onChange={handleChangeColor}
          />
        </FieldSet>
      </section>
    </main>
  );
}
