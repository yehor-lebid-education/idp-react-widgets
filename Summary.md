# Note on Input Components

**Date:** 15 May 2025  
When creating an input component, it is not always necessary to manage its state 🙂. Consider using **uncontrolled components** with `ref` or relying on **parent components** to manage the state when appropriate. This can simplify your code and improve performance by avoiding unnecessary re-renders.