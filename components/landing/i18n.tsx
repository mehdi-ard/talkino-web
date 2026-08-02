"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "en" | "fa";

const dictionaries = {
  en: {
    navigation: [
      { label: "Features", href: "#features" },
      { label: "Solutions", href: "#solutions" },
      { label: "Talkino AI", href: "#ai" },
      { label: "Pricing", href: "#pricing" },
    ],
    header: { navigation: "Main navigation", home: "Talkino home", signIn: "Sign in", getTalkino: "Get Talkino", menu: "Menu", openMenu: "Open menu", getStarted: "Get started" },
    hero: { eyebrow: "Built for teams in motion", title: "Where great teams", titleAccent: "find their flow.", copy: "One calm, intelligent space for conversations, meetings, and the work that happens between them.", start: "Start for free", demo: "See how it works", microcopy: "Free for teams up to 10 · No credit card", approved: "Launch plan approved", approvedMeta: "Product · just now", sync: "Design sync", live: "Live now", secure: "Secure", imageAlt: "Talkino team workspace showing organized conversations" },
    trust: "Trusted by focused teams at",
    features: { kicker: "EVERYTHING IN ONE PLACE", title: "Less noise.", titleSecond: "More momentum.", copy: "Talkino brings your team's communication into one thoughtfully designed workspace, so everyone can focus on the work that matters.", explore: "Explore feature", learnMore: "Learn more about", items: [
      { icon: "↗", title: "Focused messaging", text: "Keep every decision, file, and conversation in the right place—with threads that stay useful." },
      { icon: "◉", title: "Meet without friction", text: "Jump into crisp, low-latency calls from any conversation. No links, no context switching." },
      { icon: "✦", title: "AI that gets the context", text: "Summarize busy channels, surface decisions, and turn discussions into clear next steps." },
    ] },
    conversation: { kicker: "CONVERSATIONS, REFINED", title: "Every conversation", titleSecond: "has a place.", copy: "Channels stay focused. Threads keep context close. Smart notifications make sure you see what matters—without pulling you out of flow.", bullets: ["Deeply organized threads", "Powerful, instant search", "Notifications on your terms"], explore: "Explore messaging", search: "Search anything", imageAlt: "A focused conversation inside Talkino" },
    ai: { kicker: "TALKINO AI", title: "Catch up in seconds.", titleAccent: "Move forward with clarity.", copy: "Talkino AI understands the conversations around your work. It finds the signal, captures decisions, and gives your team time back.", ask: "ASK TALKINO", prompt: "What did I miss in #product-launch?", stats: [["12 hrs", "saved per person / month"], ["4.8×", "faster team catch-up"], ["92%", "less time searching"]] },
    benefits: { kicker: "BUILT DIFFERENT", title: "Made for modern work.", copy: "Thoughtful by default. Powerful when you need it. Secure at every layer.", items: [
      { icon: "⌁", title: "Fast by design", text: "Instant on every device, even when the connection isn't." },
      { icon: "◇", title: "Private by default", text: "Enterprise-grade security with end-to-end encryption." },
      { icon: "∞", title: "Works everywhere", text: "Mac, Windows, iOS, Android, and your favorite browser." },
      { icon: "☼", title: "Human support", text: "Real people, ready to help whenever your team needs us." },
    ] },
    cta: { title: "Your team's best work", titleSecond: "starts here.", copy: "Bring your people, conversations, and ideas together.", button: "Get started for free", note: "No credit card required · Set up in under 2 minutes" },
    footer: { tagline: "Communication that moves work forward.", columns: [{ title: "Product", links: ["Features", "Security", "Enterprise", "Download"] }, { title: "Company", links: ["About", "Careers", "Blog", "Contact"] }, { title: "Resources", links: ["Help center", "Community", "Developers", "Status"] }], rights: "© 2026 Talkino. All rights reserved.", privacy: "Privacy", terms: "Terms" },
  },
  fa: {
    navigation: [
      { label: "امکانات", href: "#features" },
      { label: "راهکارها", href: "#solutions" },
      { label: "هوش مصنوعی تاکینو", href: "#ai" },
      { label: "تعرفه‌ها", href: "#pricing" },
    ],
    header: { navigation: "منوی اصلی", home: "خانه تاکینو", signIn: "ورود", getTalkino: "دریافت تاکینو", menu: "منو", openMenu: "باز کردن منو", getStarted: "شروع کنید" },
    hero: { eyebrow: "ساخته‌شده برای تیم‌های رو به جلو", title: "تیم‌های موفق اینجا", titleAccent: "به اوج می‌رسند.", copy: "فضایی آرام و هوشمند برای گفتگوها، جلسه‌ها و تمام کارهایی که میان آن‌ها انجام می‌شود.", start: "رایگان شروع کنید", demo: "نحوه کار را ببینید", microcopy: "رایگان برای تیم‌های تا ۱۰ نفر · بدون نیاز به کارت بانکی", approved: "برنامه انتشار تأیید شد", approvedMeta: "محصول · همین حالا", sync: "هماهنگی طراحی", live: "اکنون زنده", secure: "امن", imageAlt: "محیط کار تیمی تاکینو با گفتگوهای منظم" },
    trust: "مورد اعتماد تیم‌های متمرکز در",
    features: { kicker: "همه‌چیز در یک فضا", title: "همهمه کمتر.", titleSecond: "پیشرفت بیشتر.", copy: "تاکینو ارتباطات تیم شما را در یک فضای کاری خوش‌ساخت گرد هم می‌آورد تا همه روی کارهای مهم تمرکز کنند.", explore: "مشاهده قابلیت", learnMore: "اطلاعات بیشتر درباره", items: [
      { icon: "↗", title: "پیام‌رسانی متمرکز", text: "هر تصمیم، فایل و گفتگو را با رشته‌هایی کاربردی در جای درست نگه دارید." },
      { icon: "◉", title: "جلسه بدون دردسر", text: "از دل هر گفتگو وارد تماس باکیفیت و سریع شوید؛ بدون لینک و جابه‌جایی بین ابزارها." },
      { icon: "✦", title: "هوش مصنوعی آگاه از زمینه", text: "کانال‌های شلوغ را خلاصه کنید، تصمیم‌ها را بیابید و گفتگوها را به گام‌های روشن تبدیل کنید." },
    ] },
    conversation: { kicker: "گفتگوهای منظم و دقیق", title: "هر گفتگو", titleSecond: "جای خودش را دارد.", copy: "کانال‌ها متمرکز می‌مانند، رشته‌ها زمینه را حفظ می‌کنند و اعلان‌های هوشمند فقط آنچه مهم است به شما نشان می‌دهند.", bullets: ["رشته‌های کاملاً منظم", "جستجوی قدرتمند و فوری", "اعلان‌ها مطابق انتخاب شما"], explore: "مشاهده پیام‌رسانی", search: "جستجو در همه‌چیز", imageAlt: "یک گفتگوی متمرکز در تاکینو" },
    ai: { kicker: "هوش مصنوعی تاکینو", title: "در چند ثانیه باخبر شوید.", titleAccent: "با اطمینان پیش بروید.", copy: "هوش مصنوعی تاکینو گفتگوهای پیرامون کار شما را می‌فهمد، نکات اصلی و تصمیم‌ها را پیدا می‌کند و زمان را به تیم شما برمی‌گرداند.", ask: "از تاکینو بپرسید", prompt: "در کانال انتشار محصول چه چیزی را از دست دادم؟", stats: [["۱۲ ساعت", "صرفه‌جویی ماهانه برای هر نفر"], ["۴٫۸ برابر", "مرور سریع‌تر کار تیم"], ["۹۲٪", "زمان کمتر برای جستجو"]] },
    benefits: { kicker: "متفاوت ساخته شده", title: "برای کار مدرن.", copy: "از ابتدا سنجیده، هنگام نیاز قدرتمند و در همه لایه‌ها امن.", items: [
      { icon: "⌁", title: "سریع از پایه", text: "روی هر دستگاهی فوری است، حتی وقتی اتصال اینترنت پایدار نیست." },
      { icon: "◇", title: "حریم خصوصی پیش‌فرض", text: "امنیت سازمانی با رمزنگاری سرتاسری." },
      { icon: "∞", title: "همه‌جا در دسترس", text: "مک، ویندوز، iOS، اندروید و مرورگر محبوب شما." },
      { icon: "☼", title: "پشتیبانی انسانی", text: "آدم‌های واقعی، هر زمان که تیم شما نیاز داشته باشد آماده کمک‌اند." },
    ] },
    cta: { title: "بهترین کار تیم شما", titleSecond: "از اینجا شروع می‌شود.", copy: "آدم‌ها، گفتگوها و ایده‌هایتان را کنار هم بیاورید.", button: "رایگان شروع کنید", note: "بدون نیاز به کارت بانکی · راه‌اندازی در کمتر از ۲ دقیقه" },
    footer: { tagline: "ارتباطاتی که کار را جلو می‌برد.", columns: [{ title: "محصول", links: ["امکانات", "امنیت", "سازمانی", "دانلود"] }, { title: "شرکت", links: ["درباره ما", "فرصت‌های شغلی", "وبلاگ", "تماس"] }, { title: "منابع", links: ["مرکز راهنما", "جامعه کاربران", "توسعه‌دهندگان", "وضعیت سرویس"] }], rights: "© ۲۰۲۶ تاکینو. همه حقوق محفوظ است.", privacy: "حریم خصوصی", terms: "شرایط استفاده" },
  },
} as const;

export type Dictionary = (typeof dictionaries)["en"] | (typeof dictionaries)["fa"];

const LanguageContext = createContext<{ locale: Locale; dictionary: Dictionary; setLocale: (locale: Locale) => void } | null>(null);

export function LanguageProvider({ initialLocale, children }: { initialLocale: Locale; children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
  }, [locale]);

  const value = useMemo(() => ({ locale, dictionary: dictionaries[locale], setLocale: (next: Locale) => {
    document.cookie = `talkino-locale=${next}; path=/; max-age=31536000; samesite=lax`;
    setLocale(next);
  } }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
