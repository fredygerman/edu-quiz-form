import {
  createSearchParamsCache,
  parseAsInteger,
  parseAsString,
  parseAsStringEnum,
} from "nuqs/server"

export const membersSearchParamsCache = createSearchParamsCache({
  page: parseAsInteger.withDefault(1),
  per_page: parseAsInteger.withDefault(10),
  sort: parseAsStringEnum([
    "created_at.desc",
    "created_at.asc",
    "updated_at.desc",
    "updated_at.asc",
  ]).withDefault("created_at.desc"),
  fullName: parseAsString.withDefault(""),
  gender: parseAsString.withDefault(""),
  maritalStatus: parseAsString.withDefault(""),
  occupation: parseAsString.withDefault(""),
  from: parseAsString.withDefault(""),
  to: parseAsString.withDefault(""),
})

export type GetMembersSchema = Awaited<
  ReturnType<typeof membersSearchParamsCache.parse>
>

export const eduQuizSearchParamsCache = createSearchParamsCache({
  page: parseAsInteger.withDefault(1),
  per_page: parseAsInteger.withDefault(10),
  sort: parseAsStringEnum([
    "created_at.desc",
    "created_at.asc",
    "updated_at.desc",
    "updated_at.asc",
  ]).withDefault("created_at.desc"),
  firstName: parseAsString.withDefault(""),
  lastName: parseAsString.withDefault(""),
  dateOfBirth: parseAsString.withDefault(""),
  email: parseAsString.withDefault(""),
})
