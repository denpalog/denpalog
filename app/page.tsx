import { Button } from "@nextui-org/button";
import { UniqueDenpamenNF, PrismaClient } from "@prisma/client";
import prisma from "@/lib/prisma/client";

export default async function Page() {
  const colors = await prisma.bodyColor.findMany();
  console.log(colors);
  return (
    <>
      <h1>Hello, Dashboard Page!</h1>
      <Button>Hello</Button>
      <ul>
        {colors.map((color) => (
          <li key={color.id}>{color.i18nKey}</li>
        ))}
      </ul>
    </>
  );
}
