

# OpnTask - Inclusive Talent Exchange for Global Gig Work

OpnTask is a platform that connects informal workers from emerging economies to remote gig opportunities across various industries. Leveraging AI for skill assessment and blockchain for secure payments, OpnTask aims to provide an accessible platform for workers to showcase their skills and connect with global employers.

## Features
- **Worker Dashboard**: Allows workers to view and manage their profiles, job recommendations, applications, and portfolios.
- **Employer Dashboard**: Enables employers to post jobs, manage job listings, and handle applicant management.
- **Job Search and Application**: Provides a user-friendly interface for workers to search and apply for job opportunities.

## Technologies Used
- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Django REST Framework
- **AI Tools**: Tabiya’s Compass & Classifier 
- **Blockchain**: Smart Contracts & Reputation Tracking (to be integrated)

## Getting Started

### Prerequisites
- Node.js and npm
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/svmueli/optask.git
   cd optask
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the project in the browser.

### Project Structure
```
optask-frontend/
├── public/
│   ├── images/
│   ├── icons/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/         # Common components like Navbar and Footer
│   │   ├── auth/           # Authentication components (LoginForm, RegisterForm)
│   │   ├── worker/         # Worker-specific components (Profile, Portfolio, etc.)
│   │   └── employer/       # Employer-specific components (JobPostForm, JobManagement, etc.)
│   ├── pages/
│   │   ├── api/            # API routes (optional)
│   │   ├── auth/           # Login and registration pages
│   │   ├── worker/         # Worker dashboard and job search pages
│   │   └── employer/       # Employer dashboard pages
│   ├── styles/             # Global styles and Tailwind CSS configuration
│   └── utils/              # Helper functions and utilities
├── .gitignore
├── next.config.js
├── package.json
└── tailwind.config.js
```

### Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

### License
This project is licensed under the MIT License.

### Acknowledgments
- Tabiya Tools for AI-powered skill assessment and job matching.
- Open-source libraries and frameworks used in this project.



