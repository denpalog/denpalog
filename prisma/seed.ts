import prisma from "../lib/prisma/client";

const i18nColorsBase = [
  "red",
  "skyblue",
  "green",
  "orange",
  "yellow",
  "blue",
  "white",
  "purple",
  "silver",
  "gold",
  "pink",
  "black",
] as const;

async function main() {
  for (const color of i18nColorsBase) {
    await prisma.bodyColor.upsert({
      where: { i18nKey: color },
      update: {},
      create: {
        i18nKey: color,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
