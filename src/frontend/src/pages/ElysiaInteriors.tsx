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
  Building2,
  ChevronDown,
  Home,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Quote,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { SiPinterest, SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Home,
    title: "Residential Design",
    description:
      "We craft personalized living spaces that reflect your unique personality and lifestyle, from intimate apartments to sprawling estates.",
  },
  {
    icon: Building2,
    title: "Commercial Design",
    description:
      "Transforming workplaces and commercial spaces into inspiring environments that elevate brand identity and employee well-being.",
  },
  {
    icon: MessageSquare,
    title: "Design Consultation",
    description:
      "Expert guidance and creative direction to bring your vision to life, with tailored advice on materials, colours, and furnishings.",
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
    quote:
      "Karthik Interiors transformed our home into a sanctuary. Every detail was considered, every material chosen with care. The result exceeded every expectation we had.",
    name: "Priya Sharma",
    title: "Homeowner, Indiranagar, Bengaluru",
    initials: "PS",
  },
  {
    quote:
      "Working with Karthik on our Bengaluru headquarters was a revelation. They understood our brand identity instantly and translated it into a workspace our team genuinely loves.",
    name: "Ravi Menon",
    title: "CEO, TechVentures, Bengaluru",
    initials: "RM",
  },
];

const STATS = [
  { value: "150+", label: "Projects Completed" },
  { value: "12+", label: "Years of Excellence" },
  { value: "98%", label: "Client Satisfaction" },
];

const PORTFOLIO_FILTERS = [
  "All",
  "Residential",
  "Commercial",
  "Hospitality",
  "Wellness",
  "Nature",
];

