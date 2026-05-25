# EmailJS Configuration Guide

This document provides instructions on how to set up EmailJS for the blog subscription functionality.

## 1. Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create an account if you don't have one already
2. The free tier includes 200 emails per month, which should be sufficient for a personal blog

## 2. Configure Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service" and choose your preferred email provider (Gmail, Outlook, etc.)
3. Follow the provider-specific setup instructions
4. Name your service (e.g., "blog_notifications")
5. Note down the **Service ID** (it will look something like "service_abc123")

## 3. Create Email Template

1. In your EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Give your template a name (e.g., "Subscription Alert")
4. Configure the following template fields:

### Template Fields

| Field | Value |
|-------|-------|
| **To Email** | Your personal email address (e.g., kristina@example.com) |
| **From Name** | Research Chronicles |
| **From Email** | notifications@researchchronicles.com (or any email you own) |
| **Reply To** | {{subscriber_email}} (uses the subscriber's email) |
| **Subject** | New Subscription: Research Chronicles Blog |

5. Paste the content from `subscription-email-template.html` into the template body
6. Save the template and note down the **Template ID** (it will look something like "template_abc123")

## 4. Update Code with Your Credentials

1. In `2025-06-11-why_be_a_researcher-enhanced.html`, replace:
   ```javascript
   emailjs.init("user_abc123def456");
   ```
   with your actual **User ID** from the EmailJS dashboard (found in Account > API Keys)

2. In `subscription.js`, update:
   ```javascript
   emailjs.send(
       "service_abc123", // EmailJS Service ID
       "template_subscription_alert", // EmailJS Template ID
       {
           // Template variables
       }
   )
   ```
   with your actual **Service ID** and **Template ID**

## 5. Testing the Subscription System

1. Open your blog post in a browser
2. Test the subscription form with a valid email address
3. Check your email inbox for the notification
4. Verify that the template variables are properly populated

## 6. Troubleshooting

If emails are not being sent:

1. Check the browser console for any errors
2. Verify that your EmailJS credentials are correct
3. Make sure your email service is properly configured in EmailJS
4. Check if you've reached your monthly email limit
5. Ensure your email template is correctly set up with all variables

## Template Variables Used

- `{{subscriber_email}}` - The email address of the new subscriber
- `{{subscription_date}}` - The date and time of the subscription
- `{{source}}` - Where the subscription came from (blog post title)
- `{{to_name}}` - Your name (recipient of the notification)
- `{{from_name}}` - Name that appears as the email sender
