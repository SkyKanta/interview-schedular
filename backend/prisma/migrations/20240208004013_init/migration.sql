-- CreateTable
CREATE TABLE "days" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "spots" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "days_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appointments" (
    "id" SERIAL NOT NULL,
    "time" TEXT NOT NULL,
    "day_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interviews" (
    "id" SERIAL NOT NULL,
    "student" VARCHAR(255) NOT NULL,
    "interviewer_id" INTEGER NOT NULL,
    "appointment_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "interviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interviewers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "avatar" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "interviewers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "available_interviewers" (
    "interviewer_id" INTEGER NOT NULL,
    "day_id" INTEGER NOT NULL,

    CONSTRAINT "available_interviewers_pkey" PRIMARY KEY ("interviewer_id","day_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "interviews_appointment_id_key" ON "interviews"("appointment_id");

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "days"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_interviewer_id_fkey" FOREIGN KEY ("interviewer_id") REFERENCES "interviewers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_appointment_id_fkey" FOREIGN KEY ("appointment_id") REFERENCES "appointments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "available_interviewers" ADD CONSTRAINT "available_interviewers_interviewer_id_fkey" FOREIGN KEY ("interviewer_id") REFERENCES "interviewers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "available_interviewers" ADD CONSTRAINT "available_interviewers_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "days"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
