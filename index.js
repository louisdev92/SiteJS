const produits = [
    { id: 1, nom: "Thé vert", prix: 12.99 },
    { id: 2, nom: "Café Arabica", prix: 8.99 },
    { id: 3, nom: "Infusion Camomille", prix: 5.49 },
    { id: 4, nom: "Café Robusta", prix: 9.99 },
    { id: 5, nom: "Chocolat Noir", prix: 3.99 },
    { id: 6, nom: "Tisane Menthe", prix: 4.49 },
    { id: 7, nom: "Cappuccino", prix: 6.99 },
    { id: 8, nom: "Espresso", prix: 2.99 },
    { id: 9, nom: "Latte Macchiato", prix: 5.99 },
    { id: 10, nom: "Matcha", prix: 7.49 },
    { id: 11, nom: "Jus d'Orange", prix: 3.49 },
    { id: 12, nom: "Jus de Pomme", prix: 3.29 },
    { id: 13, nom: "Smoothie Mangue", prix: 4.99 },
    { id: 14, nom: "Thé au Jasmin", prix: 6.49 },
    { id: 15, nom: "Soda", prix: 1.99 },
    { id: 16, nom: "Eau Minérale", prix: 0.99 },
    { id: 17, nom: "Thé Noir", prix: 4.99 },
    { id: 18, nom: "Chocolat Chaud", prix: 3.99 },
    { id: 19, nom: "Infusion Verveine", prix: 5.99 },
    { id: 20, nom: "Café Mocha", prix: 6.49 },
    { id: 21, nom: "Eau Gazeuse", prix: 1.49 },
    { id: 22, nom: "Thé Blanc", prix: 7.99 },
    { id: 23, nom: "Limonade", prix: 2.49 },
    { id: 24, nom: "Milkshake Vanille", prix: 4.49 },
];

let produitsAffiches = [...produits]; // Copie des produits pour manipulation

const productList = document.getElementById("product-list");
const totalPriceEl = document.getElementById("total-price");
const searchInput = document.getElementById("search");
const resetButton = document.getElementById("reset");

// Fonction pour afficher les produits dans le tableau
function afficherProduits() {
    productList.innerHTML = produitsAffiches.map(produit => `
        <tr>
          <td>${produit.nom}</td>
          <td>${produit.prix.toFixed(2)} €</td>
          <td><button onclick="supprimerProduit(${produit.id})">Supprimer</button></td>
        </tr>
      `).join("");

    mettreAJourTotal();
}

// Fonction pour mettre à jour le total des prix
function mettreAJourTotal() {
    const total = produitsAffiches.reduce((acc, produit) => acc + produit.prix, 0);
    totalPriceEl.textContent = total.toFixed(2);
}

// Fonction pour filtrer les produits
function filtrerProduits(motCle) {
    produitsAffiches = produits.filter(produit => produit.nom.toLowerCase().includes(motCle.toLowerCase()));
    afficherProduits();
}

// Fonction pour supprimer un produit
function supprimerProduit(id) {
    produitsAffiches = produitsAffiches.filter(produit => produit.id !== id);
    afficherProduits();
}

// Réinitialiser la liste des produits
resetButton.addEventListener("click", () => {
    produitsAffiches = [...produits];
    searchInput.value = "";
    afficherProduits();
});

// Écouter la saisie dans le champ de recherche
searchInput.addEventListener("keyup", (e) => {
    filtrerProduits(e.target.value);
});

// Afficher les produits au chargement de la page
afficherProduits();