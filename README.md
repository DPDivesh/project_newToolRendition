# ATM Status Tool

View the status of all of the machines that you manage in one place, and in a more modern and intuitive UI.

Future Updates

- Automatically determine the most optimized routes to take
- Algorithmically determine if machines are jammed or out of service.
- Algorithmically determine successful locations
- Create a risk index scoring system
- Generate Email and text Alerts for notifications
- Add processors

[Live Demo](https://columbusdata.net)

#

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

An account with a supported payment processor (currently only [ColumbusData](https://columbusdata.net/)) with a(n) ATM location(s) or use the demo functionality. Configure google as a provider for NextAuth.

### Installing

Run the installation command,

```
npm install
```

### Set up ENV

Create a database url for mysql, Next Auth key, Google Client Secret, and ID.

```
DATABASE_URL=###
NEXTAUTH_SECRET=###
GOOGLE_CLIENT_SECRET=###
GOOGLE_CLIENT_ID=###
```

and Prisma Field Encryption [Documentation](https://www.npmjs.com/package/prisma-field-encryption)

```
PRISMA_FIELD_ENCRYPTION_KEY=###
```

and follow it up by running the program.

```
npm run dev
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [T3 Stack](https://create.t3.gg/) - Utilizes Next.js, Typescript, Prisma, NextAuth,tRPC and Tailwind.
- [EmailJS](https://www.emailjs.com/) - Send alerts to users via email.
- [Puppeteer](https://pptr.dev/) - Headless Scraping of data.
- [XLSX](https://maven.apache.org/) - Clean and make scraped data readable.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
