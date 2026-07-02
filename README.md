# Smith Family Reunion Website

A beautiful, country-style website for organizing the Smith Family Reunion! This website features a modern design with all the essentials for planning a memorable family gathering.

## 🌾 Features

### ✨ Core Functionality
- **Countdown Timer**: Live countdown to the reunion date with days, hours, minutes, and seconds
- **RSVP System**: Easy-to-use form for family members to confirm attendance and provide dietary restrictions
- **Potluck Sign-Up**: Coordinate potluck contributions so everyone knows who's bringing what
- **Activities Sign-Up**: Allow volunteers to help organize games, music, and other activities
- **Photo Gallery**: Photo upload feature for sharing reunion memories

### 🎨 Design Highlights
- Country/rustic aesthetic with warm colors and elegant typography
- Responsive design that works beautifully on desktop, tablet, and mobile devices
- Smooth animations and hover effects
- Professional gradient backgrounds and styling

## 📁 File Structure

```
smith-reunion/
├── index.html       # Main HTML file with all forms and content
├── styles.css       # Complete CSS styling (country theme)
├── script.js        # JavaScript for interactivity and form handling
└── README.md        # This file
```

## 🚀 Getting Started

### Local Setup
1. Clone this repository or download the files
2. Open `index.html` in your web browser
3. No server or installation required!

### Deployment
This website can be deployed to:
- **GitHub Pages**: Free hosting directly from your repository
- **Netlify**: Easy drag-and-drop deployment
- **Vercel**: Simple deployment from Git
- **Any web hosting service**: Just upload the three files

## ⚙️ Configuration

### Update the Reunion Date
Edit the date in `script.js`:
```javascript
const targetDate = new Date('August 16, 2025 12:00:00').getTime();
```

### Update Contact Information
Replace email addresses throughout the files:
- `smith.reunion@example.com` - Main email
- `smith.reunion.photos@example.com` - Photo submissions

### Customize Content
Edit `index.html` to update:
- Event title and description
- Date and location
- Any other event details

## 📝 Form Handling

### Current Setup
Forms currently:
- Display success notifications when submitted
- Store submissions in browser's local storage (for demonstration)
- Log data to the browser console

### Connecting to Backend
To make forms fully functional, connect them to your backend:

```javascript
// Example: Send data to your backend
fetch('/api/submit-form', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch((error) => console.error('Error:', error));
```

## 🖼️ Photo Upload

The photo upload feature is ready to integrate with:
- **Firebase Storage**: Easy cloud storage for images
- **Amazon S3**: Scalable image storage
- **Cloudinary**: Image hosting and management
- **Direct server upload**: Save to your own web server

## 📱 Browser Compatibility

Works on:
- Chrome/Chromium (latest versions)
- Firefox (latest versions)
- Safari (latest versions)
- Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)

## 🎨 Color Scheme

The website uses a warm, country aesthetic:
- **Primary Brown**: `#8B4513` - Main headers and accents
- **Secondary Brown**: `#D2691E` - Secondary elements
- **Gold Accent**: `#DAA520` - Highlights
- **Wheat Background**: `#F5DEB3` - Primary background

## 📧 Form Features

### RSVP Form
- Name
- Email
- Number of guests
- Dietary restrictions
- Personal message

### Potluck Sign-Up
- Name
- Dish being brought
- Number of servings
- Special notes

### Activities Sign-Up
- Name
- Activity type (Games, Music, Setup, etc.)
- Activity details

### Photo Upload
- Name and email
- Multiple photo selection
- Photo captions/descriptions
- File size tracking

## 🔧 Customization Tips

### Add More Activities
Edit the select options in the Activities form in `index.html`:
```html
<option value="your-activity">Your Activity Name</option>
```

### Modify Colors
Update CSS variables at the top of `styles.css`:
```css
:root {
    --primary-color: #8B4513;
    --secondary-color: #D2691E;
    /* etc. */
}
```

### Change Typography
The website uses Georgia and Garamond fonts. To change fonts, modify `styles.css`:
```css
font-family: 'Your Font', serif;
```

## 💡 Ideas for Enhancement

- Integrate with Google Forms or Typeform for form submissions
- Add a simple gallery page for past reunion photos
- Connect to a mailing list service (Mailchimp) for updates
- Add a family tree viewer
- Include an event schedule/agenda
- Add ticket generation/QR codes
- Integrate with Google Calendar

## 📞 Support

For issues or questions:
1. Check that all three files (index.html, styles.css, script.js) are in the same directory
2. Clear your browser cache if styles don't update
3. Check browser console (F12) for any error messages
4. Test in a different browser to rule out browser-specific issues

## 📄 License

This website is provided as-is for family reunion use. Feel free to modify and customize as needed!

---

Made with ❤️ for the Smith Family Reunion 2025
