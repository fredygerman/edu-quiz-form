import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(
  date: Date | string | number,
  opts: Intl.DateTimeFormatOptions = {}
) {
  return new Intl.DateTimeFormat("en-US", {
    month: opts.month ?? "long",
    day: opts.day ?? "numeric",
    year: opts.year ?? "numeric",
    ...opts,
  }).format(new Date(date))
}

/**
 * Stole this from the @radix-ui/primitive
 * @see https://github.com/radix-ui/primitives/blob/main/packages/core/primitive/src/primitive.tsx
 */
export function composeEventHandlers<E>(
  originalEventHandler?: (event: E) => void,
  ourEventHandler?: (event: E) => void,
  { checkForDefaultPrevented = true } = {}
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event)

    if (
      checkForDefaultPrevented === false ||
      !(event as unknown as Event).defaultPrevented
    ) {
      return ourEventHandler?.(event)
    }
  }
}

export function toTitleCase(str: string = "") {
  const withSpaces = str.replace(/([A-Z])/g, " $1").toLowerCase()
  return withSpaces
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .trim()
}

// util to format number to comma separated string
export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

// Function to check if a string is a UUID
export function isUUID(str: string) {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
  return uuidRegex.test(str)
}

// Function to generate combined title
export function generateCombinedTitle(pathname: string, pageTitle: string) {
  const pathParts = pathname.split("/")
  const lastPart = pathParts.pop()
  const dashboardIndex = pathParts.indexOf("dashboard")

  if (
    isUUID(lastPart || "") &&
    dashboardIndex !== -1 &&
    dashboardIndex + 1 < pathParts.length
  ) {
    return pathParts
      .slice(dashboardIndex + 1)
      .filter((part) => !isUUID(part))
      .map(toTitleCase)
      .join(" - ")
  } else if (dashboardIndex !== -1 && dashboardIndex + 1 < pathParts.length) {
    return pathParts
      .slice(dashboardIndex + 1)
      .concat(lastPart || "")
      .filter((part) => !isUUID(part))
      .map(toTitleCase)
      .join(" - ")
  }

  return toTitleCase(pageTitle || "")
}

export function generateFriendlyMemberNumber() {
  const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ" // Avoid O, I
  const numbers = "23456789" // Avoid 0, 1
  let letterPart = ""
  let numberPart = ""

  // Create the letter part 'ABE'
  for (let i = 0; i < 3; i++) {
    const letter = letters.charAt(Math.floor(Math.random() * letters.length))
    letterPart += letter
  }

  // Create the number part '1234'
  for (let i = 0; i < 4; i++) {
    const number = numbers.charAt(Math.floor(Math.random() * numbers.length))
    numberPart += number
  }

  // Combine parts with a dash in the center
  const formattedResult = letterPart + "-" + numberPart

  return formattedResult
}
