# Test de dactylographie – React

---

## Fonctionnalités principales

### Texte à taper

- Affichage d’un texte de référence à l’écran
- Textes définis en dur dans l’application
- Sélection aléatoire d’une phrase au démarrage et à chaque nouvelle partie

### Zone de saisie

- Champ de saisie permettant à l’utilisateur de taper le texte
- Validation d’un mot par appui sur la touche **espace**
- Réinitialisation automatique du champ après chaque mot

### Comparaison de la saisie

- Comparaison caractère par caractère avec le texte attendu
- Chaque mot est identifié comme :
  - correct
  - incorrect
  - non encore saisi

- Mise en évidence visuelle du mot courant

### Gestion du temps

- Partie limitée à une durée fixe (60 secondes)
- Démarrage du chronomètre au premier caractère saisi
- Fin automatique de la partie lorsque le temps est écoulé

### Fin de partie

- Blocage de la saisie à la fin de la partie
- Affichage d’un récapitulatif comprenant :
  - le nombre de caractères tapés
  - le nombre de mots corrects
  - le nombre de mots incorrects

---

## Extensions réalisées

Les améliorations suivantes ont été implémentées :

### Statistiques

- Calcul de la vitesse de frappe en **caractères par seconde**
- Calcul de la **précision** en pourcentage

### Feedback visuel

- Surlignage du mot courant
- Coloration des mots corrects et incorrects
- Affichage dynamique du chronomètre

### Mode rejouable

- Bouton permettant de lancer une nouvelle partie
- Réinitialisation complète de l’état de l’application

---

## Installation

### Prérequis

- Node.js récent

### Installation des dépendances

```bash
npm install
```

Alternative avec Bun :

```bash
bun install
```

---

## Lancement en développement

```bash
npm run dev
```

---

## Build de production

```bash
npm run build
```

---

## Prévisualisation du build

```bash
npm run preview
```

---

## Utilisation de l’application

1. Lancer l’application en mode développement.
2. Le texte à taper s’affiche à l’écran.
3. Commencer à taper : le chronomètre démarre au premier caractère.
4. Appuyer sur **espace** pour valider un mot et passer au suivant.
5. À la fin du temps imparti, la saisie est bloquée et un récapitulatif s’affiche.
6. Cliquer sur **Nouvelle Partie** pour recommencer.

---

## Auteur

- William Perret
  - GitHub : [PerretWilliam](https://github.com/PerretWilliam)
  - Portfolio: [william-perret.fr](https://william-perret.fr)
  - LinkedIn: [William Perret](https://www.linkedin.com/in/william-perret-7102b7327)
