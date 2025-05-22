# HobbyHub: A Local Hobby Group Organizer

[PassionPoint Live Url](https://passion-point-project.web.app/)

---

## Project Overview

HobbyHub is a social platform where users can discover, join, and create local hobby-based groups such as book clubs, hiking crews, painting circles, and more. The platform encourages community building around shared interests and passions, making it easier to engage with like-minded people.

---

## Features

- **User Authentication**  
  Secure email/password login and registration with password strength validation. Social login via Google or GitHub (choose one).

- **Group Management**  
  Users can create new hobby groups, view all existing groups, and join groups that are still active. Groups past their start date are marked inactive and cannot be joined.

- **Private Routes & User Profiles**  
  Access to create groups, view personal groups, and group details is restricted to logged-in users. Users can see their own groups and update or delete them.

- **Responsive Design**  
  Fully responsive UI for mobile, tablet, and desktop devices using Tailwind CSS.

- **Interactive UI Elements**  
  Includes smooth animations, toast notifications for success/error messages, and tooltips to enhance user experience.

- **Dark/Light Theme Toggle**  
  Users can switch between dark and light themes on the home page.

- **Error Handling & Loading States**  
  Displays loading spinners and friendly 404 error pages for better user experience.

- **Environment Variables**  
  Sensitive keys (Firebase config, MongoDB credentials) are stored securely using environment variables.

---

## Tech Stack

- **Frontend:** React, React Router, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Atlas)  
- **Authentication:** Firebase Authentication  
- **Hosting:**  
  - Client: Firebase Hosting  
  - Server: Vercel   

---

## Installation & Setup

1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/hobbyhub.git
