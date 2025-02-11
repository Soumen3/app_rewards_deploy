# Social Rewards

Social Rewards is a web application that allows users to complete tasks. The application includes an admin panel for managing apps and tasks, as well as a user dashboard for tracking progress and managing tasks.

## Features

- User registration and login
- Admin panel for managing apps and tasks
- User dashboard for tracking points and completed tasks
- Task completion with screenshot upload
- Dark theme for a modern look and feel

## Technologies Used

- Django (Backend)
- Django REST Framework (API)
- React (Frontend)
- Tailwind CSS (Styling)
- Heroicons (Icons)

## Installation

### Backend

1. Clone the repository:
    ```bash
    git clone https://github.com/Soumen3/app-add-task.git
    cd app-add-task
    ```

2. Create a virtual environment and activate it:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the required packages:
    ```bash
    pip install -r requirements.txt
    ```

4. Apply the migrations:
    ```bash
    python manage.py migrate
    ```

5. Create a superuser:
    ```bash
    python manage.py createsuperuser
    ```

6. Run the development server:
    ```bash
    python manage.py runserver
    ```

### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install the required packages:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:5173/` 
2. Login with admin credentials to access admin panel.
3. Use the admin panel to create apps and tasks.
4. Register a new user and log in to start completing tasks and earning points.

## Folder Structure

```
social_rewards/
├── core/
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AdminPanel.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── dashboard/
│   │   │   │   ├── CompleteTask.jsx
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── Points.jsx
│   │   │   │   ├── Profile.jsx
│   │   │   │   └── Tasks.jsx
│   │   ├── utils/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...other files
│   ├── package.json
│   └── ...other files
├── social_rewards/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── manage.py
└── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.





<h1 style="color:#0b5cb2">Deployment</h2>

## Deployment

The backend of the application is deployed on PythonAnywhere, and the frontend is deployed on Vercel.

### Backend Deployment on PythonAnywhere

1. Sign up or log in to [PythonAnywhere](https://www.pythonanywhere.com/).
2. Create a new web app and choose Django as the framework.
3. Clone the repository into your PythonAnywhere account:
    ```bash
    git clone https://github.com/Soumen3/app_rewards_deploy.git
    cd app_rewards_deploy
    ```
4. Create a virtual environment and install the required packages:
    ```bash
    python -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    ```
5. Configure the web app to use the virtual environment and set the working directory to the project folder.
6. Apply the migrations and create a superuser:
    ```bash
    python manage.py migrate
    python manage.py createsuperuser
    ```
7. Update the `settings.py` file to configure the CORS configarations and allowed hosts.
8. change the wsgi and env settings of web
9. Reload the web app on PythonAnywhere.

### Frontend Deployment on Vercel

1. Sign up or log in to [Vercel](https://vercel.com/).
2. Import the frontend project from your GitHub repository.
3. Configure the build settings:
    - Build Command: `npm run build`
    - Output Directory: `build`
4. Deploy the project.
5. Vercel will provide a URL where your frontend is hosted.