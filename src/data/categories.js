export const categories = [
  {
    id: "electronics",
    name: "Electronics",
    icon: "cpu",
    gradient: ["#0ea5e9", "#6366f1"],
  },
  {
    id: "fashion",
    name: "Fashion",
    icon: "shirt",
    gradient: ["#f43f5e", "#d946ef"],
  },
  {
    id: "home",
    name: "Home & Living",
    icon: "home",
    gradient: ["#10b981", "#84cc16"],
  },
  {
    id: "beauty",
    name: "Beauty",
    icon: "stars",
    gradient: ["#d4af37", "#f59e0b"],
  },
];

export function getCategoryById(id) {
  return categories.find((category) => category.id === id);
}
