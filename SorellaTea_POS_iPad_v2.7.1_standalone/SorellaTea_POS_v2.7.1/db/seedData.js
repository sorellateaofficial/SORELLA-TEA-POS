// Default seed data for a fresh Sorella Tea POS database.
// Reconciled against the supplied Sorella_Tea_iPad_Touch_POS.xlsx (Menu_Manager sheet category/product
// roster) and the product photography already present in /assets. Products without a dedicated supplied
// photo reuse the closest matching flavor photo as a realistic placeholder (documented in `description`)
// until real photography is supplied.

export const DRINK_SIZES = ["TALL (12oz)", "GRANDE (16oz)", "VENTI (22oz)"];
export const SNACK_SIZES = ["SMALL", "MEDIUM", "LARGE"];

export const CATEGORIES = [
  "Milk Tea",
  "Fruit Tea",
  "Fruit Soda",
  "Iced Coffee",
  "Snacks",
  "Add Ons",
];

export const SERIES = [
  "Signature Series",
  "Matcha Series",
  "Taro Series",
  "Cloudy Series",
  "Chocolate Series",
  "Caramel Series",
  "Mocha Series",
  "Vanilla Series",
  "Hazelnut Series",
];

function drink(id, name, category, seriesName, sizes, image, extra = {}) {
  return {
    id,
    name,
    category,
    seriesName: seriesName || "",
    type: "drink",
    sizes,
    flavors: null,
    image: "",
    active: true,
    ...extra,
  };
}

const MT = { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 };
const FS = { "TALL (12oz)": 40, "GRANDE (16oz)": 45, "VENTI (22oz)": 55 };
const FT = { "TALL (12oz)": 79, "GRANDE (16oz)": 89, "VENTI (22oz)": 99 };
const HC = { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 };

