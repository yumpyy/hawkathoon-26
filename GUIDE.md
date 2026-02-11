# Hawkathoon Website Guide

Welcome to the documentation for the Hawkathoon 2025 Website.
This guide works for both developers and non-technical contributors who want to update content.

## 1. Project Overview
This website acts as a **Digital Canvas**. Instead of standard rows and columns, every element (text, image, button) is placed at a specific pixel coordinate (`x`, `y`). This allows for the chaotic, "collage" aesthetic.

## 2. Where is the content?
All content is defined in `elements.ts` files inside the `app/` directory.

- **Home**: `app/home/elements.ts`
- **About**: `app/about/elements.ts`
- **Register**: `app/register/elements.ts`
- **Contact**: `app/contact/elements.ts`
- **Examples**: `app/examples/elements.ts`

## 3. How to Edit Content
Open any of the files above. You will see an array called `elements`. Each item in this array represents one thing on the screen.

### The Element Definition
Here is what an element looks like, with explanations for every field:

```typescript
{
  // 1. UNIQUE ID
  // Must be unique across the page. Use descriptive names like 'logo', 'title-main', etc.
  id: 'unique-name-here',       

  // 2. TYPE
  // 'text' -> Displays text
  // 'image' -> Displays a picture
  // 'link'  -> Displays a clickable button/text
  type: 'text',                 

  // 3. POSITION
  // x = Distance vs Left edge (pixels)
  // y = Distance vs Top edge (pixels)
  // Tip: Screen width is usually ~1440px on laptop. 
  // Center is roughly x: 700.
  x: 100,                       
  y: 200,                       

  // 4. LAYERING (Z-Index)
  // Higher numbers appear ON TOP of lower numbers.
  // 10 = Background layer
  // 50 = Middle layer
  // 100 = Top layer (Text usually goes here)
  zIndex: 10,                   

  // 5. INTERACTIVITY
  // Set to true if you want users to move it.
  draggable: true,              

  // 6. CONTENT
  // Only used if type is 'text' or 'link'
  text: 'Hello World',          
  
  // Only used if type is 'image'
  // Start with /images/ for files in public/images/
  src: '/images/my-pic.png',    
  
  // Only used if type is 'link'
  // Where does it go when clicked?
  href: 'https://google.com',   

  // 7. STYLING (CSS)
  // You can use standard CSS properties here (camelCase).
  style: {                      
    fontSize: '20px',           // Size of text
    color: 'red',               // Text color
    backgroundColor: 'yellow',  // Background color
    
    // ROTATION
    // Use 'rotate(Xdeg)' to tilt elements.
    // Positive = Clockwise. Negative = Counter-Clockwise.
    transform: 'rotate(10deg)', 
    
    fontWeight: 'bold',         // Thickness
    border: '2px solid black',  // Border
    boxShadow: '5px 5px 0px black' // Hard shadow for "sticker" look
  }
}
```

## 4. Assets (Images & Video)
### Images
1.  Place your image files in `public/images/`.
2.  Reference them in code as `/images/filename.png`.
    - **Note**: Do not include `public` in the path string.

### Video Background
1.  The home page plays a loop at `public/videos/bg.mp4`.
2.  To change it, simply replace that file with a new MP4.

## 5. Adding New Components (Advanced)
If you need a new **type** (e.g., a countdown timer or a youtube embed):

1.  Open `app/1/elements.ts` (or the relevant page).
2.  Update the `CanvasElement` type definition:
    ```typescript
    export type CanvasElement = {
       type: 'image' | 'text' | 'link' | 'youtube', // Add new type
       // ...
    }
    ```
3.  Open `components/Draggable.tsx`.
4.  Add a generic check for your new logic inside the render flow.
5.  Open `components/StaticElement.tsx` (for non-draggable fallback).
6.  Handle the rendering there.

*Most of the time, you only need 'text', 'image', or 'link'.*
