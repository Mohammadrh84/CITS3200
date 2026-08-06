# Mental Load Report Generator Visual Style Options

This folder contains static client-facing visual style samples for the CITS3200 Mental Load Report Generator.

The samples use the same page structure and components across all options so the client can compare colour and tone fairly.

## How to open the samples

Double-click `index.html` to view the comparison page with all three options.

You can also open each option separately:

- `option-1.html`
- `option-2.html`
- `option-3.html`

No backend, framework, build step, or form submission is required. Each page uses local `styles.css`, so it opens correctly from the file system.

## Recommendation

Option 1 is the recommended option because it is formal, academic, UWA-connected, and closest to Emma's existing report mock-up.

## Option purposes

### Option 1 - UWA-Inspired Academic Blue

Purpose: formal, trustworthy, research-focused, and suitable for a university client presentation.

Use:

- Blue for buttons, progress, links, selected states, and Work data.
- Muted rose only for Home data.
- Gold only for limited editorial highlights.

### Option 2 - Calm Teal and Warm Coral

Purpose: calmer, more modern, and more wellbeing-focused than Option 1.

Use:

- Teal for main interface interactions and Work data.
- Coral only for Home-related data.
- Gold for small editorial highlights.
- Avoid bright, saturated colours.

### Option 3 - Warm Minimal Neutral

Purpose: warm, minimal, reflective, and strong for printed PDF-style reports.

Use:

- Muted blue-grey for main interface interactions and Work data.
- Terracotta only for Home data.
- Taupe accent for small headings, dividers, and reflective content.
- Use generous white space and very restrained colour.

## Colour values

### Option 1 - UWA-Inspired Academic Blue

```css
--theme-primary-work: #003087;
--theme-primary-hover: #00205B;
--theme-primary-light: #E8EEF8;
--theme-home: #9A536A;
--theme-accent: #C6922E;
--theme-accent-light: #F6EDD9;
--theme-page-bg: #F5F7FA;
--theme-surface: #FFFFFF;
--theme-warm-surface: #FAF9F6;
--theme-text-primary: #20252B;
--theme-text-secondary: #5B6570;
--theme-border: #D8DEE5;
```

### Option 2 - Calm Teal and Warm Coral

```css
--theme-primary-work: #2F6F73;
--theme-primary-hover: #245A5E;
--theme-primary-light: #E2F0F0;
--theme-home: #B5685A;
--theme-accent: #C89545;
--theme-accent-light: #F7EEDC;
--theme-page-bg: #F6F8F7;
--theme-surface: #FFFFFF;
--theme-warm-surface: #FAF8F3;
--theme-text-primary: #222A2D;
--theme-text-secondary: #5B6669;
--theme-border: #D7DFDF;
```

### Option 3 - Warm Minimal Neutral

```css
--theme-primary-work: #526C78;
--theme-primary-hover: #405660;
--theme-primary-light: #E8EEF1;
--theme-home: #A56556;
--theme-accent: #8F8063;
--theme-accent-light: #F0ECE4;
--theme-page-bg: #FAF9F6;
--theme-surface: #FFFFFF;
--theme-warm-surface: #F5F1EA;
--theme-text-primary: #2B2A27;
--theme-text-secondary: #66625C;
--theme-border: #DDD8CF;
```

## How to switch palettes

The palette variables are defined near the top of `styles.css`:

- `.theme-option-1`
- `.theme-option-2`
- `.theme-option-3`

To apply a palette to a sample, change the class on the main option container:

```html
<article class="style-option theme-option-1">
```

For example, change `theme-option-1` to `theme-option-2` to use the teal/coral palette.

## Colour role rules

- Work data should use `--theme-primary-work`.
- Home data should use `--theme-home`.
- Primary buttons and interactive states should use `--theme-primary-work`, not the accent colour.
- Home colours should not be used for errors or general interface actions.
- Accent colours should be limited to editorial highlights, such as the headline card.
- Charts should include labels, patterns, or line-style differences so colour is not the only cue.

## Screenshots

Screenshots are not committed in this branch. They can be generated and shared separately for team discussion or client review.
