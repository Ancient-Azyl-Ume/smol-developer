```python
import requests
import json

class PocketBaseHandler:
    def __init__(self, api_url):
        self.api_url = api_url

    def store_data(self, data):
        headers = {'Content-Type': 'application/json'}
        response = requests.post(self.api_url, headers=headers, data=json.dumps(data))
        if response.status_code != 200:
            raise Exception(f"Failed to store data: {response.text}")
        return response.json()

    def get_data(self):
        response = requests.get(self.api_url)
        if response.status_code != 200:
            raise Exception(f"Failed to get data: {response.text}")
        return response.json()
```