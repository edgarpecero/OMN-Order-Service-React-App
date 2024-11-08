# OrderWave Frontend

**OrderWave Frontend** is the client-side application for the Order Management and Notification platform, an e-commerce solution designed for efficient order tracking and notification management. This React app enables users to interact with order data, view real-time status updates, and receive notifications based on order progression. The project emphasizes scalability, performance, and a modern user experience.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

The OrderWave Frontend is built with **React** and integrates seamlessly with the backend microservices to manage customer orders and notifications. Deployed with a CI/CD pipeline and configured for scalable cloud-based infrastructure, the platform ensures reliability and high performance.

This frontend app interfaces with AWS services (like SNS for notifications) and connects to a backend powered by **Java Spring Boot**. The platform provides real-time updates on order statuses and notification services to keep customers informed.

## Features

- **Order Tracking**: View and monitor order status in real-time.
- **Notifications**: Receive updates based on order status changes (e.g., Processing, Shipped, Delivered, Cancelled).
- **Responsive UI**: Optimized for both desktop and mobile.
- **Automated CI/CD**: Integrated GitHub Actions for continuous deployment and quality assurance.
- **Code Quality**: Linting, unit tests, and SonarQube integration for maintaining high standards.

## Project Structure

```plaintext
src/
├── components/          # Reusable UI components
├── pages/               # Application pages (e.g., OrderDetails, NotificationView)
├── services/            # API service and backend communication
├── hooks/               # Custom React hooks for state and effects
├── utils/               # Utility functions and helpers
└── styles/              # Global and component-specific styles
