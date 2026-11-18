import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

/** Null until env vars are set, so the landing page works without a backend. */
export const supabase = url && key ? createClient(url, key) : null;

/* Planned tables: profiles, recipes, recipe_ingredients, shopping_lists,
   community_posts, likes, comments. Add auth pages at /login and /register. */
