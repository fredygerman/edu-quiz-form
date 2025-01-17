import { sql } from "drizzle-orm"

async function clearTables() {
  console.log("🗑️  Clearing existing data...")
  // Clear all tables
  await sql`
    DELETE FROM edu_quiz;
  `
  console.log("✨ Tables cleared")
}
async function runSeed() {
  console.log("⏳ Running seed...")

  const start = Date.now()

  await clearTables()

  const end = Date.now()

  console.log(`✅ Seed completed in ${end - start}ms`)

  process.exit(0)
}

runSeed().catch((err) => {
  console.error("❌ Seed failed")
  console.error(err)
  process.exit(1)
})
