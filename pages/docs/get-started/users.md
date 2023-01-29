---
title: Managing Users
description: TODO
date: January 3, 2023
---

# {% $markdoc.frontmatter.title %}

{% callout type="check" %}
{% $markdoc.frontmatter.description %}
{% /callout %}


Engine Awesome allows you to build applications to run your business, without writing any code. It's designed to be incredibly powerful, flexible and easy to learn.

Getting started is just three simple steps:

## 1. Create an Object Type
Object Types allow you to group similar data together. Common examples are "Contacts", "Projects" and "Invoices".

In Engine Awesome, creating an Object Type is as simple and going to your Team settings page, filling in the "Add Object Type" field and pressing "add".

Engine Awesome can handle as many Object Types as you like.

## 2. Define the Object Schema
Once you've created an Object Type, you will need to define the Object Schema. In Engine Awesome, the schema is all the fields you want to use with this Object, and any relationships you want it to have.

For example, you may have two Object Types, "Companies" and "Contacts". For the "Contact" Object Schema, you can add fields like "First Name" and "Last Name". Then you can create a relationship between "Contacts" and "Companies".

The schema can be as extensive as you like. Additionally, you can add to it as you business grows and your needs change.

## 3. Create a Layout
Now you get to take all those fields and relationships you defined in your schema and create Layouts with them. Layouts can be forms or list tables or a combination of both. Both individual fields and full Layouts can be conditionally shown based on other field values.

Layouts are incredibly powerful, and there's no limit to how many you can have for each Object Type. 




{% partial file="footer.md" /%}
