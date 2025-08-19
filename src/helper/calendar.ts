import type { CalendarType, localeType } from "@/types";
import dayjs, { Dayjs } from "dayjs";
import arraySupport from "dayjs/plugin/arraySupport";
import isLeapYear from "dayjs/plugin/isLeapYear";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isToday from "dayjs/plugin/isToday";
import isTomorrow from "dayjs/plugin/isTomorrow";
import localeData from "dayjs/plugin/localeData";
import updateLocale from "dayjs/plugin/updateLocale";
import weekday from "dayjs/plugin/weekday";
import jalaliday from "jalali-plugin-dayjs";

dayjs.extend(jalaliday);
dayjs.calendar("jalali");
dayjs.extend(localeData).locale("fa");
dayjs.extend(weekday);
dayjs.extend(isToday);
dayjs.extend(updateLocale);
dayjs.extend(isLeapYear);
dayjs.extend(isTomorrow);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(arraySupport);

// dayjs.locale(fa);

dayjs.updateLocale("fa", {
  months: [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ],
  // weekdaysMin: ["Su", "دو", "Tu", "We", "Th", "Fr", "Sa"],
  meridiem: (hour: number) => {
    // OPTIONAL, AM/PM
    return hour > 12 ? "بعد از ظهر" : "قبل از ظهر";
  },
});

export const getCurrentYear = (type = "fa"): number | string =>
  dayjs()
    .calendar(type === "fa" ? "jalali" : "gregory")
    .year();

export const toJalaliDate = (
  date: string | number | Dayjs,
  format = "YYYY/MM/DD"
): string => dayjs(date).format(format);

export const getDate = (
  calender: CalendarType,
  locale: localeType,
  format: string
) => {
  return dayjs().calendar(calender).locale(locale).format(format);
};

export const convertToJalaliLast = (date?: string | number | Dayjs) => {
  const now = dayjs();
  const startOfWeek = now.startOf("week");
  const endOfWeek = now.endOf("week");
  const isTomorrow = dayjs(date).isTomorrow();
  const isToday = dayjs(date).isToday();
  const targetDate = dayjs(date);

  if (isTomorrow) {
    return "فردا";
  }
  if (isToday) {
    return "امروز";
  }
  if (
    targetDate.isSameOrAfter(startOfWeek) &&
    targetDate.isSameOrBefore(endOfWeek)
  ) {
    return targetDate.format("dddd");
  }
  return dayjs(date).calendar("jalali").format("DD MMMM");
};

export const convertDate = (
  date: number | Dayjs,
  calendar: CalendarType,
  format: string
) => {
  return dayjs(date, "h:mm A").calendar(calendar).format(format);
};

export const timeDate = (date?: number | string | Dayjs) => {
  return dayjs().isAfter(dayjs(date))
    ? dayjs(date).calendar("gregory").format("DD/MM/YYYY")
    : dayjs(date).calendar("gregory").format("HH:mm");
};

export const getNameJalali = (
  date: number | string | Dayjs,
  calendar: CalendarType,
  locale: localeType,
  format: string
) =>
  dayjs(date, { jalali: true })
    .calendar(calendar)
    .locale(locale)
    .format(format);

export const calculateTimePassed = (date?: string | Dayjs | number) => {
  const now = dayjs();
  const pastDate = dayjs(date);

  const diffInSeconds = now.diff(pastDate, "second");

  if (diffInSeconds < 60) {
    return `${diffInSeconds} ثانیه پیش.`;
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} دقیقه پیش.`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} ساعت پیش.`;
  } else if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} روز پیش.`;
  } else if (diffInSeconds < 31536000) {
    const months = Math.floor(diffInSeconds / 2592000);
    return `${months} ماه پیش.`;
  } else {
    const years = Math.floor(diffInSeconds / 31536000);
    return `${years} سال پیش.`;
  }
};

export const getConvertDate = (
  date?: string | number | Dayjs,
  format?: string,
  lng: string = "fa"
) => {
  return dayjs(date)
    .calendar(lng === "fa" ? "jalali" : "gregory")
    .locale(lng)
    .format(format ?? "YYYY/MM/DD");
};


export const getYear = (lng: string) => {
  return dayjs().calendar(lng === "fa" ? "jalali" : "gregory").year();
}