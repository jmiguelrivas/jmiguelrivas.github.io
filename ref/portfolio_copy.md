# TeamUp
Revolutionize Fitness Management with TeamUp
TeamUp is the premier fitness management software designed to empower service providers in franchises, studios, gyms, and boxes. Trusted by over 4,000 customer-focused businesses in 40+ countries, TeamUp delivers the tools you need to streamline operations, engage members, and drive growth—all from one robust web-based platform.

## Provider App
- Vue3, UnoCss, Storybook
- technologies been use

Advanced Calendar Management:
Seamlessly organize and schedule classes, courses, and appointments. Manage your team’s availability, set recurring schedules, and handle last-minute changes effortlessly.

Comprehensive Reporting Tools:
Gain insights into your business with detailed reports, including:

- Attendance tracking
- Instructor hours and pay rates
- Performance of classes and appointments
- Customer membership trends
- Signed waivers and agreements
- On-Demand Content Management

Flexible Membership Management:
Customize membership plans, set pricing, and provide options that cater to your clients’ needs. From flexible drop-ins to long-term subscriptions, manage it all from one intuitive platform.

Penalty Management for No-Shows:
Reduce missed appointments with automated penalties for members who fail to attend scheduled classes. Keep your schedule optimized and ensure accountability among members.

> preview of instructor table with filter
> preview of some large form / maybe penalties

## Consumer App
- Vue3, UnoCss, Storybook

Stay in control of your fitness journey with a powerful and intuitive app designed to simplify your experience. Whether you’re an individual member or managing a family’s fitness needs, this app offers everything you need to manage profiles, memberships, payments, and more—all in one place.

Why You’ll Love This App:

Family-Centric Design: Perfect for families, allowing a single manager to oversee profiles, memberships, and payments.
Convenience at Your Fingertips: Manage everything from payments to class schedules from your phone or tablet.
Seamless Integration: Sync your memberships, notifications, and on-demand content for a truly cohesive experience.
Built for Your Needs: A smart, intuitive platform that adapts to your fitness lifestyle.
Your Fitness Journey, Simplified
This app is your ultimate fitness companion, putting control, convenience, and connection in the palm of your hand. Manage your family’s fitness experience effortlessly and stay focused on achieving your goals.

Key Features for Members:

Personalized Profile Management:
Easily manage your profile, update your information, and customize your preferences. Family managers can oversee and update profiles for all family members.

Streamlined Membership Management:
View, track, and manage all active memberships for you and your family, ensuring everyone has access to the classes and services they need.

Flexible Payment Options:
Handle payments effortlessly with support for multiple methods, including cash and credit card. Keep track of payment receipts and view pending payments to stay on top of your account.

Document Management:
Sign, review, and store important documents such as forms and waivers directly in the app, making it easy to stay compliant with requirements.

Stay Connected with Notifications:
Customize your notifications to ensure you never miss an update, class reminder, or important announcement.

Personalized Calendar Management:
Organize your schedule by booking classes, appointments, or on-demand sessions. Keep track of all your upcoming activities with a user-friendly calendar.

On-Demand Content Access:
Stream and enjoy your favorite on-demand fitness content anytime, anywhere. Save your top picks to a personalized favorites list for quick access.

> on-demand index

## DaysmartVueComponents
- Vue3, UnoCss, Vitest, Storybook, WebComponents, Node Module

This npm module serves as a centralized library for all Vue 3 components shared across applications within the organization. Designed to promote consistency and efficiency, the module also includes shared composables and utilities to streamline development workflows.

Key Features:

Reusable Vue 3 Components: A robust library of stylized components, ensuring a unified design system across all apps.
Styling with UnoCSS: Lightweight and customizable utility-first CSS framework for seamless component styling.
Unit Testing with Vitest: Ensures reliable and high-quality components through fast and modern testing capabilities.
Documentation with Storybook: A fully integrated Storybook setup for visually showcasing and documenting components in isolation.
Shared Composables and Utilities: Includes reusable logic and utility functions to reduce duplication and simplify development.
Why Use This Module?

Streamline Development: Eliminate redundancy by sharing common components, composables, and utilities.
Consistency Across Apps: Maintain a cohesive design system with standardized styling and functionality.
Robust Testing and Documentation: Confidently develop and deliver high-quality components with unit tests and a living documentation system.
This module is a must-have for organizations aiming to accelerate development, ensure quality, and maintain uniformity across Vue 3 projects.

> storybook and vitest results

### SpiritCode

