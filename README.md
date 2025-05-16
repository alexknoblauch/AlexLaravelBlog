## Alex Blogs

Dieses Projekt basiert auf Laravel 12, mySQL und React. Hier implementierte ich ein bestehendes React Projekt, dass ich mit vanilla PHP angebunden habe.
Auf Localhost hats gut funkioniert, auf dem deployment Server/ DB dann leider nicht mehr.

---

## 🔧 Voraussetzungen

- PHP >= 8.1
- Composer
- Laravel >= 10
- MySQL oder andere unterstützte Datenbank
- Node.js und NPM (für Assets und Frontend)

---

## 🚀 Installation


# Repository klonen
git clone https://github.com/dein-benutzername/mein-laravel-projekt.git

cd mein-laravel-projekt

# Abhängigkeiten installieren
composer install
npm install && npm run dev

# Umgebungsdatei kopieren
cp .env.example .env

# App-Key generieren
php artisan key:generate

# Datenbank konfigurieren und Migrationen ausführen
php artisan migrate


## Features

-Login 
-Registrierung
-Blogs eintragen


## Ordnerstruktur

Views: recources/js/pages
Models: App/Models
Controllers: App/Http/Controllers


## Lizenz

MIT Lizenz

