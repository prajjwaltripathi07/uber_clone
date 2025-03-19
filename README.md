# Uber Clone

This project is a clone of the Uber application, built using React for the frontend. It includes features for both users and captains, such as login, signup, protected routes, and riding functionalities.

## Features

- User and Captain authentication (login/signup).
- Protected routes for both users and captains.
- Separate dashboards for users and captains.
- Riding functionality for both users and captains.

## Tech Stack

- **Frontend**: React, React Router
- **Styling**: Remix Icon for icons
- **Backend**: (To be integrated, if applicable)

## Folder Structure

```
uber_clone/
├── frontend/
│   ├── src/
│   │   ├── pages/       # Contains all page components
│   │   ├── App.jsx      # Main application file
│   │   ├── index.js     # Entry point for React
│   └── public/          # Static assets
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js installed on your system.
- A package manager like `npm` or `yarn`.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/uber_clone.git
   cd uber_clone/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Available Routes

- `/` - Start page
- `/login` - User login
- `/signup` - User signup
- `/home` - User home (protected)
- `/riding` - User riding page
- `/captain-login` - Captain login
- `/captain-signup` - Captain signup
- `/captain-home` - Captain home (protected)
- `/captain-riding` - Captain riding page

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
