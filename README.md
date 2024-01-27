[Read the full article](https://medium.com/@jorgeju4rez/generate-dynamic-sitemaps-in-nextjs-using-app-router-to-index-on-g-gle-2561ee45ecea)


# How Are the Machines?

Some time ago, manual creation of sitemaps was a struggle I faced. It seems almost absurd now to think about doing it that way, don't you agree?

Today, I want to share with you the optimal method for generating dynamic sitemaps, ensuring that Google is always aware of the content on your website. Specifically, we'll discuss the process for an e-commerce site featuring a vast inventory of over 500,000 products.

To proceed, I'll provide you with a link to Google's official documentation on sitemaps: [Build and submit a sitemap](https://support.google.com/webmasters/answer/183668?hl=en).

## Create the Sitemap with App Route

As per Google's documentation, there's a maximum limit of 50,000 URLs per sitemap. However, our dataset poses a challenge with 500,000 URLs. This leads us to the question: How do we overcome this limit for successful search engine indexing?

## The Dilemma

The challenge of overcrowded sitemaps with URLs creates a significant hurdle. The crucial question we face is: How do we surpass this limit and ensure effective indexing on search engines?

## The Proposed Solution

Here, we introduce a straightforward yet effective solution. The initial step is to determine the total number of products in our inventory using the `getCountProducts()` function.

### Data Gathering

Apart from counting the products, it's vital to collect the necessary information for generating product pages. In the European region, we utilize a unique identifier known as EAN (European Article Number), which uniquely specifies each product.

### Implementation

Armed with this information, we can address the challenge as follows: if you are in Europe, use the EAN as the unique identifier for each product. For those outside Europe, you have the option to use the ID of your table or any other available unique identifier.

Additionally, we'll implement the `generateSitemaps()` function, handling the pagination of sitemaps. This function divides the list of URLs into smaller batches, adhering to Google's limit, simplifying the effective management and presentation of our information on search engines.

Here's a code snippet that you can implement not only for products but also for articles, categories, and more.
