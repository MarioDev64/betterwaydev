# React Native Authentication App

This is a React Native application that demonstrates user authentication and role-based access control. The app uses React Navigation for routing, React Native Paper for UI components, and Expo Secure Store for secure storage of user data.

## Features

- User authentication (login/logout)
- Role-based access control
- Secure storage of user sessions
- Tab-based navigation
- Restricted access screens

## Project Structure

The project is organized as follows:

- `App.tsx`: The main entry point of the application
- `src/@types`: TypeScript type definitions
- `src/contexts`: React contexts (AuthContext)
- `src/hooks`: Custom React hooks (useAsync, useForm, useToggle)
- `src/navigation`: Navigation setup (AppNavigator)
- `src/screens`: Individual screen components
- `src/components`: Reusable UI components (not shown in the provided code)

## Screens

1. **Login Screen**: Allows users to log in
2. **Screen X**: Accessible to non-logged users and member1 users
3. **Screen Y**: Accessible to logged-in users (member1 and member2)
4. **Screen Z**: Accessible to all users, with different content based on user type
5. **Restricted Screen**: Shown when a user doesn't have access to a particular screen

## User Types

The app supports two types of users:

1. `member1`: Has access to all screens
2. `member2`: Has limited access (cannot access Screen X)

## Authentication

The app uses a mock authentication system for demonstration purposes. In a real-world scenario, you would replace this with actual API calls to a backend server.

### Test Users

For testing purposes, you can use the following credentials:

1. Username: `user1`, Password: `password1` (member1 type)
2. Username: `user2`, Password: `password2` (member2 type)

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install` or `yarn install`
3. Start the Expo development server: `expo start`
4. Use an emulator or scan the QR code with the Expo Go app on your physical device to run the application

## Dependencies

- React Native
- Expo
- React Navigation
- React Native Paper
- Expo Secure Store

## Notes

- This app is for demonstration purposes and uses mock data for authentication. In a production environment, you would need to implement proper backend integration and security measures.
- The app demonstrates the use of React hooks, context for state management, and custom hooks for reusable logic.
- The UI is built using React Native Paper components for a consistent and modern look.

## Future Improvements

- Implement actual API integration for authentication
- Add user registration functionality
- Enhance error handling and user feedback
- Implement more complex role-based permissions
- Add unit and integration tests

Feel free to explore the code and use it as a starting point for your own authentication-based React Native applications!