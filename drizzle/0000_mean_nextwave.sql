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
	"linkedin" varchar(255),
	"instagram" varchar(255),
	"twitter" varchar(255),
	"facebook" varchar(255),
	"is_student" boolean NOT NULL,
	"is_african" boolean NOT NULL,
	"has_social_media" boolean NOT NULL,
	"commit_to_sharing" boolean NOT NULL,
	"agree_to_rules" boolean NOT NULL,
	"digital_signature" varchar(255) NOT NULL,
	"created_at" date DEFAULT now(),
	"updated_at" date DEFAULT now(),
	"deleted_at" date
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"picture" varchar(255),
	"role" "role" DEFAULT 'user',
	"is_active" boolean DEFAULT true,
	"created_at" date DEFAULT now(),
	"updated_at" date DEFAULT now(),
	"deleted_at" date,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
