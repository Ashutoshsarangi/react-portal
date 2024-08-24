## **Introduction**

When I came across **Kbar** it fascinated me to create the same with my flavours.

1. I developed a custom command palette that can be triggered using Cmd + D on Mac or Ctrl + D on Windows/Linux. 

2. This command palette acts as a portal, allowing users to navigate to any predefined static routes within the application.

3. It can be closed using the Esc key, and for demonstration purposes, I included a modal with a close button.

4. In this article, I'll walk you through the key components and design decisions behind this project, including the use of React Portals, the Observable pattern, and Window Event Listeners.

**How to use it**

1. clone the repository

```
npm i 
```

## Key Technologies and Patterns Used

**1. React Portals**

I. To ensure that the command palette doesn't interfere with the root DOM, I opted to use React Portals. 

II. Portals allow you to render a component's children into a different part of the DOM hierarchy, outside of the parent component.

III. This was crucial for isolating the command palette's DOM structure from the rest of the application, ensuring that the root DOM remains unaffected.

**2. Observable Pattern**

I. I implemented an Observable pattern similar to Angular's RxJS. The primary reason for adopting this pattern was to decouple the state management and event handling logic from the component itself.

II. Instead of embedding event listeners directly within the component and managing state there, I created an Observable. When a specific condition is met (e.g., a keypress event), the Observable broadcasts a message, allowing the rest of the application to react accordingly. 

III. This pattern improves the modularity and maintainability of the codebase.

IV. Moreover, I ensured that Observables are unsubscribed properly when they are no longer needed, optimizing the application's performance by preventing potential memory leaks.

**3. Event Listeners**

I. To detect user interactions, I utilized Window Event Listeners. These listeners monitor when specific keyboard shortcuts (like Cmd + D or Ctrl + D) are pressed. 

II. Upon detecting these keypresses, the relevant condition is checked, and if satisfied, the Observable broadcasts the event.

**Why Not Use Web Workers?**

I. You might wonder why I chose not to use Web Workers. 

II. While Web Workers are excellent for offloading heavy computational tasks from the main thread, they are not well-suited for DOM-related event listeners.
III. Given that the focus of this project was handling DOM events efficiently, the Observable pattern was a more appropriate choice.

**Collaboration and Next Steps**

I. The current implementation is **lightweight**, with the codebase around **900 bytes**. I'm open to collaborating with anyone interested in refining this project further or even packaging it as an npm library.

II. Feel free to explore the code and reach out if you'd like to contribute!

**GitHub link:- **(https://github.com/Ashutoshsarangi/react-portal)


![This is the Demo of the Project](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/scho6ngnf02drobh399u.gif)



**Reference**
https://github.com/timc1/kbar?tab=readme-ov-file
