# Node Clean API

A RESTful Node.js API for user registration and authentication, built with Clean Architecture, TDD, and DDD principles.

## Stack

- **Runtime:** Node.js + TypeScript
- **Architecture:** Clean Architecture / DDD
- **Testing:** Jest (unit + integration)
- **Database:** MongoDB
- **Quality:** Husky, lint-staged, ESLint

## Architecture

The project follows Clean Architecture, keeping business logic independent from frameworks and infrastructure:

```
src/
├── domain/        # Entities and use case interfaces
├── application/   # Use case implementations
├── infra/         # Database, external services, Express adapters
└── main/          # App entry point, factories, routes
```

## Getting Started

```bash
npm install
npm run dev
```

## Testing

```bash
npm test              # Unit tests
npm run test:integration  # Integration tests
```

Tests follow TDD — each feature is covered by unit and integration tests before implementation.
