```python
import scrapy
from scrapy.crawler import CrawlerProcess
from pocketbase_handler import PocketBaseHandler

class RedditScraper(scrapy.Spider):
    name = "reddit_scraper"
    start_urls = ['https://www.reddit.com/r/womensfashion/']

    def parse(self, response):
        for post in response.css('div.thing'):
            yield {
                'title': post.css('p.title a::text').get(),
                'url': post.css('p.title a::attr(href)').get(),
                'upvotes': post.css('div.score.unvoted::attr(title)').get(),
            }

        next_page = response.css('span.next-button a::attr(href)').get()
        if next_page is not None:
            yield response.follow(next_page, self.parse)

if __name__ == "__main__":
    process = CrawlerProcess()
    process.crawl(RedditScraper)
    process.start()

    pocketbase_handler = PocketBaseHandler()
    pocketbase_handler.store_data()
```