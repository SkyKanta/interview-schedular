-- CreateTable
CREATE TABLE "Day" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "Day_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "time" TEXT NOT NULL,
    "day_id" INTEGER NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interview" (
    "id" SERIAL NOT NULL,
    "student" VARCHAR(255) NOT NULL,
    "interviewer_id" INTEGER NOT NULL,
    "appointment_id" INTEGER NOT NULL,

    CONSTRAINT "Interview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interviewer" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "avatar" TEXT NOT NULL,

    CONSTRAINT "Interviewer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailableInterviewer" (
    "id" SERIAL NOT NULL,
    "interviewer_id" INTEGER NOT NULL,
    "day_id" INTEGER NOT NULL,

    CONSTRAINT "AvailableInterviewer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Interview_appointment_id_key" ON "Interview"("appointment_id");

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "Day"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_interviewer_id_fkey" FOREIGN KEY ("interviewer_id") REFERENCES "Interviewer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_appointment_id_fkey" FOREIGN KEY ("appointment_id") REFERENCES "Appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailableInterviewer" ADD CONSTRAINT "AvailableInterviewer_interviewer_id_fkey" FOREIGN KEY ("interviewer_id") REFERENCES "Interviewer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailableInterviewer" ADD CONSTRAINT "AvailableInterviewer_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "Day"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
