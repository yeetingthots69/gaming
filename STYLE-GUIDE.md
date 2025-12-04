# 🎨 VroomVroom Static Site - CSS Style Guide

## Color Palette

```css
/* Primary Colors */
--primary: hsl(24, 100%, 50%)        /* #FF6B00 - Orange */
--primary-hover: hsl(24, 100%, 45%)  /* Darker orange */
--primary-light: hsl(24, 100%, 97%)  /* Very light orange */

/* Neutral Colors */
--foreground: hsl(222.2, 84%, 4.9%)  /* Almost black */
--background: hsl(0, 0%, 100%)       /* White */
--muted: hsl(210, 40%, 96.1%)        /* Light gray */
--muted-foreground: hsl(215.4, 16.3%, 46.9%) /* Gray text */
--border: hsl(214.3, 31.8%, 91.4%)   /* Light border */

/* Semantic Colors */
--success: hsl(142.1, 76.2%, 36.3%)  /* Green */
--destructive: hsl(0, 84.2%, 60.2%)  /* Red */
--warning: hsl(38, 92%, 50%)         /* Yellow/Orange */
```

## Typography Scale

```css
/* Font Sizes */
xs:   0.75rem   (12px)
sm:   0.875rem  (14px)
base: 1rem      (16px)
lg:   1.125rem  (18px)
xl:   1.25rem   (20px)
2xl:  1.5rem    (24px)
3xl:  2rem      (32px)
4xl:  2.5rem    (40px)

/* Font Weights */
normal: 400
medium: 500
semibold: 600
bold: 700
extrabold: 800
black: 900
```

## Spacing Scale

```css
/* Based on 0.25rem (4px) increments */
0.5:  0.125rem  (2px)
1:    0.25rem   (4px)
2:    0.5rem    (8px)
3:    0.75rem   (12px)
4:    1rem      (16px)
5:    1.25rem   (20px)
6:    1.5rem    (24px)
8:    2rem      (32px)
10:   2.5rem    (40px)
12:   3rem      (48px)
```

## Border Radius

```css
--radius: 0.625rem (10px)

Small:    calc(var(--radius) * 0.75)  /* 7.5px */
Default:  var(--radius)                /* 10px */
Large:    calc(var(--radius) * 1.5)   /* 15px */
Full:     9999px                       /* Circular */
```

## Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 
          0 1px 2px -1px rgb(0 0 0 / 0.1)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 
             0 2px 4px -2px rgb(0 0 0 / 0.1)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 
             0 4px 6px -4px rgb(0 0 0 / 0.1)
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 
             0 8px 10px -6px rgb(0 0 0 / 0.1)
```

## Transitions

```css
--transition-fast: 150ms ease-in-out
--transition-base: 300ms ease-in-out
--transition-slow: 500ms ease-in-out

/* Usage */
transition: all var(--transition-base);
```

## Common Patterns

### Gradient Background
```css
background: linear-gradient(135deg, 
  var(--primary-light) 0%, 
  white 100%);
```

### Card Hover Effect
```css
.card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary);
}
```

### Button Ripple Effect
```css
.btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.btn:active::before {
    width: 300px;
    height: 300px;
}
```

### Focus Ring
```css
.form-control:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 4px var(--primary-light);
}
```

### Gradient Border Top
```css
.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, 
      var(--primary) 0%, 
      hsl(24, 100%, 65%) 100%);
    transform: scaleX(0);
    transition: transform 0.3s;
}

.card:hover::before {
    transform: scaleX(1);
}
```

## Animation Keyframes

### FadeInUp
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### SlideInDown
```css
@keyframes slideInDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### ScaleIn
```css
@keyframes scaleIn {
    from {
        transform: scale(0);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}
```

### Float
```css
@keyframes float {
    0%, 100% { 
        transform: translateY(0px); 
    }
    50% { 
        transform: translateY(-10px); 
    }
}
```

### Pulse
```css
@keyframes pulse {
    0%, 100% { 
        transform: scale(1); 
    }
    50% { 
        transform: scale(1.05); 
    }
}
```

## Responsive Breakpoints

```css
/* Mobile First Approach */

/* Small devices (phones, up to 640px) */
@media (max-width: 480px) { /* ... */ }

/* Medium devices (tablets, up to 768px) */
@media (max-width: 768px) { /* ... */ }

/* Large devices (laptops, up to 1024px) */
@media (max-width: 1024px) { /* ... */ }

/* Extra large devices (desktops, up to 1200px) */
@media (max-width: 1200px) { /* ... */ }
```

## Grid Layouts

### 3-Column Grid (Bikes)
```css
.bikes-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

/* Responsive */
@media (max-width: 1200px) {
    .bikes-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .bikes-grid {
        grid-template-columns: 1fr;
    }
}
```

### Sidebar Layout
```css
.container {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 2.5rem;
}

@media (max-width: 1024px) {
    .container {
        grid-template-columns: 1fr;
    }
}
```

## Component Utilities

### Avatar
```css
.avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: linear-gradient(135deg, 
      var(--primary) 0%, 
      hsl(24, 100%, 60%) 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    box-shadow: var(--shadow-md);
}
```

### Badge
```css
.badge {
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: calc(var(--radius) * 0.75);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.badge-success {
    background: var(--success);
    color: white;
}
```

### Empty State
```css
.empty-state {
    text-align: center;
    padding: 4rem 2rem;
    color: var(--muted-foreground);
}

.empty-icon {
    width: 4rem;
    height: 4rem;
    margin: 0 auto 1rem;
    opacity: 0.5;
}
```

## Best Practices

### DO ✅
- Use CSS variables for colors and spacing
- Add smooth transitions (300ms default)
- Include hover states on interactive elements
- Use semantic color names (primary, success, etc.)
- Test on multiple screen sizes
- Add focus states for accessibility

### DON'T ❌
- Use inline styles
- Hardcode color values
- Skip responsive breakpoints
- Forget accessibility features
- Use !important unless necessary
- Mix px and rem inconsistently

## Quick Reference

```css
/* Centered Content */
display: flex;
justify-content: center;
align-items: center;

/* Full Width Button */
width: 100%;

/* Smooth Hover */
transition: all var(--transition-base);
transform: translateY(-5px);

/* Card Style */
background: white;
border: 2px solid var(--border);
border-radius: calc(var(--radius) * 1.5);
box-shadow: var(--shadow-md);

/* Primary Button */
background: linear-gradient(135deg, 
  var(--primary) 0%, 
  hsl(24, 100%, 55%) 100%);
color: white;
box-shadow: 0 4px 6px rgba(255, 107, 0, 0.2);
```

---

**Happy Styling! 🎨**

