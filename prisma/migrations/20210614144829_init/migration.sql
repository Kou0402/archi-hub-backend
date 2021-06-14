-- CreateTable
CREATE TABLE "Archi" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "scale" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FrontElement" (
    "id" SERIAL NOT NULL,
    "archiId" INTEGER NOT NULL,
    "element" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BackElement" (
    "id" SERIAL NOT NULL,
    "archiId" INTEGER NOT NULL,
    "element" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InfraElement" (
    "id" SERIAL NOT NULL,
    "archiId" INTEGER NOT NULL,
    "element" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FrontElement" ADD FOREIGN KEY ("archiId") REFERENCES "Archi"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BackElement" ADD FOREIGN KEY ("archiId") REFERENCES "Archi"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InfraElement" ADD FOREIGN KEY ("archiId") REFERENCES "Archi"("id") ON DELETE CASCADE ON UPDATE CASCADE;
