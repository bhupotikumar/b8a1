---
Title: "Type Alias vs Interface in Typescript"
Date: 09-11-2026
Author: "Bhupoti Kumar Roy"
Introduction: A quick look at the differences between type aliases and interfaces in TypeScript.
---

# Type Alias vs Interface

## Type Alias

A type alias creates a new name for a type and allows to create reusable type. It can be used for primitives (string, number, boolean etc), union, intersection, tuple or object shape.

```typescript
// Primitives and Unions
type Status = "pending" | "success" | "error";
type ID = string | number;

// Object Shape
type User = {
  id: ID;
  name: string;
};
```
---

## Interface
An interface defines the structure of an object.

```typescript
interface User {
  id: string | number;
  name: string;
}
```
---

## Some basic difference
Unions: Type aliases can create union types, but interfaces cannot directly create.
Assignment: Type aliases use an assignment operator (=), whereas interfaces do not use =.
Extension: Interfaces are extended using the extends keyword. Type aliases are combined using intersection types (&).
Declaration Merging: Interfaces can be redeclared, and if redeclared, they automatically merge. Type aliases cannot be redeclare.
