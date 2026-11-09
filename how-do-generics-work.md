---
Title: "How do Generics work in TypeScript?"
Date: 09-11-2026
Author: "Bhupoti Kumar Roy"
Introduction: A quick look at how Generics work in TypeScript, and how do they help when working with asynchronous Promise<T>.
---

# Generic

Typescript is powerful because of its static type system. It is a superset of JavaScript.
Specially the generics allow us to write flexible, reusable and fully type-safe. A generic pass the type as a parameter using angle brackets (`<T>`)
Here is a simple example of a generic function:

```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

---

# Asynchronous Code And Promise<T>

In modern web development, we constantly work with asynchronous operations using async/await and fetch.
In typescript every async function returns a promise, because promise is a built-in generic interface in typescript.

```typescript
async function fetchApiResponse<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const data: T = await response.json();
  return data;
}
```

---

# Some benefits of using generics with Promise

1. Code Reusability: We don't need to write duplicate fetching or processing logic for every different data.
2. Compile-Time Safety: TypeScript ensures that whatever data comes back from your asynchronous operation matches the expected interface.
