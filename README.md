# Next Music - Collaborative Music Streaming App


## Overview

Next Music allows users to:
- Stream music in real-time
- Create and manage playlists
- Upvote songs to change the queue order
- Collaborate with others on playlist creation

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Features

- **Music Streaming**: Stream music directly from the browser
- **Dynamic Queue**: Songs with more upvotes play sooner
- **Playlist Management**: Create, edit, and share playlists
- **User Accounts**: Save preferences and favorite tracks
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **State Management**: React Context API
- **Audio Processing**: Web Audio API
- **Authentication**: NextAuth.js
- **Database**: Postgresql

## Project Structure

```
next-music/
├── app/             # Next.js app directory
├── components/      # Reusable React components
├── lib/            # Utility functions and helpers
├── public/         # Static assets
└── styles/         # Global styles
```

## Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```
# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret

# Your other API keys
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Thanks for Considering