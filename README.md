# Personal Portfolio with AI Chatbot

A modern, responsive personal portfolio website featuring an integrated AI-powered chatbot assistant. The portfolio showcases projects, skills, and background while allowing visitors to interactively learn more through intelligent conversational responses.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **AI Chatbot Assistant**: Interactive conversational agent capable of answering visitor questions about projects, experience, and background.
- **Project Showcase**: Highlights key projects with live demo links, repository access, and technical stack details.
- **Skills & Experience**: Visual overview of technical proficiencies, frameworks, tools, and career milestones.
- **Contact Integration**: Contact form and quick links to social media and professional profiles.

## Tech Stack

- **Frontend**: Modern Web Framework (e.g., React / Next.js / Vite)
- **Styling**: Tailwind CSS / Modern CSS Modules
- **AI / LLM Integration**: AI API integration (e.g., Gemini API, OpenAI API)
- **Deployment**: Vercel / Netlify / GitHub Pages

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or later)
- Package manager (`npm`, `yarn`, or `pnpm`)
- API key for your chosen AI provider

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env.local` file in the root directory and add your credentials:
   ```env
   AI_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) (or the port specified in terminal output) in your web browser.

## Project Structure

```text
├── public/          # Static assets and icons
├── src/
│   ├── components/  # Reusable UI components
│   ├── chatbot/     # AI chatbot interface and prompt handling
│   ├── styles/      # Global styling and design tokens
│   └── data/        # Portfolio content (projects, skills, experience)
├── .gitignore       # Git ignore rules
└── README.md        # Project documentation
```

## License

This project is licensed under the [MIT License](LICENSE).
