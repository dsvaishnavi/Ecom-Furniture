Furniture website
# UrbanNest - Furniture Website

Welcome to **UrbanNest**, a modern web application crafted for discovering and purchasing stylish furniture. This project is built using React for the frontend and features a clean, user-friendly interface.

## Features

- **User Authentication:** Sign up, sign in, and OTP verification.
- **Furnishing Discovery:** Browse a wide range of furniture items.
- **Dynamic Search:** Search for furniture items powered by the Unsplash API.
- **Modern UI:** Responsive, mobile-friendly design.
- **Secure Sign Up Flow:** Robust form with validation for fields like username, email, password, phone, address, pin, state, and city.

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **API:** [Unsplash API](https://unsplash.com/developers) for fetching furniture images
- **Routing:** React Router
- **State Management:** useState, useNavigate hooks

## Getting Started

### Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/urbannest.git
    cd urbannest
    ```

2. **Install dependencies:**
    ```bash
    cd client
    npm install
    ```

3. **Environment Variables:**
    - Make sure you have a `.env` file in your `client/` directory:

      ```
      VITE_APP_UNSPLASH_API = https://api.unsplash.com/search/photos?query=furniture&per_page=18&client_id=YOUR_UNSPLASH_ACCESS_KEY
      ```

    Replace `YOUR_UNSPLASH_ACCESS_KEY` with your Unsplash API key.

4. **Run the app:**
    ```bash
    npm run dev
    ```

## Project Structure

```
client/
  ├── public/
  ├── src/
      ├── pages/
          ├── Signup.jsx
          └── ...
      ├── components/
      ├── utils.js
      ├── App.jsx
  ├── .env
  └── ...
```

## Usage

- **Sign Up:** Register a new account by filling all required details.
- **Browse Furniture:** View and search for items on the homepage.
- **Image Search:** Powered by Unsplash (see `.env` file for API configuration).

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is open-source under the MIT License.

---

