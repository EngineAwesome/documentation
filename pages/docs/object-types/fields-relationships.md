---
title: Object Type - Fields and Relationships
description: Object Type fields and relationships, allow you to define the way an Object behaves.
date: January 29, 2023
---

# {% $markdoc.frontmatter.title %}

{% callout type="check" %}
{% $markdoc.frontmatter.description %}
{% /callout %}



## Fields
Fields allow you to store data within an Object Type. With Engine Awesome, you choose the kind of data you want to store, the field type and the name. Everything is exactly the way you want it. 

The order in which you define your fields doesn't matter. To get started, click the big blue + at the top of the screen to open the field library. Simply, double-click on the a field type to place it on the canvas, or drag it over.

Engine Awesome has a lot of field types to choose from:

### Address
Made up of four fields, though additional fields can be added and mapped to the US equivalent.
- Address 1
- City
- State
- Zip Code

### Checkboxes
Multi-choice options field.

To add options, use the "Options" section in the Block settings menu. Separate each option with a comma.

### Color
Set a color value. The color can be clicked and copied.

### Date
Store a date/time.

There are two type of dates you can set. This option can be changed via the "Semantics" setting in the "Block" menu:
1. Date: regular date/time field.
2. Date Created: Defaults to the current date/time.

### Dropdown
Single-choice options field.

To add options, use the "Options" section in the Block settings menu. Separate each option with a comma.

### Email
Store an email address. **[Smart Field](#smart-fields)*

### File
Allow file uploads. Defaults to these file types, but others can be added:
- Documents: doc, docx, docm, dotm, odt, pages, pdf, xps, oxps, rtf, wp, wpd, psd, xcf.
- Spreadsheets:  numbers, ods, xls, xlsx, xlsm, xlsb
- Interactive: swf, key, ppt, pptx, pptm, pps, ppsx, ppsm, sldx, sldm, odp
- Text: asc, csv, tsv, txt

Additional File type support can be requested.

### Image
Allow image uploads. Defaults to these file types, but others can be added:
- Images: jpg, jpeg, jpe, gif, png, bmp, tif, tiff, ico, heic, webp
- Audio: aac, ac3, aif, aiff, flac, m3a, m4a, m4b, mka, mp1, mp2, mp3, ogg, oga, ram, wav, wma
- Video: 3g2, 3gp, 3gpp, asf, avi, divx, dv, flv, m4v, mkv, mov, mp4, mpeg, mpg, mpv, ogm, ogv, qt, rm, vob, wmv

Additional Image type support can be requested.

### Media
Allow media uploads. Defaults to these file types, but others can be added:
Images: jpg, jpeg, jpe, gif, png, bmp, tif, tiff, ico, heic, webp

 Additional Media type support can be requested.

### Name
Used to store the name of a person, animal, etc. If you want to store a person's first and last name, you would use this field twice.

### Phone Number
Store a phone number from any country. **[Smart Field](#smart-fields)*

### Radio
Single-choice options field.

To add options, use the "Options" section in the Block settings menu. Separate each option with a comma.

### Text
A simple one-line text field. 

### Textarea
A multi-line textarea field. 

### URL
Store a URL (without HTTPS://). **[Smart Field](#smart-fields)*

### Smart Fields
A special field type that adds extra functionality when used. Examples:
- Email: Adds a button so the user can easier send an email.
- Phone Number: Two buttons can be included: Call and Text.
- URL: Adds a button to open the URL in a browser.

### Field Settings
Once a field is added to the canvas, you can adjust it's settings under the "Block" menu to the right.

#### Slug
In most cases the label you provide for the field is used by Engine Awesome, but in some cases the slug is used.

#### Semantics
This defines the type of data you will be saving with this field. Properly setting this assists Engine Awesome in determining how to handle the field data.

#### Is Searchable
Checking this box tells Engine Awesome to index this field and allows you to search by it. Additionally:
- When creating filters in your layout, only searchable fields are allowed.
- Only fields marked "Is Searchable" are available in Zapier. 

#### Is Required
There are two different ways to mark a field required:
- __Always Required__: The field will always be required in Layouts.
- __Required If__: Allows you to set a field required, if other conditions are met.

#### Edit Locking
Allows you to set a field as locked, if other conditions are met. When a field is locked, it can no longer be edited.

## Relationships
Engine Awesome currently support one-to-many relationships between any of your Object Types. It very easy to create a relationship:
1. In the Field Library, scroll down to the Relationships area.
2. You will see blocks already set up for your relationships. They may say "Has One: Contact", or "Has One: Project".
3. Just drag the relationship block over to the canvas to create your relationship. No other configuration is neccessary.

{% partial file="footer.md" /%}



