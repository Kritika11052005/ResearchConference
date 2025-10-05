# ResearchConference

## Project Overview
ResearchConference is a modern and responsive web application designed for hosting and managing academic or professional conferences. The platform provides detailed information about the event, including speakers, tracks, submission guidelines, and more. It is built with a focus on user experience, accessibility, and performance.

## Features
- **Dynamic Navigation Bar**: Responsive and theme-aware navigation bar with dropdown menus.
- **Countdown Timer**: Displays the time remaining until the conference begins.
- **Speaker Profiles**: Uniform cards showcasing speaker details.
- **Tracks Page**: Detailed information about conference tracks.
- **Submission Guidelines**: Clear instructions for paper submissions.
- **Contact Page**: Organizer details with a professional layout.
- **Dark/Light Mode**: Theme toggle for user preference.

## Tech Stack
- **Frontend**: React.js, TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Hosting**: Vercel

## Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)

## Installation
Follow these steps to clone and run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/researchconferencemuj-ctrl/ResearchConference.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd ResearchConference
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. **Open in Browser**:
   The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Deployment
The project is hosted on Vercel. To deploy your own version:
1. Create a Vercel account at [vercel.com](https://vercel.com/).
2. Link your GitHub repository to Vercel.
3. Configure the build settings (default settings for Vite work).
4. Deploy the project.

## Folder Structure
```
ResearchConference/
├── public/                 # Static assets (images, etc.)
├── src/                    # Source code
│   ├── components/         # Reusable components
│   ├── contexts/           # Context API for state management
│   ├── pages/              # Page components
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── package.json            # Project metadata and scripts
├── tailwind.config.js      # TailwindCSS configuration
├── vite.config.ts          # Vite configuration
└── README.md               # Project documentation
```

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

Happy coding! 🎉
