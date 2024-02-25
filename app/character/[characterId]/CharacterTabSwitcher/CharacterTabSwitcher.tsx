"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

type CharacterTabLinkProps = React.ComponentProps<
  typeof Link<`/character/${string}`>
>;

function CharacterTabLink(props: CharacterTabLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      data-selected-link={pathname == props.href ? true : undefined}
    />
  );
}

export type CharacterTabSwitcherProps = {
  characterId: string;
};

export function CharacterTabSwitcher({
  characterId,
}: CharacterTabSwitcherProps) {
  const pathname = usePathname();
  return (
    <ul>
      <li>
        <CharacterTabLink href={`/character/${characterId}`}>
          About
        </CharacterTabLink>
      </li>
      <li>
        <CharacterTabLink href={`/character/${characterId}/get`}>
          Get
        </CharacterTabLink>
      </li>
    </ul>
  );
}
