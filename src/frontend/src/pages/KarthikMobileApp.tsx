import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Home,
  Image,
  Info,
  Mail,
  MapPin,
  Phone,
  Quote,
  Wrench,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";

type Tab = "home" | "services" | "portfolio" | "about" | "contact";

const COLORS = {
  bg: "#F3EBDD",
  primary: "#1E3A2D",
  gold: "#B08A4A",
  text: "#2B2420",
  muted: "#6F655C",
  border: "#D9CBB7",
  cardBg: "#FAF6F0",
  cream: "#EDE2D1",
};

const TABS = [
  { id: "home" as Tab, label: "Home", Icon: Home },
  { id: "services" as Tab, label: "Services", Icon: Wrench },
  { id: "portfolio" as Tab, label: "Portfolio", Icon: Image },
  { id: "about" as Tab, label: "About", Icon: Info },
  { id: "contact" as Tab, label: "Contact", Icon: Phone },
];

const SERVICES = [
  {
    title: "Residential Design",
    description:
      "Personalized living spaces that reflect your unique personality and lifestyle — from intimate apartments to spacious homes.",
    icon: "🏠",
  },
  {
    title: "Commercial Design",
    description:
      "Inspiring workplaces and commercial environments that elevate brand identity and employee well-being.",
    icon: "🏢",
  },
  {
    title: "Design Consultation",
    description:
      "Expert guidance on materials, colours, and furnishings to bring your vision to life — one conversation at a time.",
    icon: "💬",
  },
];

const PORTFOLIO_ITEMS = [
  {
    image: "/assets/generated/portfolio-bedroom.dim_600x400.jpg",
    title: "Bedroom Retreat",
    category: "Residential",
  },
  {
    image: "/assets/generated/portfolio-kitchen.dim_600x400.jpg",
    title: "Modern Kitchen",
    category: "Residential",
  },
  {
    image: "/assets/generated/portfolio-office.dim_600x400.jpg",
    title: "Home Office",
    category: "Residential",
  },
  {
    image: "/assets/generated/portfolio-dining.dim_600x400.jpg",
    title: "Dining Room",
    category: "Residential",
  },
  {
    image: "/assets/generated/portfolio-bathroom.dim_600x400.jpg",
    title: "Spa Bathroom",
    category: "Wellness",
  },
  {
    image: "/assets/generated/portfolio-commercial.dim_600x400.jpg",
    title: "Commercial Office",
    category: "Commercial",
  },
  {
    image: "/assets/generated/portfolio-hospitality.dim_600x400.jpg",
    title: "Hotel Lobby",
    category: "Hospitality",
  },
  {
    image: "/assets/generated/portfolio-nature-friendly.dim_600x400.jpg",
    title: "Eco-Friendly Living",
    category: "Nature",
  },
  {
    image: "/assets/generated/portfolio-gardenia.dim_600x400.jpg",
    title: "Gardenia",
    category: "Nature",
  },
];

const TESTIMONIALS = [
  {
    name: "Balaji Prachur",
    location: "Ananthapur",
    quote:
      "Karthik designed a beautiful 3BHK house for us. Every room was thoughtfully planned and the final result exceeded our expectations.",
    initials: "BP",
  },
  {
    name: "Deepak Nath",
    location: "Bangalore",
    quote:
      "Our 3BHK duplex was transformed beyond imagination. Karthik's attention to detail and understanding of our needs made the whole process seamless.",
    initials: "DN",
  },
];

const HOME_STATS = [
  { value: "1 Year", label: "Experience" },
  { value: "3", label: "Projects Completed" },
  { value: "98%", label: "Satisfaction" },
];

