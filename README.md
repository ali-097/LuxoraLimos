# Luxor Limos

A modern, luxurious limousine service website built with React and Vite.

## Features

- Modern React components
- Responsive design
- Interactive booking form with validation
- EmailJS integration for booking confirmations
- Luxury fleet display with image zoom
- Testimonials, FAQs, and more

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

   ```
   npm install
   ```

   or

   ```
   pnpm install
   ```

3. Copy `.env.example` to `.env` and update with your EmailJS credentials:

   ```
   cp .env.example .env
   ```

4. Start the development server:

   ```
   npm run dev
   ```

   or

   ```
   pnpm dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## EmailJS Integration

This project uses EmailJS for sending booking confirmation emails. To configure EmailJS:

1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a new Email Service (Gmail, Outlook, etc.)
3. Create a new Email Template (see template example below)
4. Get your Service ID, Template ID, and Public Key
5. Add these to your `.env` file

## Building for Production

```
npm run build
```

or

```
pnpm build
```

This will create a production-ready build in the `dist` directory.
