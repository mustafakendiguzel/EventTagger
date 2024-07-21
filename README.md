# Event Photo Tagging Application

![App Screenshot](link_to_screenshot)

## Overview

Our project is an innovative event management application that allows users to create events and upload profile photos. The standout feature of our app is the ability to automatically tag users in event photos using advanced facial recognition technology.

## Features
- **Authorization:** Users can login and register to app via JWT token.
  
<br>

<p align="center" style="display: flex; justify-content: space-evenly;">
  <img src="https://github.com/user-attachments/assets/21f324b6-3cb4-4117-9f25-a747b534f252" width="300" height="600">
  <img src="https://github.com/user-attachments/assets/3329ae61-2f6e-46a4-b236-17d6a6e98c6a" width="300" height="600">
</p>

<br>

- **Event Creation:** Users can easily create and manage events.
- **Profile Photo Upload:** Users are required to upload a minimum of 5 profile photos upon registration for effective facial recognition.
- **Facial Recognition:** Our app uses state-of-the-art image processing algorithms to recognize and tag users in event photos.
- **Photo Tagging:** Event photos are scanned, and recognized faces are tagged with clickable coordinates that lead to the user's profile.
- **Interactive UI:** Users can click on tagged faces in photos to navigate directly to the corresponding profiles.


## How It Works

1. **User Registration and Photo Upload:**
   - Upon registration, users must upload at least 5 profile photos.
   - These photos are used to train our facial recognition model, ensuring high accuracy.

2. **Event Photo Upload and Processing:**
   - When an event photo is uploaded, our backend triggers a Python script for facial recognition.
   - The script analyzes the photo, identifies faces, and matches them against the trained profiles.

3. **Data Storage and Retrieval:**
   - Identified faces and their coordinates in the event photo are stored in a PostgreSQL database.
   - When the frontend requests photo data, it receives face coordinates and user IDs, allowing for interactive features.

## Technical Details

- **Backend:** Built with Node.js, providing a robust and scalable server-side application.
- **Facial Recognition:** Implemented using Python, leveraging powerful libraries such as OpenCV and dlib for accurate face detection and recognition.
- **Database:** PostgreSQL is used to store user data, event details, and facial recognition results.

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/yourrepository.git
   cd yourrepository
2. **Install Backend Dependencies:**
   ```bash
   cd backend
   npm install
3. **Set Up Python Environment::**
   ```bash
   cd backend
   npm install
4. **Configure PostgreSQL Database:::**
   - Set up your PostgreSQL database and update the connection details in the backend configuration file.  

5. **Configure PostgreSQL Database:::**
   ```bash
   cd backend
   npm install

   cd facial_recognition
   python main.py

## Usage

1. **Register and upload profile photos.**
2. **Create an event and upload event photos.**
3. **View tagged event photos and interact with them by clicking on faces to navigate to user profiles.

## Contributing

We welcome contributions to enhance the functionality and performance of our application. Please fork the repository and submit pull requests with detailed descriptions of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any inquiries or issues, please contact us at [mustafakendiguzel@gmail.com](mailto:mustafakendiguzel@gmail.com).





