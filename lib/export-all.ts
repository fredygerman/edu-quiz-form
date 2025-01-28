export function exportAllEduQuizzes(data: any[]) {
  if (!data.length) {
    console.log("No data to export")
    return
  }
  console.log("Exporting data:", data)
  const headers = Object.keys(data[0])
  const csvContent = [
    headers.join(","),
    ...data.map((item) =>
      headers
        .map((header) => {
          const value = item[header]
          return typeof value === "string"
            ? `"${value.replace(/"/g, '""')}"`
            : value
        })
        .join(",")
    ),
  ].join("\n")

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.setAttribute("href", url)
  link.setAttribute("download", "all_edu_quizzes.csv")
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
