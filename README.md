
### **1. Difference between getElementById, getElementsByClassName, querySelector and querySelectorAll**

1.`getElementById('id')` is used to select a single element by its **unique ID**.
  **Example:**

  ```js
  document.getElementById('card'); // selects element with id="card"
  ```

2. `getElementsByClassName('class')` selects **all elements** that have the given class name. 
  **Example:**

  ```js
  document.getElementsByClassName('item'); // selects all elements with class="item"
  ```

3. `querySelector('selector')` selects the **first element** that matches the provided CSS selector .
  **Example:**

  ```js
  document.querySelector('.item'); // selects the first element with class="item"
  ```

* `querySelectorAll('selector')` selects **all elements** that match the CSS selector and returns a NodeList.
  **Example:**

  ```js
  document.querySelectorAll('.item'); // selects all elements with class="item"
  ```

---

### **2. How to create and insert a new element into the DOM**

To create a new element, one need to add `document.createElement('tag')` then add text or attributes to it and finally insert it into the page using methods like `appendChild()`.

**Example:**

```js
const p = document.createElement('p'); // create a paragraph
p.textContent = 'Hello, I am Rahin Toshmi Ohee'; // add text to it
document.body.appendChild(p); // insert it into the body of the page
```

---

### **3. What is Event Bubbling and how does it work?**

Event bubbling means that whenever click on an element, the event first happens on that element and then it moves up to its parent then to the grandparent and so on until it reaches the document.

**Example:**

```html
<div id="parent">
  <button id="child">Click here!!!</button>
</div>
<script>
document.getElementById('parent').addEventListener('click', function(e){
    e.preventDefault();
    console.log('Parent clicked');
});
document.getElementById('child').addEventListener('click', function(e){
  e.preventDefault();
  console.log('Child clicked');
});
</script>
```

Whenever click the button, first `Child clicked` runs then `Parent clicked` runs.

---

### **4. What is Event Delegation and why is it useful?**

Event delegation means adding **one event listener on a parent element** to handle events for all its child elements. It uses event bubbling to work. This is useful because it works even for elements that are added later.

**Example:**

```html
<div>
    <button>Click Me 1</button>
    <button>Click Me 2</button>
    <p>This is a paragraph</p>
  </div>
  <script>
    const div = document.getElementsByTagName("div")[0];

    div.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        console.log("Button was clicked:", event.target.textContent);
      }
    });
  </script>
```
---

### **5. Difference between preventDefault() and stopPropagation()**

* `preventDefault()` stops the browser’s default behavior for that element. For example, it can stop a link from opening or from submitting.
* `stopPropagation()` stops the event from moving up to the parent elements.

**Example:**

```js
document.querySelector('a').addEventListener('click', function(e) {
    e.preventDefault(); // stops link from opening
    e.stopPropagation(); // stops the event from bubbling to parent
    console.log('Link clicked, but no navigation and no bubbling');
});
```
