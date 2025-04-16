CREATE TYPE "role" AS ENUM ('user', 'admin');

CREATE TABLE "edu_quiz" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"date_of_birth" date NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(20) NOT NULL,
	"nationality" varchar(255) NOT NULL,
	"residence" varchar(255) NOT NULL,
	"institution" varchar(255) NOT NULL,
	"course_of_study" varchar(255) NOT NULL,
	"year_of_study" varchar(255) NOT NULL,
	"social_media_link" varchar(255) NOT NULL,
	"is_student" boolean NOT NULL,
	"is_african" boolean NOT NULL,
	"has_active_social_media" boolean NOT NULL,
	"agree_to_share" boolean NOT NULL,
	"agree_to_submit_link" boolean NOT NULL,
	"agree_to_rules" boolean NOT NULL,
	"hear_about_edu_quiz" varchar(255) DEFAULT 'NoResponse' NOT NULL,
	"digital_signature" varchar(255) NOT NULL,
	"created_at" date DEFAULT now(),
	"updated_at" date DEFAULT now(),
	"deleted_at" date
);

CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"picture" varchar(255),
	"role" "role" DEFAULT 'user',
	"provider" varchar(255) NOT NULL,
	"is_active" boolean DEFAULT true,
	"created_at" date DEFAULT now(),
	"updated_at" date DEFAULT now(),
	"deleted_at" date,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