function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-24"
      style={{ backgroundColor: "#F3EBDD" }}
      data-ocid="portfolio.section"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="font-sans text-xs tracking-[0.4em] uppercase mb-3"
            style={{ color: "#B08A4A" }}
          >
            Selected Works
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#2B2420" }}
          >
            Portfolio Gallery
          </h2>
          {/* Decorative gold line */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="h-px w-16"
              style={{ backgroundColor: "#B08A4A", opacity: 0.4 }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#B08A4A" }}
            />
            <div
              className="h-px w-16"
              style={{ backgroundColor: "#B08A4A", opacity: 0.4 }}
            />
          </div>
          <p
            className="font-sans text-sm max-w-xl mx-auto"
            style={{ color: "#6F655C" }}
          >
            Each project is a testament to our commitment to excellence, crafted
            with meticulous attention to detail and a deep understanding of our
            clients' vision.
          </p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {PORTFOLIO_FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              data-ocid="portfolio.tab"
              className="font-sans text-xs tracking-[0.2em] uppercase px-5 py-2 rounded-full border transition-all duration-300"
              style={{
                backgroundColor:
                  activeFilter === filter ? "#B08A4A" : "transparent",
                color: activeFilter === filter ? "#F3EBDD" : "#6F655C",
                borderColor: activeFilter === filter ? "#B08A4A" : "#D9CBB7",
              }}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                style={{
                  aspectRatio: "3/2",
                  boxShadow: "0 4px 20px rgba(43,36,32,0.10)",
                }}
                data-ocid={`portfolio.item.${i + 1}`}
              >
                {/* Image with zoom */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gold border highlight on hover */}
                <div
                  className="absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 0 0px #B08A4A",
                  }}
                />
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 0 2px #B08A4A",
                  }}
                />

                {/* Overlay slides up from bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 flex flex-col items-start px-5 py-5 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(30,58,45,0.92) 60%, transparent 100%)",
                  }}
                >
                  <span
                    className="font-sans text-[10px] tracking-[0.35em] uppercase mb-1"
                    style={{ color: "#B08A4A" }}
                  >
                    {item.category}
                  </span>
                  <h3
                    className="font-serif text-lg font-semibold leading-tight"
                    style={{ color: "#F3EBDD" }}
                  >
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default function ElysiaInteriors() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    toast.success("Inquiry sent! We'll be in touch within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F3EBDD" }}>
      {/* ─────────────── NAVIGATION ─────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 shadow-xs"
        style={{ backgroundColor: "#EDE2D1" }}
        data-ocid="nav.panel"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <button
            type="button"
            onClick={() => scrollTo("#home")}
            className="flex flex-col leading-none text-left"
            aria-label="Go to home"
            data-ocid="nav.link"
          >
            <span
              className="font-serif font-bold text-2xl tracking-tight"
              style={{ color: "#1E3A2D" }}
            >
              KARTHIK
            </span>
            <span
              className="font-sans text-[10px] tracking-[0.35em] uppercase"
              style={{ color: "#6F655C" }}
            >
              INTERIORS
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="nav-link font-sans text-sm uppercase tracking-widest transition-colors"
                style={{ color: "#2B2420" }}
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <Button
            onClick={() => scrollTo("#contact")}
            className="hidden md:inline-flex font-sans text-xs tracking-widest uppercase"
            style={{ backgroundColor: "#1E3A2D", color: "#fff" }}
            data-ocid="nav.primary_button"
          >
            Get in Touch
          </Button>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileMenuOpen ? (
              <X size={24} style={{ color: "#2B2420" }} />
            ) : (
              <Menu size={24} style={{ color: "#2B2420" }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
              style={{ backgroundColor: "#EDE2D1" }}
              data-ocid="nav.modal"
            >
              <div
                className="px-6 py-4 flex flex-col gap-4 border-t"
                style={{ borderColor: "#D9CBB7" }}
              >
                {NAV_LINKS.map((link) => (
                  <button
                    type="button"
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className="font-sans text-sm uppercase tracking-widest text-left py-2"
                    style={{ color: "#2B2420" }}
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollTo("#contact")}
                  className="font-sans text-xs tracking-widest uppercase mt-2"
                  style={{ backgroundColor: "#1E3A2D", color: "#fff" }}
                  data-ocid="nav.primary_button"
                >
                  Get in Touch
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ─────────────── HERO ─────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20"
        data-ocid="hero.section"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-living-room.dim_1400x800.jpg')",
          }}
          aria-hidden
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(30,20,16,0.72) 0%, rgba(30,20,16,0.35) 70%, rgba(30,20,16,0.1) 100%)",
          }}
          aria-hidden
        />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={14} style={{ color: "#D9CBB7" }} />
              <p
                className="font-sans text-xs tracking-[0.4em] uppercase"
                style={{ color: "#D9CBB7" }}
              >
                Bengaluru &bull; Luxury Interior Design
              </p>
            </div>
            <h1
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-shadow-hero mb-6"
              style={{ color: "#F3EBDD" }}
            >
              Transform Your Space Into a Work of Art
            </h1>
            <p
              className="font-sans text-base md:text-lg mb-10 leading-relaxed"
              style={{ color: "#D9CBB7" }}
            >
              We design interiors that tell your story — blending timeless
              elegance with contemporary craftsmanship for spaces you&apos;ll
              love for a lifetime.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollTo("#portfolio")}
                size="lg"
                className="font-sans text-sm tracking-widest uppercase px-8 py-3 h-auto"
                style={{ backgroundColor: "#1E3A2D", color: "#fff" }}
                data-ocid="hero.primary_button"
              >
                Explore Our Work
              </Button>
              <Button
                onClick={() => scrollTo("#contact")}
                size="lg"
                className="font-sans text-sm tracking-widest uppercase px-8 py-3 h-auto border-0"
                style={{ backgroundColor: "#B08A4A", color: "#fff" }}
                data-ocid="hero.secondary_button"
              >
                Book Consultation
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
          aria-hidden
        >
          <ChevronDown style={{ color: "#D9CBB7" }} size={28} />
        </motion.div>
      </section>

      {/* ─────────────── SERVICES ─────────────── */}
      <section
        id="services"
        className="py-24"
        style={{ backgroundColor: "#F6F0E6" }}
        data-ocid="services.section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="font-sans text-xs tracking-[0.4em] uppercase mb-3"
              style={{ color: "#B08A4A" }}
            >
              What We Offer
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl font-bold"
              style={{ color: "#2B2420" }}
            >
              Our Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center p-8 rounded-lg border bg-white"
                style={{ borderColor: "#D9CBB7" }}
                data-ocid={`services.item.${i + 1}`}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: "#F3EBDD" }}
                >
                  <service.icon size={24} style={{ color: "#1E3A2D" }} />
                </div>
                <h3
                  className="font-serif text-xl font-semibold mb-3"
                  style={{ color: "#2B2420" }}
                >
                  {service.title}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: "#6F655C" }}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── PORTFOLIO ─────────────── */}
      <PortfolioSection />

      {/* ─────────────── ABOUT ─────────────── */}
      <section
        id="about"
        className="py-24"
        style={{ backgroundColor: "#EDE2D1" }}
        data-ocid="about.section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p
                className="font-sans text-xs tracking-[0.4em] uppercase mb-3"
                style={{ color: "#B08A4A" }}
              >
                Our Story
              </p>
              <h2
                className="font-serif text-4xl md:text-5xl font-bold mb-6"
                style={{ color: "#2B2420" }}
              >
                Designing Spaces That Inspire
              </h2>
              <div className="flex items-center gap-2 mb-5">
                <MapPin size={16} style={{ color: "#B08A4A" }} />
                <span
                  className="font-sans text-sm font-medium"
                  style={{ color: "#B08A4A" }}
                >
                  Based in Bengaluru, Karnataka
                </span>
              </div>
              <p
                className="font-sans text-sm leading-relaxed mb-4"
                style={{ color: "#6F655C" }}
              >
                Founded in 2025, Karthik Interiors was born from a belief that
                exceptional design is not a luxury — it is a necessity. Rooted
                in Bengaluru, our studio blends classical sensibilities with
                modern functionality, creating environments that are as livable
                as they are beautiful.
              </p>
              <p
                className="font-sans text-sm leading-relaxed mb-4"
                style={{ color: "#6F655C" }}
              >
                Every project begins with listening. We take the time to
                understand how you live, work, and dream, then translate those
                insights into spaces that resonate deeply with your identity.
                From the first sketch to the final flourish, we are with you
                every step.
              </p>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "#6F655C" }}
              >
                Our work spans private residences, boutique hotels, corporate
                headquarters, and retail environments across Bengaluru and
                beyond. Whatever the brief, our commitment to craft and client
                care remains constant.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid grid-cols-2 gap-6"
            >
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className="rounded-lg p-8 flex flex-col items-center text-center"
                  style={{
                    backgroundColor: "#F3EBDD",
                    border: "1px solid #D9CBB7",
                  }}
                  data-ocid={`about.item.${i + 1}`}
                >
                  <span
                    className="font-serif text-4xl font-bold mb-2"
                    style={{ color: "#1E3A2D" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="font-sans text-xs tracking-wide uppercase"
                    style={{ color: "#6F655C" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────── TESTIMONIALS + CONTACT ─────────────── */}
      <section
        id="contact"
        className="py-24"
        style={{ backgroundColor: "#F6F0E6" }}
        data-ocid="contact.section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="font-sans text-xs tracking-[0.4em] uppercase mb-3"
                style={{ color: "#B08A4A" }}
              >
                Client Stories
              </p>
              <h2
                className="font-serif text-4xl font-bold mb-10"
                style={{ color: "#2B2420" }}
              >
                Testimonials
              </h2>
              <div className="flex flex-col gap-8">
                {TESTIMONIALS.map((t, i) => (
                  <div
                    key={t.name}
                    className="rounded-lg p-6"
                    style={{
                      backgroundColor: "#F3EBDD",
                      border: "1px solid #D9CBB7",
                    }}
                    data-ocid={`contact.item.${i + 1}`}
                  >
                    <Quote
                      size={24}
                      style={{ color: "#B08A4A" }}
                      className="mb-4"
                    />
                    <p
                      className="font-sans text-sm leading-relaxed mb-5"
                      style={{ color: "#6F655C" }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-serif"
                        style={{ backgroundColor: "#1E3A2D", color: "#F3EBDD" }}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <p
                          className="font-sans text-sm font-semibold"
                          style={{ color: "#2B2420" }}
                        >
                          {t.name}
                        </p>
                        <p
                          className="font-sans text-xs"
                          style={{ color: "#6F655C" }}
                        >
                          {t.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p
                className="font-sans text-xs tracking-[0.4em] uppercase mb-3"
                style={{ color: "#B08A4A" }}
              >
                Let&apos;s Connect
              </p>
              <h2
                className="font-serif text-4xl font-bold mb-2"
                style={{ color: "#2B2420" }}
              >
                Contact Us
              </h2>
              <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin size={14} style={{ color: "#B08A4A" }} />
                  <span
                    className="font-sans text-sm"
                    style={{ color: "#6F655C" }}
                  >
                    Serving Bengaluru &amp; surrounding areas
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} style={{ color: "#B08A4A" }} />
                  <a
                    href="tel:+919392305081"
                    className="font-sans text-sm transition-opacity hover:opacity-70"
                    style={{ color: "#6F655C" }}
                  >
                    +91 93923 05081
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} style={{ color: "#B08A4A" }} />
                  <a
                    href="mailto:kchowdary822@gmail.com"
                    className="font-sans text-sm transition-opacity hover:opacity-70"
                    style={{ color: "#6F655C" }}
                  >
                    kchowdary822@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <SiWhatsapp size={14} style={{ color: "#25D366" }} />
                  <a
                    href="https://wa.me/919392305081"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm transition-opacity hover:opacity-70"
                    style={{ color: "#6F655C" }}
                    data-ocid="contact.link"
                  >
                    +91 93923 05081 (WhatsApp)
                  </a>
                </div>
              </div>
              <div
                className="rounded-xl p-8 shadow-card"
                style={{ backgroundColor: "#fff", border: "1px solid #D9CBB7" }}
                data-ocid="contact.card"
              >
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="font-sans text-xs tracking-wide uppercase mb-1 block"
                        style={{ color: "#6F655C" }}
                      >
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, name: e.target.value }))
                        }
                        required
                        className="bg-white font-sans text-sm"
                        style={{ borderColor: "#D9CBB7", color: "#2B2420" }}
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="font-sans text-xs tracking-wide uppercase mb-1 block"
                        style={{ color: "#6F655C" }}
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, email: e.target.value }))
                        }
                        required
                        className="bg-white font-sans text-sm"
                        style={{ borderColor: "#D9CBB7", color: "#2B2420" }}
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>

                  {/* Phone + Project Type row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="phone"
                        className="font-sans text-xs tracking-wide uppercase mb-1 block"
                        style={{ color: "#6F655C" }}
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, phone: e.target.value }))
                        }
                        className="bg-white font-sans text-sm"
                        style={{ borderColor: "#D9CBB7", color: "#2B2420" }}
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="projectType"
                        className="font-sans text-xs tracking-wide uppercase mb-1 block"
                        style={{ color: "#6F655C" }}
                      >
                        Project Type
                      </Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(v) =>
                          setFormData((p) => ({ ...p, projectType: v }))
                        }
                      >
                        <SelectTrigger
                          className="bg-white font-sans text-sm"
                          style={{ borderColor: "#D9CBB7", color: "#2B2420" }}
                          data-ocid="contact.select"
                        >
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">
                            Residential
                          </SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="consultation">
                            Consultation
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label
                      htmlFor="message"
                      className="font-sans text-xs tracking-wide uppercase mb-1 block"
                      style={{ color: "#6F655C" }}
                    >
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, message: e.target.value }))
                      }
                      required
                      className="bg-white font-sans text-sm resize-none"
                      style={{ borderColor: "#D9CBB7", color: "#2B2420" }}
                      data-ocid="contact.textarea"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full font-sans text-sm tracking-widest uppercase py-3 h-auto"
                    style={{ backgroundColor: "#1E3A2D", color: "#fff" }}
                    data-ocid="contact.submit_button"
                  >
                    {submitting ? "Sending..." : "Send Inquiry"}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <footer
        className="py-12"
        style={{ backgroundColor: "#1E3A2D" }}
        data-ocid="footer.section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 items-start">
            {/* Brand */}
            <div>
              <div className="flex flex-col leading-none mb-3">
                <span
                  className="font-serif font-bold text-2xl tracking-tight"
                  style={{ color: "#F3EBDD" }}
                >
                  KARTHIK
                </span>
                <span
                  className="font-sans text-[10px] tracking-[0.35em] uppercase"
                  style={{ color: "#D9CBB7" }}
                >
                  INTERIORS
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={13} style={{ color: "#B08A4A" }} />
                <span
                  className="font-sans text-xs"
                  style={{ color: "#D9CBB7" }}
                >
                  Bengaluru, Karnataka
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Phone size={13} style={{ color: "#B08A4A" }} />
                <a
                  href="tel:+919392305081"
                  className="font-sans text-xs transition-opacity hover:opacity-70"
                  style={{ color: "#D9CBB7" }}
                >
                  +91 93923 05081
                </a>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Mail size={13} style={{ color: "#B08A4A" }} />
                <a
                  href="mailto:kchowdary822@gmail.com"
                  className="font-sans text-xs transition-opacity hover:opacity-70"
                  style={{ color: "#D9CBB7" }}
                >
                  kchowdary822@gmail.com
                </a>
              </div>
              <p
                className="font-sans text-xs leading-relaxed max-w-xs"
                style={{ color: "#D9CBB7" }}
              >
                Creating beautiful, functional spaces that inspire and endure.
              </p>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="font-sans text-sm text-left transition-opacity hover:opacity-70"
                  style={{ color: "#D9CBB7" }}
                  data-ocid="footer.link"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Social */}
            <div className="flex flex-col gap-4 md:items-end">
              <p
                className="font-sans text-xs tracking-widest uppercase"
                style={{ color: "#D9CBB7" }}
              >
                Follow Us
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition-opacity hover:opacity-70"
                  data-ocid="footer.link"
                >
                  <Instagram size={20} style={{ color: "#D9CBB7" }} />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="transition-opacity hover:opacity-70"
                  data-ocid="footer.link"
                >
                  <SiPinterest size={20} style={{ color: "#D9CBB7" }} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="transition-opacity hover:opacity-70"
                  data-ocid="footer.link"
                >
                  <Linkedin size={20} style={{ color: "#D9CBB7" }} />
                </a>
                <a
                  href="https://wa.me/919392305081"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="transition-opacity hover:opacity-70"
                  data-ocid="footer.link"
                >
                  <SiWhatsapp size={20} style={{ color: "#D9CBB7" }} />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-3"
            style={{ borderColor: "rgba(217,203,183,0.25)" }}
          >
            <p
              className="font-sans text-xs"
              style={{ color: "rgba(217,203,183,0.6)" }}
            >
              &copy; {new Date().getFullYear()} Karthik Interiors, Bengaluru.
              All rights reserved.
            </p>
            <p
              className="font-sans text-xs"
              style={{ color: "rgba(217,203,183,0.6)" }}
            >
              Built with &#10084; using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-80 transition-opacity"
                style={{ color: "rgba(217,203,183,0.8)" }}
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
