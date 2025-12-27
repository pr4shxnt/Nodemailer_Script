# Email Automation System

A robust and customizable Node.js application designed for automated, personalized cold outreach. This system uses `nodemailer` to send professional HTML emails to a list of recipients, making it perfect for freelancers, agencies, and businesses looking to scale their outreach efforts.

## Features

- **Bulk Email Sending**: Send emails to multiple recipients automatically.
- **Personalization**: Dynamically insert recipient names into the email body.
- **HTML Templates**: Send beautiful, responsive HTML emails instead of plain text.
- **Professional Design**: Includes a pre-built, professional email template with social media integration.
- **Rate Limiting**: Built-in delay between emails to prevent being flagged as spam.
- **Secure Configuration**: Uses environment variables to keep your credentials safe.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed (v12 or higher recommended).
- **Gmail Account**: This project is configured for Gmail, but can be adapted for other SMTP services.
- **App Password**: If using Gmail, you must generate an App Password (do not use your login password).

## Installation

1.  **Clone the Repository** (if applicable) or navigate to the project directory.

2.  **Install Dependencies**:
    Run the following command to install the required packages (`nodemailer`, `dotenv`):
    ```bash
    npm install
    ```

## Configuration

### 1. Environment Variables

Create a file named `.env` in the root directory. This file will store your sensitive credentials.

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

- Replace `your_email@gmail.com` with your Gmail address.
- Replace `your_app_password` with your 16-character Gmail App Password.

### 2. Recipients List

Create or open the `recipients.json` file. This file contains the list of people you want to email.

Each object in the list should include a `name` and an `email` field.


> **Note**: This file is included in `.gitignore` to protect your contact list. You will need to create it manually if you cloned the repository.

Format it as a JSON array of objects:

```json
[
  {
    "email": "client1@example.com",
    "name": "John Doe"
  },
  {
    "email": "client2@company.com",
    "name": "Jane Smith"
  }
]
```

### 3. Email Template

The email content is stored in `message.html`.

- **Content**: Edit the HTML to customize your message.
- **Placeholders**: Use `{name}` anywhere in the text, and it will be replaced by the recipient's name from `recipients.json`.
- **Styling**: You can modify the CSS within the `<style>` tags to match your brand.
- **Social Media**: Update the `href` links in the footer to point to your actual social media profiles (LinkedIn, GitHub, Twitter, Instagram).

## Usage

Once everything is configured, run the script to start sending emails:

```bash
node index.js
```

The script will:

1.  Read the list of recipients.
2.  Read the HTML template.
3.  Iterate through each recipient, personalize the message, and send the email.
4.  Log the status of each email to the console.
5.  Wait for 1 second between emails to be polite to the mail server.

## Troubleshooting

- **Authentication Failed**: Ensure your `EMAIL_PASS` is correct and does not contain spaces. Make sure you are using an App Password, not your Google account password.
- **Rate Limiting**: If sending a large volume of emails, Google may temporarily block you. The script includes a 1-second delay, but for very large lists, consider using a dedicated email service provider (e.g., SendGrid, AWS SES).

## License

This project is open source and available for personal and commercial use.
