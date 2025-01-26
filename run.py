import os
import requests
import json
from dotenv import load_dotenv

load_dotenv('.env')

API_KEY = os.getenv('API_KEY')

# inputs
base_url = "http://dataservice.accuweather.com/forecasts/v1/daily/1day"
location_key = "1310"
details = "true"

# build endpoint
endpoint = f"{base_url}/{location_key}"

# build request
request = requests.get(endpoint, params={"apikey": API_KEY, "details": details})

# check response code
if request.status_code == 200:
    # extract the json payload from the request
    request_json = request.json()
    # write data to internal data file (clear existing data first)
    with open('./data.json', 'w') as file:
        json.dump(request_json, file)

#Notes

# Headline.Text
# DailyForecasts[0].Temperature.Minimum.Value
# DailyForecasts[0].Temperature.Maximum.Value
# DailyForecasts[0].Day.Wind.Speed.Value
# DailyForecasts[0].Night.Wind.Speed.Value
# DailyForecasts[0].Day.RelativeHumidity.Average
# DailyForecasts[0].Night.RelativeHumidity.Average