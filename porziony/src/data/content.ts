import type { Ingredient } from "@/lib/scale";

export type Tone = "accent" | "slate" | "sage";

export const nav = [
  { label: "Features", href: "#features" },
  { label: "AI Chef", href: "#chef" },
  { label: "Community", href: "/community" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export const lasagna: Ingredient[] = [
  { name: "Flour", qty: 500, unit: "g" },
  { name: "Eggs", qty: 2, unit: "" },
  { name: "Cheese", qty: 300, unit: "g" },
];

export const features: { icon: string; title: string; text: string; note?: string; tone: Tone }[] = [
  { icon: "📷", title: "AI Recipe Scanner", text: "Scan recipes from books, paper notes, screenshots and photos.", note: "Extracts ingredients, quantities and instructions.", tone: "accent" },
  { icon: "⚖️", title: "Smart Portion Conversion", text: "Instantly adapt any recipe, from 4 people to 12, with every quantity recalculated.", tone: "slate" },
  { icon: "🛒", title: "Shopping List Generator", text: "Combine ingredients from several recipes, add up quantities and remove duplicates.", tone: "sage" },
  { icon: "👩‍🍳", title: "AI Chef", text: "Ask “What can I cook with eggs, zucchini and parmesan?” and get personal suggestions.", tone: "accent" },
  { icon: "🌿", title: "Allergen Search", text: "Filter by gluten, lactose, nuts, eggs, vegan or vegetarian.", tone: "slate" },
  { icon: "☁️", title: "Cloud Recipe Library", text: "Open your recipes on mobile, tablet and desktop. Everything syncs automatically.", tone: "sage" },
];

export const suggestions = [
  ["Zucchini frittata", "20 min"], ["Parmesan zucchini carbonara", "25 min"],
  ["Baked zucchini fritters", "30 min"], ["Zucchini and egg tart", "40 min"],
  ["Creamy zucchini risotto", "35 min"],
];

export const posts: { initial: string; name: string; badge: string; title: string; likes: string; comments: number; tone: Tone }[] = [
  { initial: "M", name: "Marta R.", badge: "Top creator", title: "Sunday ragù", likes: "1.2k", comments: 84, tone: "accent" },
  { initial: "J", name: "Jonas K.", badge: "Vegan", title: "Lemon chickpea stew", likes: "860", comments: 41, tone: "slate" },
  { initial: "A", name: "Amara D.", badge: "Gluten free", title: "Herb polenta bake", likes: "640", comments: 27, tone: "sage" },
];

export const testimonials = [
  { quote: "I scanned my grandmother’s notebook in one evening. Scaling for family dinners is now a single tap.", name: "Elena V.", role: "Home cook" },
  { quote: "Allergen filters let me build client plans in minutes instead of hours.", name: "Dr. Paolo M.", role: "Nutritionist" },
  { quote: "Food cost and catering mode changed how my team preps for service.", name: "Chef Luca B.", role: "Professional chef" },
];

export const plans = [
  { name: "Free", price: "€0", period: "", cta: "Start Free", featured: false, items: ["Up to 50 recipes", "Cloud synchronization", "Portion conversion"] },
  { name: "Pro", price: "€4.99", period: "/month", cta: "Get Pro", featured: true, items: ["Unlimited recipes", "AI Scanner", "AI Chef", "Shopping Lists", "Allergen Filters"] },
  { name: "Professional", price: "€19.99", period: "/month", cta: "Get Professional", featured: false, items: ["Food cost calculations", "Team collaboration", "PDF exports", "Excel exports", "Catering mode", "Analytics"] },
];

export const sidebar = ["Dashboard", "My Recipes", "AI Chef", "Shopping Lists", "Community", "Favorites", "Settings"];
