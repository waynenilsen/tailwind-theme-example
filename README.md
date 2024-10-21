# Dynamic Theming System

# Overview

Our project aims to implement a dynamic theming system for our B2B2C SaaS platform. This system will apply unique brand themes for each of our business clients, ensuring a consistent branded experience for their end-users. The solution must work within our existing architecture, which consists of a static frontend website and a separate API.

## Brand-Specific Theming

Each business client (B) in our system will have a unique brand theme that needs to be consistently applied for all end-users (C) interacting with that brand's instance of our application. These themes are fixed per brand and do not change during a user's session. There is no need for user preference-based theme switching (e.g., dark/light mode).

## Theme Loading and Application

We should explore two potential approaches for loading and applying brand themes:

1. CSS Variables via <link> Tag: This approach involves dynamically loading CSS variables through a <link> tag in the document head. The challenge here is that our static site generator (SSG) creates HTML pages with a fixed <link> tag, so we need a way for the server to dynamically set the correct theme URL based on the brand.
2. JSON Data and JavaScript Application: This method would fetch theme data as JSON from our API and apply it using JavaScript on the client side.

Both methods should be developed as proof-of-concept implementations to determine the most effective solution for our specific use case. Whichever method we choose, it must integrate smoothly with our current static site architecture and maintain compatibility with our Tailwind CSS setup.

## Server-Side Considerations

Our server needs to play a crucial role in applying the correct brand theme in case 1. It must set a cookie that identifies the dropReleaseId. This cookie will be used to generate the correct css content at a fixed route from the static site.

The API must be extended to support the theming system, capable of generating and serving theme data either as CSS variables or as JSON, depending on the approach we decide to take after the proof-of-concept phase.

## Client-Side Implementation

On the client side, the system must be optimized to prevent any flash of unstyled content (FOUC) as the brand-specific theme is loaded and applied.

We need to optimize the theme loading and application process to minimize any delay in rendering the properly branded content. This includes implementing an effective mechanism to prevent FOUC, ensuring that the page remains hidden until the brand theme is fully loaded and applied. We should also consider browser caching strategies such a cache-control headers for theme data to improve performance on subsequent page loads within the same brand instance.

Comprehensive testing will be essential to ensure the theming system works flawlessly across different browsers and devices, and more importantly, across different brand instances.

Documentation should be provided for our development team, covering the theming system's implementation, how to create or modify brand themes, and how the system integrates with our existing architecture. We should also prepare documentation for our business clients, explaining how their brand themes are applied and any limitations they should be aware of.