# JavaScript Learning Playground

A collection of JavaScript examples and projects demonstrating core concepts and practical implementations.

## Project Structure

### 1. check-instance/
**Topic: instanceof Operator & Prototype Chain**

Explores how the `instanceof` operator works and deep dives into JavaScript's prototype chain.

- Demonstrates instance checking with classes
- Shows how to traverse the prototype chain
- Explains non-enumerable properties
- Covers inheritance and type checking

**Files:**
- `script.js` - Basic instanceof examples
- `class-car.js` - Detailed prototype chain traversal
- `README.md` - In-depth documentation

**Run:**
```bash
cd check-instance
node script.js
node class-car.js
```

---

### 2. counter/
**Topic: DOM Manipulation & State Management**

A simple counter application demonstrating basic DOM manipulation and event handling.

- Increment/decrement counter functionality
- DOM element selection and manipulation
- Event listeners
- CSS styling

**Files:**
- `index.html` - HTML structure
- `script.js` - Counter logic
- `style.css` - Styling
- `README.md` - Project documentation

**Run:**
Open `index.html` in your browser.

---

### 3. mini-todo/
**Topic: Todo List & Local Storage**

A minimal todo list application with add, delete, and local storage functionality.

- Add and remove todos
- Local storage persistence
- Dynamic list rendering
- Event handling

**Files:**
- `index.html` - HTML structure
- `script.js` - Todo list logic
- `style.css` - Styling
- `readme.md` - Project documentation

**Run:**
Open `index.html` in your browser.

---

## Learning Path

### Beginner Level
1. Start with **counter/** - Learn basic DOM manipulation and events
2. Move to **mini-todo/** - Understand dynamic DOM updates and localStorage

### Intermediate Level
3. Explore **check-instance/** - Master prototypes and the instanceof operator

## Key JavaScript Concepts Covered

- **Object-Oriented Programming**: Classes, constructors, inheritance
- **Prototype Chain**: Understanding how JavaScript resolves properties
- **DOM Manipulation**: Selecting, modifying, and creating elements
- **Event Handling**: Click events, event listeners
- **Storage**: Local storage for data persistence
- **Operators**: instanceof for type checking

## Prerequisites

- Node.js (for running check-instance examples)
- Modern web browser (for counter and mini-todo)

## Running Examples

### Node.js Examples
```bash
cd check-instance
node script.js
node class-car.js
```

### Browser Examples
Simply open the `index.html` files in any modern web browser:
- `counter/index.html`
- `mini-todo/index.html`

## Tips for Learning

1. Read through the source code and comments
2. Modify the code and experiment
3. Check the browser console for logs and debugging
4. Read the individual README files in each folder for detailed explanations

## Resources

- [MDN - instanceof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
- [MDN - Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN - DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN - localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## Project Goals

- Understand fundamental JavaScript concepts
- Practice DOM manipulation
- Learn about prototypes and inheritance
- Build simple, functional projects
- Get comfortable with both Node.js and browser environments
