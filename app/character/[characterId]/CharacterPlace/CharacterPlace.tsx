import styles from "./CharacterPlace.module.css";
import ReactCountryFlag from "react-country-flag";

import countries from "i18n-iso-countries";
import ja from "i18n-iso-countries/langs/ja.json";
countries.registerLocale(ja);

export type CharacterPlaceProps = {
  countryCode: string;
  location: string;
};

export function CharacterPlace({ countryCode, location }: CharacterPlaceProps) {
  return (
    <article className={styles.addressContainer}>
      <figure className={styles.countryBrief}>
        <ReactCountryFlag countryCode={countryCode} svg />
        <figcaption className={styles.countryName}>
          {countries.getName(countryCode, "ja")}
        </figcaption>
      </figure>
      <div className={styles.addressBody}>{location}</div>
    </article>
  );
}
