# 📋DAY 5 TASK: "User Directory" App — API Fetching & UI Updates

## 🎯Objective:
Build a User Directory app in React that demonstrates:

• **Axios** (HTTP requests)

• **fetch** (browser-native API)

• Conditional rendering

• Dynamic user interface updates

## 🔥Requirements
### 1. API Fetching:
### 👉 Fetch users from the public API:
```
https://jsonplaceholder.typicode.com/users
```
Display each user with the following:

• **Name**

• **Email**

• **City** (from address.city)

### 2. Use Both fetch and Axios:
• On page load: Fetch and display 5 users using fetch.

• On button click ("Load More Users"): Fetch the next 5 users using axios.

✔ This demonstrates understanding of both methods.

## 🚀 To Run the App
```
npm install              # Install dependencies
npm run dev              # Start development server
# Open http://localhost:5173
```

## 📱 Features to Try

1.Initial Load - 5 users display automatically using fetch()

2.Search Users - Type to filter by name or email

3.Show Details - Click button to reveal phone & website

4.Load More - Click to fetch next 5 users using Axios

5.Responsive - Resize browser to see mobile layout


## 🎁Bonus (Optional)
• Add a "**View Details**" button on each user card that toggles more info:

•  **Phone**

•  **Website**

• Add **loading** and **error** UI states:

• e.g., “Loading...”, “Failed to fetch users.”

• Implement **pagination-style loading** (5 users at a time).

• Add a **search input** to filter users by name or email.

## 🖼 UI Layout Sketch:
```
📚 User Directory App

🔍 [ Search Users... ]

------------------------------------------------

👤Name: Leanne Graham

📧 Email: Sincere@april.biz

🏙 City: Gwenborough

[ View Details ]

📞 Phone: 1-770-736-8031 x56442

🌐 Website: hildegard.org
------------------------------------------------

[ Load More Users ]
```

## 🗺 Visual Structure Flow

```
|-------------------------------|
| User Directory App |
|-------------------------------|
| [Search Input] |
|-------------------------------|
| List of Users |
|-------------------------------|
| [Load More Users Button] |
|-------------------------------|
```

## ✅Summary Table
**Topic** - **Applied In**

**fetch** - Initial API call (first 5 users)

**Axios** - "Load More" fetch (next 5 users)