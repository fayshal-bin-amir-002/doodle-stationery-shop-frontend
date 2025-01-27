# Doodle Stationery Shop

A **modern, feature-rich e-commerce website** built using **React**, **TypeScript**, **TailwindCSS**, **ShadCN**, and **Redux**. This project aims to provide a smooth user experience for buying stationery items while offering robust admin and user dashboards for effective management.

## Live URL

[Doodle Stationery Shop](https://doodle-stationery-shop.vercel.app)

---

## Features

### **Home Page**

- **Navigation Bar**:
  - Links to all major pages: Home, Products, About Us, Login/Register, and Dashboard.
  - Responsive design with a hamburger menu for mobile.
- **Banner**:
  - A carousel showcasing promotions or featured products.
  - Eye-catching Call-to-Action (CTA) buttons.
- **Featured Products**:
  - Displays top-rated or trending products with images, prices, and quick add-to-cart functionality.
- **Testimonials**:
  - Customer reviews displayed in a slider format.
- **Footer**:
  - Contains links to About Us, Privacy Policy, Terms of Service, and social media icons.

### **Products Page**

- **All Products Display**:
  - Lists all available products with filters for categories, price ranges, and search functionality.
  - Pagination support for easier navigation.

### **About Us Page**

- Details about the shop, mission, vision, and history.
- Includes contact information and a simple contact form.

### **User Dashboard**

- **View Orders**:
  - A table displaying past and current orders with statuses (e.g., Pending, Delivered).
- **Profile Management**:
  - Update personal details like name, email, and password.

### **Admin Dashboard**

- **View Orders**:
  - A list of all customer orders with the ability to update statuses (e.g., Accept/Reject).
- **Product Management**:
  - Add, edit, or delete products.
- **User Management**:
  - View registered users and manage their access or roles.

---

## Technologies Used

### Frontend

- **React** (v18.3.1): For building UI components.
- **TypeScript**: For type safety and better developer experience.
- **TailwindCSS**: For styling and responsive design.
- **React Router** (v7.1.3): For routing and navigation.
- **Redux Toolkit**: For state management.
- **Recharts**: For data visualization in dashboards.

### Backend

- **Node.js**: Backend runtime.
- **Express.js**: API development.
- **MongoDB**: Database for storing user data, products, and orders.
- **JWT**: For user authentication.

### Libraries/APIs

- **Zod**: For schema validation.
- **Sonner**: For toast notifications.

---

## Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/fayshal-bin-amir-002/doodle-stationery-shop-frontend.git
   cd doodle-stationery-shop
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following:

   ```env
   VITE_API_BASE_URL=your_backend_api_url
   VITE_JWT_SECRET=your_jwt_secret
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

   Access the application at `http://localhost:5173`.

5. **Build for production**:

   ```bash
   npm run build
   ```

6. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## Folder Structure

```
├── public
├── src
│   ├── components
│   │   ├── Navbar.tsx
│   │   ├── Banner.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── Testimonials.tsx
│   │   └── Footer.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── Products.tsx
│   │   ├── AboutUs.tsx
│   │   ├── Dashboard
│   │   │   ├── AdminDashboard.tsx
│   │   │   └── UserDashboard.tsx
│   ├── redux
│   │   ├── store.ts
│   │   ├── slices
│   │   │   ├── userSlice.ts
│   │   │   └── productSlice.ts
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js
├── package.json
└── vite.config.ts
```

---

## Deployment

This project is deployed using **Vercel**. Follow these steps for deployment:

1. **Login to Vercel**:

   ```bash
   vercel login
   ```

2. **Deploy**:

   ```bash
   vercel
   ```

3. **Ensure proper build settings** in `vercel.json` or Vercel dashboard:
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "framework": "vite"
   }
   ```

---

## Future Enhancements

- Add payment gateway integration.
- Implement more advanced filtering and sorting for products.
- Add a wishlist feature for users.
- Optimize performance for large product catalogs.
- Add support for real-time order tracking.

---

## License

This project is open-source and available under the [MIT License](LICENSE).
