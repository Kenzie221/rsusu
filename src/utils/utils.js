const dates = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
]

export const currentDateFormat = () => {
  const date = new Date();
  return `${date.getDate()} ${dates[date.getMonth()]} ${date.getFullYear()}`;
}


