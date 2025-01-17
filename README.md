# edu-quiz-form

This is a Next.js project for collecting responses edu quiz signup form. Users can submit their responses, admins can view and manage responses.

## Features

- **User Authentication**: Secure authentication using NextAuth.js with Google as the provider.
- **Collect Responses**: Collect responses from users using a form.
- **Admin Dashboard**: View and manage responses from the admin dashboard.
- **Responsive Design**: Fully responsive design using Tailwind CSS.
- **Analytics**: Track user interactions and quiz performance with Vercel Analytics.
- **Theming**: Customizable themes using `shadcn` and `next-themes`.

## Technology Stack

- **Next.js**: A React framework for building server-side rendered and static web applications.
- **Neon**: PostgreSQL database hosted on Neon for reliable and scalable data storage.
- **NextAuth.js**: Authentication for Next.js applications with support for multiple providers, including Google (used in this project).
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **shadcn**: A library for building customizable and accessible components.
- **Vercel Analytics**: Analytics to track user interactions and performance.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- PostgreSQL database
- pnpm (v6 or later)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/edu-quiz-form.git
   cd edu-quiz-form
   ```

2. Install dependencies:

   ```sh
   pnpm install
   ```

3. Create a `.env` file based on the `.example.env` file and fill in your environment variables:

   ```sh
   cp .example.env .env
   ```

4. Set up the database:

   - If you are using Neon, create the enum type before running migrations for the first time. Connect to your database and run the following SQL command:

     ```sql
     CREATE TYPE role AS ENUM ('admin', 'user');
     ```

   - Run the database migrations:

     ```sh
     pnpm db:migrate
     ```

### Running the Development Server

To start the development server, run:

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the project for production, run:

```sh
pnpm build
```

### Running Migrations

To run database migrations, use the following command:

```sh
pnpm db:migrate
```

This will execute the migrations defined in the `db/migrate.ts` file.

### Environment Variables

The project uses environment variables to configure various aspects. Make sure to set the following variables in your `.env` file:

- `DATABASE_URL`: The URL of your PostgreSQL database.
- `NODE_ENV`: The environment mode (`development`, `test`, `production`).
- `GOOGLE_CLIENT_ID`: Your Google client ID for authentication.
- `GOOGLE_CLIENT_SECRET`: Your Google client secret for authentication.
- `NEXTAUTH_URL`: The URL of your Next.js application.
- `NEXTAUTH_SECRET`: A secret key for NextAuth.js.
- `ALLOWED_EMAILS`: A comma-separated list of allowed email addresses for admin access.

### Public and Restricted Pages

The root page (the form page) is publicly accessible, while other pages are restricted. This is enforced by the middleware configuration:

```javascript
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|auth|.*\\.(?:png|jpg|jpeg|gif|svg|webp)|$).*)",
  ],
}
```

This configuration ensures that only the root page is public, and all other pages require authentication.

### Linting and Formatting

The project uses ESLint and Prettier for linting and formatting. To run the linters, use:

```sh
pnpm lint
```

To fix linting errors, use:

```sh
pnpm lint:fix
```

To format the code, use:

```sh
pnpm format:write
```

To check the formatting, use:

```sh
pnpm format:check
```

### Folder Structure

- `actions`: Contains server-side actions for handling various operations.
- `components`: Contains React components used in the application.
- `db`: Contains database-related files, including migrations and table definitions.
- `lib`: Contains utility functions and libraries.
- `pages/`: Contains Next.js pages.
- `public`: Contains public assets such as images and fonts.
- `styles`: Contains global styles and Tailwind CSS configuration.
- `types`: Contains TypeScript type definitions.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request.

### License

This project is licensed under the MIT License.