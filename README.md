# Laravel Project

A web application built with Laravel 11 framework.

## 📥 Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/RyanBagusB/booking-platform.git
   ```

2. Move into the project directory:
   ```bash
   cd booking-platform
   ```

3. Install PHP dependencies:
   ```bash
   composer install
   ```

4. Install JavaScript dependencies:
   ```bash
   npm install
   ```

5. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

6. Generate the application key:
   ```bash
   php artisan key:generate
   ```

7. Set up the database in your `.env` and run migrations:
   ```bash
   php artisan migrate
   ```

8. Start the development server and Vite compiler:
   ```bash
   composer run dev
   ```