This web component provides a visually appealing and interactive way to display code snippets for JavaScript, HTML, and CSS. Designed to enhance the standard <code> tag, it adds syntax highlighting with vibrant colors, making code easier to read and understand at a glance.

Key Features:
- Seamless Integration: Can be easily used within any web project, requiring minimal setup.
- Perfect for displaying code examples in documentation or tutorials.

-------------------------------------------------------------------------------------------------------------------------------

# Enovational

Enovational pushes the boundaries between technology, user experience, and design by building beautiful, user-friendly products that have achieved international recognition and acclaim. Our products span a wide spectrum of audiences, technologies, and platforms, from consumer facing mobile apps to large government and enterprise custom web applications.

## Formability
- Vue2, SCSS, Cucumber, Ruby on Rails

Formability is a modern, centralized web application built with Vue2, SCSS, Cucumber, and Ruby on Rails, designed to revolutionize how agencies streamline public services.

With its no-code platform, Formability empowers users to:

- Build and manage forms effortlessly.
- Automate workflows for faster, more transparent processes.
- Generate customized documents branded to your organization.
- Manage records and data efficiently.
- Enable electronic signatures to eliminate paper-based delays.
- Access in-system reporting and analytics for process optimization.
- Fully compliant with 508 and WCAG2 accessibility standards, Formability fosters inclusivity while boosting productivity. By automating tasks and centralizing workflows, it helps agencies focus on delivering exceptional public service, improving constituent relationships, and eliminating inefficiencies.

Experience the future of agency operations with Formability — where simplicity meets powerful functionality.

### Popkern
- Vue2, SCSS, Ruby on Rails (Gem), Node Module

Popkern is a shared component and style library built with Vue2, SCSS, Ruby on Rails, as a Node module, designed to streamline design consistency across multiple applications within an organization.

Key Features:
- Centralized Component Library: Provides reusable Vue components and styles to ensure a consistent look and feel across apps.
- Visual Documentation: Integrated as a Ruby Gem, Popkern offers built-in visual documentation to showcase and preview components, making it easier for developers and designers to collaborate.
- Node Module Distribution: All code is packaged into a Node module, ensuring easy integration and updates across projects.
- Color Database with Contrast Testing: Includes a robust color database that dynamically tests contrast ratios for accessibility across six different backgrounds (three for light mode and three for dark mode), ensuring compliance with WCAG standards and delivering an inclusive user experience.
- Popkern serves as the backbone for unified design and development workflows, enhancing productivity and accessibility across the organization’s ecosystem.


#### Color Database
The Color Database is a structured array of classes where each class uses a constructor to expand and enrich color attributes. The constructor takes two parameters: the color’s name and its hexadecimal code.

For example, providing:
"Red Wine", "#660055"

Would produce the following attributes:

##### Name Properties:
titleName: "Red Wine"
pascalCase: "RedWine"
camelCase: "redWine"
snakeCase: "red-wine"

##### Color Properties:
red: <number>
green: <number>
blue: <number>
hue: <number>
saturation: <number>
lightness: <number>

##### Formatted Representations:
rgb: rgb(<number>, <number>, <number>)
hsl: hsl(<number>, <number>, <number>)

#### 3D Cube
The 3D Cube is a visualization tool designed to help designers better understand and manage the colors used in the application. By rendering colors in a 3D space, the cube provides an intuitive overview of color distribution and usage.

Key Benefits:

- Enables designers to visualize the current color palette within the app.
- Highlights unused colors to assist in defining new, balanced color sets.
- Offers an interactive preview to make color selection and refinement more efficient.
- This tool is particularly useful when introducing new colors, ensuring that all additions are thoughtfully integrated into the existing palette.

> preview of the 3d cube

## Maryland Department of Transportation / MDOT

## Maryland Financial Disclosures Portal / MSEC

This electronic system facilitates financial disclosure filing for state employees, elected and appointed officials, and board members. Private citizens may also use this site to access public disclosures after providing their name and home address.

## Maryland Department of Agriculture / MDA

## Onestop

OneStop is the central hub for Maryland State licenses, forms, certificates, permits, applications, and registrations.

-------------------------------------------------------------------------------------------------------------------------------

# Plant Therapy

-------------------------------------------------------------------------------------------------------------------------------

# Pixel Perfect Tree
## DrLogic

-------------------------------------------------------------------------------------------------------------------------------

# Capital
## Presidente
## Orange
## Pepsi

# Avante

# Several Solutions