export const PRODUCTS = [
drink("PROD001", "Classic Milk Tea", "Milk Tea", "", { "TALL (12oz)": 79, "GRANDE (16oz)": 89, "VENTI (22oz)": 99 }, ""),
drink("MI001", "Okinawa", "Milk Tea", "", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("MI002", "Hokkaido", "Milk Tea", "", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("MI003", "Taro", "Milk Tea", "Taro Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("MI004", "Mango Cheesecake", "Milk Tea", "Cloudy Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("MI005", "Strawberry Chocolate", "Milk Tea", "Chocolate Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("MI006", "Milky Chocolate", "Milk Tea", "Cloudy Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("MI007", "Matcha Strawberry Milk", "Milk Tea", "Matcha Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("MI008", "Winter Melon", "Milk Tea", "", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("MI009", "Black Forest", "Milk Tea", "", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("MI010", "Hazelnut", "Milk Tea", "", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("MI011", "Red Velvet", "Milk Tea", "", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("MI012", "Matcha", "Milk Tea", "Matcha Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("MI013", "Ice Taro Strawberry Milk", "Milk Tea", "Taro Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("MI014", "Chocolate Matcha", "Milk Tea", "Matcha Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("FR001", "Mango Soda", "Fruit Soda", "", { "TALL (12oz)": 40, "GRANDE (16oz)": 45, "VENTI (22oz)": 55 }, ""),
drink("FR002", "Lemon Soda", "Fruit Soda", "", { "TALL (12oz)": 40, "GRANDE (16oz)": 45, "VENTI (22oz)": 55 }, ""),
drink("FR003", "Blueberry Soda", "Fruit Soda", "", { "TALL (12oz)": 40, "GRANDE (16oz)": 45, "VENTI (22oz)": 55 }, ""),
drink("FR004", "Lychee Soda", "Fruit Soda", "", { "TALL (12oz)": 40, "GRANDE (16oz)": 45, "VENTI (22oz)": 55 }, ""),
drink("FR005", "Strawberry Soda", "Fruit Soda", "", { "TALL (12oz)": 40, "GRANDE (16oz)": 45, "VENTI (22oz)": 55 }, ""),
drink("FR006", "Watermelon Soda", "Fruit Soda", "", { "TALL (12oz)": 40, "GRANDE (16oz)": 45, "VENTI (22oz)": 55 }, ""),
drink("FR007", "Kiwi Soda", "Fruit Soda", "", { "TALL (12oz)": 40, "GRANDE (16oz)": 45, "VENTI (22oz)": 55 }, ""),
drink("FR008", "Green Apple Soda", "Fruit Soda", "", { "TALL (12oz)": 40, "GRANDE (16oz)": 45, "VENTI (22oz)": 55 }, ""),
drink("FR009", "Peach Soda", "Fruit Soda", "", { "TALL (12oz)": 40, "GRANDE (16oz)": 45, "VENTI (22oz)": 55 }, ""),
drink("FR010", "Passion Fruit Soda", "Fruit Soda", "", { "TALL (12oz)": 40, "GRANDE (16oz)": 45, "VENTI (22oz)": 55 }, ""),
drink("IC001", "Iced Taro Brown Sugar", "Iced Coffee", "Taro Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("IC002", "Iced Coffee Brown Sugar", "Iced Coffee", "Caramel Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("IC003", "Brown Sugar Cappuccino", "Iced Coffee", "Caramel Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("IC004", "Iced Mocha", "Iced Coffee", "Mocha Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("IC005", "Iced Americano", "Iced Coffee", "Signature Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("IC006", "Iced Spanish Latte", "Iced Coffee", "Signature Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("IC007", "Iced Caramel Macchiato", "Iced Coffee", "Caramel Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("IC008", "Iced Hazelnut Latte", "Iced Coffee", "Hazelnut Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("IC009", "Iced Vanilla Latte", "Iced Coffee", "Vanilla Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("IC010", "Iced Brown Sugar Espresso", "Iced Coffee", "Caramel Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("IC011", "Iced Coconut Coffee", "Iced Coffee", "Signature Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("IC012", "Iced Salted Caramel", "Iced Coffee", "Caramel Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("IC013", "Iced White Mocha", "Iced Coffee", "Mocha Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("IC014", "Iced Toffee Nut Latte", "Iced Coffee", "Hazelnut Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("IC015", "Iced Butterscotch Latte", "Iced Coffee", "Caramel Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("IC016", "Iced Matcha Coffee", "Iced Coffee", "Matcha Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("IC017", "Iced Chocolate", "Iced Coffee", "Chocolate Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("FT001", "Strawberry Fruit Tea", "Fruit Tea", "", { "TALL (12oz)": 79, "GRANDE (16oz)": 89, "VENTI (22oz)": 99 }, ""),
drink("FT007", "Ana's Fruit Tea", "Fruit Tea", "", { "TALL (12oz)": 79, "GRANDE (16oz)": 89, "VENTI (22oz)": 99 }, ""),
drink("FT002", "Mango Fruit Tea", "Fruit Tea", "", { "TALL (12oz)": 79, "GRANDE (16oz)": 89, "VENTI (22oz)": 99 }, ""),
drink("FT003", "Lychee Fruit Tea", "Fruit Tea", "", { "TALL (12oz)": 79, "GRANDE (16oz)": 89, "VENTI (22oz)": 99 }, ""),
drink("FT004", "Lemon Fruit Tea", "Fruit Tea", "", { "TALL (12oz)": 79, "GRANDE (16oz)": 89, "VENTI (22oz)": 99 }, ""),
drink("FT005", "Passion Fruit Tea", "Fruit Tea", "", { "TALL (12oz)": 79, "GRANDE (16oz)": 89, "VENTI (22oz)": 99 }, ""),
drink("FT006", "Peach Fruit Tea", "Fruit Tea", "", { "TALL (12oz)": 79, "GRANDE (16oz)": 89, "VENTI (22oz)": 99 }, ""),
drink("FT008", "Blueberry Fruit Tea", "Fruit Tea", "", { "TALL (12oz)": 79, "GRANDE (16oz)": 89, "VENTI (22oz)": 99 }, ""),
drink("FT009", "Green Apple Fruit Tea", "Fruit Tea", "", { "TALL (12oz)": 79, "GRANDE (16oz)": 89, "VENTI (22oz)": 99 }, ""),
drink("FT010", "Grapefruit Fruit Tea", "Fruit Tea", "", { "TALL (12oz)": 79, "GRANDE (16oz)": 89, "VENTI (22oz)": 99 }, ""),
drink("FT011", "Peach Lychee Fruit Tea", "Fruit Tea", "", { "TALL (12oz)": 79, "GRANDE (16oz)": 89, "VENTI (22oz)": 99 }, ""),
drink("HC001", "Americano", "Hot Coffee", "", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("HC002", "Caffe Latte", "Hot Coffee", "", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("HC003", "Cappuccino", "Hot Coffee", "", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("HC004", "Mocha", "Hot Coffee", "Chocolate Series", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("HC005", "Caramel Macchiato", "Hot Coffee", "", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),
drink("HC006", "Spanish Latte", "Hot Coffee", "", { "TALL (12oz)": 45, "GRANDE (16oz)": 55, "VENTI (22oz)": 65 }, ""),

  {
    id: "SNK001", name: "Fries", category: "Snacks", seriesName: "", type: "snack",
    sizes: { SMALL: 45, MEDIUM: 50, LARGE: 55 },
    flavors: {
      Cheese: { SMALL: 45, MEDIUM: 50, LARGE: 55 },
      Barbecue: { SMALL: 45, MEDIUM: 50, LARGE: 55 },
      "Sour Cream": { SMALL: 45, MEDIUM: 50, LARGE: 55 },
    }, image: "", active: true,
  },
  { id: "SNK002", name: "Nachos with Cheese", category: "Snacks", seriesName: "", type: "snack", sizes: { SMALL: 65, MEDIUM: 75, LARGE: 85 }, flavors: { Cheese: { SMALL: 65, MEDIUM: 75, LARGE: 85 }, Barbecue: { SMALL: 65, MEDIUM: 75, LARGE: 85 }, "Sour Cream": { SMALL: 65, MEDIUM: 75, LARGE: 85 } }, image: "", active: true },
  { id: "SNK003", name: "Chicken Pop", category: "Snacks", seriesName: "", type: "snack", sizes: { SMALL: 75, MEDIUM: 85, LARGE: 95 }, flavors: { Original: { SMALL: 75, MEDIUM: 85, LARGE: 95 }, Spicy: { SMALL: 75, MEDIUM: 85, LARGE: 95 }, Barbecue: { SMALL: 75, MEDIUM: 85, LARGE: 95 } }, image: "", active: true },
  { id: "SNK004", name: "Potato Wedges", category: "Snacks", seriesName: "", type: "snack", sizes: { SMALL: 65, MEDIUM: 75, LARGE: 85 }, flavors: { Cheese: { SMALL: 65, MEDIUM: 75, LARGE: 85 }, Barbecue: { SMALL: 65, MEDIUM: 75, LARGE: 85 }, "Sour Cream": { SMALL: 65, MEDIUM: 75, LARGE: 85 } }, image: "", active: true },
  { id: "SNK005", name: "Chicken Nuggets", category: "Snacks", seriesName: "", type: "snack", sizes: { SMALL: 75, MEDIUM: 85, LARGE: 95 }, flavors: { Original: { SMALL: 75, MEDIUM: 85, LARGE: 95 }, Cheese: { SMALL: 75, MEDIUM: 85, LARGE: 95 } }, image: "", active: true },
  { id: "ADD001", name: "Pearl (Tapioca)", category: "Add Ons", seriesName: "", type: "addon", sizes: { "ADD-ON": 15 }, flavors: null, image: "", active: true },
  { id: "ADD002", name: "Nata de Coco", category: "Add Ons", seriesName: "", type: "addon", sizes: { "ADD-ON": 15 }, flavors: null, image: "", active: true },
  { id: "ADD003", name: "More Milk", category: "Add Ons", seriesName: "", type: "addon", sizes: { "ADD-ON": 15 }, flavors: null, image: "", active: true },
  { id: "ADD004", name: "Cheese Foam", category: "Add Ons", seriesName: "", type: "addon", sizes: { "ADD-ON": 20 }, flavors: null, image: "", active: true },
  { id: "ADD005", name: "Oat Milk", category: "Add Ons", seriesName: "", type: "addon", sizes: { "ADD-ON": 20 }, flavors: null, image: "", active: true },
  { id: "ADD006", name: "Whipped Cream", category: "Add Ons", seriesName: "", type: "addon", sizes: { "ADD-ON": 20 }, flavors: null, image: "", active: true },
];

export const PRODUCT_IMAGE_OVERRIDES = {};

export const INGREDIENTS = [
  { id: "ING001", name: "Fresh Milk", category: "Dairy", unit: "ml", currentStock: 10000, minStock: 3000, costPerUnit: 0.095, purchaseQty: 1000, purchaseCost: 95, supplier: "" },
  { id: "ING002", name: "Black Tea", category: "Tea", unit: "g", currentStock: 5000, minStock: 1000, costPerUnit: 0.36, purchaseQty: 500, purchaseCost: 180, supplier: "" },
  { id: "ING003", name: "Brown Sugar Syrup", category: "Syrup", unit: "ml", currentStock: 8000, minStock: 2000, costPerUnit: 0.15, purchaseQty: 1000, purchaseCost: 150, supplier: "" },
  { id: "ING004", name: "Tapioca Pearls", category: "Topping", unit: "g", currentStock: 6000, minStock: 2000, costPerUnit: 0.12, purchaseQty: 1000, purchaseCost: 120, supplier: "" },
  { id: "PKG001", name: "16oz Cup", category: "Packaging", unit: "piece", currentStock: 300, minStock: 50, costPerUnit: 2, purchaseQty: 50, purchaseCost: 100, supplier: "" },
  { id: "PKG002", name: "16oz Lid", category: "Packaging", unit: "piece", currentStock: 300, minStock: 50, costPerUnit: 1.5, purchaseQty: 50, purchaseCost: 75, supplier: "" },
  { id: "PKG003", name: "Straw", category: "Packaging", unit: "piece", currentStock: 500, minStock: 100, costPerUnit: 0.8, purchaseQty: 100, purchaseCost: 80, supplier: "" },
];

// Recipe size labels use the same size strings as `products.sizes` so recipe-based costing/deduction
// actually matches an order line's size (the original workbook used bare "16oz", which never matched
// the POS's "GRANDE (16oz)" size labels — fixed here).
export const RECIPES = [
  { id: "REC001", productId: "PROD001", productName: "Classic Milk Tea", sizeLabel: "GRANDE (16oz)", ingredientId: "ING002", ingredientName: "Black Tea", qty: 150, unit: "ml" },
  { id: "REC002", productId: "PROD001", productName: "Classic Milk Tea", sizeLabel: "GRANDE (16oz)", ingredientId: "ING001", ingredientName: "Fresh Milk", qty: 100, unit: "ml" },
  { id: "REC003", productId: "PROD001", productName: "Classic Milk Tea", sizeLabel: "GRANDE (16oz)", ingredientId: "ING003", ingredientName: "Brown Sugar Syrup", qty: 20, unit: "ml" },
  { id: "REC004", productId: "PROD001", productName: "Classic Milk Tea", sizeLabel: "GRANDE (16oz)", ingredientId: "ING004", ingredientName: "Tapioca Pearls", qty: 80, unit: "g" },
  { id: "REC005", productId: "PROD001", productName: "Classic Milk Tea", sizeLabel: "GRANDE (16oz)", ingredientId: "PKG001", ingredientName: "16oz Cup", qty: 1, unit: "piece" },
  { id: "REC006", productId: "PROD001", productName: "Classic Milk Tea", sizeLabel: "GRANDE (16oz)", ingredientId: "PKG002", ingredientName: "16oz Lid", qty: 1, unit: "piece" },
  { id: "REC007", productId: "PROD001", productName: "Classic Milk Tea", sizeLabel: "GRANDE (16oz)", ingredientId: "PKG003", ingredientName: "Straw", qty: 1, unit: "piece" },
];
