import i18next from "i18next";
import { initReactI18next } from "react-i18next";
const translationEn = {
    Categories: "Categories",
    Beef: "Beef",
    Chicken: "Chicken",
    Dessert: "Dessert",
    Lamb: "Lamb",
    Miscellaneous: "Miscellaneous",
    Pasta: "Pasta",
    Pork: "Pork",
    Seafood: "Seafood",
    Side: "Side",
    Starter: "Starter",
    Vegan: "Vegan",
    Vegetarian: "Vegetarian",
    Breakfast: "Breakfast",
    Goat: "Goat",
    ADD: "ADD",
    Welcome: "Welcome",
    selectCategory: "Select a category and start adding dishes to your cart!",
    Category: "Category",
    Name: "Name",
    Region: "Region",
    Tag: "Tag",
    return: "Return to the list",
    firstName: "First Name",
    lastName: "LastName",
    cardNumber: "Credit card Number",
    Submit: "Submit",
    Cart: "Cart",
    Lang: "Lang",
    RandomMeal: "Random meal",
    Login: "Login",
    CLOSE: "CLOSE",
    theCartIsEmpty: "The cart is empty! Try to select some dishes",
    Logout: "Logout",
    moreAbout: "More about"
}
const translationHr = {
    Categories: "Kategorije",
    Beef: "Govedina",
    Chicken: "Piletina",
    Dessert: "Desert",
    Lamb: "Janjetina",
    Miscellaneous: "Razno",
    Pasta: "Tjestenina",
    Pork: "Svinjetina",
    Seafood: "Plodovi mora",
    Side: "Prilozi",
    Starter: "Predjelo",
    Vegan: "Vegan",
    Vegetarian: "Vegetarijansko",
    Breakfast: "Doručak",
    Goat: "Kozje meso",
    ADD: "DODAJ",
    Welcome: "Dobrodošao",
    selectCategory: "Odaberite kategoriju i počnite dodavati jela u svoju košaricu!",
    Category: "Kategorija",
    Name: "Ime",
    Region: "Regija",
    Tag: "Etiketa",
    return: "Vrati se na listi",
    firstName: "Ime",
    lastName: "Prezime",
    cardNumber: "Broj kreditne kartice",
    Submit: "Pošalji",
    Cart: "Košara",
    Lang: "Jezik",
    RandomMeal: "Nasumični obrok",
    Login: "Prijava",
    CLOSE: "ZATVORI",
    theCartIsEmpty: "Košarica je prazna! Odaberite prije neka jela",
    Logout: "Odjava",
    moreAbout: "Saznaj više"

}

i18next.use(initReactI18next).init({
    resources: {
        en: { translation: translationEn},
        hr: {translation : translationHr}
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {escapeValue: false}
});

export default i18next;