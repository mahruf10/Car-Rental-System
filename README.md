# 🚗 Vehicle Rental System

## 🎯 Project Overview

A backend API for a vehicle rental management system that handles:
- **Vehicles** - Manage vehicle inventory with availability tracking
- **Customers** - Manage customer accounts and profiles
- **Bookings** - Handle vehicle rentals, returns and cost calculation
- **Authentication** - Secure role-based access control (Admin and Customer roles)

---

## 🛠️ Technology Stack

- **Node.js** + **TypeScript**
- **Express.js** (web framework)
- **PostgreSQL** (database)
- **bcrypt** (password hashing)
- **jsonwebtoken** (JWT authentication)

---
## 🔐 Authentication & Authorization

### User Roles
- **Admin** - Full system access to manage vehicles, users and all bookings
- **Customer** - Can register, view vehicles, create/manage own bookings
---

### Vehicles
| Method | Access | Description |
|--------|--------|-------------|
| POST | Admin only | Add new vehicle with name, type, registration, daily rent price and availability status |
| GET | Public | View all vehicles in the system |
| GET |  Public | View specific vehicle details |
| PUT |  Admin only | Update vehicle details, daily rent price or availability status |
| DELETE | Admin only | Delete vehicle (only if no active bookings exist) |

---

### Users
| Method | Access | Description |
|--------|--------|-------------|
| GET | Admin only | View all users in the system |
| PUT | Admin or Own | Admin: Update any user's role or details<br>Customer: Update own profile only |
| DELETE | Admin only | Delete user (only if no active bookings exist) |

---

### Bookings
| Method | Access | Description |
|--------|--------|-------------|
| POST |  Customer or Admin | Create booking with start/end dates<br>• Validates vehicle availability<br>• Calculates total price (daily rate × duration)<br>• Updates vehicle status to "booked" |
| GET | Role-based | Admin: View all bookings<br>Customer: View own bookings only |
| PUT | Role-based | Customer: Cancel booking (before start date only)<br>Admin: Mark as "returned" (updates vehicle to "available")<br>System: Auto-mark as "returned" when period ends |

---ings only |
| PUT | Role-based | Customer: Cancel booking (before start date only)<br>Admin: Mark as "returned" (updates vehicle to "available")
---
