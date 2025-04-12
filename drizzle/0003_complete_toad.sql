ALTER TABLE "edu_quiz" ADD COLUMN "social_media_link" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "edu_quiz" ADD COLUMN "has_active_social_media" boolean NOT NULL;--> statement-breakpoint
ALTER TABLE "edu_quiz" ADD COLUMN "agree_to_share" boolean NOT NULL;--> statement-breakpoint
ALTER TABLE "edu_quiz" ADD COLUMN "agree_to_submit_link" boolean NOT NULL;--> statement-breakpoint
ALTER TABLE "edu_quiz" DROP COLUMN "linkedin";--> statement-breakpoint
ALTER TABLE "edu_quiz" DROP COLUMN "instagram";--> statement-breakpoint
ALTER TABLE "edu_quiz" DROP COLUMN "twitter";--> statement-breakpoint
ALTER TABLE "edu_quiz" DROP COLUMN "facebook";--> statement-breakpoint
ALTER TABLE "edu_quiz" DROP COLUMN "has_social_media";--> statement-breakpoint
ALTER TABLE "edu_quiz" DROP COLUMN "commit_to_sharing";