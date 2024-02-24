import styles from "./CharacterAuthor.module.css";

import Link from "next/link";

export type CharacterAuthorProps = {
  id: string;
  iconSrc: string;
  name: string;
};

type UserLinkProps = {
  id: string;
  children: React.ReactNode;
};

function UserLink({ id, children }: UserLinkProps) {
  return <Link href={`/user/${id}`}>{children}</Link>;
}

export function CharacterAuthor({ id, iconSrc, name }: CharacterAuthorProps) {
  return (
    <address>
      <figure>
        <UserLink id={id}>
          <img src={iconSrc} className={styles.icon} />
        </UserLink>
        <p>登録したユーザ</p>
        <figcaption>
          <UserLink id={id}>{name}</UserLink>
        </figcaption>
      </figure>
    </address>
  );
}
