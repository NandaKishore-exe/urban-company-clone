# Urban Company Clone

A modern, responsive React.js web application that mimics the Urban Company experience with home services booking functionality.

## Features

### ✅ Core Features
- **4 Home Services**: AC Repair, TV Repair, Home Cleaning, Washing Machine Repair
- **Location Picker**: HTML5 Geolocation with manual address input
- **Cart Functionality**: Add, remove, and update quantities
- **Stripe Payment Integration**: Simulated payment processing
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### ✅ Pages & Components
1. **Home Page**
   - Hero section with location picker
   - Service cards with "Add to Cart" functionality
   - Customer testimonials
   - Promotional banners
   - Statistics section

2. **Cart Page**
   - Display cart items with images and details
   - Quantity adjustment controls
   - Remove items functionality
   - Order summary with subtotal and service fee
   - "Proceed to Checkout" button

3. **Checkout Page**
   - Customer information form (name, email, phone, address)
   - Simulated Stripe payment form
   - Order summary
   - Payment confirmation screen

4. **Navigation**
   - Responsive navbar with logo and links
   - Cart icon with item count
   - Mobile hamburger menu

### ✅ Technical Features
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Router DOM** for navigation
- **React Context API** for cart state management
- **Lucide React** for icons
- **HTML5 Geolocation** for location services

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd urban-company-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx     # Navigation bar
│   ├── Footer.tsx     # Footer component
│   ├── ServiceCard.tsx # Service display card
│   └── LocationPicker.tsx # Location selection
├── pages/              # Page components
│   ├── Home.tsx       # Homepage
│   ├── Cart.tsx       # Shopping cart
│   └── Checkout.tsx   # Checkout process
├── context/            # React Context
│   └── CartContext.tsx # Cart state management
├── types/              # TypeScript interfaces
│   └── index.ts       # Type definitions
└── App.tsx            # Main app component
```

## Features in Detail

### Location Picker
- **Manual Input**: Users can type their address
- **Current Location**: Uses HTML5 Geolocation API
- **Location Storage**: Saves selected location in state
- **Error Handling**: Graceful fallback for unsupported browsers

### Cart Management
- **Add to Cart**: One-click service addition
- **Quantity Control**: Increase/decrease item quantities
- **Remove Items**: Delete items from cart
- **Real-time Total**: Automatic price calculation
- **Persistent State**: Cart maintained across page navigation

### Payment Integration
- **Stripe Simulation**: Mock payment processing
- **Form Validation**: Required field validation
- **Order Confirmation**: Success screen with order details
- **Security Notice**: Payment security information

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Desktop Layout**: Enhanced layout for larger screens
- **Touch-Friendly**: Optimized for touch interactions
- **Accessibility**: Proper ARIA labels and semantic HTML

## Customization

### Adding New Services
1. Update `public/services.json` with new service data
2. Add service images to the public folder
3. Update service categories if needed

### Styling Changes
- Modify `src/index.css` for global styles
- Update `tailwind.config.js` for theme customization
- Edit component-specific styles in individual files

### Payment Integration
To integrate real Stripe payments:
1. Install Stripe packages: `npm install @stripe/stripe-js @stripe/react-stripe-js`
2. Add your Stripe publishable key
3. Replace the simulated payment form with Stripe Elements
4. Implement payment intent creation on your backend

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Router DOM**: Client-side routing
- **Lucide React**: Beautiful icons
- **HTML5 Geolocation**: Location services

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes. Please respect the original Urban Company brand and services.

## Support

For questions or issues, please open an issue in the repository.