const ABOUT_STATS = [
  { value: "1 Year", label: "of Excellence" },
  { value: "3", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
];

// ─── Home Tab ───────────────────────────────────────────────
function HomeTab({ onTabChange }: { onTabChange: (t: Tab) => void }) {
  return (
    <div className="flex flex-col min-h-full pb-4">
      {/* Hero */}
      <div
        className="relative overflow-hidden"
        style={{ height: "60vh", minHeight: 280 }}
      >
        <img
          src="/assets/generated/hero-living-room.dim_1400x800.jpg"
          alt="Luxury living room"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,12,8,0.22) 0%, rgba(20,12,8,0.68) 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end px-5 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-1 rounded-full px-3 py-1 mb-3"
              style={{ backgroundColor: "rgba(176,138,74,0.85)" }}
            >
              <MapPin size={10} color="#fff" />
              <span
                className="font-sans text-[10px] tracking-widest uppercase"
                style={{ color: "#fff" }}
              >
                Bengaluru
              </span>
            </div>
            <h1
              className="font-serif font-bold text-3xl leading-tight mb-2"
              style={{
                color: "#F3EBDD",
                textShadow: "0 2px 12px rgba(0,0,0,0.5)",
              }}
            >
              KARTHIK
              <br />
              <span style={{ color: COLORS.gold }}>INTERIORS</span>
            </h1>
            <p
              className="font-sans text-sm leading-relaxed mb-5"
              style={{ color: "#E8DECE" }}
            >
              Transform Your Space Into a Work of Art
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => onTabChange("portfolio")}
                className="flex-1 py-3 rounded-lg font-sans text-xs tracking-widest uppercase font-semibold"
                style={{ backgroundColor: COLORS.primary, color: "#fff" }}
                data-ocid="home.primary_button"
              >
                Explore Portfolio
              </button>
              <button
                type="button"
                onClick={() => onTabChange("contact")}
                className="flex-1 py-3 rounded-lg font-sans text-xs tracking-widest uppercase font-semibold"
                style={{ backgroundColor: COLORS.gold, color: "#fff" }}
                data-ocid="home.secondary_button"
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Services row */}
      <div className="px-4 pt-5">
        <p
          className="font-sans text-[10px] tracking-[0.35em] uppercase mb-3"
          style={{ color: COLORS.muted }}
        >
          Our Services
        </p>
        <div
          className="flex gap-3 overflow-x-auto pb-2"
          style={{ scrollbarWidth: "none" }}
        >
          {["Residential", "Commercial", "Consultation"].map((s) => (
            <button
              type="button"
              key={s}
              onClick={() => onTabChange("services")}
              className="flex-shrink-0 px-4 py-3 rounded-xl border font-sans text-xs font-medium whitespace-nowrap"
              style={{
                backgroundColor: COLORS.cardBg,
                borderColor: COLORS.border,
                color: COLORS.primary,
                minHeight: 44,
              }}
              data-ocid="home.secondary_button"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Stats 2×2 */}
      <div className="px-4 pt-5">
        <p
          className="font-sans text-[10px] tracking-[0.35em] uppercase mb-3"
          style={{ color: COLORS.muted }}
        >
          At a Glance
        </p>
        <div className="grid grid-cols-2 gap-3">
          {HOME_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl p-4 flex flex-col items-center text-center"
              style={{
                backgroundColor: COLORS.cream,
                border: `1px solid ${COLORS.border}`,
              }}
              data-ocid={`home.item.${i + 1}`}
            >
              <span
                className="font-serif text-2xl font-bold"
                style={{ color: COLORS.primary }}
              >
                {stat.value}
              </span>
              <span
                className="font-sans text-[10px] tracking-wide uppercase mt-1"
                style={{ color: COLORS.muted }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Services Tab ────────────────────────────────────────────
function ServicesTab({ onTabChange }: { onTabChange: (t: Tab) => void }) {
  return (
    <div className="flex flex-col min-h-full">
      <div className="px-4 pt-6 pb-4">
        <p
          className="font-sans text-[10px] tracking-[0.4em] uppercase mb-1"
          style={{ color: COLORS.gold }}
        >
          What We Offer
        </p>
        <h2
          className="font-serif text-3xl font-bold"
          style={{ color: COLORS.text }}
        >
          Our Services
        </h2>
      </div>

      <div className="px-4 flex flex-col gap-4 flex-1">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl p-5 border"
            style={{
              backgroundColor: COLORS.cardBg,
              borderColor: COLORS.border,
            }}
            data-ocid={`services.item.${i + 1}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: COLORS.cream }}
              >
                {s.icon}
              </div>
              <h3
                className="font-serif text-lg font-semibold"
                style={{ color: COLORS.text }}
              >
                {s.title}
              </h3>
            </div>
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: COLORS.muted }}
            >
              {s.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Sticky CTA */}
      <div
        className="sticky bottom-0 px-4 py-4"
        style={{ backgroundColor: COLORS.bg }}
      >
        <button
          type="button"
          onClick={() => onTabChange("contact")}
          className="w-full py-4 rounded-xl font-sans text-sm tracking-widest uppercase font-semibold"
          style={{
            backgroundColor: COLORS.primary,
            color: "#fff",
            minHeight: 44,
          }}
          data-ocid="services.primary_button"
        >
          Get a Free Quote
        </button>
      </div>
    </div>
  );
}

// ─── Portfolio Tab ───────────────────────────────────────────
const MOBILE_FILTERS = [
  "All",
  "Residential",
  "Commercial",
  "Hospitality",
  "Wellness",
  "Nature",
];

function PortfolioTab() {
  const [selected, setSelected] = useState<(typeof PORTFOLIO_ITEMS)[0] | null>(
    null,
  );
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="flex flex-col min-h-full">
      <div className="px-4 pt-6 pb-3">
        <p
          className="font-sans text-[10px] tracking-[0.4em] uppercase mb-1"
          style={{ color: COLORS.gold }}
        >
          Selected Works
        </p>
        <h2
          className="font-serif text-3xl font-bold mb-1"
          style={{ color: COLORS.text }}
        >
          Portfolio
        </h2>
        {/* Decorative line */}
        <div className="flex items-center gap-2 mb-3">
          <div
            className="h-px w-10"
            style={{ backgroundColor: COLORS.gold, opacity: 0.5 }}
          />
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: COLORS.gold }}
          />
          <div
            className="h-px w-10"
            style={{ backgroundColor: COLORS.gold, opacity: 0.5 }}
          />
        </div>
      </div>

      {/* Scrollable filter pills */}
      <div className="px-4 pb-3 overflow-x-auto no-scrollbar">
        <div className="flex gap-2 w-max">
          {MOBILE_FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              data-ocid="portfolio.tab"
              className="font-sans text-[10px] tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full border whitespace-nowrap transition-all duration-250"
              style={{
                backgroundColor:
                  activeFilter === filter ? COLORS.gold : "transparent",
                color: activeFilter === filter ? "#F3EBDD" : COLORS.muted,
                borderColor:
                  activeFilter === filter ? COLORS.gold : COLORS.border,
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 grid grid-cols-2 gap-3 pb-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.button
              type="button"
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.88, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
              onClick={() => setSelected(item)}
              className="relative overflow-hidden rounded-xl"
              style={{
                aspectRatio: "3/2",
                boxShadow: "0 3px 14px rgba(43,36,32,0.12)",
              }}
              data-ocid={`portfolio.item.${i + 1}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Polished gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(175deg, transparent 40%, rgba(20,42,30,0.82) 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-2.5 py-2">
                <p
                  className="font-sans text-[9px] tracking-[0.25em] uppercase mb-0.5"
                  style={{ color: COLORS.gold }}
                >
                  {item.category}
                </p>
                <p
                  className="font-sans text-[10px] font-semibold leading-tight"
                  style={{ color: "#F3EBDD" }}
                >
                  {item.title}
                </p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
            onClick={() => setSelected(null)}
            data-ocid="portfolio.modal"
          >
            <div
              role="presentation"
              className="relative w-full max-w-sm mx-4"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                data-ocid="portfolio.close_button"
              >
                <X size={18} color="#fff" />
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full rounded-2xl object-cover"
                style={{ maxHeight: "70vh" }}
              />
              <div className="mt-4 text-center">
                <p
                  className="font-sans text-[9px] tracking-[0.3em] uppercase mb-1"
                  style={{ color: COLORS.gold }}
                >
                  {selected.category}
                </p>
                <p
                  className="font-serif text-lg font-semibold"
                  style={{ color: "#fff" }}
                >
                  {selected.title}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── About Tab ───────────────────────────────────────────────
function AboutTab() {
  return (
    <div className="flex flex-col min-h-full pb-6">
      <div className="px-4 pt-6 pb-2">
        <p
          className="font-sans text-[10px] tracking-[0.4em] uppercase mb-1"
          style={{ color: COLORS.gold }}
        >
          Our Story
        </p>
        <h2
          className="font-serif text-3xl font-bold mb-3"
          style={{ color: COLORS.text }}
        >
          About Us
        </h2>
        <div
          className="inline-flex items-center gap-1 rounded-full px-3 py-1 mb-4"
          style={{
            backgroundColor: COLORS.cream,
            border: `1px solid ${COLORS.border}`,
          }}
        >
          <MapPin size={11} color={COLORS.gold} />
          <span
            className="font-sans text-xs font-medium"
            style={{ color: COLORS.gold }}
          >
            Bengaluru, Karnataka
          </span>
        </div>
        <p
          className="font-sans text-sm leading-relaxed mb-3"
          style={{ color: COLORS.muted }}
        >
          Founded in 2025 in Bengaluru, Karthik Interiors was born from a belief
          that exceptional design is not a luxury — it is a necessity. Our
          studio blends classical sensibilities with modern functionality,
          creating environments that are as livable as they are beautiful.
        </p>
        <p
          className="font-sans text-sm leading-relaxed"
          style={{ color: COLORS.muted }}
        >
          Every project begins with listening. We translate your insights into
          spaces that resonate with your identity — from the first sketch to the
          final flourish.
        </p>
      </div>

      {/* Stats */}
      <div className="px-4 pt-4">
        <div className="grid grid-cols-2 gap-3 mb-6">
          {ABOUT_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl p-4 flex flex-col items-center text-center"
              style={{
                backgroundColor: COLORS.cream,
                border: `1px solid ${COLORS.border}`,
              }}
              data-ocid={`about.item.${i + 1}`}
            >
              <span
                className="font-serif text-2xl font-bold"
                style={{ color: COLORS.primary }}
              >
                {stat.value}
              </span>
              <span
                className="font-sans text-[10px] tracking-wide uppercase mt-1"
                style={{ color: COLORS.muted }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="px-4">
        <p
          className="font-sans text-[10px] tracking-[0.4em] uppercase mb-1"
          style={{ color: COLORS.gold }}
        >
          Client Stories
        </p>
        <h3
          className="font-serif text-2xl font-bold mb-4"
          style={{ color: COLORS.text }}
        >
          Testimonials
        </h3>
        <div className="flex flex-col gap-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              className="rounded-2xl p-5 border"
              style={{
                backgroundColor: COLORS.cardBg,
                borderColor: COLORS.border,
              }}
              data-ocid={`about.item.${i + 5}`}
            >
              <Quote size={20} color={COLORS.gold} className="mb-3" />
              <p
                className="font-sans text-sm leading-relaxed mb-4"
                style={{ color: COLORS.muted }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-serif flex-shrink-0"
                  style={{ backgroundColor: COLORS.primary, color: "#F3EBDD" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="font-sans text-sm font-semibold"
                    style={{ color: COLORS.text }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="font-sans text-xs"
                    style={{ color: COLORS.muted }}
                  >
                    {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Contact Tab ─────────────────────────────────────────────
function ContactTab() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    toast.success("Inquiry sent! We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", phone: "", projectType: "", message: "" });
  };

  return (
    <div className="flex flex-col min-h-full pb-6">
      <div className="px-4 pt-6 pb-4">
        <p
          className="font-sans text-[10px] tracking-[0.4em] uppercase mb-1"
          style={{ color: COLORS.gold }}
        >
          Let&apos;s Connect
        </p>
        <h2
          className="font-serif text-3xl font-bold mb-5"
          style={{ color: COLORS.text }}
        >
          Contact Us
        </h2>

        {/* Contact info */}
        <div
          className="rounded-2xl p-4 mb-5 flex flex-col gap-3"
          style={{
            backgroundColor: COLORS.cream,
            border: `1px solid ${COLORS.border}`,
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: COLORS.primary }}
            >
              <MapPin size={14} color="#fff" />
            </div>
            <span className="font-sans text-sm" style={{ color: COLORS.muted }}>
              Serving Bengaluru &amp; surrounding areas
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: COLORS.primary }}
            >
              <Phone size={14} color="#fff" />
            </div>
            <a
              href="tel:+919392305081"
              className="font-sans text-sm font-medium"
              style={{ color: COLORS.primary }}
              data-ocid="contact.link"
            >
              +91 93923 05081
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: COLORS.primary }}
            >
              <Mail size={14} color="#fff" />
            </div>
            <a
              href="mailto:kchowdary822@gmail.com"
              className="font-sans text-sm font-medium"
              style={{ color: COLORS.primary }}
              data-ocid="contact.link"
            >
              kchowdary822@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#25D366" }}
            >
              <SiWhatsapp size={14} color="#fff" />
            </div>
            <a
              href="https://wa.me/919392305081"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-medium"
              style={{ color: "#25D366" }}
              data-ocid="contact.link"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          data-ocid="contact.card"
        >
          <div>
            <Label
              htmlFor="m-name"
              className="font-sans text-xs tracking-wide uppercase mb-1 block"
              style={{ color: COLORS.muted }}
            >
              Full Name
            </Label>
            <Input
              id="m-name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              required
              style={{
                borderColor: COLORS.border,
                backgroundColor: "#fff",
                fontSize: 16,
              }}
              data-ocid="contact.input"
            />
          </div>
          <div>
            <Label
              htmlFor="m-email"
              className="font-sans text-xs tracking-wide uppercase mb-1 block"
              style={{ color: COLORS.muted }}
            >
              Email Address
            </Label>
            <Input
              id="m-email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) =>
                setForm((p) => ({ ...p, email: e.target.value }))
              }
              required
              style={{
                borderColor: COLORS.border,
                backgroundColor: "#fff",
                fontSize: 16,
              }}
              data-ocid="contact.input"
            />
          </div>
          <div>
            <Label
              htmlFor="m-phone"
              className="font-sans text-xs tracking-wide uppercase mb-1 block"
              style={{ color: COLORS.muted }}
            >
              Phone Number
            </Label>
            <Input
              id="m-phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={(e) =>
                setForm((p) => ({ ...p, phone: e.target.value }))
              }
              style={{
                borderColor: COLORS.border,
                backgroundColor: "#fff",
                fontSize: 16,
              }}
              data-ocid="contact.input"
            />
          </div>
          <div>
            <Label
              htmlFor="m-project"
              className="font-sans text-xs tracking-wide uppercase mb-1 block"
              style={{ color: COLORS.muted }}
            >
              Project Type
            </Label>
            <Select
              value={form.projectType}
              onValueChange={(v) => setForm((p) => ({ ...p, projectType: v }))}
            >
              <SelectTrigger
                style={{ borderColor: COLORS.border, backgroundColor: "#fff" }}
                data-ocid="contact.select"
              >
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="consultation">Consultation</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label
              htmlFor="m-message"
              className="font-sans text-xs tracking-wide uppercase mb-1 block"
              style={{ color: COLORS.muted }}
            >
              Your Message
            </Label>
            <Textarea
              id="m-message"
              placeholder="Tell us about your project..."
              rows={4}
              value={form.message}
              onChange={(e) =>
                setForm((p) => ({ ...p, message: e.target.value }))
              }
              required
              className="resize-none"
              style={{
                borderColor: COLORS.border,
                backgroundColor: "#fff",
                fontSize: 16,
              }}
              data-ocid="contact.textarea"
            />
          </div>
          <Button
            type="submit"
            disabled={submitting}
            className="w-full font-sans text-sm tracking-widest uppercase py-4 h-auto"
            style={{
              backgroundColor: COLORS.primary,
              color: "#fff",
              minHeight: 44,
            }}
            data-ocid="contact.submit_button"
          >
            {submitting ? "Sending..." : "Send Inquiry"}
          </Button>
        </form>
      </div>
    </div>
  );
}

// ─── Main App ────────────────────────────────────────────────
export default function KarthikMobileApp() {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [prevTab, setPrevTab] = useState<Tab>("home");

  const handleTabChange = (tab: Tab) => {
    setPrevTab(activeTab);
    setActiveTab(tab);
  };

  const tabOrder: Tab[] = ["home", "services", "portfolio", "about", "contact"];
  const dir = tabOrder.indexOf(activeTab) >= tabOrder.indexOf(prevTab) ? 1 : -1;

  return (
    // Outer shell — dark phone surround on desktop
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      {/* Phone frame */}
      <div
        className="relative w-full flex flex-col overflow-hidden"
        style={{
          maxWidth: 390,
          minHeight: "100svh",
          height: "100svh",
          backgroundColor: COLORS.bg,
          boxShadow: "0 0 0 8px #1a1a1a, 0 0 60px rgba(0,0,0,0.8)",
          borderRadius: "clamp(0px, calc((100vw - 390px) * 100), 32px)",
        }}
      >
        {/* Scrollable content area */}
        <div
          className="flex-1 overflow-y-auto overflow-x-hidden"
          style={{ paddingBottom: 80 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: dir * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -30 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="w-full min-h-full"
            >
              {activeTab === "home" && (
                <HomeTab onTabChange={handleTabChange} />
              )}
              {activeTab === "services" && (
                <ServicesTab onTabChange={handleTabChange} />
              )}
              {activeTab === "portfolio" && <PortfolioTab />}
              {activeTab === "about" && <AboutTab />}
              {activeTab === "contact" && <ContactTab />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* WhatsApp FAB */}
        <a
          href="https://wa.me/919392305081"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute flex items-center justify-center rounded-full shadow-lg"
          style={{
            width: 48,
            height: 48,
            backgroundColor: "#25D366",
            bottom: 88,
            right: 16,
            zIndex: 20,
          }}
          aria-label="WhatsApp"
          data-ocid="contact.link"
        >
          <SiWhatsapp size={22} color="#fff" />
        </a>

        {/* Bottom Tab Bar */}
        <nav
          className="absolute bottom-0 left-0 right-0 flex items-center justify-around border-t"
          style={{
            backgroundColor: COLORS.primary,
            borderColor: "rgba(255,255,255,0.08)",
            height: 68,
            paddingBottom: "env(safe-area-inset-bottom, 0px)",
          }}
          aria-label="Main navigation"
          data-ocid="nav.panel"
        >
          {TABS.map(({ id, label, Icon }) => {
            const isActive = activeTab === id;
            return (
              <button
                type="button"
                key={id}
                onClick={() => handleTabChange(id)}
                className="flex flex-col items-center justify-center gap-1 flex-1"
                style={{
                  minHeight: 44,
                  color: isActive ? COLORS.gold : "#D9CBB7",
                }}
                aria-label={label}
                data-ocid="nav.tab"
              >
                <Icon
                  size={22}
                  color={isActive ? COLORS.gold : "#D9CBB7"}
                  strokeWidth={isActive ? 2.2 : 1.6}
                />
                <span
                  className="font-sans text-[9px] tracking-wide uppercase"
                  style={{
                    color: isActive ? COLORS.gold : "#D9CBB7",
                    fontWeight: isActive ? 700 : 400,
                  }}
                >
                  {label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 rounded-t-full"
                    style={{
                      width: 32,
                      height: 3,
                      backgroundColor: COLORS.gold,
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
