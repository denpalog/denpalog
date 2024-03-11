/*
  return cached PrismaClient.
  reference: https://github.com/prisma/prisma-examples/blob/latest/javascript/rest-nextjs/src/lib/prisma.js
*/

import { PrismaClient } from "@prisma/client";

const globalForPrisma: typeof globalThis & { prisma?: PrismaClient } = global;

const prisma = globalForPrisma?.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
